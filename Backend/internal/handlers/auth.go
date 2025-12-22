package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/services"
)

type AuthHandler struct {
	service *services.AuthService
}

func NewAuthHandler(s *services.AuthService) *AuthHandler {
	return &AuthHandler{service: s}
}

type authRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (h *AuthHandler) Register(w http.ResponseWriter, r *http.Request) {
	var req authRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		// Error Return
		return
	}
	user, err := h.service.Register(req.Email, req.Password)
	if err != nil {
		// Error Return
		return
	}
	// Generate JWt
	// Return Status Accepted
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
	var req authRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		// Error Return
		return
	}
	user, err := h.service.Login(req.Email, req.Password)
	if err != nil {
		// Error Return
		return
	}
	// Generate JWt
	// Return Status Accepted
}

func (h *AuthHandler) Logout(w http.ResponseWriter, r *http.Request) {
	// Stateless JWT → logout handled on frontend or via blacklist later
	// utils.JSON(w, http.StatusOK, map[string]string{
	// 	"message": "logged out",
	// })
}
