package config

type Config struct {
	ListenAddr string `yaml:"listen_addr"`
	Vosk       struct {
		GrpcAddrs []string `yaml:"grpc_addrs"`
	} `yaml:"vosk"`
	NLU struct {
		URL string `yaml:"url"`
	} `yaml:"nlu"`
}

func Default() *Config {
	cfg := &Config{}
	cfg.ListenAddr = ":8080"
	cfg.Vosk.GrpcAddrs = []string{"vosk:2700"}
	cfg.NLU.URL = ""
	return cfg
}

func (c *Config) LoadFile(path string) error {
	// Future Read YAML
	return nil
}
