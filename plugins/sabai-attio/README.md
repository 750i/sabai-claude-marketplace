# Sabai Attio

CRM assistant with Attio integration. Manage leads, prepare for meetings, track deals, and log activities in your Attio workspace using natural language.

## Features

- **Lead Management** - Search, qualify, and enrich leads with BANT/CHAMP frameworks
- **Meeting Prep** - Generate comprehensive briefings before customer calls
- **Pipeline Health** - Analyze deal pipeline and identify at-risk opportunities
- **Deal Management** - Track and advance deals through your sales process
- **Activity Logging** - Log calls, emails, and notes to contact records

## Prerequisites

- Attio MCP server configured and connected
- Attio workspace with appropriate permissions

### Setting up Attio MCP

Add to your Claude configuration:

```json
{
  "mcpServers": {
    "attio": {
      "type": "url",
      "url": "https://mcp.attio.com/mcp"
    }
  }
}
```

When you first connect, you'll be prompted to authenticate with OAuth. The Attio MCP uses your existing Attio permissions.

Alternatively, you can use the community [kesslerio/attio-mcp-server](https://github.com/kesslerio/attio-mcp-server) for additional features:

```json
{
  "mcpServers": {
    "attio": {
      "command": "npx",
      "args": ["-y", "@kesslerio/attio-mcp-server"],
      "env": {
        "ATTIO_API_KEY": "your-attio-api-key"
      }
    }
  }
}
```

## Commands

| Command | Description |
|---------|-------------|
| `/lead [name or email]` | Search and qualify a lead |
| `/meeting-prep [company or contact]` | Generate meeting briefing |
| `/pipeline [options]` | Analyze pipeline health |
| `/deal [action] [deal]` | Manage a specific deal |
| `/log [type] [contact]` | Log activity to a contact |

## Usage Examples

### Find and Qualify a Lead
```
/lead john@acme.com
```
Returns lead details, company info, recent activities, and qualification assessment.

### Prepare for a Meeting
```
/meeting-prep Acme Corp
```
Generates a briefing with company overview, key contacts, recent interactions, open deals, and suggested talking points.

### Check Pipeline Health
```
/pipeline
```
Shows pipeline summary, deals by stage, at-risk opportunities, and recommendations.

### Advance a Deal
```
/deal advance Acme Enterprise
```
Updates deal stage and logs the progression.

### Log a Call
```
/log call Sarah at TechCorp - discussed pricing, they need proposal by Friday
```
Creates a note attached to the contact with call details.

## Skills

This plugin includes skills for:

- **Lead Management** (`skills/lead-management.md`) - Search, qualify, and enrich leads
- **Meeting Prep** (`skills/meeting-prep.md`) - Generate comprehensive meeting briefings
- **Pipeline Health** (`skills/pipeline-health.md`) - Analyze and optimize your pipeline
- **Deal Management** (`skills/deal-management.md`) - Track and advance deals
- **Activity Logging** (`skills/activity-logging.md`) - Log interactions and notes

## Attio MCP Tools Used

This plugin leverages these Attio MCP capabilities:

| Tool | Purpose |
|------|---------|
| `search-records` | Find people, companies, deals |
| `get-records-by-ids` | Get detailed record information |
| `create-note` | Log activities and notes |
| `create-task` | Create follow-up tasks |
| `search-notes-by-metadata` | Find recent interactions |
| `search-emails-by-metadata` | Review email history |
| `search-meetings` | Find scheduled meetings |

## Tips

- Use specific identifiers (email, company name) for faster searches
- Meeting prep works best when you specify the company or main contact
- Pipeline analysis can be filtered by team or time period
- Always log important calls and meetings for team visibility
- Create tasks for follow-ups immediately after calls

## Links

- [Attio](https://attio.com)
- [Attio MCP Documentation](https://docs.attio.com/mcp/overview)
- [Sabai System](https://sabaisystem.com)
