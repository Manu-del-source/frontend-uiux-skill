# Visual Rules (Typography · Color · Spacing · Layout · Hierarchy)

Enforcement sheet for review mode. Knowledge:
`references/typography.md`, `color-system.md`, `spacing-layout.md`,
`visual-direction.md`, `design-principles.md`.

## Typography
- **V1** Type comes from scale tokens/roles — no raw ad-hoc sizes in
  components.
- **V2** One `h1`; heading levels descend without skipping; headings
  visibly outrank body (size/weight, not color alone).
- **V3** Body 16px+ on mobile; line-height ≥1.4 for any multi-line
  text; measure 45–75ch for prose.
- **V4** Tables/KPIs use tabular numerals; number/currency formats
  consistent.
- **V5** No text overflow/clipping at 375px with the longest real
  content; ALL CAPS limited to short labels with tracking.

## Color
- **V6** Semantic tokens only — zero raw hex in components (grep proves
  it); hover/active variants included in contrast verification.
- **V7** One primary action color per view region; status colors always
  paired with icon/text.
- **V8** Focus ring token exists, distinct, ≥3:1, visible on every
  theme.
- **V9** Dark theme (if present): every pair re-verified; surfaces
  lighten with elevation; no component-level theme forks.
- **V10** Not monochrome by default, not rainbow by default — palette
  matches the stated visual direction.

## Spacing & layout
- **V11** All spacing from the scale; no arbitrary `p-[Npx]` without a
  documented exception.
- **V12** Related items closer than unrelated items (grouping reads
  correctly without borders).
- **V13** Same-role containers share padding/radius/border/elevation;
  one radius scale, one elevation scale project-wide.
- **V14** Edges align to the grid; no accidental ragged baselines;
  icons optically centered.
- **V15** Section rhythm consistent across screens of the same class.

## Hierarchy & direction
- **V16** Each screen has one focal point and exactly one primary
  action per region; secondary content visually recedes.
- **V17** Visual direction is stated and followed — type, color,
  surfaces, motion all serve one sentence; no screen belongs to a
  different product.
- **V18** Decoration must earn its place: no gradient/glass/blob/
  badge/icon soup unless the direction justifies it
  (`references/anti-patterns.md`).

## Gate
- [ ] Grep: no raw hex/arbitrary spacing in changed files
- [ ] Contrast matrix verified
- [ ] Screenshot compared against direction statement
