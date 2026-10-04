# Visual Direction

Establish a coherent visual direction **before** styling. Write one short
paragraph: *"[Product] should feel [3 adjectives] — like [reference/analogy],
with [density] layout, [type character], and a [palette character] palette."*

Everything downstream (type, color, surfaces, motion) must serve that
sentence.

## Visual personality

Pick deliberately from the space, e.g.:

- utilitarian / instrument-like (POS, admin, analytics)
- calm / neutral / trustworthy (SaaS, fintech, healthcare)
- editorial / expressive (marketing, publication, portfolio)
- playful / vibrant (consumer, kids, social)
- premium / restrained (luxury, B2B enterprise)

Personality is expressed through *systems* — type scale, spacing rhythm,
color temperature, surface treatment — not through scattered flourishes.

## Composition

- Establish a focal point per screen; everything else supports it.
- Use alignment to a grid; nothing floats without a reason.
- Balance density with breathing room according to product type.
- Repeat geometric motifs sparingly so the UI reads as one family.

## Hierarchy

Three levers, in order of power: **position → size/weight → color**.
Contrast between levels must be obvious; two levels that differ by 5% are
one level.

## Contrast

Contrast is functional: for hierarchy, for focus, for legibility.
Minimums: 4.5:1 body text, 3:1 large text and UI boundaries (WCAG AA —
see `references/accessibility.md`).

## Surfaces

Define a surface ladder (e.g. page → card → elevated/popover → inverted)
and use it consistently. Surfaces separate regions; they don't decorate.

## Borders

Borders define structure cheaply and crisply. Prefer 1px borders over
shadows for separation in dense UIs. Keep border color semantic
(`--color-border`, `--color-border-strong`) not ad-hoc gray.

## Depth

Shadow communicates layering, not prettiness. Rules:
- one elevation scale (or none)
- shadows appear on interactive elevation (hover/popover/modal), not on
  every container
- in dense tools, prefer borders and surface shifts to shadows

## Imagery

- Real product/user photography for ecommerce, marketplace, portfolio.
- Consistent aspect ratios, object-fit, and focal point across all images.
- Meaningful alt text; decorative images hidden from assistive tech.
- Never let placeholder-quality imagery ship.

## Illustration

Useful for empty states, onboarding, and error recovery — sparingly.
It must explain, not fill space.

## Decorative elements

Allowed only when they carry brand and don't compete with content.
Otherwise cut.

## Brand expression

Express brand through type, color, tone of copy, and imagery — the parts
that don't harm usability. Never trade legibility or discoverability for
brand flair.

## Avoiding the generic AI aesthetic

Do **not** automatically use:

- gradients (especially purple/blue hero gradients)
- glassmorphism
- excessive rounded cards
- excessive / floating shadows
- giant hero text with tiny subtext
- decorative background blobs
- random pill badges ("✨ AI-powered")
- excessive icons next to every label
- meaningless animation
- three evenly weighted feature columns
- dark theme by default without reason

These are permitted **only when they serve the product** and the stated
visual direction. If a screen could belong to any product, it has no
direction — rewrite the direction paragraph and restyle.
