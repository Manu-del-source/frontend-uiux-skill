# Workflow: Accessibility Audit

```
Semantic → keyboard → focus → contrast → forms → ARIA → motion
→ screen-reader behavior → verify
```

Target: WCAG 2.2 AA (`references/accessibility.md`). Evidence-based —
every finding cites the element/selector and the criterion.

## 1. Semantic HTML
- Landmarks (`header/nav/main/footer`), one `main`, unique page titles
- One `h1`, no skipped heading levels, lists/lists, tables/tables
- Buttons vs. links used correctly; native controls not replaced by divs
- Image `alt` (informative vs. decorative)

## 2. Keyboard
- Every flow completable without a mouse; tab order = visual order
- No traps; skip link works; SPA route changes move focus to content
- Widget keys: arrows/Escape/Enter/Home/End per pattern

## 3. Focus
- Visible `:focus-visible` on all controls, ≥3:1 contrast
- No `outline: none` without replacement; focus order never lost after
  menus/dialogs close

## 4. Contrast
- All text ≥4.5:1 (≥3:1 large); UI boundaries and focus rings ≥3:1;
  text over images; placeholder; dark theme; chart series
- No information by color alone

## 5. Forms
Visible labels, `aria-describedby` (help + errors), `aria-invalid`,
required semantics, inline errors with fix instructions, error summary
on submit, `autocomplete`, no input loss on failure.

## 6. ARIA
Correct roles only where HTML falls short; accessible names on icon
buttons; `aria-expanded`/`aria-current`/`aria-sort` accurate; no
redundant or contradicting ARIA; live regions for async updates
(polite) and urgent errors (assertive).

## 7. Motion
`prefers-reduced-motion` honored: no parallax/auto-play/loops; no
flashing >3/s; content never exists only behind motion.

## 8. Screen-reader behavior
Spot-check key flows with VoiceOver/NVDA if available: names, roles,
states, order, announcements (toasts, counts, route changes), dialog
labelling, table header association.

## 9. Verify
1. Automated scan (axe/Lighthouse) — fix findings, note tool limits
2. Full keyboard pass on primary flows
3. 200% zoom + 320px reflow check
4. Reduced-motion pass
5. Target sizes ≥24px (AA) / ≥44px recommended

Report: criterion · element · issue · severity · fix · verified/unverified.
Never claim compliance for what wasn't tested.
