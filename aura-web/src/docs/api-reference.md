# API Reference

Complete reference for the `@aura-adaptive/aura-ui-adaptor` package exports.

---

## `<AdaptiveProvider />`

Wraps your application and manages personalization state. Must be the parent of all Adaptive components.

```jsx
import { AdaptiveProvider } from "@aura-adaptive/aura-ui-adaptor";

<AdaptiveProvider simulateExtensionInstalled={false}>
  <App />
</AdaptiveProvider>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `simulateExtensionInstalled` | `boolean` | `false` | When `true`, uses local mock data instead of the AURA browser extension. Useful for development. |
| `children` | `ReactNode` | — | Your application tree |

### Loading Behavior

The provider tries three paths in order:

1. **Extension Mode** — Reads the active personalization profile directly from the AURA browser extension if installed
2. **Simulation Mode** — Uses bundled mock profile data (when `simulateExtensionInstalled={true}`)
3. **Fallback Mode** — Runs a bundled lightweight ML prediction model using cached signals. Can optionally render an installation prompt.

---

## `useAdaptive()`

React hook that exposes the current personalization state.

```jsx
import { useAdaptive } from "@aura-adaptive/aura-ui-adaptor";

function MyComponent() {
  const { loading, source, tokens, profile, reload } = useAdaptive();

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <p>Source: {source}</p>
      <p>Theme: {tokens.flags.theme}</p>
      <button onClick={() => void reload()}>Reload</button>
    </section>
  );
}
```

### Return Values

| Field | Type | Description |
|-------|------|-------------|
| `loading` | `boolean` | `true` while the provider is fetching or predicting a profile |
| `source` | `string` | Where the profile came from: `"extension"`, `"simulation"`, or `"fallback"` |
| `tokens` | `object` | UI design tokens derived from the user's profile (colors, sizes, flags) |
| `profile` | `object` | The raw personalization profile object |
| `reload` | `() => Promise<void>` | Manually re-fetches or re-predicts the profile |

---

## `predictFallbackTokens()`

Utility function used internally by the provider to run the bundled prediction model. Exposed for advanced usage.

```jsx
import { predictFallbackTokens } from "@aura-adaptive/aura-ui-adaptor";

const tokens = await predictFallbackTokens(cachedSignals);
```

---

## Full Component List

All components below are named exports from `@aura-adaptive/aura-ui-adaptor`:

| Component | Description |
|-----------|-------------|
| `AdaptiveAlert` | Contextual alert / notification banner |
| `AdaptiveButton` | Accessible, adaptive call-to-action button |
| `AdaptiveCard` | Content card with adaptive padding and shadow |
| `AdaptiveCheckbox` | Accessible checkbox with adaptive target size |
| `AdaptiveDialog` | Modal dialog |
| `AdaptiveDrawer` | Side-panel drawer |
| `AdaptiveDropdown` | Dropdown menu |
| `AdaptiveGrid` | Responsive adaptive grid layout |
| `AdaptiveHero` | Full-width hero / banner section |
| `AdaptiveIcon` | Scaled icon wrapper |
| `AdaptiveInput` | Text input field |
| `AdaptiveLayout` | Page-level layout container |
| `AdaptiveLink` | Hyperlink with adaptive styling |
| `AdaptiveList` | Ordered / unordered list |
| `AdaptiveMenu` | Navigation menu |
| `AdaptiveModal` | Overlay modal |
| `AdaptiveNavbar` | Top navigation bar |
| `AdaptiveNotification` | Toast-style notification |
| `AdaptivePagination` | Page controls |
| `AdaptivePopover` | Anchored popover/tooltip |
| `AdaptiveProgressBar` | Linear progress indicator |
| `AdaptiveSection` | Page section wrapper |
| `AdaptiveSelect` | Select / dropdown input |
| `AdaptiveSidebar` | Collapsible sidebar navigation |
| `AdaptiveSkeleton` | Loading skeleton placeholder |
| `AdaptiveSlider` | Range slider |
| `AdaptiveSpinner` | Loading spinner |
| `AdaptiveStepper` | Multi-step progress indicator |
| `AdaptiveSwitch` | Toggle switch |
| `AdaptiveTable` | Data table |
| `AdaptiveTabs` | Tab navigation |
| `AdaptiveTag` | Label / badge chip |
| `AdaptiveText` | Typography component (headings, body, etc.) |
| `AdaptiveTextarea` | Multi-line text input |
| `AdaptiveToast` | Pop-up toast notification |
| `AdaptiveTooltip` | Hover tooltip |
| `AdaptiveVideo` | Video player container |
| `AdaptiveVisualizer` | Data visualization wrapper |
