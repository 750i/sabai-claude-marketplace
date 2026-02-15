# Sabai Claude Marketplace

Public marketplace for Claude plugins by [Sabai System](https://sabaisystem.com).

## Available Plugins

| Plugin | Description | Type |
|--------|-------------|------|
| [sabai-sudoku](plugins/sabai-sudoku) | Interactive Sudoku game with smart hints | MCP App |

## Installation

### Prerequisites

- [Claude Desktop](https://claude.ai/download) or Claude Code CLI
- Node.js 18+ (for MCP servers)

### Install a Plugin

1. Clone this repository:
   ```bash
   git clone https://github.com/sabaisystem/sabai-claude-marketplace.git
   ```

2. Navigate to the plugin you want to install:
   ```bash
   cd sabai-claude-marketplace/plugins/sabai-sudoku/mcp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Add the plugin to your Claude configuration:

   **For Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):
   ```json
   {
     "mcpServers": {
       "sabai-sudoku": {
         "command": "bash",
         "args": ["/path/to/sabai-claude-marketplace/plugins/sabai-sudoku/mcp/startup.sh"]
       }
     }
   }
   ```

   **For Claude Code** (`.claude/settings.local.json` in your project):
   ```json
   {
     "mcpServers": {
       "sabai-sudoku": {
         "command": "bash",
         "args": ["/path/to/sabai-claude-marketplace/plugins/sabai-sudoku/mcp/startup.sh"]
       }
     }
   }
   ```

5. Restart Claude Desktop or Claude Code

## Plugin Structure

Each plugin follows this structure:

```
plugins/
  plugin-name/
    .claude-plugin/
      plugin.json       # Plugin manifest
    mcp/                # MCP server (optional)
      server.ts         # Server implementation
      startup.sh        # Startup script
      package.json      # Dependencies
    skills/             # Skills (optional)
    commands/           # Slash commands (optional)
    README.md           # Plugin documentation
```

## Contributing

We welcome contributions! To add a plugin:

1. Fork this repository
2. Create your plugin following the structure above
3. Add a `plugin.json` manifest
4. Test your plugin locally
5. Submit a pull request

### Plugin Manifest

Every plugin must have a `.claude-plugin/plugin.json`:

```json
{
  "name": "plugin-name",
  "description": "What your plugin does",
  "version": "1.0.0",
  "author": "Your Name",
  "mcpServers": {
    "server-name": {
      "command": "bash",
      "args": ["${CLAUDE_PLUGIN_ROOT}/mcp/startup.sh"]
    }
  }
}
```

## License

MIT License - see individual plugins for their specific licenses.

## Links

- [Sabai System](https://sabaisystem.com)
- [Report Issues](https://github.com/sabaisystem/sabai-claude-marketplace/issues)
