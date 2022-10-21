import React from 'react'

export default function ButtonLayout({ name, handler }: { name: string, handler?: () => void }) {
  return (
    <div onClick={handler} className='flex justify-center py-4 px-2 bg-zinc-200 rounded-md border border-brand-brown-600 active:scale-90 transition-all '>
      <strong>{name}</strong>
    </div>
  )
}
