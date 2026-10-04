# Workflow: Existing Interface

```
Inspect existing system → map screens → identify problems
→ preserve functionality → improve tokens/components first
→ implement → visual QA
```

**Golden rule: inspect → plan → change → validate. Never blindly rewrite.**

## 1. Inspect the existing system
- Styling system, tokens, component library, fonts, icons, conventions
- Which screens share which components/patterns
- How the feature is used today (business logic you must not touch)

## 2. Map screens
List every affected screen/route and its variants (states, breakpoints,
roles). Confirm scope with the user if it's ambiguous.

## 3. Identify problems
Against `references/visual-qa.md` + `references/anti-patterns.md`: hierarchy issues,
inconsistent components, token violations, a11y gaps, responsive breaks.
Rank by user impact; separate defects from taste.

## 4. Preserve functionality
- Enumerate existing behavior (flows, API calls, validation, analytics)
  that must survive unchanged.
- Separate design changes from unrelated refactors — no drive-by
  rewrites, no business-logic edits in a visual task.

## 5. Improve tokens/components first
Fix at the system level: consolidate tokens, unify variants, extract
repeated patterns. Screen-by-screen restyling without system fixes
guarantees new inconsistency.

## 6. Implement
Smallest coherent changes; reuse; project conventions. Keep diffs
reviewable — prefer several focused passes over one giant diff.

## 7. Visual QA
Before/after screenshots at 375/768/1280, full checklist, quality gates
(typecheck/lint/tests/build), keyboard + a11y pass. Final gate:
`checklists/pre-ship.md`. Report what changed, why, and anything not
verified.
