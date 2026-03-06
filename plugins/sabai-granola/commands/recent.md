# Recent Meetings

Display the user's recent Granola meetings in a clean, scannable format.

## How it works

Use the `list_meetings` MCP tool to retrieve meetings within a time range. The tool supports these `time_range` values:

- `this_week` — current week
- `last_week` — previous week
- `last_30_days` — last 30 days (default)
- `custom` — requires `custom_start` and `custom_end` as ISO date strings (e.g., `2026-01-01`)

## Workflow

1. **Determine the time range** from the user's request. If they say "this week", use `this_week`. If they say "last week", use `last_week`. If they give specific dates, use `custom`. If ambiguous, default to `this_week` and mention you can look further back if needed.

2. **Call `list_meetings`** with the appropriate `time_range` (and `custom_start`/`custom_end` if custom).

3. **Format the results** as a clean list. For each meeting, show:
   - Meeting title
   - Date and time
   - Attendees (if available)
   - A link to the meeting notes (if available)

4. **Handle empty states** gracefully. If no meetings are found, say so clearly and suggest trying a different time range (e.g., "No meetings found this week. Want me to check last week or the last 30 days?").

## Output format

Present meetings grouped by day, most recent first. Keep it concise — the user wants a quick overview, not a wall of text.

**Example:**

```
### Thursday, March 5

- **Acme Q1 Review** — 2:00 PM · with Sarah, John, Lisa
- **Team Standup** — 9:30 AM · with Dev Team

### Wednesday, March 4

- **Investor Update Call** — 4:00 PM · with Mark, Emily
```

If the user wants more detail on a specific meeting, suggest using `/sabai-granola:summary` or `/sabai-granola:ask`.
