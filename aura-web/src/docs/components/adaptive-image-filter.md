# AdaptiveImageFilter

The `AdaptiveImageFilter` component applies color blindness filters (monochromacy, red-green, or blue-yellow) to images dynamically based on the user's `color_blindness` profile value.

It uses an HTML5 Canvas to apply color transformations, falling back to the original image if the browser blocks canvas reading (e.g., due to CORS issues).

## Import

```jsx
import { AdaptiveImageFilter } from "@aura-adaptive/aura-ui-adaptor";
```

## Usage

```jsx
<AdaptiveImageFilter 
  src="/path/to/image.jpg" 
  alt="A beautiful landscape" 
  width={400} 
  height={300} 
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `src` | `string` | **Required.** The source URL of the image. |
| `alt` | `string` | Alternative text for the image. |
| `width` | `number \| string` | The width of the image. |
| `height` | `number \| string` | The height of the image. |
| `colorBlindness` | `number` | Override the ML profile value. If omitted, reads from `AdaptiveProvider`. |
| `fallbackToOriginal` | `boolean` | Render original image if canvas reads fail (e.g., missing CORS). Defaults to `true`. |
| `canvasStyle` | `React.CSSProperties` | Styles applied to the generated `<canvas>` element. |
| `imageStyle` | `React.CSSProperties` | Styles applied to the original `<img>` fallback. |
| `onFilterApplied` | `function` | Callback triggered when the filter is successfully applied. |
| `onFilterError` | `function` | Callback triggered when an error occurs during canvas processing. |
| `cv` | `object` | Optional OpenCV.js instance for accelerated processing. Defaults to `window.cv`. |

## Color Blindness Modes

The component automatically maps the `color_blindness` value to specific filter transformations:

*   **Monochromacy** (`value === 1`)
*   **Red-Green** (`value > 0.5` and `< 1`)
*   **Blue-Yellow** (`value === 0.25`)
*   **None** (`value === 0` or others)

## CORS Requirements

Because the filter relies on reading pixel data via `canvas.getContext("2d").getImageData()`, the image must be served with appropriate CORS headers (`Access-Control-Allow-Origin: *`). If CORS fails, the component will automatically display the original, unfiltered `<img>` instead, unless `fallbackToOriginal` is set to `false`.
