import React, { useEffect, useState } from 'react'
import { api, api_dev, api_local } from '../../../services/axios';
import { useRouter } from 'next/router';
import Admin from '../../../components/Layouts/Admin';
import HeaderPage from '../../../components/Partials/HeaderPage';
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

  function handleAction(reserva, room) {
    if (room.disponivel) {
      router.push(`/admin/agenda/novo-agendamento?salaId=${room.salaId}&dataId=${id}&hora=${reserva.time}`)
    } else {
      router.push(`/admin/agenda/details/${room.reserva.id}`)
    }
  }

  useEffect(() => {
    getDay()

    if(!id){
      router.push('/admin/agenda//home')
    }
  }, [])

  return (
    <Admin title="agenda">
      <div className="main_container">
        <HeaderPage title="Agenda" />
      </div>
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
                        reserva.rooms.map(room => (
                          <th key={room.id} className=" min-w-[80px] " onClick={() => handleAction(reserva, room)}>
                            {room.disponivel === false &&
                              <div className={`flex flex-col items-center gap-1 border p-1 ${room.reserva.paid ? 'bg-green-300' : ''}`}>
                                <span className='text-[12px] inline-block h-5'>{room.reserva.cliente}</span>
                                <small className='text-[12px] inline-block h-5'>{room.reserva.paid && "Pago"}</small>
                              </div>}
                              {
                                room.disponivel && <span className='text-[12px] inline-block h-5'>Disponivel</span>
                              }
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
    </Admin>
  )
}
