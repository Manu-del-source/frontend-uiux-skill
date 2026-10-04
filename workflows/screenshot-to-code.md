# Workflow: Screenshot to Code

```
Inspect screenshot → identify layout → infer hierarchy → identify
components → implement → render → compare → correct
```

## 1. Inspect the screenshot
Look at the whole first, then regions. Note viewport hints (device frame,
density), and everything genuinely visible: structure, spacing rhythm,
type sizes, colors, states shown, imagery.

**Do not pretend to know details that are not visible** — exact hex
values, off-screen content, hover/empty states, or behavior. Estimate,
implement best-effort, then flag assumptions for the user.

## 2. Identify layout
Grid/flex structure, container widths, alignment, section order,
sidebar/nav placement, columns, gutters. Sketch the box model in notes.

## 3. Infer hierarchy
What's primary/secondary/tertiary; what the main action is; reading
order. Apply `references/information-architecture.md` sanity check.

## 4. Identify components
Map regions to existing project components first (reuse!), then to
standard anatomy from `references/components.md`. Note which states are
visible vs. still to design (hover/focus/loading/empty are usually
absent — design them anyway).

## 5. Implement
- Reuse tokens/components; derive semantic tokens from sampled colors.
- Mobile-first responsive behavior for every region — a screenshot shows
  one width; you still must define the others.
- Full state set, accessibility (SKILL.md § 10, `references/accessibility.md`).

## 6. Render
Run the app; screenshot at the screenshot's viewport + 375/768/1280.

## 7. Compare
Side-by-side (before/after) per region: layout, spacing, type scale,
color, alignment, imagery. List concrete deltas.

## 8. Correct
Fix the largest deltas first; re-render; re-compare. Iterate until
differences are negligible or explicitly accepted.

## 9. Report
What matches, what's approximated (invisible details), assumptions made,
responsive/a11y decisions, validation performed.
