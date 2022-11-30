import React from 'react'

export default function DescriptionBlock({ title, value }: { title: string, value: string }) {
  return (
    <div>
      <strong className='text-lg'>{title}: </strong>
      <span className='text-lg'>{value}</span>
    </div>
  )
}
