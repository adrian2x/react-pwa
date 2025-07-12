"use client";
import { ConfigProvider } from "@firebase-ui/react"
import { ui } from "./clientApp"
import { TbUserFilled } from 'react-icons/tb'
import { useUser } from './hooks'

export function FirebaseUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      ui={ui}
      policies={{
        termsOfServiceUrl: "https://www.google.com",
        privacyPolicyUrl: "https://www.google.com",
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export function LoginButton() {
  const { signIn } = useUser()
  return (
    <button className='btn btn-primary rounded-4xl' onClick={signIn}>
      <TbUserFilled size={18} /> Sign in
    </button>
  )
}
