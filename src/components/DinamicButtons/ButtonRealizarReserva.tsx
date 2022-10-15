import React, { useState } from 'react'
import {useRouter} from 'next/router'
export default function ButtonRealizarReserva({id}) {
  const [check, setCheck] = useState(false)

const router = useRouter()
  async function handleRealizarReserva(){
    alert('Reserva realizada com sucesso! id: ' + id)
    router.push('/agendamento')
  }

  return (
    <>
      {
        check ? (
          <div>
          <span>Reservar sala?</span>

            <div className='w-full flex justify-center gap-5'>
              <button className="btn btn-success" onClick={handleRealizarReserva}>
                Sim, reservar
              </button>
              <button className="btn btn-outline" onClick={() => setCheck(false)}>
                Voltar
              </button>
            </div>

          </div>
        ) : (

          <button className="btn btn-primary w-full" onClick={() => setCheck(true)}>
            Reservar
          </button>
        )
      }
    </>
  )
}
