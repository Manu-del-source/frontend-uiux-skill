# Design Systems

Structure is **TOKENS → COMPONENTS → PATTERNS → SCREENS** — never
screen-specific styling that bypasses the chain.

```
tokens (primitives + semantic) → components (variants × states)
→ patterns (composed flows) → screens (IA-specific assembly)
```

A screen may only use tokens, components, and patterns — not raw values.

## Design tokens

- **Primitive tokens:** palette steps, spacing scale, type scale,
  radii, shadows, durations, z-index tiers. Named by value-neutral role
  (`--space-4`), not by use.
- **Semantic tokens:** the *meaning* layer consuming primitives:
  `--color-surface`, `--color-primary-hover`, `--text-body`, `--radius-md`,
  `--duration-fast`. Components consume **semantic tokens only** —
  see `references/color-system.md` for the required set.
- **Component tokens (optional):** per-component overrides
  (`--button-bg`, `--table-row-height`) for density modes.
- Tokens live in one place (CSS vars / Tailwind theme / design config),
  not scattered per file. No hardcoded hex/px in components when a token
  exists.

## Components

- One component per UI concept; API = explicit `variant`, `size`, `state`
  props — not `className` soup.
- Built on accessible primitives (Radix/shadcn/native) so a11y comes with
  the anatomy (`references/components.md`).
- Every component defines its full state matrix (default/hover/focus/
  active/disabled/loading/error/empty/selected as applicable).
- Compose (Card = Badge + Media + actions) rather than duplicate.
- Co-locate or index components predictably; document props/usage in a
  sentence at the top of the file or in the system docs.

## Variants

- Variants express *semantic differences* (primary vs. ghost), not
  arbitrary colors. If every screen needs a new variant, the model is wrong.
- Cap variant counts (e.g. 4 intents × 3 sizes); reject one-off variants.

## States

State coverage is a system requirement, not per-feature improvisation —
see SKILL.md § 10. A component without its disabled/loading/error states
is incomplete.

## Typography in the system

Semantic roles from the scale: `display`, `h1–h4`, `body-lg`, `body`,
`body-sm`, `label`, `caption`, `overline`, `mono`. Screens use roles, never
raw sizes (`references/typography.md`).

## Color in the system

Semantic tokens only; status intents (success/warning/error/info) each
with fg/bg/border; focus ring token; dark theme derived, re-verified
(`references/color-system.md`).

## Spacing in the system

One scale; layout primitives (Stack, Inline, Grid, Container, Separator)
encode rhythm so screens get spacing right by construction
(`references/spacing-layout.md`).

## Iconography

- One family, consistent stroke/size set (16/20/24), `currentColor`.
- Icons accompany labels for primary actions; icon-only needs
  `aria-label`. Decorative icons `aria-hidden`.
- No emoji as UI icons.

## Motion

Motion tokens (`--duration-fast/base`, `--ease-out`, `--ease-in-out`)
shared by all components; reduced-motion behavior defined per component
(`references/animation-motion.md`).

## Documentation

- Every system needs: token reference, component gallery with all
  variants/states, usage do/don't, contribution rules.
- Storybook, a `/ui` route, or a markdown spec all work — what matters is
  that it exists and is current.
- Changelog for breaking component changes.

## Naming

- Consistent: `Button`/`IconButton`, `variant="primary"`,
  `size="sm|md|lg"`, state props like `disabled`/`loading`.
- Token names: `color-{role}[-{state}]`, `space-{step}`,
  `text-{role}` — predictable, greppable, no synonyms
  (`accent`/`highlight`/`brand` all meaning the same? pick one).

## Consistency enforcement

- lint rules / codemods for raw values and duplicate components
- visual QA pass per release (`references/visual-qa.md`)
- one owner for system changes; feature code consumes, doesn't fork

## Audit signals

Duplicate components, variant explosion, raw hex/px counts, screens that
"can't use the system", missing states, undocumented props — see
`workflows/design-system-audit.md`.
