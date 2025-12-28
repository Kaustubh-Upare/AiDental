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

func (o *OpenAiProvider) StreamChat(ctx context.Context, messages []LLMMessage, onToken TokenStream) error {
	input := make([]openai.ChatCompletionMessageParamUnion, 0, len(messages))
	for _, m := range messages {
		switch m.Role {
		case "system":
			input = append(input, openai.SystemMessage(m.Content))
		case "assistant":
			input = append(input, openai.AssistantMessage(m.Content))
		default:
			input = append(input, openai.UserMessage(m.Content))
		}
	}

	params := openai.ChatCompletionNewParams{
		Model:    o.model,
		Messages: input,
	}

	stream := o.client.Chat.Completions.NewStreaming(ctx, params)
	acc := openai.ChatCompletionAccumulator{}
	for stream.Next() {
		chunk := stream.Current()
		acc.AddChunk(chunk)

		if len(chunk.Choices) == 0 {
			continue
		}

		// if content,ok:=acc.JustFinishedContent();ok && {
		// 	// Content Done
		// }

		if delta := chunk.Choices[0].Delta.Content; delta != "" {
			onToken(delta)
		}
	}

	if err := stream.Err(); err != nil {
		return err
	}

	return nil

}
