import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  const signOutUser = ()=>{
    setLoader(true)
    return signOut(auth)
  }

  useEffect(() => {
    setLoader(true)
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      
      setUser(loggedUser);
      setLoader(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  

  // const user = null;
  const authIfo = {
    user,
    loader,
    createUser,
    signInUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authIfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
