import React, { useEffect, useState } from 'react'
import { api, api_dev, api_local } from '../../../services/axios';
import { useRouter } from 'next/router';
export default function Hoje() {
  const [reservas, setReservas] = useState([])
  const router = useRouter()

  const { id } = router.query;

  async function getDay() {
    try {
      const response = await api_dev.get(`/admin/agenda/${id}`)
      console.log(response.data.results);
      setReservas(response.data.results.reservas)

    } catch (error) {
      console.log(error);
    }
  }

  function handleAction(disponivel, clientId) {
    if (disponivel) {
      alert('add nova reserva')
    } else {
      router.push(`/admin/agenda/details/${clientId}`)
    }
  }

  useEffect(() => {
    getDay()
  }, [])

  return (
    <section>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className='min-w-[80px]'>Hora</th>
                <th className='min-w-[80px]'>Clarice</th>
                <th className='min-w-[80px]'>Carlos</th>
                <th className='min-w-[80px]'>Cecília</th>
                <th className='min-w-[80px]'>Rui</th>
                <th className='min-w-[80px]'>Machado</th>
                <th className='min-w-[80px]'>Monteiro</th>
                <th className='min-w-[80px]'>Luís</th>
                <th className='min-w-[80px]'>Cora</th>
                <th className='min-w-[80px]'>Carolina</th>
              </tr>
            </thead>
            <tbody>
              {
                reservas && reservas.map(reserva => (
                  <tr key={reserva.id}>
                    <th className='min-w-[80px]'><span className='badge'>{reserva.time}h</span></th>
                    {
                      reserva.clientes.map(cliente => (
                        <th key={cliente.id} className=" min-w-[80px] " onClick={() => handleAction(cliente.disponivel, reserva.id)}>
                          <div className={`flex flex-col items-center gap-1 border p-1 ${cliente.paid ? 'bg-green-300' : ''}`}>
                            <span className='text-[12px] inline-block h-5'>{cliente.name}</span>
                            <small className='text-[12px] inline-block h-5'>{cliente.paid && "Pago"}</small>
                          </div>
                        </th>
                      ))
                    }
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
