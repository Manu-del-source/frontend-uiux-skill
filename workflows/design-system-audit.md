# Workflow: Design System Audit

```
tokens → components → variants → states → repeated patterns
→ inconsistencies → consolidate
```

## 1. Tokens
- Inventory raw values in code: hex/rgba, px/rem literals, radii,
  shadows, z-index, durations, font sizes.
- Map each to its role; group duplicates; identify missing semantic
  tokens and names used as synonyms (`accent` vs `highlight` vs `brand`).
- Check components consume semantic tokens only
  (`references/design-systems.md`).

## 2. Components
- List all components; find duplicates (3 button components = 1 with
  variants) and forks of library components.
- Check placement/naming conventions; dead or unused components.

## 3. Variants
- Variant matrix per component: are variants semantic or arbitrary?
  Is the same job rendered with different variants on different screens?
- Cap and consolidate; reject screen-local variants.

## 4. States
For each core component verify the full state matrix (default, hover,
focus-visible, active, disabled, loading, error, empty, selected as
applicable). Missing states are defects.

## 5. Repeated patterns
Search for recurring compositions (page header, filter bar, empty state,
stat tile, row actions) implemented N times → extract into pattern-level
components with tokens.

## 6. Inconsistencies
Compile the report:
- token violations (with file:line evidence)
- duplicate components / variant explosion
- missing states
- spacing/scale outliers (arbitrary values)
- typography role violations; raw colors
- a11y inconsistencies (focus styles, target sizes)

Each item: evidence · impact · consolidation recommendation.

## 7. Consolidate
Order: tokens → components → patterns → screens. Migrate incrementally
with re-verification at each step (visual QA + quality gates); keep old
APIs as aliases where a breaking rename isn't justified. Establish
guards (lint rules, review checklist) so duplication doesn't return.
