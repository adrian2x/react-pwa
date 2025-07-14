'use client'
import { useUser } from './hooks'

export function LoginButton() {
  const { signIn } = useUser()
  return (
    <button className='btn btn-primary rounded-4xl' onClick={signIn}>
      Sign in
    </button>
  )
}
