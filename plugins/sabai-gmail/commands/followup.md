# /followup Command

Find emails needing follow-up and create responses.

## Usage

```
/followup                           # Detect emails needing follow-up
/followup --detect                  # Same as above
/followup --detect --days 3         # Last 3 days only
/followup [email reference]         # Follow up on specific email
```

## Parameters

- `--detect` - Run follow-up detection algorithm (default if no reference)
- `--days N` - Number of days to scan (default: 7)
- `email reference` - Description of original email or conversation

## Behavior

### Mode 1: Detection (default)

When invoked without a reference or with `--detect`:

1. **Run detection algorithm** using the follow-up-detection skill:
   - Search Gmail for emails in the last N days
   - Filter out newsletters, automated emails, already-replied threads
   - Score each email by urgency

2. **Present selection interface** using the email-selection skill:
   - Display emails as numbered cards with urgency indicators
   - Show: sender, subject, date, days waiting, snippet preview
   - Sort by urgency (default) with option to re-sort

3. **Handle user selection**:
   - Accept number input (1, 2, 3...)
   - Accept natural language ("the one from Sarah", "the budget email")
   - Support sorting: "sort by date", "sort by sender"
   - Support filtering: "show urgent only", "show emails from John"
   - Support dismissal: "dismiss 3", "skip"
   - Support pagination: "more", "next page"

4. **Confirm selection** and fetch full email thread

5. **Proceed to draft** the follow-up email

### Mode 2: Direct Follow-up

When invoked with a specific email reference:

1. If reference provided, use it as context
2. If no reference, ask:
   - What conversation are you following up on?
   - When did you send the original email?
   - How many times have you followed up already?

3. Determine follow-up stage:
   - First follow-up (3-5 days)
   - Second follow-up (1 week later)
   - Final follow-up (2+ weeks)

4. Draft appropriate follow-up using the follow-up-tracking skill:
   - Reference original conversation
   - Keep it brief and friendly
   - Clear call to action

5. Present draft and offer adjustments

6. If Gmail MCP available, offer to:
   - Create draft
   - Send follow-up (with confirmation)
   - Set reminder for next follow-up

## Examples

```
/followup                               # Detect and show selection interface
/followup --days 3                      # Check last 3 days
/followup --sort date                   # Sort by date instead of urgency
/followup on the budget approval        # Direct follow-up on specific email
/followup John about the project        # Follow up with specific person
```

### Selection Interaction Examples

After running `/followup`, you can:

```
> 1                                     # Select email #1
> the one from Sarah                    # Select by sender
> sort by date                          # Re-sort the list
> show urgent only                      # Filter to urgent emails
> dismiss 3                             # Remove email #3 from list
> more                                  # Show next page (if 10+ emails)
> skip                                  # Exit without selecting
```

## Quick Flags

- `--detect` - Run detection (default behavior)
- `--days N` - Scan last N days (default: 7)
- `--sort [urgency|date|sender]` - Initial sort order
- `--first` - First follow-up (friendly reminder)
- `--second` - Second follow-up (more direct)
- `--final` - Final follow-up (closing the loop)
- `--urgent` - Add urgency to the message

## Follow-up Types

| Flag | Tone | Typical Timing |
|------|------|----------------|
| `--first` | Friendly, gentle nudge | 3-5 days |
| `--second` | Direct, still professional | 1 week later |
| `--final` | Closing, offers out | 2+ weeks |
| `--urgent` | Emphasizes time-sensitivity | Any stage |

## Output

Provide:
1. Complete follow-up email draft
2. Suggested timing for next follow-up if needed
3. Option to track response deadline
