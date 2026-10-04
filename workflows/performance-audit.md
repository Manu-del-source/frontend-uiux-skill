# Workflow: Performance Audit

```
Baseline (field → lab) → attribute bottleneck → prioritize
→ fix top mechanism → re-measure → verify no UX regression → report
```

Load `references/performance.md` first. Never recommend from a
checklist alone — measure.

## 1. Establish context
Route class (marketing / app shell / data-heavy / POS), device target,
existing budgets, real-user monitoring (RUM/CrUX) if present. Perf
priorities differ per product (`references/design-intelligence.md`).

## 2. Baseline — field first
- Field: CrUX or project RUM → which vital fails, on which routes,
  how often. If field data says "good", say so and stop unless the
  user has a specific complaint (lab noise ≠ user pain).
- Lab: Lighthouse/DevTools trace on the worst route, throttled
  consistently, 3 runs (report the median).

## 3. Attribute
Map the failing vital to its mechanism using the trace:
- **LCP** → LCP element identity: image (size/priority/format), server
  response (TTFB), render-blocking CSS/font, JS delaying render.
- **INP** → longest interaction trace: JS volume, long tasks >50ms,
  heavy re-renders, third-party scripts, layout thrash.
- **CLS** → shift sources: unsized media, late fonts, injected banners,
  ads/embeds, skeleton mismatch.
- **Waterfalls** → serial requests, N+1 fetches, missing caching.

## 4. Prioritize
Impact (vital × traffic) ÷ effort. Usually: fix the one mechanism
responsible for the majority of the failure before cosmetic micro-
optimizations. State the expected effect before doing the work.

## 5. Fix
Implement the top mechanism per `references/performance.md` (priority
hints, image pipeline, splitting, caching, deferral…). Project
conventions only; no dependency swaps without justification; never
trade away accessibility (e.g. don't remove focus styles or text to
gain points).

## 6. Re-measure
Same route, same throttle, same tool. Report before/after numbers for
the targeted metric. If no improvement — the attribution was wrong;
return to step 3.

## 7. Verify no UX regression
Visual QA (`references/visual-qa.md`): layout unchanged (or change
intended), loading states still correct, no content hidden behind
optimizations (lazy-load bugs), reduced-motion respected.

## 8. Report
- Route + environment measured
- Metric before → after (field and/or lab, clearly labeled)
- Mechanism fixed, what remains, expected further gains
- What could not be measured (no RUM, no throttling, auth walls) —
  stated as a limitation, never as a pass
