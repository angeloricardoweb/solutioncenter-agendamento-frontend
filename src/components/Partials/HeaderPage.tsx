import React from 'react'
import { ChevronLeft } from '../Icons/Chevron'
import { useRouter } from 'next/router'
export default function HeaderPage({title}: {title: string}) {
  const router = useRouter()
  return (
    <div className='flex justify-between mb-5 border-b'>
      <span onClick={() => router.back()} className="pr-5 py-3">
        <ChevronLeft />
      </span>
      <h2 className='text-center'>{title}</h2>
    </div>
  )
}
