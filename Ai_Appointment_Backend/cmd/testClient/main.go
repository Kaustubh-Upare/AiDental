package main

import (
	pb "Kaustubh-Upare/ai-appoint-back/pkg/voskpb"
	"context"
	"fmt"
	"io"
	"log"
	"os"
	"sync"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	// Connect to Vosk gRPC server
	conn, err := grpc.Dial("localhost:5001",
		grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	client := pb.NewSttServiceClient(conn)
	// fmt.Println("Aisa hi ", client)
	stream, err := client.StreamingRecognize(context.Background())
	if err != nil {
		log.Fatalf("open stream: %v", err)
	}
	var wg sync.WaitGroup
	wg.Add(1)
	// Send config first
	config := &pb.StreamingRecognitionRequest{
		StreamingRequest: &pb.StreamingRecognitionRequest_Config{
			Config: &pb.RecognitionConfig{
				Specification: &pb.RecognitionSpec{
					AudioEncoding:   pb.RecognitionSpec_LINEAR16_PCM,
					SampleRateHertz: 16000,
					PartialResults:  true,
					Model:           "en-in",
				},
			},
		},
	}

	if err := stream.Send(config); err != nil {
		log.Fatalf("send config: %v", err)
	}

	// Read WAV file
	file, err := os.Open("output_16k_mono.wav")
	if err != nil {
		log.Fatalf("open file: %v", err)
	}
	defer file.Close()

	// Skip WAV header (44 bytes for standard WAV)
	file.Seek(44, 0)

	// Read and send audio in chunks
	chunkSize := 8000 // Send in small chunks
	buffer := make([]byte, chunkSize)

	go func() {
		defer wg.Done()
		for {
			fmt.Println("Inside Jaan")
			n, err := file.Read(buffer)
			if err == io.EOF {
				stream.CloseSend()
				break
			}
			if err != nil {
				log.Printf("read error: %v", err)
				break
			}

			// Send audio chunk
			audioReq := &pb.StreamingRecognitionRequest{
				StreamingRequest: &pb.StreamingRecognitionRequest_AudioContent{
					AudioContent: buffer[:n],
				},
			}

			if err := stream.Send(audioReq); err != nil {
				log.Printf("send audio: %v", err)
				break
			}
		}
	}()

	// Receive and print results
	var t string
	for {
		resp, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("receive: %v", err)
		}

		for _, chunk := range resp.Chunks {
			if len(chunk.Alternatives) > 0 {
				text := chunk.Alternatives[0].Text
				if chunk.Final {
					t = t + text
					fmt.Printf("FINAL: %s\n", text)
				} else {
					fmt.Printf("Partial: %s\n", text)
				}
			}
		}
	}
	wg.Wait()
	fmt.Println("bkl Final", t)
}
