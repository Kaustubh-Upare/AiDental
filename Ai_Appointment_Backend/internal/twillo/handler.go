package twillo

import (
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

type TwilloMsg struct {
	Event   string `json:"event"`
	CallSid string `json:"callSid,omitempty"`
	Media   struct {
		Payload string `json:"payload"`
	} `json:"media"`
	Start struct {
		SampleRate int `json:"sample_rate,omitempty"`
	} `json:"start"`
}
