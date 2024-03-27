'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2 className='text-6xl font-bold'>Something went wrong!</h2>
            <button className='bg-red-400 rounded-sm p-4 text-white'
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}