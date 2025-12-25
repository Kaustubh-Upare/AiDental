package services

import (
	"context"

	fWebsocket "github.com/Kaustubh-Upare/Prime-Backend/internal/websocket"
	// "github.com/gorilla/websocket"
)

type MessageService interface {
	Handle(
		ctx context.Context,
		client *fWebsocket.Client,
		msg fWebsocket.Message,
	) error
}
