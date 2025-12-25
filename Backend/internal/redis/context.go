package redisdb

import (
	"encoding/json"
	"time"

	"github.com/redis/go-redis/v9"
)

type LLmMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

const maxMsg = 15

func GetContext(key string) ([]LLmMessage, error) {
	val, err := Client.Get(Ctx, key).Result()
	if err != nil {
		if err == redis.Nil {
			return []LLmMessage{}, nil
		}
		return nil, err
	}
	var msgs []LLmMessage

	if err := json.Unmarshal([]byte(val), &msgs); err != nil {
		return nil, err
	}
	return msgs, nil

}

func SaveContext(key string, msgs []LLmMessage) error {
	// cajust for now we add len we will do this on the basis of size
	if len(msgs) > maxMsg {
		// We will Do something or summarize the thing
	}

	data, _ := json.Marshal(msgs)
	return Client.Set(Ctx, key, data, 30*time.Minute).Err()
}
