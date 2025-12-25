package services

import (
	"context"
	"errors"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/websocket"
)

type LLmService struct {
}

func NewLLmService() *LLmService {
	return &LLmService{}
}

func (l *LLmService) Handle(ctx context.Context, client *websocket.Client, msg websocket.Message) error {
	if msg.Type != "chat" {
		return errors.New("unsupported message type")
	}

	// Here we are going to do LLm calling

	// end Message call
	client.Send <- websocket.Message{Type: "done"}
	return nil
}
