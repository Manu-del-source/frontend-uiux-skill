# Content Design & UX Writing

Interface copy is design material, not decoration. Words appear to make
a product understandable and usable. This is the canonical home for
copy rules; domain files keep only domain vocabulary.

## Quality standards (apply to every string)

1. **Purposeful** — the text does a job (orient, instruct, confirm,
   recover). Delete text that merely fills space.
2. **Concise** — shortest string that is unambiguous. Cut filler, not
   clarity; keep necessary articles in longer instructions.
3. **Conversational** — plain, human, brand-consistent tone. Sentence
   case default; contractions fine unless the brand forbids them.
4. **Clear** — one meaning per string; the reader never has to infer
   what happens next.

Score a rewrite against all four before shipping it.

## Core rules

- **User-side language**: name things by what people recognize, never
  by system internals ("Email address", not "SMTP recipient field";
  "Manage notifications", not "Webhook config").
- **Active voice, present tense, verb-first**: "Save changes", not
  "Changes can be saved".
- **Action labels name the action**: the button says what pressing it
  does. Consequences get stated ("Delete invoice" → dialog: "This
  permanently deletes Invoice #4821").
- **Consistency is navigation**: one term per concept product-wide;
  the action keeps its name through the flow — "Publish" → toast
  "Published". Never synonym-drift (save/store/persist).
- **Specific beats clever**; clever beats vague only when still
  specific. No puns in errors or destructive dialogs.
- **Labels over placeholders**: placeholder ≠ label; hints supplement,
  never substitute (`references/forms.md`).
- **Show, don't hedge**: "We couldn't process your card. Check the
  number and expiry date." beats "Something went wrong."

## By context

| Context | Rules | Example |
|---|---|---|
| Buttons/links | verb + object, ≤3 words, sentence case | "Add team member" |
| Field labels | the value, not the widget; visible | "Work email" |
| Helper text | format/rules/consequence before failure | "At least 12 characters" |
| Errors | what happened + how to fix, no blame, no apology theater | "That email is missing an @ — check the format." |
| Empty states | what this is + next action (or positive confirmation) | "No orders yet. Orders appear after checkout." |
| Success | name the object + what's next | "Invoice #4821 sent to ana@acme.com" |
| Notifications | title + one-line fact + action where relevant | — |
| Headings | describe content, unique per page, no jargon | — |
| Confirmations | object + irreversible consequence + safe default focused | "Delete 3 files? This can't be undone." |
| Tooltips | supplement, never the only home of critical info | — |
| Onboarding | outcome-first ("Set up your first report"), skippable | — |
| Loading | what's happening if >1s ("Syncing 214 records…") | — |

## Accessibility of words

- Sentence case (ALL CAPS reads as shouting and slows screen readers).
- Expand abbreviations on first use; avoid unexplained acronyms.
- Link text describes the destination ("Read the refund policy"), never
  "click here" — screen-reader link lists depend on it.
- Numeric/date formats consistent and locale-aware; avoid ambiguous
  03/04.
- Readability: aim plain language; long sentences split; active voice
  default. Errors understandable under stress (cognitive accessibility).

## Anti-patterns

- Developer-centric labels ("Delta sync failed: 502").
- Vague CTAs ("Continue", "Submit" when a real verb exists).
- Blame copy ("You entered invalid data").
- Exclamation-mark enthusiasm in routine confirmations.
- Placeholder-as-label; color-only or icon-only status words.
- Inconsistent names for the same object across screens.
- Fake urgency/scarcity and manipulative confirm-shaming
  (`references/design-principles.md` § Honest UI).
- Marketing voice inside operational UI (and vice versa).

## Process

1. Inventory strings on the screen; rank by user impact (errors and
   primary actions first).
2. Rewrite against the four standards; keep a parallel-structure pass
   (all button labels same grammar).
3. Verify in context — rendered screenshot, both locales if applicable
   (`references/visual-qa.md`). Never ship copy you haven't seen in the
   layout: long-text wrapping breaks layouts.
4. Product vocabulary: derive terms from `references/design-intelligence.md`
   and existing product copy; don't introduce synonyms.
