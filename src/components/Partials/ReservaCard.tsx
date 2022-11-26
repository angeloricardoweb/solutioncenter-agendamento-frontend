import React, { useState } from 'react'
import ButtonCancelarReservaLite from '../DinamicButtons/ButtonCancelarReservaLite'

export default function ReservaCard({ reserva, setRefresh }) {
  const [showButtons, setShowButtons] = useState(false)

  return (
    <div className='shadow rounded-md'>
      <div className='p-3 px-5 flex justify-between cursor-pointer' onClick={() => setShowButtons(!showButtons)}>
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
          {
            reserva.pago === "Pago" ? (
              <strong className='text-xl text-green-600'>Pago</strong>
            ) : (
              <strong className='text-xl text-orange-400'>Pendente</strong>
            )
          }
        </div>
      </div>
      {
        showButtons && (
          <ButtonCancelarReservaLite id={reserva.id} setRefresh={setRefresh} />
        )
      }
    </div>
  )
}
