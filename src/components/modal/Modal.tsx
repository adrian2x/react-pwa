import clsx from 'clsx'
import { createElement, useRef, type ReactNode } from 'react'

export type ModalProps = {
  id: string
  trigger: ReactNode
  children: ReactNode
  className?: string
  onClose?: () => void
  as?: string
}

export function Modal({ id, trigger, children, className, onClose, as }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerEl = createElement(as || 'div', {
    onClick: () => dialogRef.current!.showModal()
  }, trigger)
  return (
    <>
      {triggerEl}
      <dialog id={id} ref={dialogRef} className={clsx('modal', className)} onClose={onClose}>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle absolute right-2 top-2'>✕</button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  )
}
