import { NavLink } from "react-router-dom";

const sections = [
  {
    title: "Introduction",
    items: [
      { label: "Getting Started", to: "/docs/getting-started" },
      { label: "Installation", to: "/docs/installation" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { label: "API Reference", to: "/docs/api-reference" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "AdaptiveButton", to: "/docs/components/adaptive-button" },
      { label: "AdaptiveCard", to: "/docs/components/adaptive-card" },
    ],
  },
];

export default function DocsSidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-base-300 bg-base-100 px-4 py-8 flex-shrink-0">
      {/* Package badge */}
      <div className="mb-8 px-2">
        <a
          href="https://www.npmjs.com/package/@aura-adaptive/aura-ui-adaptor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono bg-base-200 border border-base-300 px-3 py-1.5 rounded-full text-base-content/60 hover:text-primary hover:border-primary/40 transition-colors"
        >
          📦 @aura-adaptive/aura-ui-adaptor
        </a>
        <p className="text-xs text-base-content/40 mt-1.5 ml-1">v1.0.1 · MIT</p>
      </div>

      {/* Nav sections */}
      <nav className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 px-2 text-xs font-bold tracking-widest uppercase text-base-content/40">
              {section.title}
            </h4>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition-colors ${isActive
                        ? "bg-primary/10 font-semibold text-primary"
                        : "text-base-content/60 hover:bg-base-200 hover:text-base-content"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
