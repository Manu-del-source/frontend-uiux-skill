# Workflow: UI Redesign

```
Screenshot existing UI → diagnose → prioritize → redesign
→ implement → compare → iterate
```

## 1. Screenshot existing UI
Capture the current state at 375 / 768 / 1280 with real content
(before-baseline). Also map flows that must keep working.

## 2. Diagnose
Against `references/visual-qa.md` + `references/anti-patterns.md`:
- hierarchy, density, typography, color, spacing, consistency
- component/token violations, a11y gaps, responsive breaks
- IA problems (a redesign can't fix a wrong IA — flag it separately)

Write the top problems as sentences: *"Users can't tell X from Y because Z."*

## 3. Prioritize
Rank by user impact: usability defects > a11y blockers > consistency >
polish. Separate **defects** (must fix) from **taste** (optional). Confirm
the direction with the user before major surgery.

## 4. Redesign
- Establish a visual direction paragraph (`references/visual-direction.md`).
- Work system-first: tokens → components → screens
  (`references/design-systems.md`) — not per-screen restyling.
- Keep the product's density decision (`references/design-intelligence.md`); don't
  redesign a POS into a landing page.
- Preserve all functionality, flows, and business logic.

## 5. Implement
Incremental, reviewable changes; reuse existing components; no new
dependencies without need; TypeScript intact.

## 6. Compare
Before/after screenshots per screen at all viewports; walk the checklist;
verify flows still work (keyboard + click-through).

## 7. Iterate
Fix top deltas; re-screenshot; repeat until the diagnosis list is closed.
Run quality gates; report changes, decisions, deltas, and open items.
