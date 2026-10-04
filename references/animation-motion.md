# Animation & Motion

**Animation must communicate state or hierarchy.** If removing it changes
nothing about comprehension, remove it.

## Purpose (allowed jobs)

- **State change:** toggle, expand/collapse, tab switch — show what moved
  and where it came from.
- **Spatial continuity:** drawers/modals entering from their edge; shared
  element from card → detail.
- **Feedback:** button press, success check, item added, drag result.
- **Attention:** a newly arrived item gently drawing the eye (once).
- **Progress:** loading and determinate progress indication.
- **Hierarchy:** enter-from-while content ordering to reveal structure.

Not allowed: decoration, delaying content, "because it feels premium",
animating on every re-render.

## Duration

| Type | Range |
|---|---|
| Micro (hover, press, color) | 100–150ms |
| Small UI (tooltip, dropdown, toggle) | 150–250ms |
| Panels/drawers, list reorder | 200–350ms |
| Page/route transitions | 250–400ms |
| Anything > 500ms | justify or cut |

Faster for frequent expert actions (POS, keyboards), slightly slower for
first-time/onboarding moments. Never make users wait for an animation to
finish before acting.

## Easing

- Ease-out for entrances (fast start, gentle stop).
- Ease-in for exits.
- Ease-in-out for movement/reordering.
- Spring physics for playful/direct-manipulation (drag, swipe) — with
  tight damping; no bouncy overshoot in serious tools (POS, finance).
- Linear only for indeterminate spinners and progress under constant rate.

## Entrance

- Short, staggered only when order matters; fade + 4–8px rise typical.
- Content must be in the DOM and accessible immediately — animate
  opacity/transform, not `display` from nothing that AT can't see.
- Never animate layout in on page load repeatedly (CLS risk).

## Exit

- Exit before or with entrance; overlapping is fine for swaps.
- Removals (list item deleted): collapse + confirm, with undo available
  instead of animation-as-confirmation.

## Feedback

- Press: scale ~0.98 or background shift, 100ms.
- Success: check/slide, ≤300ms; errors: minimal shake ≤2 cycles (never
  repeated shaking) + message.
- Optimistic UI: instant visual change + rollback animation/notice on
  failure.

## Loading

- Spinner: continuous rotation ~600–1000ms/turn, linear.
- Skeleton shimmer: slow sweep, disabled under reduced motion.
- Progress: smooth but truthful; indeterminate bar for unknown duration.
- Don't animate forever while something is broken — timeout → error state.

## Transitions

- Prefer `transform` and `opacity` (compositor-friendly); avoid animating
  `width/height/top/left/margin` (layout thrash) unless unavoidable.
- One shared duration/easing scale per product (expose as motion tokens:
  `--duration-fast`, `--duration-base`, `--ease-out`…).
- Coordinate with state: exit → cleanup → enter; no orphaned listeners.

## Reduced motion

- `prefers-reduced-motion: reduce`: disable parallax, marquees, auto-play
  loops, large spatial moves, and non-essential transitions; keep instant
  state changes, progress indication, and essential feedback.
- Never hide content behind motion that reduced-motion users won't see
  (content must exist independently of the animation).

## Interaction guidance

- Hover transitions: color/border only; don't move layout on hover.
- Menus/dialogs: 150–200ms fade/scale; focus management happens
  immediately, not after the animation.
- Drag & drop: direct manipulation (no easing on the dragged item),
  clear drop indicators, keyboard alternatives.
- Charts: animate initial draw; avoid re-animating on every data refresh;
  respect reduced motion.

## Quality bar

- 60fps target; if it janks, simplify.
- Test at 375px devices and low-end where possible.
- Motion reviewed in the same visual QA pass as layout — see
  `references/visual-qa.md`, and never ship meaningless animation
  (`references/anti-patterns.md`).
