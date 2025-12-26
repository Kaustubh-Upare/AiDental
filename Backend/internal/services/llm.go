package services

import "context"

type LLMMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type TokenStream func(token string) error

type LLMProvider interface {
	StreamChat(ctx context.Context, messages []LLMMessage, onToken TokenStream) error
}
