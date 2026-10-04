# Performance (Core Web Vitals & Perceived Speed)

Performance guidance must be **context-aware**: a POS that runs on a
shop-floor tablet and a marketing site have different budgets. Measure
before optimizing; fix the biggest real bottleneck, not a checklist.

## Core Web Vitals

| Vitals | Metric | Good | Primary levers |
|---|---|---|---|
| LCP | Largest Contentful Paint | ≤ 2.5s | hero image, server speed, fonts, above-fold priority |
| INP | Interaction to Next Paint | ≤ 200ms | JS cost, long tasks, heavy renders, main-thread blocking |
| CLS | Cumulative Layout Shift | ≤ 0.1 | image dimensions, font strategy, reserved space, skeletons |

Also track (supporting): TTFB (server/route), FCP, total blocking time.

Measure in two tiers — **field** (CrUX/RUM: what users experience) beats
**lab** (Lighthouse/dev trace: reproducible diagnosis). Lab numbers
diagnose; field numbers decide priorities. A single lab run is not user
data.

## Image optimization

- Right format: photo → WebP/AVIF; icons → SVG; animate → video/GIF.
- Always: explicit `width`/`height` or `aspect-ratio` (kills CLS),
  `object-fit`, `loading="lazy"` below the fold, **eager + `fetchpriority="high"`**
  for the LCP image, responsive `srcset`/`sizes`, CDN where available.
- Don't lazy-load above-the-fold content; don't ship 4000px images into
  400px slots; placeholder → real image must not shift layout.
- Alt text is not optional (`references/accessibility.md`).

## Font loading

- Subset + variable fonts; limit families and weights (each weight is
  bytes).
- `font-display: swap` (or optional for non-critical); preload the one
  critical font; self-host when possible.
- Size-adjust/fallback metrics to avoid CLS from font swap; system-font
  stacks are a legitimate performance-first choice for dense tools.

## JavaScript cost

- Audit what ships: every dependency is bundle + parse + maintenance
  cost; remove before replacing.
- Code-split by route and by conditionally rendered heavyweight UI
  (editors, charts, maps); dynamic-import above-the-fold-last.
- Tree-shake: import per-item (`lucide-react` icons), not barrels of
  everything.
- Defer non-critical JS; avoid client components for static content
  (Next.js server-first); no hydration of read-only pages.
- Long tasks > 50ms break INP: defer heavy work, virtualize long lists,
  memoize only where profiling shows a win (don't memo reflexively).

## Code splitting & lazy loading

- Route-based splitting is the default; component-level for expensive
  islands.
- Suspense boundaries around slow data so fast content paints first.
- Preload likely-next assets (hover/focus intent); never lazy-load
  what's visible immediately.

## Caching & network waterfalls

- Cache policy per resource type: immutable hashed assets = long,
  HTML/SSR = revalidate, API = explicit stale-while-revalidate where safe.
- Kill waterfalls: parallelize independent requests, batch (avoid
  N+1 client fetch chains), inline nothing critical behind another
  round trip, use `preload`/`prefetch` deliberately.
- One round trip for above-the-fold data where architecture allows.

## Perceived performance (often cheaper than real fixes)

- Optimistic UI for fast, reconcilable actions (like, toggle, add) with
  rollback on failure.
- Skeletons shaped like the incoming layout; instant hover/press
  feedback (≤100ms).
- Stream progressive rendering; show the shell immediately.
- Perceived speed is honesty-adjacent: never fake progress or fake
  completion (`references/design-principles.md` § Honest UI).

## Budgets & decisions

- Set a budget per route class (e.g. JS ≤ 150KB gz initial for app
  shells) and treat regression as a defect.
- Trade-offs are contextual: SSR/SSG/ISR choice, image quality vs.
  bytes, animation richness vs. INP — decide from the product brief
  (`references/design-intelligence.md`).
- SEO-relevant subset (marketing): LCP/CWV are ranking signals; meta,
  canonical, sitemap, structured data are in
  `references/frontend-engineering.md` § Production concerns.

## Workflow

1. Measure (field first, then lab trace for the worst route).
2. Attribute: which vital, which mechanism (image / font / JS / server /
   third-party).
3. Fix the top mechanism; re-measure; confirm no UX regression via
   visual QA.
4. Report before/after numbers — never claim a speedup without them.

See `workflows/performance-audit.md` for the full procedure.
