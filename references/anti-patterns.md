# Anti-Patterns

Concrete failure modes. If one appears in review, flag it.

## Layout & structure

**Card soup** — grids of equal-weight cards containing metrics, charts,
and widgets grouped by nothing. Replace with sections organized by
question, full-width tables, and hierarchy.

**Dashboard overload** — every number gets a tile and a chart; KPI rows
of 12; charts nobody acts on. Cut to 3–5 decision-driving KPIs; drill the
rest into tables.

**Desktop shrunk for mobile** — media queries that scale everything down,
hover-dependent layouts, side-by-side columns crushed to unreadable.
Redefine hierarchy per viewport (`references/responsive-design.md`).

**Duplicate navigation** — the same destinations in top nav + sidebar +
drawer + footer, inconsistently active. One primary path per context.

**Modal overload** — dialogs for info, confirmations inside confirmations,
blocking the task behind a popup. Inline the info; confirm only
destructive actions.

**Dropdown overload** — burying common actions in menus, multi-level
nested menus, "..." holding the primary verb. Surface frequent actions;
one menu level.

## Styling

**Excessive gradients** — purple/blue hero washes, gradient text,
gradient buttons without brand reason. Solid/semantic color first.

**Excessive rounded containers** — everything a pill or a 24px-radius
card; radius varies per screen. One radius scale, applied by role.

**Random shadows** — box-shadows with no elevation system, shadows on
everything, glow effects. One elevation scale or borders only.

**Arbitrary spacing** — `p-[13px]`, `mt-[27px]`, inconsistent gaps
between siblings. Scale-derived values only (`references/spacing-layout.md`).

**Hardcoded repeated design values** — the same hex/px/radius pasted in
20 files; a theme change requires a find-replace. Tokens
(`references/design-systems.md`).

**Inconsistent component variants** — three button styles for the same
action, two card components doing one job. Consolidate to one component
with explicit variants.

**Decorative UI without function** — blobs, particles, badges ("✨ AI"),
icons next to every label, ornament that competes with content
(`references/visual-direction.md`).

**Generic AI aesthetic** — the instantly recognizable template: gradient
hero + floating glass card + emoji badges + Inter at one weight + three
equal feature columns. If the screen could belong to any product, it has
no direction.

## Typography & color

**Poor typography hierarchy** — everything bold, sizes within 2px of each
other, body text at 12px, headings below body, `line-height: 1` on
paragraphs. Enforce scale + roles.

**Color-only states** — error = red border, success = green dot,
selection = hue, active nav = colored text only. Pair with icon, text,
weight, or pattern (`references/accessibility.md`).

**Raw color names** — `bg-blue-500`, `text-gray-400` in components,
meaning attached to hex values. Semantic tokens only.

## Interaction & targets

**Tiny touch targets** — 32px buttons, 16px icon-only row actions,
links 2px apart. ≥44px recommended / ≥24px AA minimum with spacing.

**Hover-only information** — critical data visible only on hover;
mobile users can't reach it; tooltips without focus triggers.

**Silent or missing feedback** — click → nothing visible; no loading
state; no success confirmation; double submits. Feedback is mandatory
(`references/design-principles.md`).

**Dropdown-for-everything** — select used for 2 options, menus for
navigation, custom listboxes replacing native selects without need.

## Forms & flows

**Errors after the fact** — validate-only-on-submit with no inline help,
toast-only errors, cleared forms on failure, placeholder-as-label
(`references/forms.md`).

**Confirmation spam** — "Are you sure?" for reversible actions (users
click through) while destructive bulk actions get none. Undo > confirm >
report.

**Fake urgency/trust** — fake countdowns, invented "viewing now" counts,
forced account walls, pre-checked add-ons, fake reviews. Honest UI only.

## Process anti-patterns

- **Rewriting everything** — big-bang reimplementation of a working page
  during a visual task. Inspect → plan → change → validate.
- **Second design system** — introducing Tailwind/shadcn/another kit next
  to an existing one.
- **Skipping visual verification** — declaring correctness from code.
- **Screenshot fiction** — describing a UI you never rendered.
- **Silent failures** — ignoring typecheck/lint/test/build errors.
- **Business-logic drift** — visual work that changes API behavior,
  validation rules, or data flow.
