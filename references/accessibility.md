# Accessibility (WCAG 2.2 AA)

Target **WCAG 2.2 AA** where practical. Accessibility is part of
definition-of-done, not a cleanup phase.

## POUR

**Perceivable**
- Text contrast ≥4.5:1 (≥3:1 for large text ≥24px / 18.66px bold).
- UI components & meaningful graphics ≥3:1 against adjacent colors.
- No information conveyed by color alone (pair icon/text/pattern).
- Alternatives for media; alt text that conveys function for linked
  images; `alt=""` for decorative.
- Content reflows at 320px width (200% zoom) without loss; no
  horizontal page scrolling.

**Operable**
- Everything operable by keyboard; no keyboard traps; logical order.
- Focus always visible (≥3:1 indicator), never `outline: none` without
  a replacement.
- Touch targets: ≥24×24px minimum (2.2 AA), ≥44×44px recommended;
  spacing between targets.
- Skip link to main content; `<header>/<nav>/<main>/<footer>` landmarks.
- Headings: one `h1`, no skipped levels, descriptive.
- Motion: no content flashes >3 times/second; honor `prefers-reduced-motion`.
- Bypass blocks, page titles unique and descriptive.

**Understandable**
- Language declared (`lang`); consistent navigation/identification
  across pages; labels/instructions that predict what's asked.
- Error prevention for legal/financial actions: review+confirm or
  reversible.
- Help available where tasks are complex.

**Robust**
- Valid semantics; correct roles/names/values; works with AT and future
  user agents.
- First rule of ARIA: use correct HTML elements first. ARIA only when
  semantics fall short.

## Keyboard

- Tab order = DOM/visual order; positive tabindex forbidden.
- Interactive elements only (`a`, `button`, `input`, custom patterns
  with correct roles + key handlers).
- Widget patterns: arrows within composite widgets, Escape to close,
  Enter/Space to activate, Home/End where expected, focus returns to
  trigger after menus/dialogs close.
- Custom widgets follow established patterns (menu, listbox, combobox,
  dialog, tabs, disclosure) — don't improvise.

## Focus

- `:focus-visible` styling on every control; consistent ring token.
- Modal/drawer: move focus in, trap it, restore on close.
- Programmatic focus on route change (SPA): move to `h1` or main, announce
  the new page title.

## Semantic HTML

- Landmarks for page regions; `main` unique; lists for lists
  (`ul/ol`), tables for tabular data, headings for structure.
- Buttons for actions, links for navigation.
- Native controls before ARIA-ized divs (real checkbox before styled
  switch).

## ARIA

- Use it sparingly and correctly: `aria-label`/`aria-labelledby` for
  names, `aria-describedby` for descriptions, `aria-expanded`,
  `aria-current`, `aria-invalid`, `aria-live` (polite for status,
  assertive only for urgent), `aria-busy`.
- Don't: redundant ARIA on native elements, `role`s that contradict
  semantics, focusable elements inside `aria-hidden`, `alt` duplicating
  adjacent visible text (use `aria-hidden="true"` on decorative repeats).
- Icon buttons need accessible names.

## Contrast

- Verify text, UI boundaries, focus rings, placeholders (they're text),
  disabled text that still conveys meaning, text on images/gradients,
  and chart series.
- Placeholder ≠ label; placeholder contrast still matters.
- Dark mode re-verified pair-by-pair (`references/color-system.md`).

## Reduced motion

- `@media (prefers-reduced-motion: reduce)`: remove parallax, auto-play,
  infinite loops, and non-essential transitions; keep instant state
  changes and essential feedback.

## Touch targets

- 44×44 CSS px for primary controls; inline text links exempt if
  spacing doesn't cause mis-taps.
- Dense tables: increase row/kebab padding on touch devices.

## Forms

- Visible labels, `aria-describedby` for help+errors, `aria-invalid`,
  required semantics, error summary with links on submit, no
  auto-advancing focus, no session timeout without warning/extension
  (2.2 AA `timing`), sensible `autocomplete` (`references/forms.md`).

## Errors

- Identify the field, describe the problem in text, suggest the fix,
  don't rely on color/icon alone, preserve input, announce via live
  region. Prevention > detection.

## Screen readers

- Test with at least one SR pass (VoiceOver/NVDA) on key flows when
  possible: names, roles, states, announcements, order.
- SPA: announce route changes; async updates announced via polite live
  regions; loading states exposed (`aria-busy`).
- Tables: header association (`<th scope>`/`headers`), caption, sortable
  `aria-sort`, row/column navigation works.
- Dialogs: labelled title, `aria-modal`, backdrop, focus management.

## Dynamic content

- Live regions for toasts, async validation, result counts, cart updates.
- Don't announce everything (noise); debounce rapid updates.
- Skeletons/spinners expose loading state; content appearing must not
  steal focus unexpectedly.

## Verification

Automated tools (axe/Lighthouse) catch ~30–40% only. Do:
1. automated scan
2. full keyboard pass
3. screen-reader spot check
4. contrast checks on all token pairs
5. 200% zoom + 320px reflow check
6. reduced-motion check

Document what couldn't be verified. See
`workflows/accessibility-audit.md`.
