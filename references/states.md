# States (State Engine)

Canonical home for component/page states. Other references link here;
domain-specific notes stay in their own files. The common AI failure is
designing only the happy path — every interactive element is incomplete
until all applicable states below exist.

## The full matrix

For each interactive component or data region, walk this list and mark
each state **N/A (with reason)** or define it:

| Group | States |
|---|---|
| Pointer | default · hover · active/pressed · focus-visible |
| Availability | disabled · read-only · loading · busy |
| Value | empty · partial · filled · invalid · validation-pending |
| Outcome | success · error · offline · permission-denied |
| Selection | selected · expanded/collapsed · current/active |
| Risk | destructive-confirmation · undo-window |
| Device | touch (no hover) · small-viewport variant |

## Rules per state

- **default** — the resting design; must already show purpose
  (affordance) without hover.
- **hover** — desktop-only enhancement; never the only way to discover
  an action; don't move layout on hover.
- **focus-visible** — required on every focusable element, ≥3:1 ring,
  never removed without replacement; identical meaning across all
  components (one token).
- **active** — immediate press feedback (≤150ms); scale or surface
  shift; must not be the only confirmation of a completed action.
- **disabled** — explain *why* where the user can act on it (tooltip or
  adjacent text); distinguish from read-only; still perceivable;
  not used to dodge loading states (prefer loading).
- **read-only** — value visible/selectable but not editable; must not
  look broken; used for permissions and computed values.
- **loading** — preserve layout dimensions (no shift); button keeps
  width, shows spinner + `aria-busy`, blocks double submit; skeleton for
  content-shaped waits, spinner <1s, progress when total is estimable.
  Prior data stays visible during refresh.
- **empty** — four variants, each with a next action:
  first-use (what this is for + primary CTA) · no-results (recovery:
  clear filters/adjust query) · all-clear (positive confirmation) ·
  permission (explain). Never a bare illustration.
- **partial** — data that hasn't arrived or is a subset: show what you
  have, label what's missing ("Last synced 2h ago"), never present
  partial data as complete.
- **invalid** — inline at the field: what's wrong + how to fix,
  `aria-invalid`, linked via `aria-describedby`; appears on blur/submit,
  then live; never color-only; never clears entered values.
- **success** — confirm what happened and what's next (inline check,
  `role="status"` toast, or state change); the action name carries
  through ("Publish" → "Published"); persists long enough to read (≥4s).
- **error** — distinguish validation / network / permission / not-found;
  state impact + recovery path + reference ID where relevant; errors
  requiring action live inline, not only in a toast; retain user input.
- **offline** — detect and say so; queue or block explicitly (never
  silently fail); show stale data marked stale; reconnect feedback.
- **permission-denied** — explain what's missing and who can grant it;
  don't render actionable controls the user can't use; distinguish from
  "doesn't exist".
- **destructive-confirmation** — name the object, state consequences,
  safe action focused first, destructive styled as destructive; skip
  confirmation when undo is offered instead.
- **undo-window** — after reversible destructive actions: 5–10s toast
  with Undo that restores full state (including position/filters).
- **selected** — never color alone: add check/border/weight; visible
  for keyboard and touch, not just mouse.
- **touch** — hover states have tap equivalents; targets ≥44px; press
  feedback on touch; no information that requires hovering.

## Page-level states

Every data-driven page also needs: initial load (skeleton matching final
layout) · refresh (keep old data + subtle indicator) · empty · error
(with retry) · offline banner · permission (role gate) · not-found
(404-style with routes back) · stale data (timestamp).

## Implementation notes (React/Next.js)

- Model states explicitly (union types / status enums), not boolean
  soup: `type Status = "idle" | "loading" | "empty" | "error" | "ready"`.
- Derive UI from the state machine; never scatter
  `if (loading && !error && !empty)` across JSX.
- Server components get their loading/error states from the framework
  (`loading.tsx`, `error.tsx`); client components own their own.
- Test the matrix: at minimum loading, empty, and error paths get
  coverage; visual QA screenshots one non-happy state per component.

## Verification

In visual QA (`references/visual-qa.md`), for each key component capture:
default, one pointer state, focus-visible, and its loading/empty/error
where applicable. Report states that could not be rendered as
unverified — never assume.
