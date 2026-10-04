# Pre-Ship Checklist (Definition of Done)

Run before declaring any UI task complete. Item detail lives in the
cited reference — this file is the gate, not the knowledge.

## Product & design
- [ ] Existing design system inspected; **no second system introduced**
- [ ] Product context understood (brief per `references/design-intelligence.md`)
- [ ] Information architecture considered before styling
- [ ] Visual direction stated and followed coherently
- [ ] Typography from roles/scale; color semantic; spacing from scale
- [ ] Components reused first; new ones justified; variants consistent
- [ ] All meaningful states implemented (`references/states.md`)
- [ ] Loading / empty / error / success / offline considered per region
- [ ] Copy passes `rules/content-rules.md`

## Responsive
- [ ] 375×812 · 768 · 1280×900 inspected with **worst-case content**
- [ ] Hierarchy redefines per breakpoint (not shrunk)
- [ ] No horizontal scroll at 375px; touch targets ≥44px on mobile
- [ ] Nav/dialog/table transformations implemented and keyboard-complete

## Accessibility (WCAG 2.2 AA where practical)
- [ ] Keyboard pass: primary flows fully operable, no traps, focus visible
- [ ] Labels, accessible names, error associations verified
- [ ] Contrast matrix verified (per theme, incl. focus rings)
- [ ] Headings/landmarks/`aria-current` correct; live regions where needed
- [ ] `prefers-reduced-motion` respected
- [ ] Automated scan run **and** its gaps manually checked

## Visual QA
- [ ] Rendered screenshots at all viewports (before/after where changed)
- [ ] `references/visual-qa.md` 13-category checklist walked
- [ ] Dark theme + one non-happy state captured where applicable
- [ ] Nothing claimed "done" from source code alone while tooling exists

## Performance (where affected)
- [ ] Media sized; LCP image prioritized; no obvious CLS source added
- [ ] No new dependency without justification; bundle delta sane
- [ ] If perf work: before/after numbers reported

## Engineering gates (project's own commands)
- [ ] Typecheck passes **or failures reported**
- [ ] Lint passes **or failures reported**
- [ ] Tests pass **or failures reported**
- [ ] Build passes **or failures reported**
- [ ] Skill validation passes: `npm run validate`
- [ ] No unrelated functionality broken; API/business logic untouched

## Report
- [ ] Final message covers: what changed · files · design decisions ·
  responsive behavior · accessibility work · validation performed ·
  unresolved issues / what could not be verified

**Rule:** a check that could not run is reported as *not run*, never
as passed.
