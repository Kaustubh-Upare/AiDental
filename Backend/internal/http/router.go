package http

import (
	"log"
	"net/http"
)

func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/hello", func(w http.ResponseWriter, r *http.Request) { log.Println("Hello") })
}
