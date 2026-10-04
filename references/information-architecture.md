# Information Architecture

**Before styling a complex screen, understand what information and actions
actually belong there.** Most "UI problems" are IA problems wearing
layout.

## Content hierarchy

- Inventory: every piece of content and every action on the screen.
- Rank by user job (`references/design-intelligence.md`): primary, secondary,
  tertiary, omit.
- Primary = largest/most prominent placement; everything else must earn
  its rank. If two things are "most important," neither is.
- Separate content from chrome: labels, statuses, and metadata don't
  compete with the task.

## Navigation hierarchy

- Top level = user mental model, not org chart or route structure.
- Depth ≤ 3 visible levels; deeper data uses drill-down/progressive
  disclosure, not deeper menus.
- Every level answers "where am I?" (trail, active state, heading).

## User mental models

- Use the words users use ("Orders", not "Fulfillment entities").
- Mirror conventions from the domain (familiar verbs, familiar order of
  fields: name → contact → address).
- Test with: "where would you click to ___?" — mismatches are IA bugs.
- Resist internal/technical naming in the UI.

## Grouping

- Proximity = relationship; whitespace and section headers formalize it.
- One primary grouping scheme per screen (by object, by task, by time —
  pick one); multiple overlapping schemes create confusion.
- Related actions live with their object (row actions, context toolbar).

## Labeling

- Short, specific, parallel structure ("Add product", "Add discount").
- One term per concept across the product (order/checkout/purchase —
  choose one for one thing).
- Avoid jargon, ambiguity ("Manage" tells nothing), and label/control
  mismatch.
- Menu labels must cover their contents (no "Misc", "Other" at top level).

## Discoverability

- Primary tasks visible without hunting; secondary within one interaction;
  tertiary via search/command menu.
- If a feature needs a tooltip to be found, it's buried.
- Don't hide core actions behind hover-only or icon-only affordances
  without labels.

## Progressive disclosure

- Default shows the common path; advanced/options revealed on demand and
  remembered where it helps (see `references/ux-patterns.md`).
- Disclosure must not hide required information or status.

## Task flows

- Map the flow before screens: entry → steps → decision points → success
  → recovery.
- Count steps; every step must be necessary. Merge, defer, or automate
  what isn't.
- Define failure branches: cancel, back, partial completion, timeout,
  permission denied.
- For repeated daily tasks: minimize steps and clicks (keyboard, saved
  defaults, bulk).
- Write the happy path first, then the unhappy paths — the unhappy paths
  are where IA breaks.

## Page hierarchy

- One `h1` = the page's job; sections as `h2+` matching content groups.
- F pattern for scanning-heavy pages, single column for reading; primary
  action above the fold where the job suggests immediate action.
- Cross-links: "related objects" placed in context, not dumped in a
  footer widget farm.

## Process

1. List content + actions.
2. Rank by the primary job.
3. Group by user mental model; name groups in user language.
4. Draft flows (happy + unhappy).
5. Choose layout patterns that fit (table? workflow? dashboard?).
6. Only then style (`references/visual-direction.md`).
