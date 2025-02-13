export * from './requests';
export * from './responses';

export enum AnthropicModel {
  CLAUDE_3_OPUS = 'claude-3-opus-20240229',
  CLAUDE_3_SONNET = 'claude-3-sonnet-20240229',
  CLAUDE_3_HAIKU = 'claude-3-haiku-20240307'
}

export interface AnthropicError extends Error {
  type: string;
  status?: number;
  error?: {
    type: string;
    message: string;
  };
}

export type MessageHandler = (message: string) => void;
export type ErrorHandler = (error: AnthropicError) => void;
