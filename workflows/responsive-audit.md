# Workflow: Responsive Audit

```
375 → 768 → 1280 → inspect → identify layout transformations → fix
→ retest
```

## 1. Capture at 375×812
Every key screen, with worst-case content (long titles, missing images,
many rows, zero rows). Check:
- horizontal page scroll (must be none)
- touch targets ≥44px; no hover-only interactions
- forms single-column, ≥16px inputs, correct mobile keyboards
- nav transformation (drawer/bottom nav) fully functional
- sticky bars don't cover content; safe areas respected

## 2. Capture at 768
- Grids 1→2→3 transition sane; sidebars → rail/drawer
- Tables: priority columns, stacked rows, or contained scroll
- Dialogs usable; spacing rhythm preserved

## 3. Capture at 1280×900
- Full layout intended; container widths correct; no stretched measures
- Density matches the product decision (not accidentally spacious)
- Multi-column alignment and section rhythm

## 4. Inspect
Run the RESPONSIVE sections of `references/visual-qa.md`:
- hierarchy reflows (not shrinks) — content priority per breakpoint
- typography steps handled; no clipped/overflowing text
- images maintain ratios; no CLS
- charts readable or honestly summarized

## 5. Identify layout transformations
List each place the layout must *change behavior* (sidebar→drawer,
table→stacked, nav→hamburger, multi→single column) and verify each has
an implemented, keyboard-accessible transformation. Missing
transformations are the commonest defect.

## 6. Fix
Project conventions; tokenized breakpoints; no device-specific hacks
without need. Preserve functionality and a11y at every size.

## 7. Retest
Re-screenshot all three viewports; re-walk the checklist; confirm no
regression at the other sizes (fixing 375 often breaks 1280). Report
results and anything unverifiable.
