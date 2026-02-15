# Risk Assessment Skill

Identify, assess, and mitigate risks in product initiatives.

## Risk Assessment Template

```markdown
# Risk Assessment: [Project/Feature Name]

**Date:** [Date]
**Assessor:** [Name]
**Review Date:** [Date for next review]

## Executive Summary
Brief overview of risk profile and key concerns.

## Risk Register

| ID | Risk | Category | Probability | Impact | Score | Mitigation | Owner |
|----|------|----------|-------------|--------|-------|------------|-------|
| R1 | Description | Tech/Business/Resource | H/M/L | H/M/L | 1-9 | Plan | Name |

## Detailed Risk Analysis

### R1: [Risk Name]
**Description:** What could go wrong?
**Trigger:** What would cause this risk to materialize?
**Probability:** High/Medium/Low (and why)
**Impact:** High/Medium/Low (and why)
**Mitigation Strategy:**
- Preventive action 1
- Preventive action 2
**Contingency Plan:** What to do if it happens
**Owner:** Who is responsible
**Status:** Open/Mitigating/Closed

## Risk Matrix

```
         │ Low Impact │ Med Impact │ High Impact
─────────┼────────────┼────────────┼────────────
High Prob│ Medium (3) │ High (6)   │ Critical (9)
Med Prob │ Low (2)    │ Medium (4) │ High (6)
Low Prob │ Low (1)    │ Low (2)    │ Medium (3)
```

## Action Items
- [ ] Action 1 - Owner - Due date
- [ ] Action 2 - Owner - Due date
```

## Risk Categories

### Technical Risks
- Architecture scalability
- Integration complexity
- Technology maturity
- Security vulnerabilities
- Performance issues
- Technical debt

### Business Risks
- Market timing
- Competitive pressure
- Regulatory changes
- Customer adoption
- Revenue impact
- Brand reputation

### Resource Risks
- Team capacity
- Key person dependency
- Skill gaps
- Budget constraints
- Vendor reliability
- Timeline pressure

### External Risks
- Third-party dependencies
- Economic conditions
- Political/legal changes
- Natural disasters
- Pandemic impact

## Risk Scoring

**Probability:**
- High (3): >70% likely
- Medium (2): 30-70% likely
- Low (1): <30% likely

**Impact:**
- High (3): Project failure, major revenue loss, critical outage
- Medium (2): Significant delay, moderate cost, degraded experience
- Low (1): Minor delay, small cost, minimal user impact

**Risk Score = Probability × Impact**
- 6-9: Critical - Immediate action required
- 3-5: High - Active monitoring and mitigation
- 1-2: Low - Accept or monitor

## Common Mitigations

| Risk Type | Mitigation Strategies |
|-----------|----------------------|
| Technical complexity | Spike/POC first, phased rollout |
| Key person dependency | Documentation, cross-training |
| Third-party reliance | Fallback options, SLAs |
| Timeline pressure | Scope reduction, MVP approach |
| Adoption risk | Beta testing, feature flags |
| Security | Security review, penetration testing |

## Review Cadence

- **High-risk projects:** Weekly
- **Medium-risk:** Bi-weekly
- **Low-risk:** Monthly
- **After major milestones:** Always
