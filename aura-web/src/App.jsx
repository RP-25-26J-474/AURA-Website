import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuthContext } from "./context/AuthContext";

import LandingLayout from "./layouts/LandingLayout";
import DocsShellLayout from "./layouts/DocsShellLayout";
import DeveloperLayout from "./layouts/DevLayout";
import ClientLayout from "./layouts/ClientLayout";

import LandingPage from "./routes/public/LandingPage";
import Pricing from "./routes/public/Pricing";
import DocsLayout from "./routes/docs/DocsLayout";
import ContactUs from "./routes/public/ContactUs";

import LoginPage from "./routes/auth/LoginPage";
import RegisterPage from "./routes/auth/RegisterPage";

import ClientDashboard from "./routes/client/ClientDashboard";
import DevDashboard from "./routes/developer/DevDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AdaptiveProvider } from "@aura-adaptive/aura-ui-adaptor";

function AppWithAdaptive() {
  const { user } = useAuthContext();
  const userId = user?.id || "u_001";

  return (
    <AdaptiveProvider
      userId={userId}
    >
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>

        <Route path="/docs" element={<DocsShellLayout />}>
          <Route path="*" element={<DocsLayout />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dev"
          element={
            <ProtectedRoute allowedRoles={["developer"]}>
              <DeveloperLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DevDashboard />} />
        </Route>

        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <ClientLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<ClientDashboard />} />
        </Route>
      </Routes>
    </AdaptiveProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppWithAdaptive />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
