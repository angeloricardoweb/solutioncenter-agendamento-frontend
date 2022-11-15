import React from 'react'

export default function DescriptionBlock({ title, value }: { title: string, value: string }) {
  return (
    <div>
      <strong className='text-xl'>{title}: </strong>
      <span className='text-xl'>{value}</span>
    </div>
  )
}
