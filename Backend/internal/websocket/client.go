package websocket

import (
	"context"
	"log"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/services"
	"github.com/gorilla/websocket"
)

type Client struct {
	Conn   *websocket.Conn
	Send   chan Message
	Ctx    context.Context
	Cancel context.CancelFunc
	// UsedID string
	// Role   string
	// RoomID string
}

func NewClient(conn *websocket.Conn) *Client {
	ctx, cancel := context.WithCancel(context.Background())
	return &Client{
		Conn:   conn,
		Send:   make(chan Message, 16),
		Ctx:    ctx,
		Cancel: cancel,
	}
}

func (c *Client) Read(service services.MessageService) {
	defer func() {
		// hub.Unregister <- c
		c.Cancel()
		c.Conn.Close()
	}()

	for {
		var msg Message
		if err := c.Conn.ReadJSON(&msg); err != nil {
			log.Println("Read Error", err)
			return
		}
		// hub.Broadcast <- c
		// Handle Message
		go func(m Message) {
			if err := service.Handle(c.Ctx, c, m); err != nil {
				c.Send <- Message{
					Type: "error",
					Data: err.Error(),
				}
			}

		}(msg)
	}
}

func (c *Client) Write() {
	defer c.Conn.Close()

	for {
		select {
		case <-c.Ctx.Done():
			return

		case msg := <-c.Send:
			if err := c.Conn.WriteJSON(msg); err != nil {
				c.Cancel()
				return
			}
		}
	}

}
