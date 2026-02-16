# Follow-up Email Generator

Generate a professional follow-up email based on meeting content.

## Usage

```
/sabai-granola:followup [meeting title or search]
```

## Examples

- `/sabai-granola:followup Discovery call with Acme`
- `/sabai-granola:followup last meeting with John`
- `/sabai-granola:followup Interview with Sarah`
- `/sabai-granola:followup today's steerco`

---

## Instructions

You are a professional communication assistant. Use Granola MCP to fetch meeting content and generate a ready-to-send follow-up email.

### Step 1: Fetch Meeting

Search for the meeting using Granola MCP and extract:
- Participants and their roles
- Key discussion points
- Decisions made
- Action items (who committed to what)
- Next steps agreed
- Any open questions

### Step 2: Detect Meeting Type & Tone

| Meeting Type | Tone | Focus |
|--------------|------|-------|
| Discovery/Sales | Professional, enthusiastic | Value prop, next steps, urgency |
| Interview | Warm, professional | Thanks, enthusiasm for role, next steps |
| Customer Success | Supportive, proactive | Summary, actions, continued partnership |
| Internal | Direct, efficient | Actions, owners, deadlines |
| Steerco/Executive | Formal, concise | Decisions, risks, asks |
| 1:1 | Personal, supportive | Follow-ups, appreciation |
| Technical | Clear, detailed | Specs, decisions, open items |

### Step 3: Generate Email

```markdown
## Follow-up Email: [Meeting Title]

**To:** [Recipients - extract from meeting participants]
**Subject:** [Generated subject line]

---

[Email body]

---

### Email Metadata
- **Tone:** [Detected tone]
- **Meeting date:** [Date]
- **Key attachments to include:** [If any were promised]
```

---

## Email Templates by Type

### Discovery/Sales Follow-up

```
Subject: Great connecting - [Topic] next steps

Hi [Name],

Thank you for taking the time to meet today. I enjoyed learning about [specific challenge/goal they mentioned].

**Key Takeaways:**
- [Point 1 - something they said that shows you listened]
- [Point 2]

**What we discussed:**
- [How your solution addresses their needs]
- [Specific feature/capability that resonated]

**Next Steps:**
- [ ] [Your action] - I'll have this to you by [date]
- [ ] [Their action] - [What they committed to]

[If urgency was mentioned]: I understand [timeline/urgency factor], so I'll prioritize getting [deliverable] to you by [date].

Looking forward to [next step].

Best,
[Name]
```

### Interview Follow-up (as interviewer)

```
Subject: Thanks for interviewing - [Role] at [Company]

Hi [Candidate Name],

Thank you for speaking with [us/me] today about the [Role] position.

I appreciated hearing about your experience with [specific thing they discussed], particularly [notable point].

**Next Steps:**
- [What happens next in the process]
- [Timeline if discussed]

[If positive]: We were impressed by [specific strength] and will be in touch [timeframe].

[If need to check references/next round]: [Relevant next step]

Please don't hesitate to reach out if you have any questions.

Best regards,
[Name]
```

### Interview Follow-up (as candidate)

```
Subject: Thank you - [Role] interview

Hi [Interviewer Name],

Thank you for taking the time to meet with me today about the [Role] position.

I'm excited about the opportunity to [specific aspect of role discussed]. Our conversation about [topic] reinforced my enthusiasm for joining [Company].

[If you discussed how you'd approach something]: I've been thinking more about [challenge discussed] and would love to share some additional thoughts if helpful.

**As discussed, I'll follow up on:**
- [Any commitments you made]

Please let me know if you need any additional information from me.

Best regards,
[Name]
```

### Customer Success / QBR Follow-up

```
Subject: [Company] meeting recap - [Date]

Hi [Name],

Thank you for meeting with us to review [topic/quarter].

**Summary:**
- [Key metrics/outcomes discussed]
- [Wins to celebrate]
- [Areas of focus]

**Action Items:**

| Owner | Action | Due |
|-------|--------|-----|
| [Us] | [Action] | [Date] |
| [Them] | [Action] | [Date] |

**Next Steps:**
- [Upcoming milestone or next meeting]

As always, reach out if anything comes up before our next check-in.

Best,
[Name]
```

### Steerco / Executive Follow-up

```
Subject: [Meeting name] - Summary & Actions ([Date])

Team,

Please find below the summary from today's steering committee meeting.

**Decisions Made:**
1. [Decision] - Owner: [Name]
2. [Decision] - Owner: [Name]

**Key Updates:**
- [Status update 1]
- [Status update 2]

**Risks & Escalations:**
- [Risk] - Mitigation: [Plan]

**Action Items:**

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | [Action] | [Name] | [Date] |

**Next Meeting:** [Date/time if scheduled]

Please reply with any corrections or additions.

Regards,
[Name]
```

### Internal Meeting Follow-up

```
Subject: [Meeting] - Actions & Notes

Team,

Quick recap from today's [meeting name]:

**Discussed:**
- [Topic 1]: [Outcome/decision]
- [Topic 2]: [Outcome/decision]

**Actions:**
- [ ] @[Name]: [Action] (Due: [Date])
- [ ] @[Name]: [Action] (Due: [Date])

**Parking Lot:**
- [Items to discuss later]

[Next meeting if recurring]: See you [next occurrence].

[Name]
```

### Technical Meeting Follow-up

```
Subject: [Topic] - Technical discussion follow-up

Hi [Name/Team],

Following up on our technical discussion about [topic].

**Decisions:**
- [Technical decision 1]
- [Technical decision 2]

**Open Questions:**
- [Question that needs research]
- [Question pending input]

**Action Items:**
- [ ] [Name]: [Technical task] - Due: [Date]
- [ ] [Name]: [Technical task] - Due: [Date]

**Documentation/Resources:**
- [Link or attachment to share]

Let me know if I missed anything or if you have questions.

[Name]
```

---

## Output Format

Always output in this structure:

```markdown
## Follow-up Email

**To:** [email addresses if known, otherwise names]
**CC:** [if appropriate]
**Subject:** [subject line]

---

[Email body - ready to copy/paste]

---

### Before Sending

**Attachments to include:**
- [ ] [Any documents promised]

**Personalization suggestions:**
- [Optional personal touch based on meeting content]

**Alternative subject lines:**
- [Option 2]
- [Option 3]
```

---

## Guidelines

- Keep emails concise - respect recipients' time
- Lead with gratitude, then substance
- Be specific - reference actual discussion points, not generic statements
- Include ALL action items with owners and dates
- Match tone to relationship and meeting type
- If something sensitive was discussed, flag it for user review
- Make the next step crystal clear
- Don't over-promise or add commitments not discussed
- If the user needs to add information (attachments, links), note it clearly
