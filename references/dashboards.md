# Dashboards

A dashboard answers: *what is happening, what needs attention, what do I do
next?* It is not a collection of tiles.

## Information hierarchy

1. **Headline KPIs** — 3–5 metrics that define health; only those.
2. **Trends/comparison** — the shape of change over time.
3. **Detail** — tables and drill-downs for the "why".
4. **Actions** — what to do about it, contextual to what's shown.

Arrange by priority (top-left first), not by equal-sized grid slots.
Primary metric may be larger; subordinate data can be a list or table.

## KPIs

- Each KPI: label, value (tabular figures), period, comparison (vs.
  prior / vs target) with direction, and semantic color + arrow icon
  (never color alone; define whether up is good per metric).
- Sparkline optional; don't add a chart that says nothing new.
- Metric definition available (tooltip/info) — ambiguity kills trust.
- 4–6 KPIs max in the top row; more = none are priorities.

## Tables

- The workhorse of data-heavy apps: sortable, filterable, paginated or
  virtualized, sticky header, row density from `references/spacing-layout.md`.
- Column set = decision-relevant fields; put the identity column first,
  numbers right-aligned, actions in a kebab/inline at the end.
- Row click → detail (with keyboard support on the row link); selection →
  bulk actions.
- Loading: skeleton rows; empty: purposeful empty state.

## Charts

- Choose by question: line (trend), bar (comparison), stacked bar
  (composition over time), pie/donut only for ≤3 parts of a whole,
  scatter (correlation), single big number (no comparison needed).
- Label directly where possible; legends only when necessary.
- Colorblind-safe series + redundant encoding; ≥3:1 between series.
- Axis starting at 0 for bars; truncated axis disclosed for lines.
- Show units, currency, and time zone; format numbers per
  `references/typography.md`.
- Empty/zero/error data states are mandatory — a blank chart frame is a
  bug.
- Never chart for decoration; if the chart doesn't change a decision,
  remove it.

## Filters

- Visible filter bar for frequent filters; drawer/panel for long tails.
- Active filters shown as removable chips with a "Clear all".
- Filter state in the URL (shareable, restorable on refresh).
- Apply instantly for cheap queries; debounce search; show result counts.

## Date ranges

- Preset ranges (Today, 7d, 30d, MTD, QTD, custom) with the current
  range always visible on the page.
- Comparison range explicit ("vs previous period"); relative dates show
  absolute tooltips ("Last 7 days: Oct 1–7").
- Time zone disclosed when it affects numbers.

## Drill-downs

- Every aggregate should be traceable to its underlying records —
  clicking a KPI/chart segment filters the detail table below (or opens
  a detail view), and the breadcrumb/back behavior is obvious.
- Keep the user's context (filters, range) when drilling.

## Empty states

(General rules: `references/states.md` — dashboard-specific below.)

- Distinguish: no data yet (guide to first action), no results (clear
  filters), no permission (explain), all-clear (positive state).
- Always give the next step.

## Loading

- Skeletons mirroring layout (no spinner-in-a-card everywhere);
  progressive reveal is fine — KPIs first.
- Refreshes keep previous data visible with a subtle updating indicator
  (avoid flashing empties).

## Data density

- Density is a product decision: monitoring walls and POS can be dense;
  exec dashboards breathe (see `references/design-intelligence.md`).
- Offer row-density control in tables for mixed users, defaulting to the
  product's decision.

## Responsive behavior

- KPI row wraps 4→2→1; charts stack full-width; tables use priority
  columns/stacking (`references/responsive-design.md`).
- Mobile shows the "check" use case (top KPIs, alerts, quick actions),
  not the full editing workstation.
- Charts need readable minimum sizes — if it can't be read at 375px,
  show a summary + "view on desktop" only when unavoidable.

## Avoid card soup

Equal-weight tiles of unrelated metrics with charts nobody reads is the
default failure mode. See `references/anti-patterns.md` § card soup / dashboard
overload — group by question, use sections and full-width tables, and
delete anything that doesn't inform an action.
