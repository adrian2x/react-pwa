'use client'
import { TbUserFilled } from 'react-icons/tb'
import { useUser } from './hooks'

export function LoginButton() {
  const { signIn } = useUser()
  return (
    <button className='btn btn-primary rounded-4xl' onClick={signIn}>
      <TbUserFilled size={18} /> Sign in
    </button>
  )
}
