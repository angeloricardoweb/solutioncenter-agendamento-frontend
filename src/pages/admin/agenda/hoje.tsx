import React, { useEffect, useState } from 'react'
import { api, api_dev, api_local } from '../../../services/axios';

export default function Hoje() {
  const [reservas, setReservas] = useState([])

  async function getDay() {
    try {
      const response = await api_dev.get('/admin/agenda/102022')
      console.log(response.data.results);
      setReservas(response.data.results.reservas)

    } catch (error) {
      console.log(error);
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
                <th>Hora</th>
                <th>Clarice</th>
                <th>Carlos</th>
                <th>Cecília</th>
                <th>Rui</th>
                <th>Machado</th>
                <th>Monteiro</th>
                <th>Luís</th>
                <th>Cora</th>
                <th>Carolina</th>
              </tr>
            </thead>
            <tbody>
              {
                reservas && reservas.map(reserva => (
                  <tr key={reserva.id}>
                    <th><span className='badge'>{reserva.time}h</span></th>
                    {
                      reserva.clientes.map(cliente => (
                        <th key={cliente.id}>
                          <div className={`flex flex-col items-center gap-2 border p-2 ${cliente.paid ? 'bg-green-300' : ''}`}>
                            <span>{cliente.name}</span>
                            {
                              cliente.paid ? (
                                <small>Pago</small>
                              ) : (
                                <small>Aberto</small>
                              )
                            }
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
