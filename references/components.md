# Components

Generic anatomy and rules. **Prefer the project's existing component
library (shadcn/ui, Radix, MUI…) and its variants before writing any new
component.** For each component define: anatomy, variants, states,
accessibility, responsive behavior, when to use, when NOT to use.

Universal state set: default · hover · focus-visible · active · disabled ·
loading · error/selected as applicable.

## Buttons

- **Anatomy:** label (+optional leading icon, trailing icon/spinner).
- **Variants:** primary (one per view region), secondary/outline, ghost,
  destructive, link; sizes sm/md/lg; full-width on mobile forms.
- **States:** hover, focus-visible ring, active, disabled (not-allowed +
  reduced contrast), loading (spinner + `aria-busy`, keep width stable,
  prevent double submit).
- **A11y:** real `<button>` (or `role="button"` + key handlers), accessible
  name = action text; icon-only needs `aria-label`; never a div.
- **Responsive:** wrap button groups; primary action remains visible/first
  on mobile.
- **Use for:** actions. **Not for:** navigation (use links), toggling
  (use switch/segmented control).

## Inputs

- **Anatomy:** label, field, optional description, optional affixes
  (icons, units), error text.
- **States:** empty, filled, hover, focus (ring), invalid, disabled,
  read-only (distinct from disabled), autofill.
- **A11y:** visible `<label for>`; `aria-describedby` for description and
  error; `aria-invalid`; error text not color-only; don't rely on
  placeholder as label.
- **Responsive:** full width on mobile; ≥16px font to avoid iOS zoom.
- **Use for:** free text/number/date entry. **Not for:** 3–7 fixed options
  (select/radio), single on/off (switch).

## Selects

- Native `<select>` for long lists and mobile-first simplicity; custom
  listbox when search, multi-select, or rich options are needed.
- Keyboard: arrows, type-ahead, Enter/Escape; combobox pattern when
  editable. Announce result counts.
- Never build a custom dropdown for plain option selection without a
  reason.

## Checkboxes / radios

- Checkbox = independent multi-select; radio = mutually exclusive set
  (consider segmented control for 2–3 short options).
- Group with `<fieldset>`/`<legend>` or `role="radiogroup"` + label.
- Hit area includes label text; large labels help on touch.
- Indeterminate checkbox for "some selected" parent states.

## Switches

- Immediate effect on/off (no Save needed). If the change needs commit,
  use a checkbox.
- `role="switch"` + `aria-checked`; label states the setting, not the
  state ("Notifications" not "On").

## Cards

- Container for a related unit: optional media, title, meta, actions.
- Consistent radius/border/elevation per card role; one card style per
  screen.
- Whole-card click → make the title a link and keep inner actions
  independent (nested interactive elements must not collide).
- **Avoid card soup** — see `references/anti-patterns.md`; use sections/rows/tables
  when cards add no grouping value.

## Tables

- Anatomy: header (sort), rows, cells, optional row actions, selection,
  sticky header, pagination.
- Sortable headers: `aria-sort`, real buttons.
- Selection: checkboxes with row click avoidance; bulk actions appear on
  selection and are keyboard reachable.
- Numeric right-aligned + tabular figures; truncate with tooltip/full
  value available.
- Responsive: see `references/responsive-design.md` § Tables.
- Empty/loading: skeleton rows matching row height; empty state message.

## Tabs

- `role="tablist"/"tab"/"tabpanel"` with arrow-key navigation and
  `aria-selected`; activation on focus for cheap panels, on Enter for
  expensive ones.
- Overflowing tabs → scrollable strip or "more" menu.
- Use for sibling views of one context; not for steps (use a stepper).

## Dialogs

- Native `<dialog>` or managed modal: focus moves in, is trapped, returns
  on close; Escape closes (unless destructive-in-progress); scroll locked;
  labelled by title; `aria-modal`.
- Backdrop scrim; click-outside closes non-critical dialogs only.
- Mobile: bottom sheet/full-screen (see responsive).
- **Use for:** decisions that block the flow. **Not for:** everything —
  see `references/anti-patterns.md` § modal overload.

## Drawers / sheets

- Side panel for secondary detail (filters, edit, preview) preserving
  context. Same focus rules as dialogs; confirm on discard of dirty state.

## Dropdowns / menus

- `role="menu"` pattern only for action menus; arrow keys, Home/End,
  type-ahead, Escape returns focus to trigger.
- For option selection use listbox/combobox patterns instead.
- Avoid nested menus; max one level.

## Tooltips

- Supplementary info on hover **and** focus; dismissible (Escape), never
  contain interactive content or essential-only info; `role="tooltip"` +
  `aria-describedby`. Touch: don't rely on hover; use long-press or
  persistent text.

## Badges

- Short status/labels: count, state, tag. Not navigation (chips-as-links
  need link styling + focus).
- Color + text/icon (never color alone). Limit variants per screen.

## Alerts / toasts

- Inline alert = persistent, in context, with appropriate `role="alert"`/
  `status`. Toast = transient confirmation, `role="status"`, 4–8s,
  pause on hover/focus, dismissible, stack limit 3.
- Errors that require action stay inline; toasts are not for errors the
  user must fix.

## Avatars

- Image with `alt` (or initials + accessible name of the person); groups
  need `aria-label` summarizing members; fallback color contrast for
  initials.

## Pagination

- For large sets: numbered or prev/next + page size; `nav` + current page
  `aria-current="page"`. Infinite scroll: provide a fallback and announce
  loaded counts.
- Small sets: prefer progressive reveal or none.

## Breadcrumbs

- `nav aria-label="Breadcrumb"` + ordered list; last item `aria-current`.
- Truncate middle segments on mobile; never replace the page `h1`.

## Command menus (⌘K)

- Supplement visible navigation; combobox semantics; indexed search;
  keyboard-only discoverability documented in empty state.
- Must include the same core actions as visible UI — never the only path.

## Skeletons

- Match final layout dimensions to avoid shift; `aria-hidden` +
  surrounding live/loading semantics; avoid shimmer for reduced motion.
- Use for known-shape content; use spinners for indeterminate short waits.

## Loaders

- Inline spinner for <1s operations; progress bar when total is
  estimable; skeleton for content. Announce via `aria-busy`/live region
  for longer waits. Never block the whole page for a local action.

## When NOT to invent

If the library already has it and meets a11y needs, extend its variant —
don't fork. New primitives are justified only when no compatible
infrastructure exists (see SKILL.md § 8).
