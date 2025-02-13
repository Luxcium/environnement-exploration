export interface MessageRequest {
  model: string;
  max_tokens: number;
  messages: Message[];
  stream?: boolean;
  system?: string;
  metadata?: Record<string, any>;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface AnthropicConfig {
  apiKey?: string;
  defaultModel?: string;
  defaultMaxTokens?: number;
  baseUrl?: string;
}

export type SendMessageOptions = Omit<MessageRequest, 'messages'> & {
  message: string;
  systemPrompt?: string;
}
