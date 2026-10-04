# Ecommerce

Covers buyer-facing, seller-facing, and two-sided marketplace concerns.
Core jobs: **discover → evaluate → trust → purchase → track** (buyer);
**list → price → fulfill → reconcile** (seller).

## Product discovery

- Home/category: clear entry points by how users think (categories,
  use-cases, popular), not by internal taxonomy.
- Search: prominent, forgiving (typos, synonyms), with recent/popular
  suggestions, and results that always render (empty ≠ error).
- Search results: query echoed, result count, sort, filters, and a
  no-results path (spelling suggestions, related categories, remove
  filters).

## Filtering & sorting

- Filters faceted with counts; sticky filter bar/panel on scroll;
  removable active-filter chips; "Clear all"; state in URL.
- Mobile: full-screen filter sheet with "Show N results" action; keep
  sort accessible.
- Default sort by relevance/utility; offer price, rating, newest, etc.
  Label the active sort.
- Never silently drop unavailable items — show them with status or
  remove them *explicitly* (state it).

## Product cards

- Anatomy: image (consistent ratio, lazy-loaded, real alt), title
  (clamped, full on detail), price (and sale price with strikethrough +
  the *condition*, not just a red number), rating/review count, quick
  actions (wishlist, compare), badges (New, Sale, Sold out) sparingly.
- Whole card → PDP link; quick-add button separate (keyboard focusable,
  no nested links).
- Grid/list toggle for comparison-heavy categories.
- Skeletons on load; preserve aspect ratios to prevent CLS.

## Product details (PDP)

- Order: gallery (zoomable, alt text) + title/price/availability →
  variant selection (with price/stock changes reflected) → add to cart →
  description/specs → reviews → related.
- Variant swatches (color images, size grid) with proper radio semantics;
  unavailable variants visibly disabled with explanation.
- Trust signals: shipping cost/ETA, returns, stock, seller rating,
  security/payment badges, guarantee — near the buy button.
- Sticky add-to-cart bar on mobile.
- Rich structured data (schema.org) is a bonus; correctness first.

## Cart

- Cart is reviewable: line items with image, variant, qty stepper,
  price, remove (with undo), and promo entry.
- Show subtotal, savings, shipping estimate, and total early; never a
  surprise at the last step.
- Persist cart across sessions; guest checkout supported.
- Inline "moved to cart" / "saved for later" states; low-stock and
  cross-sell hints restrained (one contextual suggestion, not a wall).

## Checkout

- Progress indicator for multi-step; single-page when short.
- Minimize fields (autocomplete on, no account wall — guest first,
  account optional after).
- Inline validation before submit; error summary on failure; preserve
  everything (`references/forms.md`).
- Payment errors explained in human terms with recovery (fix card, try
  another method).
- Order summary always visible; promo/discount applied with clear
  before/after.
- Trust cues at payment (icons, security note) without fake urgency.
- Mobile: correct keyboards (`inputmode` for card/ZIP), 44px targets,
  no horizontal scroll, autofill tested.

## Orders & post-purchase

- Order list/detail: status timeline (placed → packed → shipped →
  delivered), tracking link, items, totals, invoice, returns/RMA entry.
- Statuses use icon + text, not color alone; dates absolute.
- Notifications (email/push/in-app) mirror in-app state; never a status
  only in email.

## Seller interfaces

- Dashboard: sales, orders needing action, inventory alerts, payouts.
- Inventory: bulk edit, low-stock thresholds with warnings, variant
  matrix, import/export with validation feedback.
- Listing flow: draft → review → publish with per-field validation and
  preview of the buyer view.
- Destructive actions (delist, refund, delete) confirmed with explicit
  consequences (`references/ux-patterns.md` § destructive).

## Trust signals

Real ones: transparent pricing, clear policies, verified reviews,
realistic photos, contact/support presence, secure payment badges that
are true. **Never fake:** countdowns that reset, "10 people viewing"
invented, fabricated reviews, pre-checked add-ons.

## Empty states

(General rules: `references/states.md` — commerce-specific below.)

- No results: recovery path (clear filters, spelling, alternatives).
- Empty cart: continue-shopping links + recently viewed.
- No orders: explain why + browse CTA.
- Empty seller dashboard: checklist to first listing.

## Inventory

- Out-of-stock: disable or notify ("Notify me") — don't hide silently.
- Oversell prevention: server-side truth; optimistic UI must reconcile.
- Quantity limits and per-customer caps stated before the cart.

## Mobile shopping

- Thumb-reachable primary actions; bottom sticky bars; large targets.
- Filter/sort sheets; swipeable galleries with visible controls.
- 375px survival: titles, prices, and CTAs must never overlap or clip.
- Test real product imagery and long localized titles.

See also: `ecommerce` tasks in `references/design-intelligence.md`,
`references/responsive-design.md`, `references/accessibility.md`, `references/visual-qa.md`.
