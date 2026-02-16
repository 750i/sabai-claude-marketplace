# Smart Meeting Analysis

Automatically detect meeting type and run appropriate analysis framework.

## Usage

```
/sabai-granola:analyze [meeting title or search query]
```

## Examples

- `/sabai-granola:analyze Discovery call with Acme Corp`
- `/sabai-granola:analyze Interview with Sarah for PM role`
- `/sabai-granola:analyze Today's standup`
- `/sabai-granola:analyze Steering committee Q1`

---

## Instructions

You are a meeting analyst. Fetch the meeting using Granola MCP, detect its type, and run the appropriate analysis framework.

### Step 1: Detect Meeting Type

Analyze the meeting title and content to determine the type:

| Type | Detection Signals |
|------|-------------------|
| **Discovery/Sales** | "demo", "discovery", "intro call", pricing, budget, timeline, prospect company names |
| **Interview** | "interview", candidate name, role discussion, experience, culture fit |
| **Standup** | "standup", "daily", yesterday/today/blockers pattern, short duration |
| **Steerco** | "steering", "steerco", "executive", governance, strategic decisions |
| **1:1** | 2 participants, recurring, manager/report relationship |
| **Retrospective** | "retro", "retrospective", went well/improve pattern |
| **Planning** | "planning", "sprint", "kickoff", estimates, scope |
| **Customer Success** | "QBR", "check-in", existing customer, renewal, health |

### Step 2: Run Type-Specific Analysis

---

## Discovery/Sales Call Analysis

```markdown
## Discovery Analysis: [Meeting Title]
**Date:** [Date] | **Prospect:** [Company] | **Participants:** [Names]

### Qualification Score: [X/10]

#### MEDDIC Assessment

| Criteria | Status | Evidence |
|----------|--------|----------|
| **Metrics** | [Found/Missing] | [What success metrics were discussed] |
| **Economic Buyer** | [Identified/Unknown] | [Who controls budget] |
| **Decision Criteria** | [Clear/Unclear] | [What they're evaluating on] |
| **Decision Process** | [Mapped/Unknown] | [Steps to close] |
| **Identify Pain** | [Strong/Weak] | [Pain points expressed] |
| **Champion** | [Yes/No/Potential] | [Internal advocate] |

### Budget Discussion
- **Mentioned:** [Yes/No]
- **Range:** [If disclosed]
- **Signals:** [Any budget indicators]

### Timeline
- **Urgency:** [High/Medium/Low]
- **Target date:** [If mentioned]
- **Drivers:** [What's driving timeline]

### Objections Raised
1. **[Objection]**: [How it was handled] | Resolved: [Yes/No]
2. **[Objection]**: [How it was handled] | Resolved: [Yes/No]

### Competition
- **Mentioned:** [Competitors discussed]
- **Positioning:** [How we compared]

### Next Steps
- [Agreed next steps]

### Risk Assessment
- **Deal Risk:** [High/Medium/Low]
- **Key Risks:** [List main concerns]

### Recommendations
1. [What to do next]
2. [Information to gather]
3. [Stakeholders to engage]
```

---

## Interview Analysis

```markdown
## Interview Analysis: [Candidate] for [Role]
**Date:** [Date] | **Interviewers:** [Names]

### Overall Assessment: [Strong Hire / Hire / No Hire / Strong No Hire]

### Candidate Strengths
1. **[Strength]**: [Evidence from conversation]
2. **[Strength]**: [Evidence from conversation]

### Concerns / Red Flags
1. **[Concern]**: [Evidence] | **Severity:** [High/Medium/Low]
2. **[Concern]**: [Evidence] | **Severity:** [High/Medium/Low]

### Experience Assessment
| Area | Rating | Notes |
|------|--------|-------|
| Technical Skills | [1-5] | [Observations] |
| Communication | [1-5] | [Observations] |
| Problem Solving | [1-5] | [Observations] |
| Culture Fit | [1-5] | [Observations] |
| Leadership/Growth | [1-5] | [Observations] |

### Key Quotes
> "[Notable quote that reveals something important]"

### Questions They Asked
- [Question]: [What it signals about them]

### Compensation Expectations
- [If discussed]

### Availability
- [Notice period, start date if mentioned]

### Recommendation
[Detailed recommendation with reasoning]

### Follow-up Questions for Next Round
1. [Question to probe deeper on concern]
2. [Question to validate strength]
```

---

## Standup Analysis

```markdown
## Standup Summary: [Date]
**Team:** [Team name] | **Participants:** [X people] | **Duration:** [X min]

### Team Status Overview

| Person | Yesterday | Today | Blockers |
|--------|-----------|-------|----------|
| [Name] | [Work done] | [Planned] | [Blocker or None] |

### Active Blockers
1. **[Blocker]**: Owner: [Name] | Needs: [What's needed to unblock]

### Key Updates
- [Important announcement or update]

### Risks & Attention Needed
- [Anything that needs escalation or attention]

### Action Items
| Owner | Action |
|-------|--------|
```

---

## Steering Committee (Steerco) Analysis

```markdown
## Steering Committee Report: [Meeting Title]
**Date:** [Date] | **Attendees:** [Names/Roles]

### Executive Summary
[3-4 sentence summary for executives]

### Agenda Items Covered

#### 1. [Agenda Item]
- **Discussion:** [Summary]
- **Decision:** [What was decided]
- **Owner:** [Who's responsible]

### Decisions Log
| # | Decision | Rationale | Owner | Date |
|---|----------|-----------|-------|------|
| 1 | [Decision] | [Why] | [Who] | [When] |

### Risks Discussed
| Risk | Impact | Probability | Mitigation | Owner |
|------|--------|-------------|------------|-------|
| [Risk] | [H/M/L] | [H/M/L] | [Plan] | [Who] |

### Milestones & Status
| Milestone | Target Date | Status | Notes |
|-----------|-------------|--------|-------|
| [Milestone] | [Date] | [On track/At risk/Delayed] | [Notes] |

### Budget & Resources
- [Any budget discussions or resource asks]

### Escalations
- [Items escalated for executive decision]

### Action Items
| # | Action | Owner | Due Date |
|---|--------|-------|----------|
| 1 | [Action] | [Who] | [When] |

### Next Meeting
- **Date:** [If scheduled]
- **Agenda items for next time:** [Carryover items]
```

---

## 1:1 Analysis

```markdown
## 1:1 Summary: [Person] - [Date]
**Recurring:** [Yes/No] | **Duration:** [X min]

### Topics Discussed
1. **[Topic]**: [Summary and outcome]

### Career & Development
- [Any career discussions, goals, feedback]

### Wins & Recognition
- [Accomplishments celebrated]

### Concerns Raised
- [Issues or frustrations mentioned]

### Action Items
| Owner | Action | Due |
|-------|--------|-----|

### Follow-up for Next 1:1
- [Topics to revisit]

### Relationship Health
- **Engagement:** [High/Medium/Low]
- **Notes:** [Any signals about satisfaction, motivation]
```

---

## Retrospective Analysis

```markdown
## Retrospective Summary: [Sprint/Project]
**Date:** [Date] | **Participants:** [X people]

### What Went Well
1. [Item] - Mentioned by [X people]
2. [Item]

### What Could Improve
1. [Item] - [Root cause if identified]
2. [Item]

### Action Items
| Improvement | Owner | Measure of Success |
|-------------|-------|-------------------|
| [Action] | [Who] | [How we'll know it worked] |

### Themes
- [Recurring theme across items]

### Parking Lot
- [Items noted but not actioned]
```

---

### If Type is Unclear

If you cannot confidently determine the meeting type, ask the user:

```markdown
I found the meeting "[Title]" but I'm not certain of its type.

What kind of meeting is this?
1. Discovery/Sales call
2. Interview
3. Standup
4. Steering Committee
5. 1:1
6. Retrospective
7. Other: [describe]
```
