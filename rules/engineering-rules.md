# Engineering Rules (Frontend · Performance · Systems)

Enforcement sheet. Knowledge: `references/frontend-engineering.md`,
`performance.md`, `design-systems.md`, SKILL.md § Engineering rules.

## Correctness & preservation
- **E1** Typecheck, lint, tests, build pass — failures reported, never
  suppressed to make a check green.
- **E2** Existing functionality, flows, and API behavior preserved;
  business logic untouched by visual work; design changes kept out of
  unrelated refactors.
- **E3** Stack conventions respected: the project's framework, styling
  system, component library, and file layout — no second design system,
  no unnecessary dependencies, no speculative abstractions.
- **E4** Server/client boundaries correct: no `"use client"` without
  interactivity need; data fetched server-side unless client-
  interactive.

## Components & code
- **E5** Reuse before creating: existing components/tokens/patterns
  searched first; new components justified.
- **E6** Components consume semantic tokens only; raw values (hex, px
  spacing, ad-hoc durations) absent from component code.
- **E7** Component APIs explicit (`variant`/`size`/state props), not
  `className` soup; variant counts capped; no screen-local forks of
  library components that drop their semantics.
- **E8** State modeled explicitly (union types/enums), not boolean
  soup; state matrix from `references/states.md` implemented.
- **E9** No array-index keys for reorderable lists; derived state
  computed, not mirrored in effects; effects limited to external-system
  sync.
- **E10** Error boundaries per meaningful region with recovery paths;
  no raw stack traces to users.

## Performance
- **E11** LCP ≤2.5s / INP ≤200ms / CLS ≤0.1 targeted per route class;
  measurements reported before/after — no claimed speedup without
  numbers.
- **E12** Media sized (`width`/`height`/`aspect-ratio`) — zero CLS from
  images/fonts; LCP image eager + prioritized; below-fold lazy.
- **E13** Fonts: subset/variable, `font-display: swap`, critical font
  preloaded, fallback metrics to prevent swap shift.
- **E14** Bundle conscious: route splitting, per-item icon imports,
  heavy UI dynamically imported, no dependency added without need.
- **E15** Waterfalls eliminated: independent requests parallelized,
  N+1 chains batched, caching strategy explicit per resource type.

## Maintainability & shipping
- **E16** One concept = one name across code; dead code and commented-
  out blocks removed; public surfaces via explicit exports.
- **E17** UI tests assert through roles/labels (Testing Library style),
  cover loading/empty/error paths; assertions never weakened to pass.
- **E18** SEO basics on public content routes (title/meta/canonical/OG/
  one `h1`); no secrets in client env vars; input validated server-side;
  untrusted HTML never injected raw.
- **E19** Visual verification performed where tooling exists; anything
  unverified reported as unverified.

## Gate
- [ ] `npm run validate` (skill) / project typecheck+lint+test+build
- [ ] Grep: no raw token values, no `transition: all`, no `any` in
  changed props
- [ ] Perf spot-check on changed route if it affects above-fold content
