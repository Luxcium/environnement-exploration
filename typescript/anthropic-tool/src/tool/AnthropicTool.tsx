import * as React from 'react';
import { useState } from 'react';
import { AnthropicClient } from '../client/AnthropicClient';
import { AnthropicConfig, MessageResponse } from '../types';

interface AnthropicToolProps {
  config: AnthropicConfig;
}

const AnthropicTool: React.FC<AnthropicToolProps> = ({ config }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<MessageResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const client = new AnthropicClient(config);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await client.sendMessage(input);
      setResponse(result);
    } catch (error) {
      console.error('Error calling Anthropic API:', error);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="anthropic-tool">
      <h2>Anthropic AI Assistant</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message here..."
          rows={4}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {response && (
        <div className="mt-4">
          <h3>Response:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AnthropicTool;
