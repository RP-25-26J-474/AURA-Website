# Adaptive Overlays & Feedback

This documentation covers the core adaptive overlay and feedback components provided by the AURA UI Adaptor:
- `AdaptiveAlert`
- `AdaptiveDialog`
- `AdaptiveDrawer`
- `AdaptiveTooltip`

These components automatically adapt their sizing, interaction models (e.g. hover vs click), and focus traps based on the active personalization profile.

---

## Import

```jsx
import { 
  AdaptiveAlert, 
  AdaptiveDialog, 
  AdaptiveDrawer, 
  AdaptiveTooltip 
} from "@aura-adaptive/aura-ui-adaptor";
```

---

## AdaptiveAlert

An accessible, auto-dismissible alert banner.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Semantic type of the alert |
| `title` | `string` | Auto | Bold text at the top of the alert. Defaults to the variant name. |
| `message` | `string` | — | Secondary descriptive text |
| `showIcon` | `boolean` | `true` | Show or hide the leading icon |
| `emphasis` | `"auto" \| "icon" \| "text" \| "balanced"` | `"auto"` | How to draw attention to the alert. |
| `filled` | `boolean` | `false` | Enables a strong semi-transparent background color (useful for low-literacy users). |
| `durationMs` | `number` | — | Automatically dismiss the alert after X milliseconds. |
| `extendDurationForVisual`| `boolean`| `true` | Extends the `durationMs` automatically if a visual impairment profile is active. |
| `onDismiss` | `() => void` | — | Callback fired when duration completes. |

---

## AdaptiveDialog

A modal dialog with an automatic focus trap and backdrop locking.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **Required** | Controlled open state |
| `onClose` | `() => void` | **Required** | Close handler |
| `title` | `string` | `"Dialog"` | Accessible dialog title |
| `description`| `string` | — | Secondary description text |
| `actions` | `ReactNode` | `Close button`| Replaces the default action buttons at the bottom. |
| `maxWidthPx` | `number` | `640` | Maximum width of the dialog box |
| `textScale` | `number` | `1` | Font scale multiplier |
| `showCloseIcon`| `boolean` | `true` | Renders a top-right '✕' button. |
| `closeOnBackdrop`| `boolean`| `true` | Clicking the backdrop fires `onClose` |

---

## AdaptiveDrawer

A slide-out side drawer, ideal for mobile navigation or heavy filtering interfaces.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **Required** | Controlled open state |
| `onClose` | `() => void` | **Required** | Close handler |
| `title` | `string` | `"Menu"` | Drawer title |
| `items` | `AdaptiveDrawerItem[]` | `[]` | Simple navigation list |
| `onItemClick`| `(id) => void` | — | Fired when a nav item is clicked |
| `widthPx` | `number` | Auto | Overrides default width. Expands automatically for `layoutSimplification`. |
| `closeButtonSizePx` | `number`| Auto | Minimum height/width for the top-right close button. |

---

## AdaptiveTooltip

An accessible tooltip wrapper that intelligently switches between hover and click triggers.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **Required** | Tooltip text content |
| `children` | `ReactElement`| **Required** | A single React element child to act as the trigger |
| `trigger` | `"auto" \| "hover" \| "click"`| `"auto"` | How the tooltip opens. Defaults to hover but auto-switches to click for cognitive impairments. |
| `placement` | `"top" \| "bottom"` | `"top"` | Placement relative to the trigger |
| `enterDelayMs`| `number` | `300` | Delay before showing the tooltip on hover. Drops to 0 if `reducedMotion` is true. |

---

## Adaptive Behaviors across Overlays

- **Low Literacy / Simplification**: `<AdaptiveAlert>` defaults to `emphasis="text"` to make labels bold and unmistakable. `<AdaptiveTooltip>` forces its trigger to `"click"` because hover-discovered information can be lost easily. `<AdaptiveDrawer>` expands its default width to 360px to accommodate larger spacing.
- **Motor Impairments**: Minimum target sizes for all close buttons (dialogs and drawers) scale up dynamically.
- **Visual Impairments**: `<AdaptiveDialog>` and `<AdaptiveDrawer>` drop their box shadows and instead use thick, solid borders to establish boundaries. Overlay backdrops become darker (opacity goes from 0.45 to 0.6). `AdaptiveAlert` auto-extends its `durationMs` by 1.5x to give the user more time to read.
- **Reduced Motion**: Disables slide-in animations for Drawers, pop-in animations for Dialogs, and fade delays for Tooltips.
