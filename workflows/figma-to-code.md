# Workflow: Figma to Code

```
Inspect Figma → identify frames → tokens → components → variants
→ typography → spacing → responsive intent → map to existing code
→ implement → visual QA
```

## 1. Inspect the Figma source
Available via MCP/plugin/exported images? Determine what you actually
have: which frames, which breakpoints, which states/variants, prototype
links, and whether the file uses a component library or detached
one-offs. Ask for missing frames rather than guessing.

## 2. Identify frames
Map frames → routes/screens. Note desktop/mobile/tablet sets and any
dev-mode annotations.

## 3. Extract tokens
From the design: color styles/variables, type styles, spacing, radii,
shadows, effects → convert into **semantic** tokens matching the
project's existing set (`references/design-systems.md`). Never import
raw Figma names (`grey/100`) into components — map roles.

## 4. Identify components & variants
Match Figma components to existing code components (prefer reuse).
Build a mapping table: `Figma component + variant → code component`.
New variants require a reason; don't fork existing ones.

## 5. Typography
Map text styles to type roles; check scale, weights, line heights,
letter spacing, and responsive sizes (`references/typography.md`).

## 6. Spacing
Measure margins/padding/gaps; snap to the project's spacing scale; if
Figma uses off-scale values, flag them rather than creating arbitrary
utilities (`references/spacing-layout.md`).

## 7. Responsive intent
Desktop-only frames ≠ desktop-only UI. Infer behavior: how nav collapses,
which columns stack, what priority order — and state the inference.
Flag anything you're unsure about for the user.

## 8. Map to existing code
Route structure, server/client boundaries, tokens, conventions. Confirm
the design's features actually exist in the product (no inventing APIs).

## 9. Implement
Semantic HTML, accessible interactions, all states (Figma usually shows
only default — design hover/focus/disabled/loading/empty/error).

## 10. Visual QA
Screenshot at matching viewports; overlay/compare against the Figma
frame; iterate. Run quality gates. Report deltas and inferred decisions
honestly.
