# Sabai Linear

Product Manager assistant with Linear integration. Create tickets from templates, manage your backlog, generate PRDs, and much more.

## Features

### Core Features
- **PRD Creation** - Generate structured Product Requirement Documents
- **Ticket Templates** - Create consistent, well-structured tickets
- **Backlog Management** - View and prioritize your Linear backlog
- **Linear Integration** - Directly create and manage tickets in Linear

### Planning & Strategy
- **Prioritization Frameworks** - RICE, ICE, MoSCoW scoring
- **Sprint Planning** - Capacity planning and sprint scope
- **Roadmap Generation** - Stakeholder-ready roadmap summaries
- **Risk Assessment** - Structured risk analysis and mitigation

### Reporting & Analysis
- **Daily Standup** - Generate standup summaries from Linear
- **Weekly Status** - Comprehensive status reports with metrics
- **Release Notes** - Professional release notes from completed work

### Backlog Health
- **Stale Ticket Detection** - Find tickets that need attention
- **Duplicate Detection** - Identify similar/duplicate tickets
- **Dependency Analysis** - Map blocking relationships
- **Refinement Assistant** - Check ticket quality and readiness

### Documentation
- **Decision Logs** - ADR-style decision documentation

## Prerequisites

- Linear account
- Node.js 18+

### Setting up Linear MCP

This plugin uses [Linear's official MCP server](https://linear.app/docs/mcp), which handles authentication via OAuth.

1. **Add MCP configuration** to `.mcp.json` in your project root:
   ```json
   {
     "mcpServers": {
       "linear": {
         "command": "npx",
         "args": ["-y", "mcp-remote", "https://mcp.linear.app/mcp"]
       }
     }
   }
   ```

2. **Restart Claude Code** to load the MCP server

3. **Authenticate** - On first use, you'll be prompted to authorize access to your Linear workspace via OAuth

> **Note:** No API key needed! Linear's official MCP server uses OAuth 2.1 for secure authentication.

## Commands

### Creating Content
| Command | Description |
|---------|-------------|
| `/prd [description]` | Create a Product Requirement Document |
| `/ticket [type] [description]` | Create a ticket from template |
| `/decision [title]` | Log a decision with ADR format |

### Reporting
| Command | Description |
|---------|-------------|
| `/standup [team] [date]` | Generate daily standup summary |
| `/status [project] [period]` | Generate weekly status report |
| `/release-notes [version] [since]` | Generate release notes |
| `/roadmap [timeframe] [team]` | Generate roadmap summary |

### Planning
| Command | Description |
|---------|-------------|
| `/sprint [action] [name]` | Sprint planning/review/capacity |
| `/risk [project\|ticket]` | Risk assessment (multiple frameworks) |

### Backlog Management
| Command | Description |
|---------|-------------|
| `/backlog [options]` | View and manage backlog |
| `/stale [days] [filter]` | Find stale tickets |
| `/duplicate [ticket\|text]` | Check for duplicates |
| `/dependencies [ticket\|project]` | Analyze dependencies |
| `/refine [ticket\|backlog]` | Refinement assistant |

## Ticket Types

- `feature` - New feature
- `bug` - Bug report
- `improvement` - Enhancement
- `spike` - Research task
- `epic` - Large initiative

## Usage Examples

### Create a PRD
```
/prd User authentication with SSO support
```

### Create a Feature Ticket
```
/ticket feature Add export to CSV functionality
```

### Generate Daily Standup
```
/standup Engineering
```

### Generate Weekly Status
```
/status ProjectX
```

### Sprint Planning
```
/sprint plan Q1-Sprint-3
```

### Find Stale Tickets
```
/stale 14 Engineering
```

### Check Dependencies
```
/dependencies TICKET-123
```

### Prioritize with RICE
Ask Claude to help prioritize your backlog using the RICE framework:
```
Help me prioritize these features using RICE scoring
```

## Skills

This plugin includes comprehensive skills for:

| Skill | Description |
|-------|-------------|
| `prd.md` | PRD templates and guidance |
| `ticket-templates.md` | Templates for all ticket types |
| `prioritization.md` | RICE, ICE, MoSCoW frameworks |
| `release-notes.md` | Release notes generation |
| `risk-assessment.md` | Risk frameworks (P×I, ROAM, RAID, FMEA) |
| `decision-log.md` | ADR-style decision documentation |

## Tips

- Use `/prd` first to document features, then break down into tickets
- Run `/standup` at the start of each day
- Generate `/status` reports every Friday
- Check `/stale` tickets weekly as part of backlog hygiene
- Use `/refine` before sprint planning to ensure ticket quality
- Document important decisions with `/decision` immediately
- Set priorities based on user impact, not just urgency

## Links

- [Linear](https://linear.app)
- [Sabai System](https://sabaisystem.com)
