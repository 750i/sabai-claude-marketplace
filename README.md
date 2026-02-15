# Sabai Claude Marketplace

Public marketplace for Claude plugins by [Sabai System](https://sabaisystem.com).

## Available Plugins

| Plugin | Description | Type |
|--------|-------------|------|
| [sabai-sudoku](plugins/sabai-sudoku) | Interactive Sudoku game with smart hints | MCP App |
| [sabai-pm-linear](plugins/sabai-pm-linear) | Product Manager assistant with Linear integration | Skills + Commands |
| [sabai-crm-attio](plugins/sabai-crm-attio) | CRM assistant with Attio integration | Skills + Commands |
| [sabai-conversion](plugins/sabai-conversion) | Smart currency and timezone converter with preferences | Skills |
| [sabai-doc-notion](plugins/sabai-doc-notion) | Documentation workflow with Notion integration | MCP + Skills + Commands |
| [sabai-gmail](plugins/sabai-gmail) | Gmail assistant for email composition and inbox management | Skills + Commands |
| [sabai-calendar](plugins/sabai-calendar) | Calendar assistant with Google Calendar integration | Skills + Commands |
| [sabai-sabai](plugins/sabai-sabai) | Relax with chill Thai vibes when you need a break | MCP App + Command |
| [sabai-video-tella](plugins/sabai-video-tella) | Tella video management and content planning | MCP + Commands |
| [sabai-timesheet-harvest](plugins/sabai-timesheet-harvest) | Efficient Harvest time tracking for employees/contractors | Skills + Commands |
| [sabai-discord](plugins/sabai-discord) | Discord assistant for server management and messaging | Skills + Commands |
| [sabai-slack](plugins/sabai-slack) | Full-featured Slack integration for messaging and search | MCP + Skills + Commands |

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
