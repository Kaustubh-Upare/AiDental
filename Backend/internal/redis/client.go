package redisdb

import (
	"context"
	"os"
	"time"

	"github.com/redis/go-redis/v9"
)

var (
	Client *redis.Client
	Ctx    = context.Background()
)

func Init() {
	Client = redis.NewClient(&redis.Options{
		Addr:     getEnv("REDIS_ADDR", "localhost:6379"),
		Password: getEnv("REDIS_PASSWORD", ""),
		DB:       0,
	})

	ctx, cancel := context.WithTimeout(Ctx, 2*time.Second)
	defer cancel()

	if err := Client.Ping(ctx).Err(); err != nil {
		panic("Redis Connection Failed " + err.Error())
	}
}
func getEnv(key, fallBack string) string {
	if val := os.Getenv(key); val != "" {
		return val
	}
	return fallBack
}
