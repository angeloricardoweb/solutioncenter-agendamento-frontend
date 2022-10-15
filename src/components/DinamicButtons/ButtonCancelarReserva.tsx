import React, { useState } from 'react'
import {useRouter} from 'next/router'
export default function ButtonCancelarReserva({id}) {
  const [checkCancelar, setCheckCancelar] = useState(false)

const router = useRouter()
  async function handleCancelarReserva(){
    alert('Reserva cancelada com sucesso! id: ' + id)
    router.push('/agendamento')
  }

  return (
    <>
      {
        checkCancelar ? (
          <div>
          <span>Tem certeza que deseja cancelar?</span>

            <div className='w-full flex justify-center gap-5'>
              <button className="btn btn-warning" onClick={handleCancelarReserva}>
                Sim, cancelar
              </button>
              <button className="btn btn-outline" onClick={() => setCheckCancelar(false)}>
                Voltar
              </button>
            </div>

          </div>
        ) : (

          <button className="btn btn-outline w-full" onClick={() => setCheckCancelar(true)}>
            Cancelar reserva
          </button>
        )
      }
    </>
  )
}
