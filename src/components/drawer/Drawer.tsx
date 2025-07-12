import clsx from 'clsx'
import { type ForwardedRef, type ReactNode } from 'react'

export type DrawerProps = {
  id: string
  ref?: ForwardedRef<HTMLInputElement>
  className?: string
  sidebar: ReactNode
  children: ReactNode
}

export function Drawer({ id, ref, className, sidebar, children }: DrawerProps) {
  const classNames = clsx('drawer', className)
  return (
    <div className={classNames}>
      <input id={id} ref={ref} type='checkbox' className='drawer-toggle' />

      <div className='drawer-side sidebar'>
        <label htmlFor={id} aria-label='close sidebar' className='drawer-overlay'></label>
        {sidebar}
      </div>

      <div className='drawer-content'>{children}</div>
    </div>
  )
}
