import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";

import FireBaseAuth from "../firebase/firebaseConfig";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  // const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = FireBaseAuth.onAuthStateChanged(async (user) => {
      const tokenUser = await user.getIdToken();

      if (user) {
        const tokenUser = await user.getIdToken();
        if (tokenUser) setToken(tokenUser);
      } else {
        setToken(null);
      }
    });

    return unsubscribe;
  }, []);

  async function loginAdmin(email, password) {
    try {
      const login = await signInWithEmailAndPassword(
        FireBaseAuth,
        email,
        password
      );
      const tokenUser = await login.user.getIdToken();

      setToken(tokenUser);

      return true;
    } catch (error) {
      return false;
    }
  }

  const value = {
    loginAdmin,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
