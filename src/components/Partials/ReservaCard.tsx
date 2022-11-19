import React from 'react'

export default function ReservaCard({ reserva }) {
  return (
    <div className='shadow rounded-md p-3 px-5 flex justify-between'>
      <header>
        <div>
          <strong>Dia: </strong>
          <span>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(reserva.dia))}</span>
        </div>
        <div>
          <strong>Hora: </strong>
          <span> {reserva.hora}h</span>
        </div>
        <strong>Sala: </strong>
        <span className='text-brand-brown-600'>{reserva.sala}</span>
      </header>
      <div>
        <strong className='text-xl text-green-600'>{reserva.pago}</strong>
      </div>
    </div>
  )
}
