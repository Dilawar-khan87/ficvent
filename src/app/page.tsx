'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function HomePage() {
  const router = useRouter()
  return (
    <div className='flex h-screen w-full items-center justify-center bg-[#5041BC]'>
      <button
        onClick={() => router.push('/dashboard/events')}
        className='rounded-lg bg-white p-4'
      >
        Go to Dashboard
      </button>
    </div>
  )
}

export default HomePage
