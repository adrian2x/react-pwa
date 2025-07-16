'use client'
import { ui } from './clientApp'
import { useUser } from './hooks'
import { ConfigProvider } from '@firebase-ui/react'
import './index.css'

export function LoginButton() {
  const { signIn } = useUser()
  return (
    <button className='btn btn-primary rounded-4xl' onClick={signIn}>
      Sign in
    </button>
  )
}

export function FirebaseUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      ui={ui}
      policies={{
        termsOfServiceUrl: 'https://www.google.com',
        privacyPolicyUrl: 'https://www.google.com'
      }}>
      {children}
    </ConfigProvider>
  )
}
