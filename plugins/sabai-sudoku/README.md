# Sabai Sudoku

Play interactive Sudoku puzzles directly in Claude with a visual game board.

## Features

- **Interactive UI**: Visual 9x9 Sudoku grid rendered as an MCP App
- **Multiple difficulties**: Easy, Medium, Hard, Expert
- **Game tools**:
  - Number input via keyboard or clickable number pad
  - Get hints for the next move
  - Check board for errors
  - Track moves and remaining cells
- **Keyboard support**: Type 1-9 to enter numbers, Backspace/Delete to clear

## Installation

The plugin is automatically available when installed in Cowork.

### Manual Setup

```bash
cd plugins/sabai-sudoku/mcp
npm install
npm run build
```

## Usage

Simply ask Claude to play Sudoku:

- "Let's play Sudoku"
- "Start a new Sudoku game on hard difficulty"
- "I want to play an easy Sudoku puzzle"

## MCP Tools

| Tool | Description |
|------|-------------|
| `play_sudoku` | Start a new game or resume an existing one |
| `sudoku_move` | Place a number on the board (UI-only) |
| `sudoku_hint` | Get a hint for the next move (UI-only) |
| `sudoku_check` | Check board for errors (UI-only) |

## How It Works

This plugin uses the MCP Apps SDK to create an interactive UI that renders inside Claude:

1. **Server** (`mcp/server.ts`): Handles Sudoku logic, puzzle generation, and game state
2. **UI** (`mcp/src/mcp-app.tsx`): React-based interactive Sudoku board
3. **Bundled**: Uses Vite with `vite-plugin-singlefile` to bundle everything into a single HTML file

## Development

```bash
cd plugins/sabai-sudoku/mcp

# Install dependencies
npm install

# Development mode (watch + serve)
npm run dev

# Build for production
npm run build

# Run server
npm run serve
```

## Architecture

```
sabai-sudoku/
├── .claude-plugin/
│   └── plugin.json       # Plugin manifest
├── mcp/
│   ├── server.ts         # MCP server with sudoku tools
│   ├── main.ts           # Server entry point
│   ├── mcp-app.html      # HTML entry for the UI
│   ├── src/
│   │   ├── mcp-app.tsx   # React Sudoku app
│   │   ├── mcp-app.module.css
│   │   └── global.css
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
└── README.md
```
