# Content Rules (UX Writing)

Enforcement sheet. Knowledge: `references/ux-writing.md`.

## Voice & language
- **C1** User-side language only — no system internals (no "webhook",
  "delta sync", "FK constraint") in user-facing strings.
- **C2** Active voice, verb-first, sentence case; no ALL CAPS beyond
  short labels.
- **C3** One term per concept product-wide; the action name persists
  through its flow ("Publish" → "Published").
- **C4** Specific over clever; no puns in errors/destructive dialogs;
  no apology theater ("Oopsie!") and no blame ("You entered invalid…").

## Labels & controls
- **C5** Button labels name the action + object where ambiguous
  ("Delete invoice", not "Confirm").
- **C6** Field labels visible above/adjacent — placeholder never
  substitutes for a label.
- **C7** Helper text states rules/consequences *before* failure.
- **C8** Icon-only controls have accessible names; tooltips never hold
  the only copy of critical information.

## States & messages
- **C9** Errors: what happened + how to fix, inline at the field;
  system errors include impact + recovery + reference ID.
- **C10** Empty states: what this is + next action (or positive
  confirmation) — never a bare illustration.
- **C11** Success messages name the object and what happens next.
- **C12** Confirmations name object + consequence; safe action focused
  first.
- **C13** Loading copy explains waits >1s; fake progress forbidden.
- **C14** No fake urgency, fake scarcity, pre-checked add-ons, or
  confirm-shaming (Honest UI).

## Structure
- **C15** Headings describe content, unique per page, one `h1`.
- **C16** Link text describes destination ("Read the refund policy") —
  never "click here" / "learn more" alone.
- **C17** Abbreviations expanded on first use; date/number formats
  locale-consistent and unambiguous.
- **C18** Copy verified rendered (screenshot) — no string ships unseen
  in its layout.

## Gate
- [ ] All changed strings walked against C1–C18
- [ ] Parallel-structure pass on button/label sets
- [ ] Rendered screenshot reviewed for wrapping/overflow
