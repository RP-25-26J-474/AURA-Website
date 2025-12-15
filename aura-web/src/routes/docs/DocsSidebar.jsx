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
      { label: "Personalization Profiles", to: "/docs/personalization" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Adaptive Button", to: "/docs/components/adaptive-button" },
      { label: "Adaptive Card", to: "/docs/components/adaptive-card" },
    ],
  },
  {
    title: "API",
    items: [
      { label: "API Reference", to: "/docs/api-reference" },
    ],
  },
];

export default function DocsSidebar() {
  return (
    <nav className="sticky top-24 space-y-6 text-sm bg-base-200 p-6 rounded-md">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="mb-2 text-md font-semibold tracking-wide text-gray-500">
            {section.title}
          </h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-md px-2 py-1.5 transition ${
                      isActive
                        ? "bg-base-300 font-medium text-base-content"
                        : "text-gray-400 hover:bg-base-300 hover:text-base-content"
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
  );
}
