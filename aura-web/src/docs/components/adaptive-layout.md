# Adaptive Layout & Navigation

This documentation covers the core adaptive structural and navigation components provided by the AURA UI Adaptor:
- `AdaptiveGrid`
- `AdaptiveNavbar`
- `AdaptiveMenu`
- `AdaptiveDropdown`
- `AdaptivePagination`

These components automatically adapt their track sizes, collapsed states, spacing, and hover/hit areas based on the active personalization profile.

---

## Import

```jsx
import { 
  AdaptiveGrid, 
  AdaptiveNavbar, 
  AdaptiveMenu, 
  AdaptiveDropdown, 
  AdaptivePagination 
} from "@aura-adaptive/aura-ui-adaptor";
```

---

## AdaptiveGrid

An automatically responsive grid system that modifies column counts and gaps based on cognitive and motor ML flags.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `number` | `3` | Base number of columns (desktop-like intent). |
| `minColumns` | `number` | `1` | Minimum allowed columns. |
| `maxColumns` | `number` | `columns` | Maximum allowed columns. |
| `minColumnWidth` | `number` | `220` | Minimum column width in px. |
| `maxColumnWidth` | `number` | — | Maximum column width in px. |
| `autoFit` | `boolean` | `true` | If true, column count adapts to viewport width. |
| `collapseBelow` | `number` | Auto | Viewport width threshold (px) to force a single column. |
| `withContainerPadding` | `boolean` | `false` | Injects page-level padding tokens. |
| `dense` | `boolean` | `false` | Uses tighter grid gaps. |
| `detailed` | `boolean` | `false` | If true, prevents the grid from simplifying (dropping columns) even when `layoutSimplification` is active. |

---

## AdaptiveNavbar

A responsive top navigation bar using compound components for structure.

### Compound Components
- `<AdaptiveNavbar>`
- `<AdaptiveNavbar.Brand>`
- `<AdaptiveNavbar.Nav>`
- `<AdaptiveNavbar.Item>`
- `<AdaptiveNavbar.Actions>`
- `<AdaptiveNavbar.Spacer>`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sticky` | `boolean` | `false` | Fixes the navbar at the top of the viewport. |
| `bordered` | `boolean` | `true` | Shows a bottom border. Forced to `true` in high contrast mode. |
| `collapseAt` | `number` | Auto | Viewport width threshold (px) for compact mobile mode. |
| `compactNavMode` | `"scroll" \| "wrap"` | `"scroll"` | How nav items behave when collapsed. |
| `detailed` | `boolean` | `false` | Overrides simplification ML behavior. |

---

## AdaptiveMenu

A static list of navigational or action items, often used in sidebars or settings panels.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AdaptiveMenuItem[]` | `[]` | Array of items if not using groups. |
| `groups` | `AdaptiveMenuGroup[]` | `[]` | Array of grouped items. |
| `textVisibility`| `"full" \| "compact"`| Auto | `"full"` shows descriptions. `"compact"` hides descriptions. Auto-switches based on ML flags. |
| `itemHeight` | `number` | Auto | Overrides minimum item hit area. |
| `showDividers` | `boolean` | Auto | Shows borders between groups. |

---

## AdaptiveDropdown

An interactive dropdown menu button.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AdaptiveDropdownItem[]` | `[]` | List of actions or links. |
| `label` | `string` | — | Button label. |
| `icon` | `ReactNode` | — | Icon node. |
| `iconOnly` | `boolean` | `false` | Attempts to hide the text label. Overridden by cognitive ML profiles. |
| `labelVisibility`| `"auto" \| "visible" \| "hidden"`| `"auto"`| Controls label visibility. |
| `align` | `"left" \| "right"` | `"left"` | Alignment of the dropdown menu popup. |
| `triggerSize` | `number` | Auto | Hit area size of the trigger button. |

---

## AdaptivePagination

A pagination control set that adapts its hit areas and text labels.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | **Required** | The active page. |
| `totalPages` | `number` | **Required** | Total number of pages. |
| `onPageChange`| `(page) => void` | — | Callback when a page is requested. |
| `maxVisiblePages`| `number` | — | Maximum number of intermediate page buttons to display. |
| `showPageNumbers`| `boolean` | `true` | Shows the intermediate page numbers. |
| `showPrevNextText`|`boolean` | Auto | Shows "Previous/Next" text. Disables automatically to save space unless cognitive impairment profiles force it on. |
| `buttonSize` | `number` | Auto | Enforces minimum hit area for pagination controls. |

---

## Adaptive Behaviors across Layout & Navigation

- **Low Literacy / Simplification**: `<AdaptiveGrid>` drops its maximum column count to `2` to reduce cognitive load. `<AdaptiveDropdown>` overrides `iconOnly` settings and forces text labels to appear. `<AdaptiveMenu>` hides complex `description` texts to simplify choices, but will show `example` texts if `tooltipAssist` is active. `<AdaptiveNavbar.Actions>` trims down to only show the primary action.
- **Motor Impairments**: Minimum target sizes (`controls.minTargetSize`) dynamically scale up to `44px` or more across dropdown triggers, pagination buttons, navbar items, and menu rows. `AdaptiveGrid` track widths expand so items are easier to tap.
- **Visual Impairments**: Borders and dividers are thickened or forced `true`. Drop shadows are removed in favor of high-contrast solid borders.
- **Reduced Motion**: Disables grid transition animations, hover scales on navbar items, and dropdown appearance animations.
