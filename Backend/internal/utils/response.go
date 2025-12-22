package utils

import (
	"encoding/json"
	"net/http"
)

func JSON_Proto(w http.ResponseWriter, status int, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(data)
}

func JSONError(w http.ResponseWriter, message string, status int) {
	JSON_Proto(w, status, map[string]string{
		"error": message,
	})
}
