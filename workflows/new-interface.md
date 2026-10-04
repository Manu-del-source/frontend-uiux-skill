# Workflow: New Interface

```
Understand → Design Intelligence → IA → Visual Direction → Tokens
→ Components → Implementation → Responsive → Accessibility → Visual QA
```

## 1. Understand
Restate the request: which screens, which product, which job. Ask only
what genuinely blocks design. Inspect the project (SKILL.md § 2).

## 2. Design Intelligence
Complete `references/design-intelligence.md`. Output a ≤10-line brief:
product, user, job, density, primary action, tone, constraints.

## 3. Information architecture
`references/information-architecture.md`: inventory content + actions,
rank them, group by mental model, draft happy/unhappy flows. Skip only
for trivial single-widget screens.

## 4. Visual direction
`references/visual-direction.md`: write the one-sentence direction
(adjectives + density + type character + palette character).

## 5. Tokens
Align with existing tokens first (never add a second system). If none
exist, define minimal semantic tokens: color, type roles, spacing, radii
(`references/color-system.md`, `references/typography.md`, `references/spacing-layout.md`,
`references/design-systems.md`).

## 6. Components
List required components; reuse existing ones (SKILL.md § 8). Define
variants/states for genuinely new ones (`references/components.md`).

## 7. Implementation
Semantic HTML, TypeScript, project conventions, mobile-first, minimal
client components. Design ALL states (SKILL.md § 10).

## 8. Responsive
Verify 375 / 768 / 1280 with worst-case content; hierarchy reflows, not
shrinks (`references/responsive-design.md`).

## 9. Accessibility
Keyboard pass, focus, names, contrast, headings/landmarks, reduced motion
(`references/accessibility.md`).

## 10. Visual QA
Screenshot → inspect `references/visual-qa.md` checklist → fix →
re-render. Run typecheck/lint/tests/build. Report per SKILL.md § 15.

## 11. Quality gates
Walk `checklists/pre-ship.md`. Performance-affected routes: consider
`workflows/performance-audit.md`. Copy review: `rules/content-rules.md`.
