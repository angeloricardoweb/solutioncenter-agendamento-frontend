import React, { useEffect, useState } from 'react'
import { api, api_dev, api_local } from '../../../services/axios';
import { useRouter } from 'next/router';
import Admin from '../../../components/Layouts/Admin';
import HeaderPage from '../../../components/Partials/HeaderPage';
import { parseCookies } from 'nookies';
import Loading from '../../../components/Icons/Loading';
import DescriptionBlock from '../../../components/Partials/DescriptionBlock';

interface IReserva {
  qtd_reservas: number;
  qtd_reservas_pagas: number;
  qtd_reservas_pendentes: number;
  reservas: [
    {
      id: number;
      rooms: any;
      time: string;
    }
  ]
}

export default function Hoje() {
  const [reservas, setReservas] = useState<IReserva>()
  const router = useRouter()
  const { 'token': token } = parseCookies()
  const { id } = router.query;
  const [loading, setLoading] = useState(false)

  const date = id?.toString().split('-').reverse().join('/') || ""

  async function getDay() {
    setLoading(true)
    try {
      const response = await api.get(`/admin/agenda/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data.results);
      setReservas(response.data.results)

    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  function handleAction(reserva, room) {
    if (room.fechado) {
      return
    }
    if (room.disponivel) {
      router.push(`/admin/agenda/novo-agendamento?salaId=${room.salaId}&dataId=${id}&hora=${reserva.time}`)
    } else {
      router.push(`/admin/agenda/details/${room.reserva.id}`)
    }
  }

  useEffect(() => {
    getDay()

    if (!id) {
      router.push('/admin/agenda//home')
    }
  }, [])

  return (
    <Admin title="agenda">
      <div className="main_container">
        <HeaderPage title="Agenda" />
        <p className='text-center font-bold text-brand-brown-600'>{date}</p>
        <div className='flex gap-5'>
          <DescriptionBlock title={'Salas reservadas'} value={reservas?.qtd_reservas?.toString() || ""}/>
          <DescriptionBlock title={'Pagas'} value={reservas?.qtd_reservas_pagas?.toString() || ""}/>
          <DescriptionBlock title={'Pendentes'} value={reservas?.qtd_reservas_pendentes?.toString() || ""}/>
        </div>
      </div>
      <section className='mb-[120px]'>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className='min-w-[80px]'>Hora</th>
                  <th className='min-w-[80px]'>Clarice</th>
                  <th className='min-w-[80px]'>Carlos</th>
                  <th className='min-w-[80px]'>Cec??lia</th>
                  <th className='min-w-[80px]'>Rui</th>
                  <th className='min-w-[80px]'>Machado</th>
                  <th className='min-w-[80px]'>Monteiro</th>
                  <th className='min-w-[80px]'>Lu??s</th>
                  <th className='min-w-[80px]'>Cora</th>
                  <th className='min-w-[80px]'>Carolina</th>
                </tr>
              </thead>
              <tbody>
                {
                  loading &&
                  <tr>
                    <th colSpan={5}>
                      <Loading />
                    </th>
                  </tr>
                }
                {
                  !loading &&
                  reservas && reservas.reservas.map(reserva => (
                    <tr key={reserva.id} className="cursor-pointer">
                      <th className='min-w-[80px]'><span className='badge'>{reserva.time}h</span></th>
                      {
                        reserva.rooms.map(room => (
                          <th key={room.id} className="min-w-[80px] hover:bg-zinc-200 border" onClick={() => handleAction(reserva, room)}>
                            {!room.disponivel && room.reserva &&
                              <div className={`flex flex-col items-center gap-1 border p-1  ${room.reserva?.paid ? 'bg-green-300 ' : 'bg-orange-300'}`}>
                                <span className='text-[12px] inline-block h-5'>{room.reserva?.cliente}</span>
                                <small className='text-[12px] inline-block h-5'>{room.reserva?.paid ? "Pago" : "Pendente"}</small>
                              </div>
                            }
                            {room.fechado &&
                              <div className={`flex flex-col items-center gap-1 border p-1`}>
                                <span className='text-[12px] inline-block h-10 text-zinc-400 font-normal'>Fechado</span>
                              </div>
                            }
                            {
                              !room.fechado && room.disponivel && <span className='text-[12px] inline-block h-10 text-green-600 font-normal'></span>
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
