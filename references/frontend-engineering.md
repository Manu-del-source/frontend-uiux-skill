# Frontend Engineering

Stack-adaptive engineering guidance. **The project's actual stack wins**
— inspect first (SKILL.md § 2), then apply what fits. Framework-agnostic
principles first; React/Next/Vite/TypeScript/Tailwind specifics where
they add precision.

## Semantic HTML first

- Right element for the job: `button` (actions) vs `a` (navigation),
  native `input`/`select`/`details`/`dialog` before ARIA-ized divs,
  lists for lists, tables for tabular data, headings for structure.
- ARIA only where semantics fall short (`references/accessibility.md`).
- Valid, loadable HTML — semantics are the accessibility substrate.

## Component composition

- **Boundaries follow change and knowledge**: a component owns the
  state only it uses; lift state to the lowest common ancestor; keep
  presentation (props in) separate from behavior (side effects out).
- Props over context for variation; context for genuinely global truths
  (theme, session, locale) — not for prop-drilling avoidance at any cost.
- Composition patterns: children/slots for layout shells, render props
  sparingly, `as`/polymorphic only with real need, controlled +
  uncontrolled both supported for inputs.
- Extract when: rendered 3×, changes for one reason, or exceeds ~150
  lines of responsibility — not before.
- Colocation: keep component + styles + tests + types together; share
  upward via directories, not dumping grounds (`components/ui`,
  `components/<feature>` per project convention).

## State management

- Classify before choosing: server state (fetch/cache — TanStack Query,
  SWR, framework cache) ≠ URL state (filters, tabs — belongs in the
  router) ≠ form state (form library) ≠ local UI state (useState) ≠
  global client state (store: Zustand/Jotai/Redux — rarely all of it).
- Most bugs come from misplacing state — duplicate server state into a
  store is a classic error.
- Async needs explicit states: loading / error / empty / success
  (`references/states.md`).

## Data fetching

- Server-first: fetch on the server (RSC, loaders, SSR) unless the data
  is client-interactive; don't hydrate data a server could have sent.
- Waterfall avoidance: parallelize, batch, and prefetch
  (`references/performance.md` § network waterfalls).
- Cache deliberately: understand revalidation of the framework in use;
  optimistic updates with rollback for safe actions.
- Error and empty handling are part of every fetch, not an afterthought.

## React specifics

- Server components by default in Next.js App Router; add `"use client"`
  only for interactivity, hooks, browser APIs — and push client
  boundaries *down*, not to the layout.
- Keys are identity (never array indexes for reorderable lists);
  derived state via computation, not effect mirroring; effects for
  synchronizing external systems only.
- Controlled inputs, memoization only after profiling, lists
  virtualized beyond a few hundred rows.

## Next.js specifics

- Routing: file conventions are framework contracts (`loading`,
  `error`, `not-found`, `template`); route groups/layouts for shared
  shells; parallel routes only for genuinely concurrent views.
- Rendering strategy per route: static (marketing) → ISR (content) →
  dynamic (personalized/live) — pick the least dynamic that works.
- `next/image`/`next/font` give optimization for free; metadata API for
  SEO; server actions for mutations with revalidation — not for GET-able
  data.

## Vite & other build tools

- Vite: env vars are `VITE_`-prefixed and **public by default** — no
  secrets client-side; manual chunks for heavy deps; library mode for
  packages. CRA → Vite migrations are a common modernization.
- Whatever the bundler: know its splitting, aliasing, and env model
  before optimizing.

## TypeScript (UI correctness)

- No `any` in props; discriminated unions for component states
  (`{status: "loading"} | {status: "error"; error: Error} | …`) so the
  compiler enforces the state matrix.
- `React.ComponentProps`/`PropsWithChildren` for extension; variant
  types via CVA/`Record` over stringly-typed unions; strict mode on.
- Type the API boundary (schemas: Zod/valibot) — UI types flow from
  validated data, not from hope.

## CSS & Tailwind

- Modern CSS first: custom properties for tokens, flex/grid, `gap`,
  `:focus-visible`, `clamp()`, container queries where genuinely
  container-driven. Respect cascade — specificity fights are a smell;
  layer or scope deliberately.
- **Tailwind**: consume the existing theme (tokens as utilities); no
  arbitrary values when a token exists; one source for the palette;
  extract repeated utility strings into components; variants via
  `cva`/project pattern; `cn`/`clsx` for merging. Never fork the
  config for a feature branch.
- CSS modules / vanilla-extract / styled-systems: same rules — tokens
  in, no raw values, no duplicated patterns.

## Component libraries (shadcn/ui, Radix, MUI…)

- Inspect what exists before adding anything (SKILL.md § 8). Know the
  layer: **Radix/Base UI** = headless accessible primitives (bring your
  style); **shadcn/ui** = copied-in styled primitives on Radix (your
  code, yours to modify); **MUI/Chakra** = styled full kits (theme
  surgery to fit a brand).
- Prefer extending the library's variants over forking components; a
  fork that drops ARIA/focus behavior is an accessibility regression —
  keep the semantics, restyle the skin.
- Adding a dependency needs a reason: a11y+keyboard+mobile behavior it
  saves you outweighs bundle + maintenance cost.

## Error boundaries & failure

- Error boundary per meaningful region (not one global crash wall);
  route-level `error.tsx` in Next; boundaries show recovery (retry,
  home), not stack traces.
- Client/server error taxonomy: 4xx (user-recoverable, inline) vs 5xx
  (retry + reference ID) vs offline (`references/states.md`).
- Logging/monitoring hooks exist? Use the project's; don't invent.

## Code organization & maintainability

- Feature-first directories over type-first dumping grounds; public
  surface via `index.ts`; naming: one word per concept across the code
  (matches `references/design-systems.md` § Naming).
- No dead code, no commented-out blocks, no speculative abstractions —
  rules (Rule of Three, YAGNI) applied locally.
- Separate refactors from visual changes in diffs (SKILL.md engineering
  rules).

## Testing (UI)

- Pyramid that fits the app: unit for logic/utils → **component tests
  (Testing Library) for behavior through accessible roles/labels, not
  class names** → integration for flows → few E2E (Playwright) for
  critical journeys; visual regression where screenshots exist.
- Test what users experience: keyboard paths, states (loading/empty/
  error), form validation messages. Mock network, not the component
  tree, when possible.
- Run the project's existing suite; never weaken assertions to pass
  (`references/visual-qa.md` § Rules).

## Production concerns

- SEO (marketing/content routes): unique title + meta description,
  one `h1`, canonical, OG/Twitter cards, structured data where it
  matches content, sitemap/robots, semantic headings — app screens are
  mostly `noindex`-irrelevant, don't cargo-cult.
- Security (UI-relevant): never trust client input (server validates),
  no secrets in `VITE_`/`NEXT_PUBLIC_` vars, escape by default (no
  `dangerouslySetInnerHTML` with untrusted content), sanitize if HTML is
  required, secure cookie flags set server-side, CSRF handled by the
  framework, authz checks server-side regardless of hidden UI.
- Observability: honor existing analytics/error tooling; don't
  double-fire events.
- Ship checklist: typecheck / lint / tests / build / visual QA /
  accessibility pass / performance spot-check (SKILL.md § 14).
