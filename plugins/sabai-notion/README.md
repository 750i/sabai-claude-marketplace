# Sabai Notion

Documentation workflow plugin with Notion integration. Create, update, and sync documentation between your codebase and Notion pages.

## Features

- **Generate Documentation** - Auto-generate docs from code (functions, classes, APIs)
- **Publish to Notion** - Push markdown documentation to Notion pages
- **Import from Notion** - Pull Notion content to local files
- **Bidirectional Sync** - Keep local docs and Notion in sync
- **Search Notion** - Find pages and databases in your workspace

## Installation

### Prerequisites

- Node.js 18+
- Notion Integration Token ([Get one here](https://www.notion.so/my-integrations))

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sabaisystem/sabai-claude-marketplace.git
   ```

2. Navigate to the plugin:
   ```bash
   cd sabai-claude-marketplace/plugins/sabai-notion/mcp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Add to your Claude configuration:

   **For Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):
   ```json
   {
     "mcpServers": {
       "sabai-notion": {
         "command": "bash",
         "args": ["/path/to/plugins/sabai-notion/mcp/startup.sh"],
         "env": {
           "NOTION_API_KEY": "your-notion-integration-token"
         }
       }
     }
   }
   ```

   **For Claude Code** (`.claude/settings.local.json`):
   ```json
   {
     "mcpServers": {
       "sabai-notion": {
         "command": "bash",
         "args": ["/path/to/plugins/sabai-notion/mcp/startup.sh"],
         "env": {
           "NOTION_API_KEY": "your-notion-integration-token"
         }
       }
     }
   }
   ```

5. Restart Claude

## Notion Setup

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Create a new integration
3. Copy the integration token
4. Share the Notion pages/databases you want to access with your integration

## Commands

| Command | Description |
|---------|-------------|
| `/docs [file]` | Generate documentation from code |
| `/publish [file]` | Publish documentation to Notion |
| `/import [url]` | Import content from Notion |
| `/sync [path]` | Sync docs between local and Notion |
| `/notion-search [query]` | Search your Notion workspace |

## Skills

- **doc-generation** - Generate comprehensive docs from source code
- **notion-sync** - Manage bidirectional sync workflows
- **doc-structure** - Best practices for documentation architecture

## MCP Tools

| Tool | Description |
|------|-------------|
| `notion_search` | Search pages and databases |
| `notion_get_page` | Get page content as markdown |
| `notion_create_page` | Create a new page |
| `notion_update_page` | Update page content |
| `notion_append_content` | Append to existing page |
| `notion_list_databases` | List all databases |
| `notion_query_database` | Query database entries |
| `generate_docs_from_code` | Generate docs from code |

## Usage Examples

### Generate and Publish API Docs

```
Generate documentation for src/api/ and publish it to Notion
```

### Import Documentation

```
/import https://notion.so/my-api-docs-page docs/api.md
```

### Sync Project Docs

```
/sync docs/ push
```

### Search Workspace

```
/notion-search project documentation
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NOTION_API_KEY` | Yes | Notion integration token |

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Links

- [Sabai System](https://sabaisystem.com)
- [Notion API Documentation](https://developers.notion.com)
- [Report Issues](https://github.com/sabaisystem/sabai-claude-marketplace/issues)
