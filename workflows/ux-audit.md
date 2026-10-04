# Workflow: UX Audit

```
Map task → information architecture → cognitive load
→ interaction friction → accessibility → errors
→ empty/loading states → recommendations
```

Deliverable: prioritized findings with evidence, not a style critique.

## 1. Map the task
- Primary jobs (`references/design-intelligence.md`): who, what for,
  how often, on what device.
- Write the ideal happy path as steps; note entry points and success.
- Gather evidence, not guesses: analytics/funnel data if available,
  support tickets, session recordings, search logs — or state that
  only heuristic inspection is possible.
- Score against Nielsen's 10 heuristics + Fitts/Hick/Jakob/Miller
  (`references/design-principles.md` § Evidence base) — cite each
  heuristic only where it changes a recommendation.

## 2. Information architecture
`references/information-architecture.md`: Can users find X? Labeling
matches mental models? Navigation depth ≤3? Duplicated paths? Rank items
by frequency vs. prominence.

## 3. Cognitive load
- Count decisions per screen; competing primaries; unlabeled icons;
  jargon; too many simultaneous choices; information not needed for the
  task competing with what is.
- Progressive disclosure: is complexity deferred or dumped?

## 4. Interaction friction
- Steps per task vs. minimum possible; unnecessary confirmations;
  modal chains; repeated data entry; hover-only or hidden actions;
  pagination vs. filter changes losing state; back-button behavior.

## 5. Accessibility (as UX)
Keyboard reachability of core tasks, focus behavior, target sizes,
contrast, error readability — summary here; full detail via
`workflows/accessibility-audit.md`.

## 6. Errors
Inline vs. toast, message quality (identify + fix), input preservation,
recovery paths, whether errors are prevented in the first place
(`references/forms.md`, `references/ux-patterns.md`).

## 7. Empty/loading states
Presence and quality of first-use, no-results, all-clear, error states;
skeletons vs. spinners; optimistic updates and rollback.

## 8. Recommendations
For each finding: **severity (blocking/major/minor) · evidence
(screenshot/step where it fails) · problem (user impact) · recommended
fix (concrete)**. Order by impact × effort. Separate usability defects
from visual preference. Confirm scope before implementing changes.
