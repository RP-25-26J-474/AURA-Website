import { NavLink } from "react-router-dom";
import { FaMicroscope, FaRoute, FaFileLines, FaDisplay } from "react-icons/fa6";

const sections = [
  {
    title: "Project Details",
    items: [
      { label: "Domain", to: "/research/domain", icon: <FaMicroscope /> },
      { label: "Milestones", to: "/research/milestones", icon: <FaRoute /> },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documents", to: "/research/documents", icon: <FaFileLines /> },
      { label: "Presentations", to: "/research/presentations", icon: <FaDisplay /> },
    ],
  },
];

export default function ResearchSidebar({ onNavigate }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 border-b border-base-300">
        <h2 className="text-lg font-bold text-base-content flex items-center gap-2">
          AURA Research
        </h2>
        <p className="text-[11px] leading-relaxed text-base-content/40 mt-1.5 ml-0.5">
          AURA: Adaptive Web UI Personalization for Visual, Motor, and Literacy Diversity in Adults
        </p>
        <div className="mt-3 ml-0.5">
          <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-wider text-primary/60">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Research Publication Pending
          </span>
        </div>
      </div>

      {/* Scrollable nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {sections.map((section) => (
          <div key={section.title} className="mb-5">
            <p className="px-2 mb-1.5 text-[10px] font-bold tracking-widest uppercase text-base-content/35">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-base-content/55 hover:bg-base-200 hover:text-base-content"
                      }`
                    }
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-base-300 text-[11px] text-base-content/30">
        © {currentYear} AURA. All rights reserved.
      </div>
    </div>
  );
}
