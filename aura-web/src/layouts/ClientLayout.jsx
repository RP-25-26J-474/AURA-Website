import { Outlet, NavLink, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ClientLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-950/80">
        <div className="px-4 py-4 border-b border-slate-800 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-cyan-500/90 flex items-center justify-center text-xs font-bold">
              A
            </div>
            <span className="font-semibold tracking-tight text-sm">
              AURA Client
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4 text-sm space-y-1">
          <SectionLabel label="Overview" />
          <NavItem to="/client/dashboard" label="Dashboard" />
          {/* later: /client/sites, /client/users etc. */}

          <SectionLabel label="Configuration" />
          <NavItem to="/client/settings" label="Personalization Settings" />
        </nav>

        <div className="px-4 py-4 border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-slate-200 truncate max-w-[9rem]">
                {user?.name || "Client Admin"}
              </div>
              <div className="truncate max-w-[9rem]">{user?.email}</div>
            </div>
            <button
              onClick={logout}
              className="text-xs text-slate-400 hover:text-red-400"
            >
              Log out
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 border-b border-slate-800 flex items-center justify-between px-4">
          <div className="font-medium text-sm text-slate-200">
            Client Dashboard
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/30">
              Organization: Default
            </span>
            <span className="hidden sm:inline text-xs text-slate-400">
              Role: <span className="text-slate-200">{user?.role}</span>
            </span>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <div className="mt-4 mb-1 text-[0.65rem] uppercase tracking-wide text-slate-500">
      {label}
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-slate-300 hover:bg-slate-800/70 hover:text-white transition text-sm",
          isActive ? "bg-slate-800 text-white border border-slate-700" : "",
        ].join(" ")
      }
    >
      <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
      <span>{label}</span>
    </NavLink>
  );
}
