import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '../../services/axios'
import { parseCookies } from 'nookies'
import toast from 'react-hot-toast'
export default function ButtonRealizarReserva({ timeId, salaId, setRefresh }) {
  const [check, setCheck] = useState(false)
  const router = useRouter()

  const { "token": token } = parseCookies()

  async function handleRealizarReserva() {
    console.log(timeId, salaId);

    const loadingToast = toast.loading('Registrando...')
    try {
      const response = await api.post(`agendamento/reservar`, {
        timeId: timeId,
        salaId: salaId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      toast.success(response.data.message, {
        duration: 5000,
        icon: '✅',
      })

      setRefresh(old => !old)

    } catch (error) {
      toast.error(error.response.data.message)

    }
    toast.dismiss(loadingToast)

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
