import React, { useState, useEffect } from 'react';
import { Tool, ToolState } from '../lib/toolRegistry';

interface ToolWrapperProps {
  tool: Tool;
  children: React.ReactNode;
}

export default function ToolWrapper({ tool, children }: ToolWrapperProps) {
  const [state, setState] = useState<ToolState>({
    status: 'idle',
  });

  useEffect(() => {
    if (!tool.config.enabled) {
      setState({ status: 'error', error: 'Tool is disabled' });
      return;
    }
    setState({ status: 'ready' });
  }, [tool]);

  if (state.status === 'error') {
    return (
      <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
              Tool Error
            </h3>
            <div className="mt-2 text-sm text-red-700 dark:text-red-300">
              {state.error || 'An unknown error occurred'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (state.status === 'loading') {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="tool-wrapper rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {tool.config.name}
          </h2>
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            v{tool.config.version}
          </span>
        </div>
        {tool.config.description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {tool.config.description}
          </p>
        )}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}