# Adaptive Form Controls

This documentation covers the core adaptive form controls provided by the AURA UI Adaptor:
- `AdaptiveInput`
- `AdaptiveTextarea`
- `AdaptiveSelect`
- `AdaptiveCheckbox`
- `AdaptiveSwitch`

These controls automatically adapt their hit areas, labels, contrast, and spacing based on the active user profile.

---

## Import

```jsx
import { 
  AdaptiveInput, 
  AdaptiveTextarea, 
  AdaptiveSelect, 
  AdaptiveCheckbox, 
  AdaptiveSwitch 
} from "@aura-adaptive/aura-ui-adaptor";
```

---

## AdaptiveInput

A flexible, accessible text input that dynamically adapts label positioning and sizing.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Input label |
| `labelMode` | `"visible" \| "placeholder" \| "hidden"` | `"visible"` | How the label is displayed. Falls back to `"placeholder"` automatically during `layoutSimplification`. |
| `labelFontSize` | `string` | `typography.body` | Font size for the label |
| `labelGap` | `number` | Auto | Spacing between label and input |
| `inputHeight` | `number` | Auto | Overrides default height. Automatically scales up for motor impairments. |
| `helperText` | `string` | — | Text displayed below the input |
| `error` | `string` | — | Error message (sets borders to error color and uses `aria-invalid`) |
| `showError` | `boolean` | `true` | If `false`, visually hides the error message but keeps it screen-reader accessible. |
| `fullWidth` | `boolean` | `true` | Spans 100% of container width |
| `inputClassName` | `string` | — | CSS class applied directly to the `<input>` element |
| `inputStyle` | `CSSProperties`| — | Inline styles applied directly to the `<input>` element |

*(Standard HTML `<input>` props are also supported)*

---

## AdaptiveTextarea

A multiline text input component designed with accessibility in mind.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Textarea label |
| `labelMode` | `"visible" \| "hidden"` | `"visible"` | Unlike standard inputs, textareas do not support `"placeholder"` label mode safely. |
| `helperText` | `string` | — | Helper text |
| `example` | `string` | — | Example text that acts as a placeholder if `layoutSimplification` or `tooltipAssist` is active. |
| `height` | `number` | Auto | Override total height |
| `resize` | `"none" \| "vertical" \| "horizontal" \| "both"` | `"vertical"` | Auto-switches to `"both"` for motor impaired profiles to allow easier gripping. |
| `fullWidth` | `boolean` | `true` | Spans 100% of container width |

*(Standard HTML `<textarea>` props are also supported)*

---

## AdaptiveSelect

An accessible dropdown select component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `AdaptiveSelectOption[]` | `[]` | Array of `{ value, label, disabled? }` |
| `label` | `string` | — | Select label |
| `labelMode` | `"visible" \| "hidden"` | `"visible"` | How the label is displayed |
| `placeholder` | `string` | — | Unselectable placeholder text shown when no value is selected. |
| `selectHeight` | `number` | Auto | Override default height |
| `optionSpacing` | `number` | Auto | Vertical padding added to options |
| `error` | `string` | — | Error text |

*(Standard HTML `<select>` props are also supported)*

---

## AdaptiveCheckbox

A custom-styled checkbox that maintains native `<input type="checkbox">` accessibility while offering massive hit areas.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **Required** | The visible label |
| `checked` | `boolean` | — | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled default state |
| `onChange` | `(checked) => void`| — | Fired on state change |
| `boxSizePx` | `number` | Auto | The visual size of the check box |
| `hitAreaPx` | `number` | `44` | The invisible clickable hit area. Scales up with motor impairment profiles. |
| `gapPx` | `number` | `10` | Gap between the box and the label |

---

## AdaptiveSwitch

A toggle switch component with built-in state text and descriptions.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **Required** | The main visible label |
| `description` | `string` | — | Optional secondary text under the label |
| `checked` | `boolean` | — | Controlled state |
| `onChange` | `(checked) => void`| — | Fired on toggle |
| `switchHeightPx` | `number` | Auto | Height of the switch track |
| `hitAreaPx` | `number` | `44` | Minimum clickable hit area height. Scales up for motor impairments. |
| `showStateText` | `boolean` | `true` | Shows redundant "On/Off" text next to the switch thumb. |

---

## Adaptive Behaviors across Forms

- **Low Literacy / Simplification**: `<AdaptiveInput>` automatically switches `labelMode` from `"visible"` to `"placeholder"` to reduce visual noise. `<AdaptiveTextarea>` reveals inline `example` text as a placeholder.
- **Motor Impairments**: Minimum height/hit area for all inputs, selects, checkboxes, and switches is enforced to `44px` (or `controls.minTargetSize`). Textareas get larger resize handles.
- **Visual Impairments**: Focus outlines (`box-shadow`) become bolder. Checkbox strokes are thickened. Muted helper text switches to primary text colors to maintain contrast ratios.
- **Reduced Motion**: Disables focus ring transitions, hover scale effects, and switch thumb slide animations.
