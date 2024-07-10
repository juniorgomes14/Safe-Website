import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import FireBaseAuth from "../firebase/firebaseConfig";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FireBaseAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  // Função de login
  async function loginAdmin(email, password) {
    try {
      const login = await signInWithEmailAndPassword(
        FireBaseAuth,
        email,
        password
      );
      setUser(login.user);
      const tokenUser = await login.user.getIdToken();
      setToken(tokenUser);

      return true;
    } catch (error) {
      console.error("Erro no login:", error);
      return false;
    }
  }

  const authValue = {
    user,
    loginUser,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
