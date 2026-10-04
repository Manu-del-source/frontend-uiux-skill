# Navigation

Navigation should reflect **information architecture** (see
`references/information-architecture.md`), not visual preference. If you can't explain
why an item is where it is, the IA is wrong — fix that first.

## Principles

- Primary nav = the 4–8 things users do most, in task order.
- Current location is always visible (`aria-current="page"`, active style
  that isn't color-only).
- Every nav item leads somewhere real; dead links erode trust.
- Max 2 levels visible at once; deeper structures get breadcrumbs or
  drill-down, not mega-nesting.
- The same destination must have one primary entry point (duplicate
  navigation is an anti-pattern).

## Top navigation

- Best for: shallow hierarchies, marketing, small apps, mobile-friendly.
- Anatomy: logo/home, primary links, utility (search, notifications,
  account), optional CTA.
- Sticky only if it helps (long pages); add scroll state (border/shadow)
  so content doesn't blend underneath.
- Overflow at narrow widths → deliberate collapse plan (see Mobile).
- Dropdowns: keyboard operable, close on Escape/outside click, no
  hover-only traps for touch users.

## Sidebar

- Best for: desktop-primary apps with deep sections (admin, dashboards,
  POS back-office).
- Anatomy: section labels, items with icons+labels, collapsible groups,
  footer utilities; persistent active state.
- Widths: full ~240–280px; icon rail ~64–72px (labels via tooltip +
  `aria-label`); remember user's collapse preference.
- Collapsed rail must remain fully keyboard navigable.
- On narrow screens → drawer overlay (focus trap, Escape, scroll lock)
  or bottom navigation.

## Bottom navigation

- Best for: mobile-first apps with 3–5 core destinations.
- Labels always visible (icons alone fail); badge counts with accessible
  names; safe-area inset; ≥44px targets.
- Never add a hamburger *and* bottom nav for the same destinations.

## Breadcrumbs

- For hierarchical content ≥3 levels deep: site › section › page.
- Reflect the real hierarchy; last crumb = current page (not a link).
- Mobile: collapse to back affordance or abbreviated trail.

## Tabs

- Sibling views within one context (profile tabs, report views).
- Preserve state when switching; keep URL in sync (query param) so
  refresh/share works.
- See `references/components.md` § Tabs for semantics.

## Command menus (⌘K)

- For expert speed in dense products: navigation, actions, search.
- Discoverable (visible hint), keyboard-first, fuzzy search over the same
  IA as visible nav — never a hidden-only feature.
- Always keep visible nav as the non-keyboard path.

## Contextual navigation

- Related-object links ("View customer", "Open order"), in-page anchor
  tabs, prev/next for sequential records.
- Place next to the content it refers to; don't inflate global nav with
  contextual entries.

## Mobile navigation

- Decide by IA: 3–5 destinations → bottom nav; more → hamburger/drawer;
  content-first sites → top links that scroll/wrap; tab sets → scrollable
  tab strip with visible overflow cue.
- Drawer requirements: labeled toggle (`aria-expanded`,
  `aria-controls`), focus moves in, Escape closes, focus returns, scroll
  locked, backdrop click closes.
- Primary action (e.g. "Checkout", "New") must stay outside the menu.

## Responsive transformation map

| Desktop | ≤768px |
|---|---|
| Sidebar | drawer / icon rail / bottom nav |
| Mega menu | accordion in drawer |
| Horizontal tabs | scrollable strip |
| Breadcrumbs | back button / trail |
| Icon+label nav | label-first bottom nav |

## Anti-patterns

Duplicate nav entries, three-level nesting, hover-only menus on touch,
inconsistent active styles, hamburger containing the only path to core
tasks, dead/placeholder items, non-sticky nav under long scrolling content
with no way back, tabs that don't update the URL.
