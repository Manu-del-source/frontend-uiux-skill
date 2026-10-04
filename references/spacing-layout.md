# Spacing & Layout

Spacing is a system. Consistent rhythm is the cheapest quality upgrade
available.

## Spacing scale

Use a tokenized scale (4px base is standard):

```
0 · 1(4) · 2(8) · 3(12) · 4(16) · 5(20) · 6(24) · 8(32) · 10(40) · 12(48) · 16(64) · 20(80) · 24(96)
```

Rules:
- Compose from the scale; **arbitrary values (`p-[13px]`) are a smell** —
  allow only for genuinely irregular cases (optical alignment, known
  third-party constraints) and leave a comment.
- One scale per project — don't invent a second in a feature branch.
- Dense products use the low end consistently; spacious products use the
  high end consistently.

## Container widths

- Content max-widths by role: prose ~65–72ch, marketing sections
  ~1120–1280px, app content fluid with padding.
- Full-bleed only for deliberate section breaks or data-dense tables.
- Center containers; keep gutters consistent (16/24/32 by breakpoint).

## Grid

- 12-column for marketing/complex layouts; simpler fractional grids
  (2/3/4-up) inside app content.
- One dominant grid per page; nested grids must align to parent edges.
- Define column gaps from the spacing scale.

## Flexbox

- Flex for one-dimensional runs (toolbars, nav, button groups, rows).
- Use `gap`, not margin hacks.
- `justify-between` for spread rows; avoid accidental stretching
  (`align-items` is not optional).
- Allow wrapping (`flex-wrap`) or define overflow behavior for narrow
  viewports — every toolbar must survive 375px.

## Alignment

- Align to a visible baseline/grid; ragged left edges inside one card
  read as bugs.
- Optical alignment: icons and avatars may need 1px nudges; do it, but
  systematically.
- Table numbers right-align; text left-align; labels consistent.

## Whitespace & rhythm

- Whitespace groups related items (proximity) and separates unrelated
  ones. Related things are closer than unrelated things — always.
- Vertical rhythm: section spacing > block spacing > element spacing >
  intra-element spacing (e.g. 96 / 32 / 16 / 8).
- Repeat intervals so screens feel like one system.

## Section spacing

- Page sections: consistent vertical gaps (large, from scale).
- Card internals: consistent padding across all cards of the same role.
- Don't vary spacing to "balance" one screen; fix the layout instead.

## Content width

Match measure to task: reading = narrow, scanning = wide, data tables =
near full width with sticky headers where long.

## Density

Density is a design decision from `references/design-intelligence.md`:

- **Compact**: 4–8px control gaps, 12px padding, 12–13px labels — POS,
  admin tables, analytics.
- **Comfortable**: 8–16px gaps, 16px padding, 14px labels — SaaS, forms.
- **Spacious**: 16–32px gaps, 24px+ padding — marketing, onboarding.

Offer density modes only if the product truly serves mixed users; otherwise
pick one and be consistent.

## Responsive composition

- Layouts reflow by priority (see `references/responsive-design.md`), not by scaling.
- Every grid/flex container needs an explicit narrow-viewport behavior:
  stack, scroll, collapse, or prioritize.
- Test with worst-case content, not averages.

## Tokenized spacing

Expose spacing through theme tokens (`--space-*`, Tailwind scale) so
density changes are one-line edits. Hardcoded repeated values violate the
token rule in `references/design-systems.md`.
