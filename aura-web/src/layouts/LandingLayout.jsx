import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

export default function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        brand="AURA"
        menuItems={[
          { label: "Home", to: "/" },
          { label: "Pricing", to: "/pricing" },
          {
            label: "Docs",
            children: [
              { label: "Getting Started", to: "/docs/getting-started" },
              { label: "Components", to: "/docs/components" },
            ],
          },
        ]}
        rightItems={[
          { label: "Login", to: "/login" },
          { label: "Register", to: "/register" },
        ]}
      />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
