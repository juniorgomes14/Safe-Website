import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";
import FireBaseAuth from "../firebase/firebaseConfig";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(FireBaseAuth, email, password);
      return true;
    } catch (error) {
      // console.error("Erro no login:", error);
      return false;
    }
  };

  const logOut = () => {
    setLoading(true);
    return signOut(FireBaseAuth);
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

  
  const authValue = {
    user,
    loginUser,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
