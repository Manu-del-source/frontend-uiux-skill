# Attribution & Sources

This skill is an **original synthesis**. No third-party skill text is
reproduced wholesale. Concepts and approaches observed in external
repositories are adapted as ideas; wording is original. Licenses verified
via GitHub API / license files (research date: October 2026).

| Repository | Author | URL | License | Concept adopted | Attribution required? |
|---|---|---|---|---|---|
| anthropics/claude-code (frontend-design plugin) | Anthropic | https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design | Proprietary (Anthropic terms) | Anti-default calibration ("generic AI look" tells); plan-then-self-critique pass; copy as design material | No — ideas only; **no text reused**, no imitation of phrasing |
| WomenDefiningAI/claude-code-skills | Women Defining AI | https://github.com/WomenDefiningAI/claude-code-skills | MIT | Read/audit-before-implement gate; audit templates per task type | Not required (MIT) |
| dawitlabs/ui-skills | Dawit Labs | https://github.com/dawitlabs/ui-skills | MIT | Design-brief artifact written before styling; systematic (non-guessing) color diagnosis; token migration procedure; every step screenshots at 375+1280 | Not required (MIT) |
| MadAppGang/claude-code | MadAppGang / 10xLabs | https://github.com/MadAppGang/claude-code | MIT | Task-type-adaptive workflow branching (API vs UI vs mixed); browser-testing stage in review loop | Not required (MIT) |
| overseek944/frontend-ui-ux-skill | overseek944 | https://github.com/overseek944/frontend-ui-ux-skill | MIT | Evidence-based framing (each rule traces to heuristic/standard/metric); HCI citations tied to decisions; Definition-of-Done closing checklist; load-on-demand references | Not required (MIT); courteous to credit — see below |
| PracticalSwan/agent-skills | PracticalSwan | https://github.com/PracticalSwan/agent-skills | MIT | Per-file verification sections; provenance pinning discipline for external sources | Not required (MIT) |
| seb1n/awesome-ai-agent-skills | seb1n | https://github.com/seb1n/awesome-ai-agent-skills | MIT | CI-style structural validation ideas (names, descriptions, links, duplicates) for `scripts/validate.mjs` | Not required (MIT) |
| Junaid-PK/frontend-design-skill | Junaid P.K. | https://github.com/Junaid-PK/frontend-design-skill | Apache-2.0 | One-primary-intent-per-screen; final simplification audit; ethical friction | **Apache-2.0 NOTICE applies only to copied portions — none copied**; concepts only |
| addyosmani/web-quality-skills | Addy Osmani | https://github.com/addyosmani/web-quality-skills | MIT | Measurement-first performance doctrine; field-vs-lab evidence hierarchy | Not required (MIT) |
| content-designer/ux-writing-skill | content-designer | https://github.com/content-designer/ux-writing-skill | MIT | Four measurable copy standards (Purposeful/Concise/Conversational/Clear); before/after pattern tables | Not required (MIT) |
| vercel-labs/web-interface-guidelines | Vercel | https://github.com/vercel-labs/web-interface-guidelines | MIT | Terse `file:line` findings format for review output | Not required (MIT) |
| rampstackco/claude-skills | RampStack | https://github.com/rampstackco/claude-skills | MIT | POUR-organized accessibility audit ordering | Not required (MIT) |
| murphytrueman/design-system-ops | Murphy Trueman | https://github.com/murphytrueman/design-system-ops | MIT | Token-audit procedure (tier leakage, naming violations) in design-system-audit workflow | Not required (MIT) |
| lackeyjb/playwright-skill | lackeyjb | https://github.com/lackeyjb/playwright-skill | MIT | On-the-fly Playwright screenshot script approach | Not required (MIT) |
| lambdatest/agent-skills | LambdaTest | https://github.com/lambdatest/agent-skills | MIT | Browser/visual validation workflow shape | Not required (MIT) |
| openai/skills (figma-implement-design) | OpenAI | https://github.com/openai/skills | None detected (all-rights-reserved default) | Figma→code workflow step ordering (concepts only — **no text reused**) | No copied material |
| browserbase/skills | Browserbase | https://github.com/browserbase/skills | None detected | Sub-agent orchestration idea for UI testing (concepts only) | No copied material |

## Standards referenced (not copied)

WCAG 2.2 (W3C, MIT-licensed document), Nielsen's 10 heuristics, Fitts/Hick/
Jakob/Miller laws, Core Web Vitals thresholds (Google) — cited as public
knowledge; see `references/design-principles.md` and
`references/performance.md`.

## Deliberately not copied

- Any repository wholesale, or long passages from any source
- Anthropic's distinctive frontend-design prose (proprietary)
- Theme/aesthetics catalogs that hardcode one visual style
- Marketing copy and agent-sprawl architectures from plugin marketplaces
- Apache-2.0 text from Junaid-PK/frontend-design-skill

If you contribute text derived from a licensed source, add a row here with
license and attribution requirement before merging.
