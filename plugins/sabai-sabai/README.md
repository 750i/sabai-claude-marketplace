# Sabai Sabai Plugin

> "Sabai sabai" (สบาย สบาย) - Thai expression meaning "relax, take it easy"

A simple plugin that plays relaxing music when you need a break from coding.

## Features

- `/sabai` command - Displays a video player with chill Thai vibes

## Installation

Add to your Claude Code settings:

```json
{
  "mcpServers": {
    "sabai-sabai": {
      "command": "npx",
      "args": ["tsx", "mcp/server.ts"],
      "cwd": "/path/to/sabai-claude-marketplace/plugins/sabai-sabai"
    }
  }
}
```

## Usage

Simply type `/sabai` in Claude Code to take a relaxing break.

## Building

```bash
cd plugins/sabai-sabai/mcp
npm install
npm run build
```

## Author

[Sabai System](https://sabaisystem.com)
