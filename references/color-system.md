# Color System

Color is semantic infrastructure, not decoration. Define tokens; never
scatter raw values.

## Semantic tokens (required)

Name by **role**, never by hue:

```
--color-background        page background
--color-surface           card/panel background
--color-surface-muted     subtle/alternate surface, table stripes, wells
--color-surface-raised    popovers, menus, modals
--color-foreground        primary text
--color-foreground-muted  secondary text
--color-foreground-subtle disabled/placeholder text (still AA for text)
--color-border            default borders/dividers
--color-border-strong     emphasized boundaries, inputs
--color-primary           primary brand/action
--color-primary-hover     hover state
--color-primary-active    pressed state
--color-primary-foreground text on primary
--color-secondary         secondary action
--color-accent            supporting highlight (use sparingly)
--color-success / -foreground
--color-warning / -foreground
--color-error   / -foreground
--color-info    / -foreground
--color-focus   focus ring color
--color-overlay scrim/backdrop
```

State tokens (hover/active/disabled/focus) derive from the base token so a
theme change updates everything.

**Bad:** `--blue-500`, `bg-[#4f46e5]`, `text-gray-400` used as body text.
**Good:** `--color-primary`, `bg-primary`, `text-foreground-muted`.

Raw palette steps (`blue-500`) may exist *internally* as the source for
derivation, but components consume semantic tokens only.

## Roles

- **Primary** — the one main action per view region. Not every button.
- **Secondary** — supporting actions; usually neutral surface + border.
- **Accent** — highlights, links in content, data viz differentiation.
- **Surface/Background** — the ladder from `references/visual-direction.md`.
- **Muted** — de-emphasized text, placeholders, inactive nav.
- **Status** — success/warning/error/info; each has background, border,
  and foreground variants (subtle bg + strong fg) so status works in
  badges, banners, and inline text.
- **Focus** — a single focus ring token visible on every interactive
  element, on both light and dark surfaces.
- **Disabled** — reduced contrast is allowed for disabled controls, but
  they must still be perceivable and must not be the only state signal.

## Contrast requirements (WCAG 2.2 AA)

- Body text: ≥ 4.5:1 against its background.
- Large text (≥24px, or ≥18.66px bold): ≥ 3:1.
- UI component boundaries and meaningful graphics: ≥ 3:1.
- Focus indicators: ≥ 3:1 against adjacent colors.
- Status meaning must not rely on color alone — pair with icon, text, or
  pattern (see `references/accessibility.md`).
- Check hover/active variants too: a hover color that drops text below
  4.5:1 is a defect.
- Check text over images and gradients at every state.

## Usage rules

- Don't force monochrome designs — but don't add color for its own sake.
  A restrained palette with 1–2 status colors plus brand is normal.
- One primary action color per view; multiple primaries = no hierarchy.
- Link color must be distinguishable from body text and from primary
  buttons' meaning (in-content links vs. actions).
- Dark mode (if present): derive from the same semantic tokens; re-check
  every contrast pair — never just invert.
- Data viz: use a categorical palette with ≥3:1 separation between series,
  colorblind-safe ordering, and redundant encoding (shape/labels) for
  critical distinctions.

## Process

1. Collect brand constraints (logo colors, brand hex, forbidden colors).
2. Define palette steps needed to derive semantic tokens.
3. Define semantic tokens for both themes (if applicable).
4. Validate contrast programmatically or with a checker.
5. Replace raw values across components; search for remaining hex/arbitrary
   values and eliminate them.
