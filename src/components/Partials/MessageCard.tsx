import React from 'react'

interface IData {
  id: number;
  data: string;
  message: string;
}

export default function MessageCard({ data }: { data: IData }) {
  return (
    <div className='shadow rounded-md p-3 px-5 flex justify-between'>
      <header>
        <div>
          <strong>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(new Date(data.data))}</strong>
        </div>
        <span className='text-brand-brown-600'>{data.message}</span>
      </header>
    </div>
  )
}
