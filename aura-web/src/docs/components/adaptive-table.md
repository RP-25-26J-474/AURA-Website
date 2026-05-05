# Adaptive Data Display

This documentation covers the core adaptive data display components provided by the AURA UI Adaptor:
- `AdaptiveTable`
- `AdaptiveList`

These components dynamically adjust their densities, spacing, hit areas, and visual contrast based on the active personalization profile.

---

## Import

```jsx
import { 
  AdaptiveTable, 
  AdaptiveList 
} from "@aura-adaptive/aura-ui-adaptor";
```

---

## AdaptiveTable

A fully-featured, accessible data table that adapts its padding and row heights to the `controls.minTargetSize` and layout simplification flags.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | **Required** | Array of data objects. |
| `columns` | `AdaptiveTableColumn[]`| **Required** | Column configuration definitions. |
| `variant` | `"basic" \| "zebra" \| "sortablePaginated" \| "withImages"` | `"basic"` | Controls row styling and enables sorting/pagination capabilities. |
| `rowKey` | `string \| (row, idx) => string` | `index` | Unique key accessor for rows. |
| `caption` | `string` | — | Visually displayed and screen-reader accessible table caption. |
| `emptyMessage` | `string` | `"No data available."`| Text displayed when data is empty. |
| `density` | `"compact" \| "normal" \| "spacious"`| Auto | Overrides spacing tokens. Otherwise derives padding from ML tokens. |
| `pageSize` | `number` | `6` | Number of items per page (only if `variant="sortablePaginated"`). |

### Column Definitions (`AdaptiveTableColumn`)

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier. |
| `header` | `string` | Header text. |
| `accessor`| `string \| (row) => any` | How to extract the value from the row data. |
| `cell` | `(row) => ReactNode` | Custom render function for the cell content. |
| `sortable`| `boolean` | Enables sorting on this column (requires `variant="sortablePaginated"`). |
| `align` | `"left" \| "center" \| "right"` | Cell text alignment. |
| `isImage` | `boolean` | Declares column as an image column (requires `variant="withImages"`). |
| `imageShape`| `"square" \| "circle"` | Image border radius. |

---

## AdaptiveList

A structured, compound-component list tailored for mobile-first interfaces and complex settings pages.

### Compound Components
- `<AdaptiveList>`
- `<AdaptiveList.Header>`
- `<AdaptiveList.Row>`
- `<AdaptiveList.Avatar>`
- `<AdaptiveList.Content>`
- `<AdaptiveList.Title>`
- `<AdaptiveList.Subtitle>`
- `<AdaptiveList.Actions>`

### Props

**`<AdaptiveList>`**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dense` | `boolean` | Auto | Overrides default spacing. Otherwise calculated based on `spacing` tokens. |

**`<AdaptiveList.Row>`**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `() => void` | — | Click handler. Automatically gives the row a hover state and pointer cursor. |
| `disabled`| `boolean` | `false` | Greys out the row and prevents clicks. |

**`<AdaptiveList.Avatar>`**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image source URL. |
| `size` | `number` | Auto | Width and height in px. Derives from `minTargetSize`. |
| `shape` | `"rounded" \| "circle" \| "square"`| `"rounded"` | Border radius geometry. |

---

## Adaptive Behaviors across Data Displays

- **Low Literacy / Simplification**: `<AdaptiveTable>` will increase `padY` and `padX` automatically if density is not explicitly forced. `<AdaptiveList.Subtitle>` texts maintain maximum contrast instead of fading out to secondary colors. 
- **Motor Impairments**: Minimum row heights (`controls.minTargetSize`) dynamically scale up to `44px` or more across `<AdaptiveTable>` rows, `<AdaptiveList.Row>`, `<AdaptiveList.Avatar>`, and table pagination buttons to prevent mis-clicks.
- **Visual Impairments**: High contrast mode completely removes all box shadows from lists and tables. Row borders (`borderColor`) harden. `<AdaptiveTable>` header backgrounds fall back to strong solids instead of slight off-whites.
- **Reduced Motion**: Disables row hover transitions (`background-color`, `transform`), and table pagination button scale animations.
