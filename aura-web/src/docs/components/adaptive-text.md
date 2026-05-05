# AdaptiveText

A flexible typography component that adapts its size, weight, and styling according to the active personalization profile.

---

## Import

```jsx
import { AdaptiveText } from "@aura-adaptive/aura-ui-adaptor";
```

---

## Basic Usage

```jsx
<AdaptiveText variant="h1">Hello World</AdaptiveText>
<AdaptiveText variant="body" align="center" muted>
  This text adapts to user preferences.
</AdaptiveText>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"display" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "lead" \| "body" \| "caption" \| "overline" \| "code"` | `"body"` | Semantic styling variant |
| `as` | `string` | — | Overrides the default HTML tag (e.g., render an `h1` variant as a `div`) |
| `align` | `"left" \| "center" \| "right" \| "justify"` | `"left"` | Text alignment |
| `weight` | `"normal" \| "medium" \| "semibold" \| "bold"` | Auto | Text weight (defaults based on variant) |
| `muted` | `boolean` | `false` | Renders the text in a secondary, lower-contrast color |
| `underline` | `boolean` | `false` | Adds text underline |
| `strike` | `boolean` | `false` | Adds text strikethrough |
| `truncate` | `boolean` | `false` | Truncates text with an ellipsis (`...`) if it overflows a single line |
| `maxLines` | `number` | — | Clamps text to a maximum number of lines (best-effort using `-webkit-line-clamp`) |
| `className` | `string` | — | Additional CSS classes |
| `style` | `CSSProperties` | — | Additional inline styles |

---

## Adaptive Behavior

`AdaptiveText` automatically responds to token changes from the `AdaptiveProvider`:
- **Typography Scale**: The `typography.baseSize` controls the font size mathematically. For example, if a user profile requests larger fonts, `AdaptiveText` recalculates `h1`, `body`, and `caption` relative to the newly injected base size.
- **Visual Impairments**: If `highContrast` is enabled, the `muted` prop falls back to the high-contrast primary text color to guarantee readability.
- **Analytics**: Clicking the text triggers behavior tracking. `Alt + Click` opens the manual component feedback modal.

---

## Full Example

```jsx
import { AdaptiveProvider, AdaptiveText } from "@aura-adaptive/aura-ui-adaptor";

function ArticleHeader() {
  return (
    <AdaptiveProvider>
      <header>
        <AdaptiveText variant="overline" muted>
          Technology
        </AdaptiveText>
        <AdaptiveText variant="h1" align="center">
          The Future of Web Interfaces
        </AdaptiveText>
        <AdaptiveText variant="lead" truncate>
          We are moving towards intelligent, dynamically rendering web layouts...
        </AdaptiveText>
      </header>
    </AdaptiveProvider>
  );
}
```
