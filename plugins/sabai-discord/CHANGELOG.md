# Changelog

All notable changes to this plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-03-05

### Changed
- Replaced WebSocket-based `mcp-discord` with custom REST-only MCP server for Cowork compatibility
- All 21 tools now use `@discordjs/rest` direct HTTP calls instead of discord.js gateway
- Bundle size reduced from 2.3MB to ~940KB
- Startup no longer requires persistent WebSocket connection

### Removed
- `discord_login` tool (token is now validated automatically on startup)
- `discord.js` dependency (replaced with `@discordjs/rest` + `discord-api-types`)

## [1.1.0] - 2026-03-05

### Added
- Bundled MCP server for Claude for Work (Cowork) compatibility
- `mcp/` directory with startup.sh, package.json, and pre-built dist/server.mjs
- Config directory for .env-based token setup

### Changed
- MCP server now uses local bundled `mcp-discord` instead of `npx discord-mcp@latest`
- Plugin type updated to MCP + Skills + Commands

## [1.0.0] - 2026-02-16

### Added
- Initial release
