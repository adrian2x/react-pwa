"use client";
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "./config";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { initializeUI } from "@firebase-ui/core";
import { customLanguage, english } from "@firebase-ui/translations";

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);

export const ui = initializeUI({
  app: app,
  behaviors: [],
  locale: 'en-US',
  translations: [
    customLanguage(english.locale, {
      labels: {
        signIn: "Sign In",
      },
      prompts: {
        signInToAccount: "Sign in to your account",
      },
      errors: {
        invalidEmail: "Please enter a valid email address",
      },
    }),
  ],
});

// if (import.meta.env.MODE === "development") {
//   connectAuthEmulator(auth, "http://localhost:9099");
// }
