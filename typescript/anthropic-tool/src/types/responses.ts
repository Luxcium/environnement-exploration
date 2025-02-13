export interface MessageResponse {
  id: string;
  type: 'message';
  role: 'assistant';
  content: MessageContent[];
  model: string;
  stop_reason: string | null;
  stop_sequence: string | null;
  usage: Usage;
}

export interface MessageContent {
  type: 'text';
  text: string;
}

export interface Usage {
  input_tokens: number;
  output_tokens: number;
}

export interface ErrorResponse {
  type: string;
  error: {
    type: string;
    message: string;
  };
}

export interface StreamChunk {
  type: 'message_delta';
  delta: {
    type: 'text_delta';
    text: string;
  };
  usage?: Usage;
  stop_reason?: string;
  stop_sequence?: string;
}
