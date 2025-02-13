import { Tool } from './types';
import { AnthropicModel } from '../types';
import AnthropicTool from './AnthropicTool';

export const anthropicToolConfig: Tool = {
  name: 'anthropic',
  component: AnthropicTool,
  config: {
  enabled: true,
  name: 'Anthropic AI',
  description: 'Claude AI Integration for intelligent assistance and content generation',
  version: '1.0.0',
  defaultSettings: {
    model: AnthropicModel.CLAUDE_3_SONNET,
    maxTokens: 1024,
    temperature: 0.7,
    systemPrompt: 'You are Claude, an AI assistant focused on helping with development tasks.',
  },
  endpoints: {
    messages: '/api/tools/anthropic/messages',
    stream: '/api/tools/anthropic/stream'
  },
  permissions: ['use_ai', 'send_messages']
  },
  permissions: ['use_ai', 'send_messages']
};
