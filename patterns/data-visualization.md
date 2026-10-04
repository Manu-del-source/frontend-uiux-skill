# Pattern: Data Visualization

Chart/plot pattern language for analytics, dashboards, and reports.
Container-level rules (placement, KPI rows): `references/dashboards.md`.
Color tokens: `references/color-system.md`.

## Purpose
Answer a question the reader can state: compare, trend, composition,
distribution, relationship. If no question — no chart.

## Choosing the form
| Question | Form | Avoid |
|---|---|---|
| Trend over time | line (area only for volume-from-zero) | pie |
| Comparison across categories | bar (horizontal if labels long) | truncated-axis bars |
| Composition of a whole, ≤3 parts | single stacked bar / donut | >5 slices |
| Composition over time | stacked bar | stacked area with many series |
| Distribution | histogram, box, violin | bar of raw values |
| Relationship/correlation | scatter, bubble | dual-axis lines |
| Single KPI | big number + delta | donut for one metric |
| Geodata | choropleth/hexbin with legend | unclassed color ramp |

## Anatomy
- **Plot**: axes with units, gridlines subtle (below data in
  contrast), baseline at 0 for bars.
- **Labels**: direct-label ≤4 series; legend only when needed;
  annotations for the event that explains a spike.
- **Title**: states the takeaway ("Signups up 18% WoW"), subtitle
  carries scope/window.
- **Footer**: source, time window, time zone, last-updated.

## Data rules
- Tabular figures everywhere (`references/typography.md`).
- Missing data is visible (gap, hatched band, "no data" segment) —
  never interpolated silently.
- Sort deliberately (magnitude for ranking, time for series); zero
  baseline for bars; truncated axis disclosed for lines.
- Numbers formatted once (compact 12.4K) with full value on
  hover/focus/tooltip or the underlying table.
- Comparisons explicit: vs previous period vs target — labeled.

## Color
Categorical palette from tokens, colorblind-safe order, ≥3:1 between
series; **redundant encoding** (shape/dash/pattern/label) for anything
critical; semantic red/green only when the domain truly means
loss/gain — otherwise diverging palette with labeled midpoint; status
colors never used decoratively. Never encode by color alone
(`rules/accessibility-rules.md` A2).

## States
loading (skeleton chart matching final size — no spinner-in-frame for
known-shape data) · empty ("No data for this period" + adjust-CTA) ·
zero (render the zero honestly) · error (retry inline) · partial
(partial window labeled) · no-permission (explain) · stale
(updated timestamp) · hover/focus (highlight + tooltip with full
precision) · selected (click-through to drill-down where applicable).

## Responsive
≥1024 full layout; 768 fewer columns, same charts; ≤768 charts
stacked full-width, legends collapse below, **readability floor**: if
axis labels can't render legibly at 375px, show a sparkline + summary
+ table alternative instead of a crushed chart. Horizontal scroll for
charts is a last resort inside a clearly scrollable container.

## Accessibility
- Chart has an accessible name + description of the takeaway.
- **Provide the data behind the chart**: adjacent or linked table
  (`<table>` with headers) or data download — this is the primary
  screen-reader path.
- SVG/`role="img"` + `aria-label` for static; interactive charts:
  keyboard traversal (arrow between points/series), tooltips on focus,
  announced values (polite live region, debounced).
- Pattern/label redundancy; contrast on data marks ≥3:1 vs
  background; dark-theme re-verify; reduced-motion: no animated
  grow-in required to perceive data (final state immediate).

## Interaction
Hover/focus crosshair with values; legend toggle series (state
persisted in URL with other filters); click-to-drill keeps filter
context; brush/zoom only when the dataset genuinely warrants it;
export (PNG/CSV) where the audience needs it.

## Implementation notes
Prefer the project's existing chart library (Recharts/Chart.js/
visx/ECharts…) and its defaults before styling. Render server-side
where the framework allows (static PNG/SVG or streamed SVG) to cut
client JS; virtualize only for genuinely large point counts; memoize
series transforms; never fabricate smooth curves through sparse data.
