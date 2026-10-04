# Responsive Design

**Do not shrink desktop layouts.** Redefine the information hierarchy for
each viewport.

## Mobile-first

- Author base styles for narrow screens, enhance upward with `min-width`
  media queries (or the project's convention — but be deliberate).
- Define content priority first: at 375px, what must the user still
  accomplish? Everything else can defer, collapse, or move.

## Breakpoint strategy

- Use content-driven breakpoints, not device names. Common working set:
  `640 / 768 / 1024 / 1280` (+ `375` as the test floor).
- Fewer breakpoints is better. Add one only when the layout genuinely
  changes.
- Keep tokens/variables for breakpoints if the framework allows.

## Fluid sizing

- Fluid containers (`max-w-*` + padding) over fixed widths.
- `clamp()` for type and spacing that should breathe; avoid linear
  viewport scaling for text.
- Grids: `auto-fit`/`minmax()` where the pattern is content-driven.

## Responsive typography

- Step down display sizes at small widths; keep body ≥16px on mobile.
- Preserve hierarchy ratios at every size — don't flatten.

## Navigation transformation

- Sidebar → overlay drawer (with focus trap + escape) on narrow screens,
  or switch to bottom nav/bars for 3–5 primary destinations.
- Top nav → hamburger or horizontal scroll tabs; keep the primary action
  visible outside the menu.
- Breadcrumbs may collapse to a back control on mobile.
- See `references/navigation.md`.

## Tables

Options in order of preference:
1. Prioritize columns — hide/defer non-essential ones on narrow screens.
2. Transform rows into stacked label:value lists (definition-list style).
3. Horizontal scroll *inside a clearly scrollable container* with sticky
   first column — indicate scrollability; never let the page scroll
   sideways.
4. Provide an alternative view (cards) for browse-mode data.

Never squeeze columns until text becomes unreadable.

## Forms

- Single column on mobile (multi-column only from tablet up, and only for
  short, related fields).
- Correct input types + `inputmode` for mobile keyboards.
- Actions sticky or full-width at the bottom on mobile.
- Labels above fields on narrow screens; avoid side-by-side label/field
  below ~640px.

## Grids

- Card grids: `1 → 2 → 3/4` by content needs; equal heights with flex/grid
  alignment, not fixed heights.
- Preserve reading order (DOM order = visual order at mobile).

## Sidebars

- Persistent ≥1024; collapsible (icon rail) 768–1024; drawer <768.
- Collapsed state must retain labels via tooltips/aria-label.

## Dialogs & drawers

- Desktop: centered modal (max-width, max-height with internal scroll).
- Mobile: bottom sheet or full-screen dialog; actions reachable without
  scrolling past content; safe-area insets respected.
- Verify focus trap and scroll lock at every size.

## Touch targets

- ≥44×44px interactive area (WCAG 2.2 AA: 24px minimum, 44px recommended).
- Spacing between adjacent targets ≥8px; row actions in tables need
  padding, not tiny icons.
- Hover-only affordances must have tap equivalents.

## Overflow

- Long words/URLs: `break-words` / `overflow-wrap`.
- Horizontal overflow is a bug: check tables, code, pre, charts, badges,
  nav, and grids at 375px.
- Use `min-width: 0` on flex/grid children that contain long content.

## Content priority

For each screen, declare: **essential at 375 / useful at 768 / complete
at 1280**. Then implement to that contract.

## Verification

Test 375×812, 768, 1280×900 at minimum, with real and worst-case content.
See `references/visual-qa.md`.
