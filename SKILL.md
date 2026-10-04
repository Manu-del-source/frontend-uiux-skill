---
name: frontend-uiux
description: >-
  Master frontend UI/UX skill for designing, implementing, auditing,
  redesigning, and visually validating web interfaces. Handles UX,
  information architecture, visual direction, design systems,
  responsive layouts, accessibility, interaction design, Figma-to-code,
  screenshot-to-code, frontend implementation, and browser-based visual QA.
---

# frontend-uiux

A master orchestration skill that acts as UI designer, UX designer, frontend
engineer, design-system architect, accessibility reviewer, responsive-design
reviewer, interaction/motion designer, visual QA engineer, and Figma/screenshot
implementation assistant.

It adapts to the product (marketplace, ecommerce, SaaS, dashboard, POS,
analytics, admin, marketing, portfolio, productivity, data-heavy) instead of
forcing one visual style on every project.

- **SKILL.md** orchestrates.
- **references/** hold reusable knowledge — load only what the task needs.
- **workflows/** hold step-by-step procedures.
- **rules/** hold terse enforcement sheets (review/audit mode: cite rule IDs).
- **patterns/** hold screen-level pattern specs (auth, settings, app shell, data-viz).
- **checklists/pre-ship.md** is the final Definition-of-Done gate.

---

## 1. When to activate

Activate when the user asks to:

- build a UI / design a page / create a dashboard / create a component
- improve UI / make a frontend polished / make something look professional
- redesign a screen / improve UX / fix layout / fix responsiveness
- implement a screenshot / implement Figma / compare implementation against a design
- audit accessibility / audit UX / perform visual QA
- audit performance / Core Web Vitals / review copy (UX writing)
- build a design system

Do not activate for backend, data, or business-logic work unless it directly
affects an interface.

## 2. Inspect the project first

Before anything else, determine:

- framework (Next.js, Vite, CRA, Remix, etc.)
- language (TypeScript?)
- package manager (npm/pnpm/yarn/bun)
- routing system (app router, pages, file-based, react-router)
- styling system (Tailwind, CSS modules, vanilla-extract, styled-components)
- component library (shadcn/ui, MUI, Radix, Chakra, none)
- existing design tokens and existing design system
- fonts and icon library (lucide, heroicons, phosphor)
- testing tools and browser automation tools (Playwright, Puppeteer)
- Figma integration if available
- existing project conventions (file layout, naming, server/client patterns)

**Never introduce a second design system when one already exists.**

## 3. Determine the task type

Classify the request as one or more:

`NEW_INTERFACE` `EXISTING_INTERFACE` `REDESIGN` `UX_AUDIT`
`ACCESSIBILITY_AUDIT` `RESPONSIVE_AUDIT` `FIGMA_TO_CODE`
`SCREENSHOT_TO_CODE` `DESIGN_SYSTEM` `VISUAL_QA` `COMPONENT_IMPLEMENTATION`
`PERFORMANCE_AUDIT` `CONTENT_REVIEW`

If the classification is unclear, ask the user before proceeding.

## 4. Run Design Intelligence before implementation

Read `references/design-intelligence.md` and determine:

- product type · target users · primary user task
- information density · interaction model · primary conversion/action
- visual tone · brand constraints
- accessibility requirements · responsive requirements · technical constraints

## 5. Read only the relevant references

Do NOT load every reference. Pick by task type:

| Topic | Reference |
|---|---|
| Philosophy, tone, UX laws | `references/design-principles.md` |
| Pre-design analysis | `references/design-intelligence.md` |
| Look & feel, anti-generic | `references/visual-direction.md` |
| Type | `references/typography.md` |
| Color tokens, contrast | `references/color-system.md` |
| Spacing, grids, layout | `references/spacing-layout.md` |
| Breakpoints, mobile-first | `references/responsive-design.md` |
| Component anatomy/states | `references/components.md` |
| State matrix (all states) | `references/states.md` |
| Forms & validation | `references/forms.md` |
| Navigation patterns | `references/navigation.md` |
| KPIs, tables, charts | `references/dashboards.md` |
| Chart/plot specifics | `patterns/data-visualization.md` |
| Catalog, cart, checkout | `references/ecommerce.md` |
| WCAG 2.2 AA | `references/accessibility.md` |
| Motion | `references/animation-motion.md` |
| Flows, states, undo | `references/ux-patterns.md` |
| IA before styling | `references/information-architecture.md` |
| Tokens → components → patterns | `references/design-systems.md` |
| Dark mode, high contrast, themes | `references/theming.md` |
| Copy & content design | `references/ux-writing.md` |
| React/Next/Vite/TS/CSS/libraries | `references/frontend-engineering.md` |
| Performance, Core Web Vitals | `references/performance.md` |
| Rendered-screenshot QA | `references/visual-qa.md` |
| What to never do | `references/anti-patterns.md` |

## 6. Choose the appropriate workflow

| Task type | Workflow |
|---|---|
| NEW_INTERFACE | `workflows/new-interface.md` |
| EXISTING_INTERFACE | `workflows/existing-interface.md` |
| SCREENSHOT_TO_CODE | `workflows/screenshot-to-code.md` |
| FIGMA_TO_CODE | `workflows/figma-to-code.md` |
| UX_AUDIT | `workflows/ux-audit.md` |
| REDESIGN | `workflows/ui-redesign.md` |
| ACCESSIBILITY_AUDIT | `workflows/accessibility-audit.md` |
| RESPONSIVE_AUDIT | `workflows/responsive-audit.md` |
| PERFORMANCE_AUDIT | `workflows/performance-audit.md` |
| VISUAL_QA / regression | `workflows/visual-regression.md` |
| DESIGN_SYSTEM | `workflows/design-system-audit.md` |
| CONTENT_REVIEW | `references/ux-writing.md` § Process |

**Screen-level patterns**: load the matching file before building that
screen — `patterns/auth.md` (login/signup/reset/MFA),
`patterns/settings.md` (settings/profile), `patterns/app-shell.md`
(headers, page frames), `patterns/data-visualization.md` (charts).

**Review/audit mode**: when the task is review rather than build, use
the `rules/` sheets as the enforcement surface (cite rule IDs in
findings): `rules/accessibility-rules.md`, `rules/visual-rules.md`,
`rules/interaction-rules.md`, `rules/content-rules.md`,
`rules/engineering-rules.md`.

## 7. Design before coding

Before writing implementation code, establish:

information architecture → hierarchy → layout → typography → color → spacing →
component structure → states → responsive behavior → accessibility → motion

Do not immediately start writing JSX merely because the user asks for a page.
A one-line request still deserves a brief design pass on a non-trivial screen.

## 8. Reuse before creating

Search the project for existing components, tokens, patterns, layouts, hooks,
utilities, icons, and typography. Reuse compatible infrastructure; only create
new pieces when nothing suitable exists.

## 9. Implement using project conventions

**React/Next.js**

- TypeScript with precise types
- the existing component system and tokens
- semantic HTML first; ARIA only where semantics fall short
- accessible interactions (keyboard, focus, names)
- mobile-first responsive design
- correct server/client boundaries; avoid unnecessary `"use client"` and
  unnecessary dependencies
- details: `references/frontend-engineering.md`

**Tailwind**

- prefer the existing theme/tokens
- avoid arbitrary values when a token exists
- avoid duplicated utility patterns; extract repeated patterns into components

## 10. Design ALL meaningful states

Every important interactive component considers the full matrix in
`references/states.md`:

default · hover · focus-visible · active · disabled · loading · success ·
error · empty · partial · validation · selected · offline ·
permission-denied · destructive-confirmation · mobile behavior

## 11. Visual verification is mandatory when possible

If a running application and browser/screenshot tooling are available:

```
IMPLEMENT → RENDER → SCREENSHOT → INSPECT → IDENTIFY ISSUES → FIX → RENDER AGAIN
```

Never claim visual correctness from source code alone. See
`references/visual-qa.md`.

## 12. Responsive verification

At minimum inspect:

- mobile ~375px (e.g. 375×812)
- tablet ~768px
- desktop ~1280px (e.g. 1280×900)

Also test unusual content where relevant (long titles, missing images,
10× data volume, empty lists).

## 13. Accessibility

Target WCAG 2.2 AA where practical. Check: semantic HTML, keyboard
navigation, focus visibility, labels, accessible names, form errors, color
contrast, touch targets, reduced motion, screen-reader semantics, heading
hierarchy, landmarks, and status announcements where needed. Details in
`references/accessibility.md`.

## 14. Quality gates

Before declaring implementation complete, run all applicable:

- typecheck · lint · tests · build
- browser verification · visual verification
- performance spot-check where above-fold/interaction changed
  (`references/performance.md`)
- walk `checklists/pre-ship.md` (the consolidated Definition of Done)

Never hide or ignore failures. Report anything that could not run.

## 15. Final response

Report:

- what changed
- files changed
- design decisions (and why)
- responsive behavior
- accessibility work
- validation performed
- unresolved issues / verification that could not be performed

---

## Important engineering rules

- preserve existing functionality
- avoid unnecessary rewrites and unnecessary dependencies
- prefer existing components and tokens
- maintain TypeScript correctness
- respect framework conventions
- avoid accessibility regressions and avoid breaking API behavior
- avoid changing business logic when performing visual work
- separate design changes from unrelated refactors

When modifying an existing application:

**inspect → plan → change → validate**

Never blindly rewrite an entire page.

## Visual verification

If browser tooling exists, use it. For web projects prefer Playwright or
other browser automation: screenshots plus DOM inspection where useful.
Verify at 375×812, 768×(appropriate height), 1280×900.

When the page requires authentication: use an existing test account/session
if available; never expose, commit, or invent credentials or successful
authentication.

If browser tooling is unavailable, state that visual verification could not
be performed rather than pretending.

## Final quality gate

- [ ] Existing design system inspected
- [ ] Product context understood
- [ ] Information architecture considered
- [ ] Visual direction coherent
- [ ] Typography intentional
- [ ] Color semantic
- [ ] Spacing consistent
- [ ] Components reusable
- [ ] States implemented
- [ ] Responsive behavior verified
- [ ] Accessibility checked
- [ ] Loading/empty/error states considered
- [ ] Typecheck passes where applicable
- [ ] Lint passes where applicable
- [ ] Tests pass where applicable
- [ ] Build passes where applicable
- [ ] Visual verification performed where tooling exists
- [ ] No unrelated functionality broken
