package vosk

import (
	"context"
	"errors"
	"io"
	"sync"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type VoskPool struct {
	addrs []string
	opts  PoolOptions

	mu    sync.Mutex
	conns []*grpc.ClientConn
}

type StreamSession struct {
	AudioCh       chan []byte
	TranscriptsCh chan string
	cancel        context.CancelFunc
}

func NewPool(addrs []string, opts PoolOptions) (*VoskPool, error) {
	if len(addrs) == 0 {
		return nil, errors.New("No Vosks addrs Provided")
	}
	p := &VoskPool{addrs: addrs, opts: opts}

	for _, a := range addrs {
		ctx, cancel := context.WithTimeout(context.Background(), opts.DialTimeout)
		conn, err := grpc.DialContext(ctx, a, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
		// Cancel()
		if err != nil {

			for _, c := range p.conns {
				_ = c.Close()
			}
			return nil, err
		}
		p.conns = append(p.conns, conn)
	}
	return p, nil
}

// Closing all Connections in the Pool
func (p *VoskPool) Close() error {
	p.mu.Lock()
	defer p.mu.Unlock()
	var last error
	for _, c := range p.conns {
		if err := c.Close(); err != nil {
			last = err
		}
	}
	p.conns = nil
	return last
}

func (p *VoskPool) getClientConnForCall() (*grpc.ClientConn, error) {
	p.mu.Lock()
	defer p.mu.Unlock()
	if len(p.conns) == 0 {
		return nil, errors.New("no vosk connections")
	}
	idx := time.Now().UnixNano() % int64(len(p.conns))
	return p.conns[idx], nil
}

func (p *VoskPool) StartStream(ctx context.Context) (*StreamSession, error) {
	conn, err := p.getClientConnForCall()
	if err != nil {
		return nil, err
	}
	// Grpc call client:=voskpb.New
	// Grpc Stream

	// Channels
	audioCh := make(chan []byte, 512)
	transcriptsCh := make(chan string, 32)

	sctx, cancel := context.WithCancel(ctx)

	// reader: server -> transcriptsCh
	go func() {
		defer close(transcriptsCh)
		for {
			resp, err := stream.Recv() //This stream is from grpc
			if err == io.EOF {
				return
			}
			if err != nil {
				// push a marker or log (here we just return)
				return
			}
			if txt := resp.GetText(); txt != "" {
				select {
				case transcriptsCh <- txt:
				case <-sctx.Done():
					return

				}
			}
		}
	}()

	// Writer audioCh->server
	go func() {
		defer func() {
			// _ = stream.closeSend() //reference from grpc
		}()

		for {
			select {
			case <-sctx.Done():
				return
			case frame, ok := <-audioCh:
				if !ok {
					// input closed by caller: CloseSend so server can send final results
					_ = stream.CloseSend()
					return
				}
				// Build proto message with audio bytes
				// TODO: change AudioChunk/field names to match generated proto
				req := &voskpb.AudioChunk{Audio: frame}
				if err := stream.Send(req); err != nil {
					return
				}
			}
		}
	}()

	return &StreamSession{
		AudioCh:       audioCh,
		TranscriptsCh: transcriptsCh,
		cancel:        cancel,
	}, nil
}

// EndStream closes a session (close audioCh then wait a bit for final transcripts).
func (p *VoskPool) EndStream(s *StreamSession) {
	// close audio channel to signal end-of-audio
	close(s.AudioCh)
	// small grace so final results arrive; in prod, use more robust sync
	time.AfterFunc(300*time.Millisecond, func() {
		s.cancel()
	})
}
