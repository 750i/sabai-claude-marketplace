# Sabai Slack

Full-featured Slack integration for Claude, enabling messaging, channel management, and powerful search capabilities.

## Features

### Messaging
- Send messages to channels and DMs
- Reply to threads
- Read conversation history
- Support for markdown formatting

### Channel Management
- List all channels (public, private, DMs, group DMs)
- View channel details and member counts
- Navigate workspace efficiently

### Search
- Search messages by keyword
- Filter by channel, user, or date
- Find messages in threads
- Locate specific messages by URL

## Prerequisites

### 1. Create a Slack App

1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Click "Create New App" > "From scratch"
3. Name your app and select your workspace
4. Navigate to "OAuth & Permissions"

### 2. Configure Scopes

Add these User Token Scopes:
- `channels:history` - View messages in public channels
- `channels:read` - View basic channel info
- `groups:history` - View messages in private channels
- `groups:read` - View basic private channel info
- `im:history` - View direct messages
- `im:read` - View basic DM info
- `mpim:history` - View group DM messages
- `mpim:read` - View basic group DM info
- `chat:write` - Send messages
- `search:read` - Search messages
- `users:read` - View user info

### 3. Install and Get Token

1. Click "Install to Workspace"
2. Authorize the app
3. Copy the "User OAuth Token" (starts with `xoxp-`)

### 4. Set Environment Variable

```bash
export SLACK_TOKEN="xoxp-your-token-here"
```

Or add to your shell profile (~/.zshrc or ~/.bashrc):
```bash
echo 'export SLACK_TOKEN="xoxp-your-token-here"' >> ~/.zshrc
```

## Commands

| Command | Description |
|---------|-------------|
| `/slack send #channel message` | Send a message to a channel |
| `/slack read #channel` | Read recent messages from a channel |
| `/slack channels` | List available channels |
| `/slack reply` | Reply to a thread |
| `/slack-search query` | Search messages with filters |

## Usage Examples

### Sending Messages

```
/slack send #general Good morning team!
/slack send @john Can we sync up later?
```

### Reading Messages

```
/slack read #engineering
/slack read @jane
```

### Searching

```
/slack-search project deadline
/slack-search budget --channel #finance
/slack-search deployment --from @devops --after 2024-01-01
```

### Listing Channels

```
/slack channels
```

## Skills

| Skill | Description |
|-------|-------------|
| slack-messaging | Best practices for Slack communication |
| slack-channels | Guide for channel navigation and selection |

## Message Formatting

The plugin supports Slack's markdown-style formatting:

| Format | Syntax | Result |
|--------|--------|--------|
| Bold | `*text*` | **text** |
| Italic | `_text_` | _text_ |
| Strikethrough | `~text~` | ~~text~~ |
| Code | `` `code` `` | `code` |
| Block quote | `> quote` | > quote |

## Tips

- **Use threads**: Reply in threads to keep channels organized
- **Check context**: Read recent messages before sending to maintain context
- **Choose wisely**: Use channels for team visibility, DMs for private matters
- **Search first**: Use search to find existing discussions before starting new ones
- **Format messages**: Use markdown for better readability

## Troubleshooting

### "Token not found" Error
Ensure `SLACK_TOKEN` environment variable is set:
```bash
echo $SLACK_TOKEN
```

### "Missing scope" Error
Add the required scope in your Slack app's OAuth settings and reinstall the app.

### Can't See Private Channels
The bot must be invited to private channels to access them.

## Links

- [Slack API Documentation](https://api.slack.com/docs)
- [slack-mcp-server](https://github.com/korotovsky/slack-mcp-server)
- [Sabai System](https://sabaisystem.com)
