import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LandingLayout from "./layouts/LandingLayout";
import DocsShellLayout from "./layouts/DocsShellLayout";
import DeveloperLayout from "./layouts/DevLayout";
import ClientLayout from "./layouts/ClientLayout";

import LandingPage from "./routes/public/LandingPage";
import Pricing from "./routes/public/Pricing";
import DocsLayout from "./routes/docs/DocsLayout";
import ContactUs from "./routes/public/ContactUs";
import AboutUs from "./routes/public/AboutUs";

import LoginPage from "./routes/auth/LoginPage";
import RegisterPage from "./routes/auth/RegisterPage";

import ClientDashboard from "./routes/client/ClientDashboard";
import DevDashboard from "./routes/developer/DevDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing / marketing */}
          <Route element={<LandingLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>

          {/* Docs — own shell, no footer, sticky sidebar */}
          <Route path="/docs" element={<DocsShellLayout />}>
            <Route path="*" element={<DocsLayout />} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Developer area */}
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

          {/* Client area */}
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
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
