package services

import (
	"context"

	"github.com/openai/openai-go"
	"github.com/openai/openai-go/option"
)

type OpenAiProvider struct {
	client *openai.Client
	model  string
}

func NewOpenAiProvider() *OpenAiProvider {
	client := openai.NewClient(option.WithAPIKey("sads"))

	return &OpenAiProvider{
		client: &client,
		model:  openai.ChatModelGPT4oMini,
	}
}

func (o *OpenAiProvider) StreamChat(ctx context.Context, messages []LLMMessage, onToken TokenStream) {
	var input []openai.ChatCompletionMessageParam

}
