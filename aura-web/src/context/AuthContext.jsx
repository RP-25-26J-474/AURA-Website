import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

const LS_KEY = "aura_auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = async ({ email, password }) => {
    // TODO: replace with real backend call
    // For now, decide role by email pattern:
    const role = email.includes("+dev") ? "developer" : "client";
    const fakeUser = { id: "u1", name: "Test User", email, role };

    setUser(fakeUser);
    localStorage.setItem(LS_KEY, JSON.stringify(fakeUser));
    return fakeUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LS_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
