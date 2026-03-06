# Meeting Search

Search across meeting history by keywords, participants, or topics.

## How it works

This skill combines two tools:

- **`query_granola_meetings`** — Searches meeting content using natural language. Returns answers with inline citation links. This is the primary search engine.
- **`list_meetings`** — Filters meetings by time range. Useful for narrowing scope before searching content.

## Workflow

1. **Parse the user's search intent.** Identify:
   - **Keywords or topics** — What they're looking for (e.g., "budget", "API redesign")
   - **People** — Specific attendees or participants mentioned (e.g., "Sarah", "the Acme team")
   - **Date range** — If they specify a time window (e.g., "last month", "in January")

2. **Execute the search.**

   **If no date range specified:** Call `query_granola_meetings` directly with a well-crafted query. For example, if the user says "find meetings where we discussed the API redesign":
   > Query: "Which meetings discussed the API redesign? List each meeting with what was said about it."

   **If a date range is specified:** First call `list_meetings` with the appropriate `time_range` (or `custom` with `custom_start`/`custom_end`) to get meeting IDs within that window. Then call `query_granola_meetings` with those IDs as `document_ids` to search within that subset.

   **If searching for a person:** Include the person's name in the query. For example:
   > Query: "Which meetings included Sarah or discussed topics involving Sarah?"

3. **Present results** as a scannable list. For each match:
   - Meeting title
   - Date
   - Relevant snippet or context showing why it matched
   - Citation link to the meeting notes

4. **Preserve citation links.** Always include the `[[0]](url)` style citations from `query_granola_meetings` so users can click through to the source.

5. **Handle no results.** If nothing is found:
   - Suggest broadening the search (different keywords, wider date range)
   - Suggest trying `/sabai-granola:ask` for a more conversational query
   - Check if the user might be thinking of a meeting that predates their Granola usage

## Tips for effective queries

The `query_granola_meetings` tool works best with natural language, so craft your queries conversationally rather than as bare keywords. For example:
- Instead of: "budget Acme"
- Prefer: "What was discussed about the budget in meetings with Acme?"

This gives Granola's search more context to work with and returns better results.
