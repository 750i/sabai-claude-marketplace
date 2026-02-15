# Sabai Timesheet Harvest

Efficient Harvest time tracking for employees and contractors using the [hrvst-cli](https://github.com/kgajera/hrvst-cli).

## Features

- Duplicate last week's timesheet with review before submitting
- Quick time logging with aliases
- Weekly timesheet review and gap detection
- Auto-install of Harvest CLI
- Natural language time entry

## Prerequisites

- Node.js v14 or higher
- A Harvest account with time tracking access

## Installation

Install the plugin in Claude Code:

```bash
claude mcp add-plugin sabai-timesheet-harvest
```

Then run `/setup-harvest` to install the CLI and configure your account.

## Commands

| Command | Description |
|---------|-------------|
| `/setup-harvest` | Install CLI, authenticate, and create aliases |
| `/duplicate-week` | Copy last week's entries with review before submitting |
| `/log [hours] [project]` | Quick time entry |
| `/timesheet [day\|week]` | View your timesheet |

## Usage Examples

### Duplicate Last Week

```
/duplicate-week
```

This shows last week's entries, lets you adjust hours/projects/notes, and only submits after you confirm.

### Quick Logging

```
/log 2 client-dev
/log 1.5 meetings
/log 8
```

### Review Timesheet

```
/timesheet week
```

## Skills

- **Harvest Setup** - CLI installation and alias configuration
- **Time Entry** - Efficient logging workflows
- **Weekly Review** - Gap detection and timesheet completion

## CLI Commands Reference

The plugin uses these hrvst-cli commands:

| Action | Command |
|--------|---------|
| Install CLI | `npm install -g hrvst-cli` |
| Login | `hrvst login` |
| Start timer | `hrvst start [alias]` |
| Stop timer | `hrvst stop` |
| Log hours | `hrvst log <hours> [alias]` |
| Add notes | `hrvst note "description"` |
| List aliases | `hrvst alias list` |
| Create alias | `hrvst alias create <name>` |

## Tips for Efficient Time Tracking

1. **Create aliases** for all your regular projects
2. **Review weekly** to catch any gaps
3. **Log immediately** rather than waiting until end of week

## Links

- [Harvest CLI Documentation](https://kgajera.github.io/hrvst-cli/)
- [Harvest](https://www.getharvest.com/)
- [Sabai System](https://sabaisystem.com)
