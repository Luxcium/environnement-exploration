import { config as dotenvConfig } from 'dotenv';
import {
  AnthropicConfig,
  AnthropicError,
  AnthropicModel,
  MessageRequest,
  MessageResponse,
  SendMessageOptions,
  StreamChunk
} from '../types';

dotenvConfig();

const DEFAULT_BASE_URL = 'https://api.anthropic.com/v1';
const DEFAULT_MODEL = AnthropicModel.CLAUDE_3_SONNET;
const DEFAULT_MAX_TOKENS = 1024;

export class AnthropicClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly defaultModel: string;
  private readonly defaultMaxTokens: number;

  constructor(config: AnthropicConfig = {}) {
    this.apiKey = config.apiKey || process.env.ANTHROPIC_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('Anthropic API key is required');
    }

    this.baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    this.defaultModel = config.defaultModel || DEFAULT_MODEL;
    this.defaultMaxTokens = config.defaultMaxTokens || DEFAULT_MAX_TOKENS;
  }

  async sendMessage(message: string, options: Partial<SendMessageOptions> = {}): Promise<MessageResponse> {
    const request: MessageRequest = {
      model: options.model || this.defaultModel,
      max_tokens: options.max_tokens || this.defaultMaxTokens,
      messages: [{ role: 'user', content: message }],
      stream: options.stream || false,
      system: options.systemPrompt,
      metadata: options.metadata,
    };

    try {
      const response = await fetch(`${this.baseUrl}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const error = await response.json();
        throw this.createError(error, response.status);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw this.createError(error);
      }
      throw error;
    }
  }

  async streamMessage(
    message: string,
    onMessage: (chunk: StreamChunk) => void,
    onError: (error: AnthropicError) => void,
    options: Partial<SendMessageOptions> = {}
  ): Promise<void> {
    const request: MessageRequest = {
      model: options.model || this.defaultModel,
      max_tokens: options.max_tokens || this.defaultMaxTokens,
      messages: [{ role: 'user', content: message }],
      stream: true,
      system: options.systemPrompt,
      metadata: options.metadata,
    };

    try {
      const response = await fetch(`${this.baseUrl}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const error = await response.json();
        throw this.createError(error, response.status);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is empty');
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') return;

            try {
              const parsed = JSON.parse(data);
              onMessage(parsed);
            } catch (e) {
              console.error('Error parsing stream chunk:', e);
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        onError(this.createError(error));
      }
    }
  }

  private createError(error: any, status?: number): AnthropicError {
    const anthropicError = new Error(error.message || 'Unknown error') as AnthropicError;
    anthropicError.type = error.type || 'unknown_error';
    anthropicError.status = status;
    anthropicError.error = error.error;
    return anthropicError;
  }
}
