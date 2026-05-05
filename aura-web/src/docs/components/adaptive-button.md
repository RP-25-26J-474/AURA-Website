# AdaptiveButton

Adaptive replacement for a standard `<button>`. Automatically scales size, padding, border radius, and focus styles based on the active personalization profile.

---

## Import

```jsx
import { AdaptiveButton } from "@aura-adaptive/aura-ui-adaptor";
```

---

## Basic Usage

```jsx
<AdaptiveButton variant="primary">
  Continue
</AdaptiveButton>
```

---

## Variants

```jsx
<AdaptiveButton variant="primary">Primary</AdaptiveButton>
<AdaptiveButton variant="secondary">Secondary</AdaptiveButton>
<AdaptiveButton variant="ghost">Ghost</AdaptiveButton>
<AdaptiveButton variant="danger">Danger</AdaptiveButton>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "accent" \| "ghost"` | `"primary"` | Visual style |
| `icon` | `ReactNode` | — | Icon node (SVG or component) to render inside the button |
| `iconPosition` | `"left" \| "right"` | `"left"` | Placement of the icon relative to the text |
| `iconOnly` | `boolean` | `false` | Explicitly request icon-only mode. Ensure you provide an `aria-label` |
| `showText` | `boolean` | — | Force showing or hiding text regardless of heuristics |
| `iconGapPx` | `number` | `8` | Gap in pixels between icon and text |
| `textSize` | `string` | `typography.body` | Override text size (e.g., "14px") |
| `minHitAreaPx` | `number` | `44` | Minimum dimensions to ensure a safe touch target size |
| `paddingX` | `number` | `spacing.padX` | Horizontal padding override |
| `paddingY` | `number` | `spacing.padY` | Vertical padding override |
| `focusRingPx` | `number` | `3` | Width of the focus ring outline |
| `textLabel` | `string` | — | Fallback text string if `children` is not provided |
| `disabled` | `boolean` | `false` | Disables the button visually and functionally |
| `onClick` | `(event) => void` | — | Click event handler |
| `className` | `string` | — | Additional CSS classes |
| `style` | `CSSProperties` | — | Additional inline styles |

---

## Adaptive Behavior

`AdaptiveButton` actively reads from the profile and updates behavior in real time:
- **Motor Impairments**: Automatically enforces a minimum hit area of `44px` (or larger depending on user settings) and increases padding.
- **Low Computer Literacy**: In `layoutSimplification` mode, the button avoids icon-only displays, enforcing text labels for clarity.
- **Visual Impairments**: In `highContrast` mode, the focus rings and borders are dramatically darkened.
- **Reduced Motion**: Disables scale and color transition animations on hover and active states.

Additionally, interactions with the button are automatically tracked for behavioral analysis using `BehaviorTracker`, sending feedback if the user experiences difficulty (e.g., rage clicks).

---

## Full Example

```jsx
import { AdaptiveProvider, AdaptiveButton } from "@aura-adaptive/aura-ui-adaptor";

function App() {
  return (
    <AdaptiveProvider>
      <div style={{ display: "flex", gap: "1rem" }}>
        <AdaptiveButton variant="primary" onClick={() => alert("Clicked!")}>
          Save
        </AdaptiveButton>
        <AdaptiveButton variant="ghost">
          Cancel
        </AdaptiveButton>
      </div>
    </AdaptiveProvider>
  );
}
```
