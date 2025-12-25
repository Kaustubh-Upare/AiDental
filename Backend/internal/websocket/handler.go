package websocket

import (
	"net/http"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/services"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func NewHandler(service services.MessageService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			return
		}
		client := NewClient(conn)
		// hub.Register <- client
		go client.Read(service)
		go client.Write()
	}
}

func handleMessage(c *Client, msg Message) {
	defer func() {
		if r := recover(); r != nil {
			c.Send <- Message{Type: "error", Data: "Internal Error"}
		}
	}()

	// CallLLmStream
	for {
		select {
		case <-c.Ctx.Done():
			// Client disconnect server shutting down
			return

			// case chunk,ok:=<-stream This for stream

		}
	}
}
