import React, { useState } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { parseCookies } from 'nookies'
import { api } from '../../services/axios'


export default function ButtonCancelarReserva({ id, setRefresh }) {
  const [checkCancelar, setCheckCancelar] = useState(false)

  const { 'token': token } = parseCookies()

  const router = useRouter()
  async function handleCancelarReserva() {
    const toasty = toast.loading('Cancelando...')
    try {
      const response = await api.delete(`/agendamento/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      toast.success(response.data.message)
      setRefresh(old => !old)
    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(toasty)
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
            Sua reserva
          </button>
        )
      }
    </>
  )
}
