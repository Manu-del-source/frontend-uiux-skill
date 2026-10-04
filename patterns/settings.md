# Pattern: Settings & Profile Screens

Screen-level pattern for account, profile, preferences, billing, and
team settings. Forms: `references/forms.md`. IA:
`references/information-architecture.md`.

## Purpose
Let users change their mind safely: find a setting fast, understand
its effect, apply it without fear.

## Anatomy
1. **Settings shell**: page `h1` + optional search (settings search is
   the hidden gem for 30+ options); section navigation; content pane.
2. **Section layout**: groupings with `h2`/`h3` mirroring nav;
   repeated rows: label + description + control.
3. **Row patterns**: switch (immediate effect) · inline editable
   value · "Edit" opening a form/drawer · value + chevron to
   sub-page · destructive row (separated, red, own section).
4. **Save model** (pick one, apply everywhere): immediate-apply
   (switches) **or** explicit Save with dirty-state indicator **or**
   auto-save with status ("Saved 12:04"). Mixed models confuse.

## Grouping
By user mental model, not settings-schema: Profile / Notifications /
Security / Billing / Team / Advanced. Danger zone only for genuinely
destructive items (delete account, transfer ownership), with typed
confirmation or equivalent friction proportional to impact.

## When to use / NOT to use
Use for configuration surfaces. Do NOT: bury required settings in
modals, use dropdowns for on/off, spread the same option across two
locations, or hide team/billing where admins expect them.

## States
loading (skeleton rows) · loaded · no-changes · dirty (unsaved marker
+ leave-page guard) · saving · saved (quiet confirmation) · save-error
(preserve values, inline + retry) · permission-limited (read-only
values with "Ask an admin" explanation — hide or disable per
`references/states.md` A-permission rules) · feature-not-available
(plan gating explained, not hidden) · empty sub-section (e.g. no
custom fields yet → add CTA).

## Responsive
≥1024: side nav + content. 768–1024: top tabs or collapsible nav.
≤768: nav becomes selectable list or stacked sections; rows stack
(label above control); switches stay ≥44px hit height; sticky Save
when explicit-save model.

## Accessibility
- Settings nav = `nav` with `aria-current`; each section reachable;
  skip-to-content works.
- Switches: `role="switch"` + `aria-checked`, labelled by the setting
  name (not the state); grouped options use radio groups/fieldsets.
- Save status announced (`role="status"`); errors linked to fields;
  typed confirmation for danger zone has clear instructions + labeled
  input.
- Destructive vs. safe actions visually and textually distinct; focus
  order follows visual order.

## Interaction
Search filters sections live (announce result count); dirty-state
guard on navigation; optimistic apply for switches **with rollback**
on failure; timezone/locale pickers preview their effect; avatar
upload shows preview + size/format errors inline.

## Implementation notes
Settings are URL-addressable: deep-link sections
(`/settings/billing`) with `aria-current` sync. Preferences that
affect layout (density, theme) apply immediately and persist via the
project's session/user store — never re-implement a second source of
truth. Sensitive changes (email, password) re-authenticate
server-side; billing rows defer to the payment provider's secure
fields (never touch card data yourself).
