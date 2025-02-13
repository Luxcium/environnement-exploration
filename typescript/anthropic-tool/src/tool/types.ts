import { ComponentType } from 'react';

export interface ToolConfig {
  enabled: boolean;
  name: string;
  description: string;
  version: string;
  defaultSettings: Record<string, any>;
  endpoints?: Record<string, string>;
  permissions: string[];
}

export interface ToolState {
  status: 'idle' | 'loading' | 'ready' | 'error';
  error?: string;
  data?: any;
}

export interface Tool {
  name: string;
  component: ComponentType<any>;
  config: ToolConfig;
  permissions: string[];
}
