package http

import (
	"log"
	"net/http"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/handlers"
	"github.com/Kaustubh-Upare/Prime-Backend/internal/services"
)

func RegisterRoutes(mux *http.ServeMux) {
	authService := services.NewAuthService()
	AuthHandler := handlers.NewAuthHandler(authService)

	mux.HandleFunc("GET /api/hello", func(w http.ResponseWriter, r *http.Request) { log.Println("Hello") })
	mux.HandleFunc("POST /api/auth/register", AuthHandler.Login)
	mux.HandleFunc("POST /api/auth/login", AuthHandler.Login)
	// mux.HandleFunc("")
}
