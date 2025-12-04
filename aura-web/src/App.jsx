import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LandingPage from "./routes/public/LandingPage";

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
          {/* Public */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Client */}
          <Route
            path="/client/*"
            element={
              <ProtectedRoute allowedRoles={["client"]}>
                <ClientRoutes />
              </ProtectedRoute>
            }
          />

          {/* Developer */}
          <Route
            path="/dev/*"
            element={
              <ProtectedRoute allowedRoles={["developer"]}>
                <DevRoutes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Nested routes components
function ClientRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<ClientDashboard />} />
    </Routes>
  );
}

function DevRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<DevDashboard />} />
    </Routes>
  );
}

export default App;
