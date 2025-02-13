# Anthropic Tool

This tool integrates Anthropic's AI capabilities into the project, providing an interface for interacting with Claude AI.

## Features

- Seamless integration with Anthropic's API
- React component for easy integration into web applications
- TypeScript support for improved developer experience

## Installation

```bash
yarn add @luxcium/anthropic-tool
```

## Usage

```typescript
import { AnthropicClient, AnthropicTool } from '@luxcium/anthropic-tool';

// Initialize the client
const client = new AnthropicClient({
  apiKey: 'your-api-key-here',
});

// Use the React component
const MyComponent = () => {
  return (
    <AnthropicTool
      config={{
        apiKey: 'your-api-key-here',
        defaultModel: 'claude-3-sonnet-20240229',
      }}
    />
  );
};
```

## Configuration

The tool can be configured using the `AnthropicConfig` interface:

```typescript
interface AnthropicConfig {
  apiKey?: string;
  defaultModel?: string;
  defaultMaxTokens?: number;
  baseUrl?: string;
}
```

## Contributing

Please read the CONTRIBUTING.md file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
