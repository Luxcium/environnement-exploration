import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import AnthropicTool from '../tool/AnthropicTool';
import { AnthropicModel } from '../types';

describe('AnthropicTool', () => {
  const mockConfig = {
    apiKey: 'test-api-key',
    defaultModel: AnthropicModel.CLAUDE_3_SONNET,
    defaultMaxTokens: 100,
  };

  it('renders without crashing', () => {
    render(<AnthropicTool config={mockConfig} />);
    expect(screen.getByText('Anthropic AI Assistant')).toBeInTheDocument();
  });

  it('contains an input field and a submit button', () => {
    render(<AnthropicTool config={mockConfig} />);
    expect(screen.getByPlaceholderText('Enter your message here...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });
});
