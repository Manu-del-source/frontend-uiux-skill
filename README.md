# frontend-uiux

A master Claude Code skill for **frontend UI/UX engineering**: designing,
implementing, auditing, redesigning, and visually validating web interfaces —
adapted to each project's stack and existing design system.

Acts as UI/UX designer, frontend engineer, design-system architect,
accessibility reviewer, responsive reviewer, motion designer, visual QA
engineer, and Figma/screenshot-to-code assistant. Works across marketplaces,
ecommerce, SaaS, dashboards, POS, analytics, admin, marketing, portfolio, and
data-heavy products — without forcing one visual style.

## Install (Claude Code)

```bash
# global
cp -r frontend-uiux-skill ~/.claude/skills/frontend-uiux
# or project-local
cp -r frontend-uiux-skill <project>/.claude/skills/frontend-uiux
```

Claude discovers `SKILL.md` automatically and activates on UI/UX requests.

## Layout

| Dir | Role |
|---|---|
| `SKILL.md` | Orchestration layer — activation, inspection, routing, quality gates. Keep it lean. |
| `references/` | Reusable knowledge, loaded selectively (design, a11y, perf, engineering…). |
| `workflows/` | Step-by-step procedures (build, audit, Figma/screenshot-to-code, regression…). |
| `rules/` | Terse enforcement sheets for review/audit mode — cite rule IDs in findings. |
| `patterns/` | Screen-level pattern specs (auth, settings, app shell, data-viz). |
| `checklists/` | `pre-ship.md` — the consolidated Definition of Done. |
| `scripts/` | `validate.mjs` — zero-dependency structural validation. |
| `tests/` | Validator tests (`node --test`). |

Design flow: **DISCOVER → PLAN → RESEARCH → DESIGN → BUILD → TEST → VISUALLY
REVIEW → ACCESSIBILITY REVIEW → PERFORMANCE REVIEW → ITERATE → SHIP.**

## Validation

```bash
npm run validate   # structural checks: frontmatter, refs, links, orphans, sections…
npm test           # validator self-tests
```

No dependencies. Requires Node ≥18.

## Principles

- **Original synthesis** — concepts adapted from open-source skills are
  credited in [`ATTRIBUTION.md`](ATTRIBUTION.md); no third-party text is
  reproduced wholesale.
- **Adapt, don't impose** — inspect the project's stack, tokens, and design
  system before adding anything; never introduce a second design system.
- **Evidence over claims** — visual correctness requires rendered
  screenshots; anything unverified is reported as unverified.

## License

MIT — see [`LICENSE`](LICENSE).
