# AdaptiveCard

A structural content container that adapts its layout, padding, and media visibility based on the active personalization profile.

---

## Import

```jsx
import { AdaptiveCard } from "@aura-adaptive/aura-ui-adaptor";
```

---

## Basic Usage

`AdaptiveCard` uses a compound component pattern to provide flexible but adaptive layouts.

```jsx
<AdaptiveCard variant="content">
  <AdaptiveCard.Media src="image.jpg" alt="Description" />
  <AdaptiveCard.Body>
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </AdaptiveCard.Body>
  <AdaptiveCard.Actions layout="auto">
    <button>Confirm</button>
    <button>Cancel</button>
  </AdaptiveCard.Actions>
</AdaptiveCard>
```

---

## Sub-Components

`AdaptiveCard` provides semantic sub-components for better structure:
- `<AdaptiveCard>`: The root container.
- `<AdaptiveCard.Media>`: Image/media container.
- `<AdaptiveCard.Body>`: Main content wrapper.
- `<AdaptiveCard.SideLayout>`: Wrapper for placing media and content side-by-side.
- `<AdaptiveCard.Actions>`: Button/action container.
- `<AdaptiveCard.Divider>`: Optional adaptive horizontal line.

---

## Props

### `<AdaptiveCard>` (Root)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"content" \| "media" \| "action" \| "data"` | `"content"` | Determines the semantic style of the card |
| `align` | `"left" \| "center"` | `"left"` | Content alignment |
| `showDivider` | `boolean` | `true` | Inheritable property to show dividers in the card |
| `detailed` | `boolean` | `false` | If true, prevents the card from automatically hiding media or simplifying layout |
| `mediaPlacement` | `"top" \| "left" \| "right" \| "hidden"` | `"top"` | Default media placement |

### `<AdaptiveCard.Media>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image source URL |
| `alt` | `string` | — | Alternative text |
| `placement` | `"top" \| "left" \| "right" \| "hidden"` | Inherits | Overrides default placement |
| `shape` | `"square" \| "rounded"` | `"rounded"` | Image border radius shape |
| `keepInSimplify` | `boolean` | `false` | Force the media to remain visible even in layout simplification mode |

### `<AdaptiveCard.Actions>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `"auto" \| "horizontal" \| "vertical"` | `"auto"` | Button arrangement. Auto switches to vertical if hit targets are large. |
| `maxVisible` | `number` | — | Maximum number of buttons to show during simplification mode (defaults to 1 if simplified). |
| `showDivider` | `boolean` | Inherits | Force show/hide the action divider |

### `<AdaptiveCard.SideLayout>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `"left" \| "right"` | `"left"` | Placement of the primary content relative to the secondary |

---

## Adaptive Behavior

`AdaptiveCard` reads profile flags to intelligently simplify interfaces:
- **Low Computer Literacy (`layoutSimplification`)**: By default, `<AdaptiveCard.Media>` is completely hidden to reduce visual clutter, unless `keepInSimplify={true}` or `<AdaptiveCard detailed={true}>` is passed. Action lists (`<AdaptiveCard.Actions>`) will automatically truncate to show only the primary action (`maxVisible={1}`).
- **Motor Impairments**: Padding is significantly increased. If `controls.minTargetSize` is large, `<AdaptiveCard.Actions layout="auto">` will stack buttons vertically to prevent accidental mis-clicks.
- **Visual Impairments**: High contrast mode completely removes drop shadows to ensure sharp, solid boundaries.

Additionally, using `Alt + Click` on the card will trigger the component feedback modal (if implemented), allowing manual override of the card's visual variants.
