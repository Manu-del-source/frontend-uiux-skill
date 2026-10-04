# Design Intelligence

Run this analysis **before** designing or implementing any non-trivial
interface. It takes a few minutes and prevents most wrong-direction work.

## The chain

```
PRODUCT → USER → JOB TO BE DONE → INFORMATION DENSITY → PRIMARY ACTION
        → CONTEXT → DEVICE → BRAND → CONSTRAINTS
```

Write down short answers to each:

1. **PRODUCT** — what kind of product is this? (see catalog below)
2. **USER** — who uses it? skill level, frequency, tolerance for complexity.
3. **JOB TO BE DONE** — the one thing the user came here to accomplish.
4. **INFORMATION DENSITY** — how much must be visible at once?
5. **PRIMARY ACTION** — the conversion/verb: buy, book, decide, monitor, sell.
6. **CONTEXT** — where/how is it used? quiet desk, shop floor, commute?
7. **DEVICE** — desktop-first, mobile-first, or truly responsive?
8. **BRAND** — existing tokens, tone, constraints, competitors' conventions.
9. **CONSTRAINTS** — accessibility bar, perf budget, tech limits, deadline.

Also determine: target users, interaction model, visual tone, accessibility
requirements, responsive requirements.

## Product catalog

| Product | Density | Primary action | Watch out for |
|---|---|---|---|
| **Ecommerce** | medium | find → evaluate → buy | filters, PDP trust, mobile checkout |
| **Marketplace** | medium-high | discovery + trust | two-sided needs (buyer/seller), moderation states |
| **SaaS** | medium | activate, retain, convert | onboarding, empty states, upgrade paths |
| **Dashboard** | high | scan → spot → act | card soup, unreadable charts, no drill-down |
| **POS** | very high | fast, error-proof transaction | touch targets, speed, mis-tap cost, offline |
| **Admin system** | high | manage safely | destructive actions, permissions, auditability |
| **Analytics** | high | compare → explain | numeric typography, legends, color-only encoding |
| **Marketing site** | low | persuade → convert | narrative flow, one clear CTA, honesty |
| **Content-heavy** | low–medium | read → navigate | line length, typography, reading progress |
| **Portfolio** | low | impress → contact | personality without sacrificing usability |
| **Productivity** | high | repeated daily workflows | keyboard, speed, state persistence |

## Decision rules

**Dense vs. spacious**
- Dense: repeated expert use, comparison tasks, data monitoring, POS.
- Spacious: first-time users, marketing, content reading, mobile touch.
- Never let marketing-site spaciousness leak into an operations tool.

**Navigation pattern**
- Shallow + few destinations → top nav.
- Deep hierarchy, many sections, desktop-primary → sidebar.
- Mobile with 3–5 core destinations → bottom nav; otherwise drawer/stack.
- Expert, keyboard-friendly, power users → command menu *in addition* to
  visible nav, never instead of it.
- See `references/navigation.md`.

**Cards vs. tables**
- Table: comparable fields, sorting, scanning, many rows, expert users.
- Cards: visual differentiation (imagery), few items, browse mode.
- Neither by default — choose from the data's shape.
- See `references/dashboards.md`, `references/ecommerce.md`.

**Dashboard vs. workflow**
- Dashboard: monitoring, overview, "what is happening?"
- Workflow: doing, step-by-step, "complete this task."
- Don't turn a workflow into tiles; don't turn a dashboard into a wizard.

**Desktop-first vs. mobile-first**
- Mobile-first is the default implementation strategy (progressive
  enhancement from a narrow base).
- Desktop-first when the product is explicitly desktop-bound (POS,
  internal admin) — but still define the narrow-viewport behavior.

**Before styling a complex screen**, complete
`references/information-architecture.md` — what information and actions actually
belong here.

## Output

A short design brief (5–10 lines) attached to the plan. If the brief
contradicts the user's request, ask before proceeding.
