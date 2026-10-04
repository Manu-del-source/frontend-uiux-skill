# UX Patterns

Reusable interaction patterns. Choose the lightest pattern that prevents
the problem. Canonical state definitions (empty/loading/error/success
etc.) live in `references/states.md` — this file covers flow-level
choices only.

## Onboarding

- First-run: goal-oriented checklist or a single guided first success —
  not a tour of features.
- Show value before asking for setup/permissions.
- Skippable, resumable, never re-shown once dismissed.
- Empty state of the product *is* the onboarding surface (see below).

## Search

- Entry point always visible in discovery products; ⌘K for dense apps.
- Suggestions: recent, popular, entities (products, orders, people).
- Debounced, forgiving (typo/synonym tolerant), filters on results.
- Empty results = recovery actions, not a dead end.
- Announce result counts politely (`aria-live`).

## Filtering & sorting

- Facets with counts; active filters as removable chips + "Clear all".
- State in the URL; instant apply for cheap queries.
- Sort default stated ("Relevant"); preserve filter+sort across back nav.
- Mobile: sheet with explicit "Show N results".

## Confirmation

Confirm **destructive or irreversible** actions only:
- Name the object: "Delete *Invoice #4821*?"
- Consequences stated: "This permanently removes 3 invoices."
- Safe action focused first; destructive styled as destructive.
- Skip confirmation for reversible actions — offer undo instead.

## Destructive actions

- Pattern: perform + snackbar "Deleted · Undo" (reversible) OR confirm
  dialog (irreversible/bulk/legal).
- Never a single unguarded click; never default-focused destructive
  button; server-side guardrails where possible.
- Distinguish delete vs. archive/deactivate — offer the soft option.

## Undo

- The best error prevention: 5–10s undo window on delete, move, bulk
  changes; toast persists during the window.
- Undo must restore the *state*, including position/filters.
- Keyboard: ⌘Z where the product is an editor-like tool.

## Notifications

- In-context (inline alerts) > toast (confirmation) > badge (attention
  exists) > email/push (out of app).
- Errors requiring action never live only in a toast.
- Batch non-urgents; never interrupt flow for background news.
- Toasts: `role="status"`, dismissible, ≤3 stacked, pause on hover/focus.

## Progressive disclosure

- Default view = common path; advanced behind disclosure, remembered per
  user where sensible.
- Don't hide *required* information; hide optional complexity.
- "More" controls must indicate what they reveal.

## Empty states

Every list/screen has four:
1. **First-use** — what this is for + primary action.
2. **No results** — filters/search applied + how to recover.
3. **All-clear** — positive confirmation ("You're all caught up").
4. **Error/permission** — why + what to do.
Never a lone illustration with no action.

## Loading states

- <300ms: nothing; <1s: spinner/inline busy; longer: skeleton of the
  real layout; long jobs: progress + backgroundable task.
- Preserve prior data during refresh; stable dimensions to avoid shift.
- Expose busy states to AT (`aria-busy`, live announcements).

## Errors

- Field errors inline at the field; form errors summarized at top with
  links; system errors explain impact, reference ID, and next step.
- Distinguish validation vs. network vs. permission vs. not-found.
- Always provide a retry/alternative path; never a raw stack trace.

## Authentication

- Email-first / magic link where possible; password rules visible
  *before* typing; show/hide password; paste-friendly; no arbitrary
  composition rules or forced rotation.
- Errors: "Incorrect email or password" (don't leak account existence,
  but do allow registration flows to be discoverable).
- Session expiry mid-task: warn before timeout, preserve work on re-auth.
- MFA: clear step indicators, backup codes guidance, recovery paths.
- Social login ordering consistent with the user's context.

## Permissions

- Don't show controls users can't use — but where visibility is needed
  (upgrade paths), explain the limitation and provide the route.
- Permission errors state what's missing and who to ask.
- Destructive/admin actions gated server-side regardless of UI.

## Multi-step workflows

- Stepper with step count, current/completed states, back navigation
  without data loss, per-step validation, summary before commit.
- Persist drafts; recover from crashes/refreshes.
- Terminal screen: clear success + next actions; never a silent redirect.

## Choosing patterns

Prefer in this order: prevent → allow undo → confirm → report. If users
regularly need confirmation for an action, reconsider whether the action
should exist as a single click at all.
