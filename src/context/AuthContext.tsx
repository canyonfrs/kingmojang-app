/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

interface State {
  isAuth: boolean;
  authCode: string | null;
  // eslint-disable-next-line no-unused-vars
  auth: (code: string) => void;
  logout: () => void;
}

const AUTH_KEY = "authCode";

const AuthContext = createContext<State | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [authCode, setAuthCode] = useState<string | null>(null);

  useEffect(() => {
    const code = localStorage.getItem(AUTH_KEY);
    if (code) {
      setIsAuth(true);
      setAuthCode(code);
    }
  }, []);

  function auth(code: string) {
    setIsAuth(true);
    setAuthCode(code);
    localStorage.setItem(AUTH_KEY, code);
  }

  function logout() {
    setIsAuth(false);
    setAuthCode(null);
    localStorage.removeItem(AUTH_KEY);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authCode,
        auth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthProvider is not found");
  }
  return context;
};

export default AuthProvider;
