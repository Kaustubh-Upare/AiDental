package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/services"
	"github.com/Kaustubh-Upare/Prime-Backend/internal/utils"
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
		utils.JSONError(w, err.Error(), http.StatusBadRequest)
		return
	}
	token, err := utils.GenerateJWT(user.ID)

	utils.JSON_Proto(w, http.StatusCreated, map[string]string{
		"token": token,
	})
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
		utils.JSONError(w, err.Error(), http.StatusBadRequest)
		return
	}
	token, _ := utils.GenerateJWT(user.ID)
	// Generate JWt
	utils.JSON_Proto(w, http.StatusOK, map[string]string{
		"token": token,
	})
	// Return Status Accepted
}

func (h *AuthHandler) Logout(w http.ResponseWriter, r *http.Request) {
	// Stateless JWT → logout handled on frontend or via blacklist later
	// utils.JSON(w, http.StatusOK, map[string]string{
	// 	"message": "logged out",
	// })
	utils.JSON_Proto(w, http.StatusOK, map[string]string{
		"Message": "Logged Out",
	})
}
