# Workflow: Visual Regression

```
baseline screenshot → implementation screenshot → compare
→ identify changed regions → determine intentional/unintentional
→ fix → retest
```

## 1. Baseline screenshot
Screenshot the *known-good* (pre-change) UI at every required viewport
(375×812, 768, 1280×900) with deterministic content: fixed viewport,
same data, animations disabled/settled, fonts loaded, scroll at top.
If a baseline exists from a prior run, reuse it — same conditions.

## 2. Implementation screenshot
After the change, capture with **identical** conditions. Any difference
in conditions (data, font, size, timing) invalidates the diff — normalize
first.

## 3. Compare
Side-by-side per viewport; if tooling supports pixel/diff overlay, use
it; otherwise region-by-region visual review: layout, spacing,
typography, color, alignment, imagery, overflow, states.

## 4. Identify changed regions
List every delta with location and screenshot crop. Classify each:

- **Intentional** — matches the task's requirements; expected.
- **Unintentional** — side effect: shifted spacing, changed font,
  broken focus ring, wrapped text, missing state, moved control.
- **Unknown** — cannot attribute; investigate (usually a token or
  cascade change).

## 5. Decide
Confirm intentional changes with the user if the request didn't specify
them. Unintentional deltas must be fixed — not waived because "the build
passes."

## 6. Fix
Root-cause the delta (token, cascade, layout, content) — never patch the
symptom with arbitrary values.

## 7. Retest
New screenshots → diff again → repeat until only intended deltas remain.
Then run quality gates (typecheck/lint/tests/build) and, where the
project supports it, save the new baseline.

Report: baseline vs. final, delta list with classification, fixes made,
and any accepted differences.
