package main

import (
	"log"
	"net/http"

	httpRest "github.com/Kaustubh-Upare/Prime-Backend/internal/http"
)

func main() {
	router := http.NewServeMux()

	// Rest APi
	// router.HandleFunc()
	httpRest.RegisterRoutes(router)

	log.Println("Server running on :8080")
	err := http.ListenAndServe(":8080", router)
	if err != nil {
		log.Fatal(err)
	}
}
