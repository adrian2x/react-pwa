import type { ReactNode } from 'react'

export type AvatarProps = {
  children: ReactNode
}

export function Avatar({ children }: AvatarProps) {
  return (
    <div className='avatar'>
      <div className='w-10 rounded-full'>{children}</div>
    </div>
  )
}
