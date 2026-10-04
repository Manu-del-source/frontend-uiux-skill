# Visual QA

Visual QA is performed on **actual rendered screenshots**, never on source
code. "It looks right in the JSX" is not evidence.

## Requirements

- Browser tooling available (Playwright/Puppeteer/other) → screenshots are
  mandatory at 375×812, 768×(appropriate height), 1280×900, plus any
  project-specific sizes.
- No tooling → state clearly that visual verification could not be
  performed. Never claim "pixel perfect" without inspection.
- Capture **before** and **after** screenshots for every visual change
  and compare them side by side.
- Use real/worst-case content (long titles, missing images, 10× rows,
  zero rows), not lorem ipsum.

## Checklist

### LAYOUT
- [ ] Containers align to the grid; no unintended offset/overflow
- [ ] No horizontal page scroll at 375px
- [ ] Section order matches priority; primary action visible
- [ ] Sticky headers/bars don't cover content; anchor scroll offset correct
- [ ] No CLS: images/media have dimensions, skeletons match final layout

### TYPOGRAPHY
- [ ] Roles used (no raw sizes); hierarchy visibly distinct per level
- [ ] Line lengths within measure; no orphaned single words on wide screens
- [ ] No `1.0` leading on multi-line text; no clipped ascenders/descenders
- [ ] Tabular numerals in tables/KPIs; currency/number formats consistent
- [ ] Headings don't overflow at 375px with longest real title

### COLOR
- [ ] Semantic tokens used; no stray hex/arbitrary values
- [ ] Contrast verified for all text pairs + focus rings + UI boundaries
- [ ] Status colors paired with icon/text; hover/active variants checked
- [ ] Dark mode (if any): every surface pair re-verified

### SPACING
- [ ] All values from the scale (no magic numbers)
- [ ] Consistent padding within same-role cards/rows/sections
- [ ] Related items closer than unrelated items (grouping reads correctly)
- [ ] Section rhythm consistent across screens

### ALIGNMENT
- [ ] Baselines and edges align; icons optically centered in controls
- [ ] Table numbers right-aligned; labels consistent
- [ ] Equal-height cards/lists don't leave ragged bottoms

### HIERARCHY
- [ ] One clear focal point per screen
- [ ] Primary action is the strongest control; only one primary per region
- [ ] Secondary content visually recedes; no "everything bold" screens

### COMPONENT CONSISTENCY
- [ ] Same component/variant used for the same job across screens
- [ ] Radius/border/shadow match the system; no screen-local styles
- [ ] Icons from one family, consistent sizes
- [ ] Button sizes/labels consistent; sentence case consistent

### RESPONSIVE BEHAVIOR
- [ ] 375 / 768 / 1280 all inspected; nav transforms correctly
- [ ] Content priority reflowed (not shrunk): tables→stack/priority,
      grids 1→2→3+, forms single-column on mobile
- [ ] Touch targets ≥44px on mobile; no hover-only interactions
- [ ] Dialogs/drawers usable at small sizes; safe areas respected
- [ ] Worst-case content tested

### INTERACTION STATES
- [ ] Hover, focus-visible, active, disabled, loading present and distinct
- [ ] Focus ring visible on every focusable element
- [ ] Loading preserves layout width; no double submission
- [ ] Selected/expanded states obvious without color alone
- [ ] Menus/dialogs: focus trap, Escape, focus return verified

### ACCESSIBILITY
- [ ] Keyboard pass: complete key flows without mouse
- [ ] Landmarks/headings/order correct; skip link works
- [ ] Labels/accessible names on all controls; errors linked
- [ ] Reduced motion honored; live regions announce async updates
- [ ] Automated scan (axe) reviewed — and its gaps manually checked

### CONTENT
- [ ] Real copy fits (clamps/overflow handled); no placeholder text shipped
- [ ] Grammar/terminology consistent; labels in task language
- [ ] Empty/loading/error/success copy present for every data region
- [ ] Dates/numbers/currency formatted consistently

### IMAGERY
- [ ] Aspect ratios consistent; no distortion/stretching; focal points OK
- [ ] Alt text meaningful; decorative images hidden from AT
- [ ] No broken/placeholder images; lazy-loading doesn't shift layout

### OVERFLOW
- [ ] Long words/URLs/IDs wrap or truncate with access to full value
- [ ] Tables/charts/tabs/nav overflow handled deliberately
- [ ] Text never overlaps (badges over images, tooltips, sticky bars)
- [ ] Virtualized lists scroll both axes if applicable

## Procedure

1. **Baseline:** screenshot the current state (before).
2. **Implement.**
3. **Render & screenshot** at all required viewports (after).
4. **Compare** before/after per region; list every unintended delta.
5. **Inspect** the checklist above; record issues with severity.
6. **Fix → re-render → re-compare.** Repeat until clean.
7. Report remaining issues honestly (unresolved list).

## Browser tooling procedure (when Playwright/automation exists)

Zero-dependency fallback: a one-off script run via the project's own
Playwright install (`npx playwright …` or the project's `@playwright/test`)
— do **not** add a dependency just to take screenshots.

```js
// screenshots.mjs — run: node screenshots.mjs [baseUrl]
import { chromium, devices } from 'playwright';
const base = process.argv[2] || 'http://localhost:3000';
const shots = [
  ['mobile',  375, 812, { ...devices['iPhone 13'] }],
  ['tablet',  768, 1024, {}],
  ['desktop', 1280, 900, {}],
];
const browser = await chromium.launch();
for (const [name, width, height, extra] of shots) {
  const ctx = await browser.newContext({ viewport: { width, height }, ...extra });
  const page = await ctx.newPage();
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `shots/${name}.png`, fullPage: true });
  await ctx.close();
}
await browser.close();
```

Procedure:
1. Start the project's dev server (its own command — inspect first).
2. Auth: use an existing test account/session if provided; never
   expose, commit, or invent credentials.
3. Capture the route at all three viewports (extend the list per
   project); disable animations (`reducedMotion: 'reduce'`) for stable
   diffs; wait for fonts/data (`networkidle` + explicit waits).
4. Optional DOM checks alongside screenshots: horizontal overflow
   (`document.documentElement.scrollWidth > innerWidth`), missing
   alt/labels (axe if already installed), focus-visible by Tab-walk
   (`page.keyboard.press('Tab')` + active-element assertions).
5. Classify every issue found under the checklist categories; attach
   the screenshot region as evidence.
6. Re-run after fixes and diff against the previous run.

Desktop **and** mobile captures are both mandatory; a pass at one
viewport is a partial pass.

## Rules

- Never declare visual correctness without rendered screenshots when
  tooling exists.
- Never call anything "pixel perfect" without an actual visual diff.
- A passing build/typecheck proves nothing about appearance.
- Auth: use an existing test session if provided; never expose, commit,
  or invent credentials or authentication success.
- If blocked (no tooling, no access), report the blocker as a limitation,
  not a pass.

See `workflows/visual-regression.md` for baseline-vs-change comparison.
