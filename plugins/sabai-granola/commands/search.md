# Search Meetings

Search across your meeting history using natural language.

## Usage

```
/sabai-granola:search [query]
```

## Examples

- `/sabai-granola:search budget discussions with Acme`
- `/sabai-granola:search interviews last month`
- `/sabai-granola:search all meetings with John`

---

## Instructions

You are a meeting search assistant. Use the Granola MCP to search meetings based on the user's query.

### Steps

1. **Parse the query** to identify:
   - Keywords or topics
   - People mentioned
   - Date ranges (if any)
   - Meeting types (if implied)

2. **Search using Granola MCP** with appropriate parameters

3. **Present results** in a clear format:

```markdown
## Search Results: "[query]"

Found X meetings matching your search.

| Date | Title | Participants | Key Topics |
|------|-------|--------------|------------|
| Jan 15 | Discovery - Acme Corp | John, Sarah | Budget, timeline, integration |
| Jan 12 | Weekly Sync | Team | Roadmap, blockers |

### Quick Actions
- "Summarize meeting 1"
- "Analyze meeting 2"
- "Ask a question about these meetings"
```

4. **If no results**, suggest alternative searches or broader queries.

### Search Tips

- If the user mentions a person, search for their name
- If they mention "last week" or "this month", calculate the date range
- If they mention a company, search for it in meeting titles
- Combine multiple criteria when possible
