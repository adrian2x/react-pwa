import clsx from 'clsx'
import type { ReactNode } from 'react'

export type DropdownProps = {
  className?: string
  contentClassName?: string
  trigger: ReactNode
  children: ReactNode
}

export function Dropdown({ trigger, className, contentClassName, children }: DropdownProps) {
  return (
    <div className={clsx('dropdown', className)}>
      {trigger}
      <div
        tabIndex={0}
        className={clsx('dropdown-content rounded-box z-1 min-w-52 shadow', contentClassName)}>
        {children}
      </div>
    </div>
  )
}
