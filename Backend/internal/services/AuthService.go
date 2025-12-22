package services

import (
	"errors"
	"time"

	"github.com/Kaustubh-Upare/Prime-Backend/internal/models"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type AuthService struct {
}

func NewAuthService() *AuthService {
	return &AuthService{}
}

func (s *AuthService) Register(email string, password string) (*models.User, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), 12)
	if err != nil {
		return nil, err
	}
	user := &models.User{
		ID:        uuid.NewString(),
		Email:     email,
		Password:  string(hash),
		CreatedAt: time.Now(),
	}
	return user, nil
}

func (s *AuthService) Login(email string, password string) (*models.User, error) {
	// Fetch User using email

	// fake hashed password (for now)
	hashed, _ := bcrypt.GenerateFromPassword([]byte("password"), 12)

	err := bcrypt.CompareHashAndPassword(hashed, []byte(password))
	if err != nil {
		return nil, errors.New("invalid credentials")
	}
	return &models.User{
		ID:    uuid.NewString(),
		Email: email,
	}, nil
}
