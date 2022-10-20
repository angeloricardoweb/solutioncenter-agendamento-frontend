import React from 'react'

export default function ReservaCard() {
  return (
    <div className='shadow rounded-md p-3 px-5 flex justify-between'>
      <header>
        <div>
          <strong>Dia: </strong>
          <span>20 de outubro de 2022</span>
        </div>
        <div>
          <strong>Hora: </strong>
          <span>08h</span>
        </div>
        <strong>Sala: </strong>
        <span className='text-brand-brown-600'>Clarice Lispector</span>
      </header>
      <div>
        <strong className='text-xl text-green-600'>Pago</strong>
      </div>
    </div>
  )
}
