'use client'
import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export type ErrorFallbackProps = {
  error?: Error
  resetErrorBoundary?: () => void
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div className='p-2'>
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
    </div>
  )
}

export function AppErrorBoundary({
  children,
  onReset
}: {
  children: ReactNode
  onReset?: () => void
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
        onReset?.()
      }}>
      {children}
    </ErrorBoundary>
  )
}
