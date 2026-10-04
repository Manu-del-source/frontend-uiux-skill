# Theming (Dark Mode, High Contrast, Theme Architecture)

Theme = one set of semantic tokens, N mappings. Never fork components
per theme.

## Theme architecture

Choose one strategy and apply it project-wide:

| Strategy | How | Use when |
|---|---|---|
| `prefers-color-scheme` | media query swaps token values | system-driven, no user toggle |
| class/data-attr on `<html>` | `.dark` / `data-theme="dark"` overrides tokens | user toggle, per-user persistence (default choice for products) |
| Both | system default + explicit override ("Use system") | most mature products |

Implementation rules:

- Components reference **semantic tokens only**
  (`references/color-system.md`); themes re-map the tokens. A component
  containing `#fff` or `bg-white` is a theme bug.
- Define *all* themes' token sets together — an undefined token falls
  back to invisible/broken, not to a default.
- Elevation semantics flip in dark: surfaces get *lighter* as they rise;
  shadows give way to borders/tone steps (near-black shadows are
  invisible on dark).
- Persist choice (localStorage) + apply before paint (inline script or
  cookie) to avoid a flash of wrong theme (FOUC = CLS + UX defect).
- Images/logos: provide dark-appropriate variants where the asset
  assumes a light background; `color-scheme` meta tells the UA to match
  (form controls, scrollbars, caret).

## Dark mode is not "invert"

- Re-derive every pair; contrast must be re-verified, not inherited:
  text ≥4.5:1, large text/UI ≥3:1 *in the dark palette*.
- Never pure black `#000` page + pure white text by reflex: prefer
  near-black surfaces (`#0a0a0b`-range), off-white text (`#e5e5e7`-range)
  to cut halation — but verify final values, don't trust ranges.
- Saturation: hues read brighter on dark — desaturate brand colors for
  dark variants; status colors need dark-tuned values, not reused ones.
- Overlays/scrim opacity usually increases on dark; check modals,
  dropdowns, tooltips (they're the layer that breaks most often).

## High contrast & forced colors

- Support `forced-colors: active` (Windows High Contrast): system
  colors replace yours — preserve meaning with `currentColor` borders,
  don't rely on background-only differentiation; ensure controls remain
  visible using system `Canvas`/`CanvasText`/`Highlight`.
- `prefers-contrast: more` — strengthen borders/text where supported.
- Never disable user styles wholesale; keep layout intact under zoom
  and larger text sizes (WCAG 1.4.4/1.4.12).

## Reduced motion & other user settings

Theme systems co-travel with: `prefers-reduced-motion`
(`references/animation-motion.md`), `prefers-reduced-transparency`
(avoid heavy glass effects), `forced-colors`. Treat them as one
user-environment settings cluster applied in the token/global layer.

## Do not

- Per-theme component forks or `theme === "dark" ? … : …` scattered
  through JSX (token mapping instead).
- Shipping dark mode without a contrast pass — half-ported dark mode
  (light cards on dark page, invisible borders) is worse than none.
- Identical hex values across themes (a green-on-white status is
  often unreadable on dark without adjustment).
- Theme toggles that reflow layout (same dimensions in both themes).

## Verification

Screenshot every key screen **in both themes** at 375/1280, check the
contrast matrix programmatically per theme, open a modal + dropdown +
tooltip in dark (the combination that surfaces most defects), and run
one forced-colors/reduced-motion pass where tooling allows. Record what
could not be verified.
