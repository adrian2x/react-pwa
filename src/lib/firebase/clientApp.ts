"use client";
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from 'firebase/auth'
import { autoAnonymousLogin, initializeUI } from '@firebase-ui/core'
import { customLanguage, english } from '@firebase-ui/translations'

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)

export const ui = initializeUI({
  app: app,
  behaviors: [autoAnonymousLogin()],
  translations: [
    customLanguage(english.locale, {
      labels: {
        signIn: 'Sign In'
      },
      prompts: {
        signInToAccount: 'Sign in to your account'
      },
      errors: {
        invalidEmail: 'Please enter a valid email address'
      }
    })
  ]
})
