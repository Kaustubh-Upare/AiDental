package services

import (
	"context"
	"errors"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/websocket"
)

type LLmService struct {
	llm LLMProvider
}

func NewLLmService(llm LLMProvider) *LLmService {
	return &LLmService{llm: llm}
}

func (l *LLmService) Handle(ctx context.Context, client *websocket.Client, msg websocket.Message) error {
	if msg.Type != "chat" {
		return errors.New("unsupported message type")
	}

	// Here we are going to do LLm calling
	// Load context from redis
	streamer := websocketTokenStreamer(ctx, client)
	err := l.llm.StreamChat(ctx, msg, streamer)

	if err != nil {
		select {
		case client.Send <- websocket.Message{
			Type: "error",
			Data: err.Error(),
		}:
		default:

		}
		return err
	}

	// end Message call
	select {
	case client.Send <- websocket.Message{Type: "done"}:
	default:
	}

	return nil
}
