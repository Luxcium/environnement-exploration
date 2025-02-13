import { AnthropicClient } from '../client/AnthropicClient';
import { AnthropicModel } from '../types';

describe('AnthropicClient', () => {
  let client: AnthropicClient;

  beforeEach(() => {
    client = new AnthropicClient({
      apiKey: 'test-api-key',
      defaultModel: AnthropicModel.CLAUDE_3_SONNET,
      defaultMaxTokens: 100,
    });
  });

  it('should be defined', () => {
    expect(client).toBeDefined();
  });

  it('should have correct default values', () => {
    expect(client['apiKey']).toBe('test-api-key');
    expect(client['defaultModel']).toBe(AnthropicModel.CLAUDE_3_SONNET);
    expect(client['defaultMaxTokens']).toBe(100);
  });

  // Add more tests as needed
});
