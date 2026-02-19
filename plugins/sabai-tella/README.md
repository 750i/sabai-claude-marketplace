# Sabai Tella

A Claude plugin for managing Tella videos and playlists, planning video content, and creating scripts for async video communication.

## Features

- **Video Management**: List, update, duplicate, and organize your Tella videos
- **Playlist Operations**: Create and manage playlists with custom settings
- **Video Planning**: Structure your video content with clear talking points
- **Script Generation**: Create scripts and outlines for your recordings
- **Clip Creation**: Extract clips from existing videos with trimming

## MCP Tools

This plugin integrates with Tella's official MCP server, providing these tools:

### Video Management
- `list_videos` - Retrieve workspace videos with pagination and playlist filtering
- `get_video` - Fetch video details with transcript, chapters, thumbnails
- `update_video` - Modify metadata, playback settings, captions, access levels
- `delete_video` - Move videos to trash
- `duplicate_video` - Copy videos with optional trimming or chapter extraction

### Playlist Operations
- `list_playlists` - Browse playlists filtered by visibility type
- `create_playlist` - Generate new playlists with customizable emoji and access controls
- `get_playlist` - Access detailed playlist information
- `update_playlist` - Edit metadata and security settings
- `delete_playlist` - Remove playlists
- `add_video_to_playlist` / `remove_video_from_playlist` - Manage playlist contents

## Commands

### `/tella`

Plan and prepare Tella video content. This command helps you:

- Define the purpose and audience for your video
- Create a structured outline or script
- Prepare talking points and key messages
- Suggest visual aids or screen recordings to include

## Installation

### Claude Code

```bash
claude mcp add --transport http --scope user tella https://api.tella.com/mcp
```

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "tella": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://api.tella.com/mcp"]
    }
  }
}
```

### Authentication

The Tella MCP server uses OAuth 2.1 authentication. On first use, you'll be prompted to authenticate with your Tella account.

**Troubleshooting**: If you have authentication issues, clear the MCP auth cache:
```bash
rm -rf ~/.mcp-auth
```

## Usage Examples

### Managing Videos

```
List my recent Tella videos
```

```
Get the transcript for my latest video
```

```
Make my onboarding video public and enable downloads
```

### Creating Clips

```
Create a 30-second clip from my webinar starting at 5 minutes
```

```
Duplicate my demo video and trim to just the first chapter
```

### Playlist Management

```
Create a new playlist called "Product Tutorials" with a 📚 emoji
```

```
Add my latest video to the onboarding playlist
```

### Content Planning

```
/tella Create a product demo video for our new feature
```

```
/tella Help me prepare a weekly team update video
```

## About Tella

[Tella](https://tella.tv) is a video recording and sharing platform for creating professional async video content, screen recordings, and video messages.

- [Tella MCP Documentation](https://docs.tella.com/mcp-server)

---

Built by [Sabai System](https://sabaisystem.com)
