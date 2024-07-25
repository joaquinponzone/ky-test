'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <div className='grid grid-cols-2 gap-1'>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='text-teal-500'
        >
        Try again
      </button>
      <button
        onClick={
          // Navigate to a different page
          () => window.location.assign('/')
        }
        className='text-blue-500'
        >
        Go home
      </button>
        </div>
    </div>
  )
}