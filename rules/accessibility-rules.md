# Accessibility Rules

Terse enforcement sheet for review/audit mode. Knowledge and rationale:
`references/accessibility.md`. Target: WCAG 2.2 AA. Each rule is
checkable; cite rule IDs in findings.

## Perceivable
- **A1** Body text contrast ≥4.5:1; large text ≥3:1; UI boundaries &
  focus rings ≥3:1 — verified per theme, including text over images.
- **A2** No information conveyed by color alone (pair icon/text/pattern).
- **A3** Every informative image has meaningful alt; decorative images
  `alt=""`/`aria-hidden`.
- **A4** Content reflows at 320px / 200% zoom with no horizontal page
  scroll and no loss of function.
- **A5** No auto-playing media with sound; no flashing >3/sec.

## Operable
- **A6** Every action reachable by keyboard; no traps; tab order =
  visual order; positive `tabindex` absent.
- **A7** Focus always visible (`:focus-visible`, never bare
  `outline:none`); focus moved/restored around dialogs, menus, route
  changes.
- **A8** Targets ≥24×24px (AA floor), ≥44×44px for primary controls;
  adjacent targets don't mis-tap.
- **A9** Skip link + landmarks (`header/nav/main/footer`); one `h1`;
  no skipped heading levels.
- **A10** `prefers-reduced-motion` honored: no non-essential
  animation/parallax/loops; content never exists only behind motion.

## Understandable
- **A11** Every control has a visible, programmatically-associated
  label; placeholders are not labels; icon-only buttons have
  accessible names.
- **A12** Errors: identify field, describe problem + fix in text,
  `aria-invalid` + `aria-describedby`, never color-only, input
  preserved; no client-only validation theater (server validates too).
- **A13** `lang` set; unique descriptive `<title>` per page;
  consistent navigation/identification.
- **A14** Language plain enough for the task; no unexplained jargon.

## Robust
- **A15** Native elements before ARIA; ARIA only to fill gaps and never
  contradict semantics; roles/names/states correct.
- **A16** Composite widgets implement their pattern fully (menu /
  listbox / combobox / tabs / dialog): arrows, Escape, Home/End,
  type-ahead as specified — no half-patterns.
- **A17** Tables: `<th scope>` association, `aria-sort` on sortable
  headers, caption/description where needed.
- **A18** Dynamic updates announced: polite live region for status /
  counts / async results; `aria-busy` during loads; assertive reserved
  for urgent errors.
- **A19** Dialogs: `aria-modal`, labelled title, focus trap, scroll
  lock, Escape closes, focus returns to trigger.

## Process gate
- [ ] Automated scan run and its limits noted (tools catch ~1/3)
- [ ] Full keyboard pass on primary flows
- [ ] Contrast matrix checked (all token pairs × themes)
- [ ] Screen-reader spot check on one core flow
- [ ] Unverifiable items reported as **not verified**, never as pass

→ Workflows: `workflows/accessibility-audit.md`. States: `references/states.md`.
