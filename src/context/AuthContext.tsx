/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { type ValidateVerificationCodeResponse } from "../hooks/useValidateVerificationCode";

type User = ValidateVerificationCodeResponse;

interface State {
  authCode: string;
  user: User | null;
}

interface Dispatch {
  auth: (user: User) => void;
  setAuthCode: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
}

const KINGMOJANG_PREFIX_KEY = "kingmojang";
const USER_KEY = `${KINGMOJANG_PREFIX_KEY}-user`;

const AuthStateContext = createContext<State | null>(null);
const AuthDispatchContext = createContext<Dispatch | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [authCode, setAuthCode] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER_KEY);
    if (!user) return;
    setUser(JSON.parse(user));
  }, []);

  const auth = useCallback((user: User) => {
    setUser(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }, []);

  const logout = useCallback(() => {
    setAuthCode("");
    setUser(null);
    localStorage.removeItem(USER_KEY);
  }, []);

  return (
    <AuthDispatchContext.Provider
      value={{
        auth,
        logout,
        setAuthCode,
      }}
    >
      <AuthStateContext.Provider
        value={{
          user,
          authCode,
        }}
      >
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("AuthProvider is not found");
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (!context) {
    throw new Error("AuthProvider is not found");
  }
  return context;
};

export default AuthProvider;
