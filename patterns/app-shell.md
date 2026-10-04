# Pattern: App Shell & Page Headers

Shell-level pattern: the frame every authenticated/marketing page sits
in. Item-level nav: `references/navigation.md`. Layout:
`references/spacing-layout.md`.

## Purpose
One consistent frame so users always know *where they are*, *what the
page is*, and *what they can do* — without the shell competing with
content.

## Anatomy — app shell
1. **Global header**: brand/home, primary product switcher or search
   (⌘K affordance), utility cluster (notifications, help, account
   avatar menu). Height tokenized (56–64px desktop, 52–56 mobile).
2. **Side nav** (if deep IA): persistent ≥1024, rail 768–1024,
   drawer <768 (`references/navigation.md` responsive map).
3. **Page header**: `h1` + optional subtitle/breadcrumb + page-level
   primary action + contextual tabs. One per page, top of content.
4. **Content container**: max-width per content class, gutters from
   scale; page-level banners (offline, degraded, announcement) slot
   above content, below header.
5. **Sticky behaviors**: header may gain border/shadow on scroll;
   in-page toolbars (filter bars, bulk actions) stick below the page
   header — **one sticky layer per edge**, stacked heights accounted
   for (anchor scroll offset = sticky stack height).

## Anatomy — marketing shell
Header: logo, nav (≤6 primary items), CTA; may hide on scroll-down /
reveal on scroll-up; mega-menu only for genuine multi-level IA.
Footer: sitemap-grade links, legal, contact — not a junk drawer.
Marketing sections follow `references/design-intelligence.md` density.

## When to use / NOT to use
Use: any product with repeat navigation. Do NOT: give POS/immersive
tools a persistent marketing header; nest shell-in-shell (app shell
wrapping an admin shell that wraps a page shell); duplicate primary
nav in header *and* sidebar (anti-pattern).

## States
header default/scrolled · nav collapsed/expanded (persisted
preference) · drawer open (focus trapped, Escape closes, scroll
locked) · active route (`aria-current` + non-color cue) · notification
badge (with accessible count) · offline banner · maintenance banner ·
command palette open · mobile menu open (primary CTA stays outside
the menu) · empty page header action set (no primary action → omit,
don't disable a phantom button).

## Responsive
- ≥1280: full frame; side nav expanded.
- 1024–1279: side nav may collapse to rail (labels via tooltip +
  `aria-label`).
- 768–1023: rail or drawer; page header actions wrap below title.
- ≤767: hamburger/bottom nav; `h1` may shrink one scale step but stays
  first; page actions stack (primary full-width where it's the page's
  job); breadcrumbs collapse to back control.

## Accessibility
- Landmarks: `header`/`nav`(labelled)/`main`/`footer`; **one** `main`;
  skip link "Skip to main content" first in tab order.
- Nav lists marked up as lists with links; current route
  `aria-current="page"`; expand/collapse toggles expose
  `aria-expanded` + `aria-controls`.
- Drawer/dialog nav: focus moved in, trapped, returned to trigger;
  Escape closes; background inert/scroll-locked.
- Avatar menus: `menu` pattern complete (arrows, Escape, type-ahead).
- Heading order starts at `h1` in content; sticky layers don't obscure
  focused elements (scroll-padding).

## Interaction
⌘K/Ctrl-K opens command palette where it exists (hint visible in
search field); nav state preserved across routes (no full remount
flicker); unsaved-work guard when navigating away; browser back/forward
and deep links restore exact shell + tab state (URL is source of
truth).

## Implementation notes
Shell components are layout-only: no data fetching in the frame
beyond what's needed to render it (session, unread count) — heavy
queries belong to pages. One shell component reused by all routes
(layout.tsx / root layout), not per-page copies. Header background
must satisfy contrast against content scrolling beneath it (solid or
verified backdrop). Reserve heights (CSS vars for header/nav) so
sticky stacking and anchor offsets are computed, not guessed.
