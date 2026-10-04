# Interaction Rules (States · Motion · Responsive · Mobile)

Enforcement sheet. Knowledge: `references/states.md`,
`animation-motion.md`, `responsive-design.md`, `navigation.md`,
`components.md`.

## States
- **I1** Every interactive element defines: default, hover (if pointer
  available), focus-visible, active, disabled — with visible
  differences.
- **I2** Data regions define: loading, empty (with next action), error
  (with recovery), partial/stale where applicable.
- **I3** Destructive actions: confirm-with-consequences **or** undo
  window — never a bare one-click, never confirmation spam for
  reversible actions.
- **I4** Async work: busy indication within 100ms, layout dimensions
  preserved, double-submission impossible, prior data kept visible on
  refresh.
- **I5** Optimistic UI only with rollback on failure; silent failure
  forbidden (offline/permission states explicit).
- **I6** No hover-only information or action on any screen that mobile
  users touch.

## Motion
- **I7** Every animation has a job (state, continuity, feedback,
  attention, progress) — decorative-only animation removed.
- **I8** Durations in range: micro 100–150ms, UI 150–250ms, panels
  200–350ms; nothing >500ms without justification.
- **I9** `transform`/`opacity` only (no layout-property animation);
  `transition: all` banned; exact properties named.
- **I10** Reduced-motion path exists and removes non-essential
  movement while keeping feedback.
- **I11** Feedback is never motion-only (static cue always present).

## Responsive
- **I12** Hierarchy is redefined per breakpoint (essential@375 /
  useful@768 / complete@1280) — not shrunk.
- **I13** Every grid/flex container has an explicit narrow-viewport
  behavior: stack, prioritize, collapse, or contained scroll.
- **I14** No horizontal page scroll at 375px; long content
  wraps/truncates-with-access.
- **I15** Navigation transforms per `references/navigation.md` map and
  stays keyboard-complete in every form.
- **I16** Tables use one of: priority columns, stacked rows, contained
  scroll with sticky first column — never crushed columns.
- **I17** Forms single-column on mobile; inputs ≥16px (no iOS zoom);
  correct `type`/`inputmode`/`autocomplete`.
- **I18** Dialogs become bottom-sheet/full-screen on mobile with safe
  areas; focus trap + Escape work at all sizes.

## Gate
- [ ] 375/768/1280 screenshots inspected with worst-case content
- [ ] State matrix walked per component (I1–I6)
- [ ] Keyboard-only completion of primary flow
