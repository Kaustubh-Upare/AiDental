package services

import (
	"context"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/websocket"
)

func websocketTokenStreamer(ctx context.Context, client *websocket.Client) TokenStream {
	return func(token string) error {
		select {

		case <-ctx.Done():
			return ctx.Err()

		case client.Send <- websocket.Message{
			Type: "chunk",
			Data: token,
		}:
			return nil
		}
	}
}
