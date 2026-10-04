# Pattern: Authentication Screens

Screen-level pattern for login, signup, reset, SSO, and MFA. Flow
context: `references/ux-patterns.md` § Authentication. Field rules:
`references/forms.md`. Rules: `rules/content-rules.md`.

## Purpose
Get a verified user into the product with the least friction and no
security theater — and fail gracefully when it can't.

## Anatomy
1. Page shell: logo/home link, minimal chrome (no full nav for
   unauthenticated users), language selector if i18n.
2. Card/column: heading stating the step ("Sign in", "Reset password"),
   the form, secondary links (forgot password, create account, use SSO).
3. Trust footer: security/privacy note where it eases hesitation;
   legal links required at signup.
4. Offer hierarchy: primary method first; social SSO buttons visually
   equal-or-secondary, consistent with product convention.

## Variants
- **Login**: email+password (or passwordless magic link — prefer fewer
  steps), "keep me signed in" default-off unless justified, forgot-
  password adjacent to password field.
- **Signup**: minimal fields (name/password or email-only); progressive
  profiling later; password rules visible *before* typing; age/legal
  consent explicit where required.
- **Reset/verify**: send-code → enter-code flow with expiry/resend
  countdown; code inputs support paste and autofill (`one-time-code`).
- **SSO/OAuth**: redirect state preserved across round trip; error
  path when provider fails or account differs.
- **MFA**: method choice, backup codes guidance, clear "lost device"
  recovery route.

## When to use / NOT to use
Use for credential gating. Do NOT: wrap product tours inside auth,
force account creation before a guest path exists (unless the product
requires it), or use modal-only auth for multi-step flows.

## States
default · field-level validation (blur + submit) · submitting (button
busy, inputs disabled-not-cleared) · error (server: "Incorrect email or
password" — don't leak account existence while keeping registration
discoverable) · rate-limited ("Try again in N minutes") · offline ·
success (redirect preserving intended destination) · expired
token/code with re-request path.

## Responsive
Single centered column ≤640px; full-width primary button on mobile;
inputs ≥16px; correct keyboards (`type=email`, `inputmode=numeric` for
codes); safe-area padding; no horizontal scroll at 375px.

## Accessibility
- Landmark-less minimal shell still has `h1`; form has accessible
  names on every field; errors linked (`aria-describedby`,
  `aria-invalid`) and announced on submit (error summary or live
  region).
- Code input: single field with `autocomplete="one-time-code"` OR a
  group with proper labels — pick one, don't half-implement both.
- Enter submits; no keyboard traps in MFA/SSO; focus moves to the
  first error on failure; loading announced (`aria-busy`).
- Contrast verified in both themes; status not color-only.

## Interaction
Autofill/autocomplete on (`email`, `current-password`,
`new-password`, `one-time-code`); paste-friendly; show/hide password
toggle with accessible name; resend cooldown; session/destination
preserved after auth; never wipe the form on server error.

## Implementation notes (React/Next)
Auth is server-first: form actions/route handlers validate server-side;
client adds convenience validation only. Never put secrets or
provider secrets in client env vars. Rate limiting + CSRF handled
server-side. Redirect targets validated (no open redirect). Session
cookie flags set by the framework/auth library — don't hand-roll.
