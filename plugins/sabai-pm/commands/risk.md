# /risk - Risk Assessment

Perform risk assessment for a project or feature.

## Usage

```
/risk [project-name|ticket-id]
```

## What It Does

1. Analyzes project/feature scope
2. Identifies potential risks across categories
3. Scores probability and impact
4. Suggests mitigations

## Output Format

```markdown
# Risk Assessment: [Project Name]

**Date:** [Date]
**Assessor:** PM
**Next Review:** [Date + 2 weeks]

## Executive Summary
Brief overview of overall risk level and key concerns.

## Risk Matrix

```
         │ Low Impact │ Med Impact │ High Impact
─────────┼────────────┼────────────┼────────────
High Prob│     -      │    R3      │  R1, R2
Med Prob │     -      │    R4      │     -
Low Prob │    R6      │    R5      │     -
```

## Risk Register

| ID | Risk | Category | Prob | Impact | Score | Owner |
|----|------|----------|------|--------|-------|-------|
| R1 | Timeline slip | Resource | H | H | 9 | PM |
| R2 | Tech complexity | Technical | H | H | 9 | Tech Lead |
| R3 | Scope creep | Business | H | M | 6 | PM |
| R4 | Integration issues | Technical | M | M | 4 | Dev |
| R5 | User adoption | Business | L | M | 2 | PM |
| R6 | Minor bugs | Technical | L | L | 1 | QA |

## Detailed Analysis

### R1: Timeline Slip
**Description:** Project may not meet target date
**Probability:** High - Dependencies on external team
**Impact:** High - Committed to stakeholders
**Mitigation:**
- Weekly sync with external team
- Identify parallel workstreams
- Prepare scope reduction options
**Contingency:** Push launch by 2 weeks, communicate early
**Status:** Active monitoring

### R2: Technical Complexity
**Description:** New architecture patterns untested at scale
**Probability:** High - First time implementing
**Impact:** High - Core feature
**Mitigation:**
- Spike in week 1
- Load testing before launch
- Feature flag for gradual rollout
**Contingency:** Fall back to simpler implementation
**Status:** Spike scheduled

## Action Items
- [ ] Schedule external team sync - PM - [Date]
- [ ] Complete architecture spike - Dev - [Date]
- [ ] Set up monitoring dashboards - DevOps - [Date]

## Review Schedule
- Next review: [Date]
- Stakeholder update: [Date]
```

## Risk Categories

| Category | Examples |
|----------|----------|
| **Technical** | Complexity, scalability, integration |
| **Resource** | Capacity, skills, availability |
| **Business** | Market, competition, adoption |
| **External** | Dependencies, vendors, regulations |
| **Timeline** | Deadlines, dependencies |

## Risk Scoring

**Probability × Impact = Risk Score**

| Score | Level | Response |
|-------|-------|----------|
| 7-9 | Critical | Immediate action required |
| 4-6 | High | Active mitigation needed |
| 2-3 | Medium | Monitor closely |
| 1 | Low | Accept and monitor |

## Linear Integration

- Create risk tracking issues with `risk` label
- Link risks to relevant project tickets
- Use comments for risk updates

## Tips

- Review risks at sprint boundaries
- Update probabilities as work progresses
- Celebrate mitigated risks
- Learn from realized risks (retros)
