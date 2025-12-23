package websocket

import (
	"log"

	"github.com/gorilla/websocket"
)

type Client struct {
	Conn *websocket.Conn
	Send chan Message

	UsedID string
	Role   string
	RoomID string
}

func NewClient(conn *websocket.Conn) *Client {
	return &Client{
		Conn: conn,
		Send: make(chan Message, 16),
	}
}

func (c *Client) Read(hub *Hub) {
	defer func() {
		hub.Unregister <- c
		c.Conn.Close()
	}()
	for {
		var msg Message
		if err := c.Conn.ReadJSON(&msg); err != nil {
			log.Println("Read Error", err)
			return
		}
		hub.Broadcast <- c
	}
}

func (c *Client) Write() {
	defer c.Conn.Close()
	for msg := range c.Send {
		if err := c.Conn.WriteJSON(msg); err != nil {
			return
		}
	}
}
