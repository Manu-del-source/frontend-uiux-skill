# Design Principles

Framework-agnostic principles. No single philosophy is absolute — weigh them
against the product context from `references/design-intelligence.md`.

## Clarity
The interface should explain itself. Prefer obvious labels over clever ones,
predictable layouts over novel ones, and one clear reading order. If a user
must pause to understand what a control does, the design failed.

## Hierarchy
Not everything can be important. Establish what the eye should hit first,
second, third — then enforce it with size, weight, position, and contrast.
If every element shouts, nothing is heard.

## Restraint
Add only what earns its place. Every border, shadow, color, animation, and
badge must do work. Decoration that competes with content is a defect.

## Consistency
Same intent → same pattern → same place. Consistency lets users transfer
learning between screens. Inconsistency is a silent tax on every task.

## Usefulness
The interface exists to accomplish a job. Features that don't serve a user
job are weight. Measure success by tasks completed, not screens shipped.

## Affordance
Controls should look interactive in the way they behave. Text that looks
like a link should link; boxes that look clickable should click; disabled
must read as unavailable, not broken.

## Feedback
Every action produces a visible response within ~100ms (immediate) and a
clear completion signal (fast). Hover, press, loading, success, failure —
silence after an action is a trust leak.

## Progressive Disclosure
Show what's needed now; reveal the rest on demand. Hide complexity, don't
delete it. Advanced options belong behind disclosure, not on the first screen.

## Visual Rhythm
Repeated spacing intervals and aligned edges create calm. Rhythm comes from
a spacing scale and a type scale — not from eyeballing each screen.

## Content-First Design
Design around the real content: longest titles, worst-case data, missing
images, zero items. Layouts that only work with lorem ipsum are untested.

## Intentional Whitespace
Empty space groups, separates, and directs. Whitespace is a tool, not a
mistake — but it must be systematic (spacing scale), not random.

## Honest UI
Never fake what the product does. No disabled-looking enabled buttons, no
fake progress, no metrics that don't mean what users think they mean, no
dark patterns dressed as helpfulness.

## Contextual Design
The right answer depends on the product:

- A **POS** favors density, large touch targets, speed, and glanceability.
- An **analytics dashboard** favors hierarchy, comparison, and scannability.
- A **marketplace** favors discovery, trust, and product imagery.
- A **marketing site** favors narrative, emotion, and a single clear CTA.

Do not give all four the same density, radius, shadow, or type treatment.

## Evidence base: laws & heuristics that change decisions

Name a principle only when it changes what you build:

| Principle | Decision it drives |
|---|---|
| **Fitts's Law** | Primary targets bigger and closer; reduce travel between coupled controls (quantity stepper next to cart action); ≥44px on touch. |
| **Hick's Law** | Fewer simultaneous choices: trim nav items, collapse option sets behind disclosure/defaults, wizard-split long forms. |
| **Jakob's Law** | Follow platform conventions for the *category* (checkout looks like checkout); spend novelty budget on brand, not on interaction mechanics. |
| **Miller's Law** | Chunk related items (5±2 per group) — grouping and progressive disclosure over long flat lists. |
| **Nielsen's 10 heuristics** | Visibility of system status → feedback rules; match real-world → user-side language (`rules/content-rules.md`); user control & freedom → undo/exit; consistency → one term per concept; error prevention → `references/forms.md`; recognition over recall → visible controls over memory; flexibility → shortcuts + defaults; aesthetic & minimalist → restraint; help/diagnostics → actionable errors; recovery → retries and graceful failure. |
| **Jakob+error-prevention combined** | Destructive actions: undo > confirm > report (`references/ux-patterns.md`). |

If citing a law doesn't change a concrete choice on this screen, drop
the citation — name-dropping is not analysis.

## Applying principles

When principles conflict (clarity vs. restraint, consistency vs. contextual
fit), resolve by asking: *which choice better serves the primary job of this
product for these users?* Document the tradeoff in the design decision notes.
