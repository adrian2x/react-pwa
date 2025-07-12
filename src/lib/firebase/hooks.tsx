import { useState } from "react";

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { type User, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./clientApp";

export function useUser(initalUser?: User | null) {
  const [user, setUser] = useState<User | null>(initalUser ?? null);

  const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())

  const logOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
    return () => unsubscribe();
  }, []);

  return {user, signIn, signOut: logOut};
}