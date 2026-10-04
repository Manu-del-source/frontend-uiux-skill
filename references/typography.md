# Typography

Type carries most of the interface. Get it right before color or motion.

## Font selection

- Choose by job: text faces for reading, neutral grotesks for UI, monospace
  for data/code, display faces sparingly for brand.
- Pair by contrast of role, not novelty: a text face + a UI face, or one
  family across weights.
- Consider script coverage, numerals (tabular), and performance (variable
  fonts, `font-display: swap`, subset to used glyphs).
- No universal pairing — pick from brand constraints first.

## Type scale

Use a scale (major 1.2–1.25 for UI, up to ~1.33 for editorial), not
arbitrary sizes. A practical UI scale:

```
12 · 14 · 16 · 18 · 20 · 24 · 30 · 36 · 48
```

Map to semantic roles (see `references/design-systems.md`): `text-xs` caption,
`text-sm` secondary, `text-base` body, `text-lg` lead, `text-2xl`+ page
titles. Avoid using more than ~2 sizes per screen region.

## Hierarchy

Hierarchy = size + weight + color + case + spacing, in that budget.
Headings must be unmistakably larger/heavier than body. Do not use color
alone to signal importance.

## Line height

- Body: 1.5–1.7 (looser for long-form reading).
- Headings: 1.1–1.3 (tighter as size grows).
- UI labels/controls: 1.2–1.4.
- Never set line-height: 1 on multi-line text.

## Weight

3–4 weights max per product (e.g. 400/500/600/700). Reserve bold for
hierarchy and emphasis; bold-everything flattens hierarchy.

## Letter spacing

- Slightly negative on large display headings.
- Neutral at body sizes.
- Slightly positive on small uppercase labels (and never long uppercase
  strings).

## Readable line lengths

- 45–75 characters ideal for prose; hard cap ~80ch.
- UI text can be shorter; tables and data views are exempt.
- Centered paragraphs beyond 2 lines are hard to read — left-align.

## Numeric typography

- Tabular figures (`font-variant-numeric: tabular-nums`) for tables,
  dashboards, prices, timestamps — columns must align.
- Consistent decimal and currency formatting.
- Abbreviate large numbers consistently (12.4K, $1.2M) with the full
  value available on hover/title where it matters.

## UI labels

- Buttons, tabs, nav: sentence case by default; ALL CAPS only for short
  eyebrows/tags with added tracking.
- Labels are task language ("Save changes"), not system language
  ("Submit record").
- Keep labels short and parallel in structure.

## Headings

- One `h1` per page; sequential heading levels without skipping.
- Headings describe content, not styling.
- Marketing pages may be expressive; app screens should be plain.

## Responsive typography

- Prefer clamp() or token swaps over hard jumps; avoid text that scales
  linearly with viewport (can explode on wide screens).
- Mobile: reduce display sizes more than body sizes — body should stay
  ≥16px on mobile (also aids iOS zoom-on-focus in inputs).
- Never let headings overflow at 375px with real content.

## By product type

| Product | Guidance |
|---|---|
| **Marketing** | expressive display type, big scale contrast, tight leading on headlines, generous body leading |
| **SaaS** | neutral UI grotesk, moderate scale, one accent weight for CTAs |
| **Dashboards** | compact scale (12–14px labels OK), tabular numerals, strong KPI sizes |
| **POS** | large touch labels, high legibility at arm's length, minimal weights |
| **Analytics** | tabular figures, monospace acceptable for codes/IDs, clear axis labels |
| **Ecommerce** | price hierarchy ≥ product name hierarchy in lists; readable descriptions on PDP |
| **Long-form/content** | text face, 16–18px+, 65ch measure, generous leading |
