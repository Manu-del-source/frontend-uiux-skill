# Forms

Forms are where UX failures become support tickets. **Prevent errors
before reporting them.**

## Labels

- Every control has a visible, programmatically associated label
  (`<label for>`); placeholders are hints, never labels.
- Labels are task language: "Email address", "Create password" — not
  "Field 1", not jargon.
- Required: mark with text or `required` + accessible indication
  ("Required" or `*` with legend) — not by color alone.

## Descriptions

- Helper text under the label (`aria-describedby`) for format rules,
  examples, and implications ("We'll never share this").
- Show the rule *before* the user can fail, not after.

## Input types & formatting

- `type=email|tel|url|number|date|search` + `inputmode` → correct mobile
  keyboards and native validation.
- Auto-format as the user types (phone, card, currency, date) with
  forgiving parsing; keep the raw value accessible.
- Accept pasted input with stray spaces/punctuation.
- Numeric inputs: decide steppers vs. free entry; currency uses decimal
  separators matching locale.

## Autocomplete

- `autocomplete` on identity/payment fields: `name`, `email`, `tel`,
  `street-address`, `postal-code`, `cc-number`, `exp-month`, etc.
- Saves real time on mobile checkout; don't fight the password manager
  (proper `name`/`id`/form semantics).

## Validation

- **When:** on blur for format, on submit for completeness, and live
  once a field has errored (don't scold while typing the first time).
- **Where:** inline, directly under the field; never only in a toast.
- **Message:** what's wrong + how to fix ("Enter a date as YYYY-MM-DD"),
  linked with `aria-describedby` and `aria-invalid`.
- Validate what users can't infer (email domain typo, password rules as
  they type with a checklist, availability with async status).
- Don't clear valid input on error; don't wipe the form on failure.

## Required fields

- Client-side hints are convenience; server-side validation is the truth.
- Distinguish "required" from "optional" explicitly — mark the minority.

## Keyboard behavior

- Logical tab order = visual order; no positive `tabindex`.
- Enter submits single-field forms (login/search); Enter in multiline =
  newline.
- Escape clears/closes suggestions; arrow keys navigate option lists;
  no keyboard traps.
- Buttons for submit/reset, not clickable divs.

## Loading & submission

- Disable duplicate submission but keep the button labeled (spinner +
  `aria-busy`), preserve entered values.
- Long submissions: show progress and keep the user oriented; never a
  blank screen.
- Autosave (if offered): visible status ("Saved 12:04"), offline handling.

## Success

- Confirm what happened and what's next: inline success state, redirect
  with confirmation, or `role="status"` announcement.
- Long forms: summary at top with links to each section on failure.

## Error recovery

- Preserve all input; prefill from server response where possible.
- Provide recovery paths: undo, draft retention, "try again", support
  link with reference ID.
- Session-expiry mid-form: explain and restore the form, not a bare
  redirect.

## Multi-step forms

- Show step count/progress, current step, and completed steps; allow
  going back without data loss; validate per step; summarize before
  final submit.

## Field order & grouping

- Group related fields (`<fieldset>`); order by the user's mental model
  (contact → shipping → payment), not the database schema.
- Short forms: fewer fields, inline where natural; long forms: sections.

## Accessibility checklist

- labels · descriptions · errors linked · `aria-invalid` · required state
  · live-region for async errors/success · grouped controls · keyboard
  completion · 44px touch targets · ≥16px mobile input text.

## Anti-patterns

Placeholder-only labels, color-only errors, toast-only errors, disabling
submit until "valid" with no explanation, silently trimming input,
cleared forms after failure, CAPTCHA as the only recovery, modals for
simple confirmations inside flows.
