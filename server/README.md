This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Project Portal Server - Tool Integration Hub

The web portal interface for the Environnement Exploration project, serving as a central hub for integrating and accessing development tools.

## Architecture

The portal is built using Next.js 13+ with App Router and implements a tool integration framework:

### Core Components

#### Tool Integration Layer
- `ColorScheme`: Color management and visualization component
- `Topics`: Project organization and task management
- `ToolWrapper`: Base component for tool integration
- `ToolConfiguration`: Global tool settings management
- `ToolRegistry`: Central registry for all integrated tools

### Integration Points

1. **Tool Components**
   - `/components/tools/`: Directory for tool-specific components
   - Each tool gets its own namespace and configuration
   - Standardized API for tool communication

2. **Data Flow**
   - Tool state management
   - Inter-tool communication
   - Data persistence layer
   - Configuration management

3. **UI Integration**
   - Consistent styling with Tailwind CSS
   - Tool-specific UI components
   - Shared UI patterns
   - Responsive design system

### Pages

- `/`: Dashboard with tool overview and quick access
- `/topics`: Topic-based project organization
- `/topic/[slug]`: Individual topic pages with tool integration
- `/resources`: Documentation and tool guides
- `/projects`: Project management interface
- `/tools`: Tool configuration and management

## Tool Integration Guide

### Adding a New Tool

1. Create tool component:
```typescript
// /components/tools/YourTool/index.tsx
interface YourToolProps {
  config: ToolConfig;
  onStateChange: (state: ToolState) => void;
}

export default function YourTool({ config, onStateChange }: YourToolProps) {
  // Tool implementation
}
```

2. Register tool in registry:
```typescript
// /lib/toolRegistry.ts
registerTool({
  name: 'YourTool',
  component: YourTool,
  config: defaultConfig,
  permissions: ['read', 'write']
});
```

3. Add tool configuration:
```typescript
// /config/tools/yourTool.config.ts
export default {
  enabled: true,
  defaultSettings: {},
  endpoints: {},
  permissions: []
};
```

### Tool Requirements

- TypeScript types for tool interface
- Configuration schema
- Documentation
- Unit tests
- Integration tests

## Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Environment Variables

Create a `.env.local` file with required configurations:
```env
NEXT_PUBLIC_API_URL=your_api_url
TOOL_REGISTRY_PATH=path_to_tool_registry
```

## Tool API Integration

Tools can be integrated through multiple methods:
- RESTful API endpoints
- WebSocket connections
- Server-side functions
- Client-side libraries

### API Patterns

- Standard REST endpoints
- WebSocket for real-time updates
- Server-sent events for notifications
- GraphQL for complex data requirements

## Security

- Tool-specific permissions
- Authentication requirements
- API key management
- Rate limiting

## Contributing

1. Follow the tool integration guidelines
2. Maintain TypeScript type safety
3. Document tool interfaces
4. Test tool integration
5. Verify security requirements

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
