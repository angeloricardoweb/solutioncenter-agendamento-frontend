import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router';
import { useGlobal } from '../../context/GlobalContextProvider';
import { api, api_dev } from '../../services/axios';
import { ChevronLeft } from '../../components/Icons/Chevron';
import ButtonRealizarReserva from '../../components/DinamicButtons/ButtonRealizarReserva';
import ButtonCancelarReserva from '../../components/DinamicButtons/ButtonCancelarReserva';
import ClientBottomNavigation from '../../components/Partials/BottomNavigation';
import { parseCookies } from 'nookies';
import Loading from '../../components/Icons/Loading';


export default function TimeList() {
  const { roomData } = useGlobal()
  const router = useRouter()
  const { day, salaId } = router.query;
  const { token: token } = parseCookies()
  const [loading, setLoading] = useState(false)


  const [roomContent, setRoomContent] = useState({
    name: '',
    date: new Date(),
    times: []
  })

  async function getSemana() {
    setLoading(true)

    try {
      const response = await api.get(`/agendamento/horarios/2022-11-23/${salaId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRoomContent(response.data.results)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }


  useEffect(() => {
    if (!salaId) {
      router.push('/cliente/agendamento')
    }
    getSemana()
  }, [roomData])

  return (
    <>
      <div className=' main_container'>
        <header className='border-brand-brown-600 border-b'>
          <Link href="agendamento">
            <span className='w-10 aspect-square  shadow flex items-center justify-center rounded-full border'>
              <ChevronLeft />
            </span>
          </Link>
          <h2 className='text-center'>{roomContent.name}</h2>
          <h3 className='text-center text-brand-brown-600'>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(new Date(roomContent.date))}</h3>
        </header>
        <div className='flex flex-col gap-2 mb-[120px]'>
          {loading && <Loading />}
          {
            !loading && roomContent.times && roomContent.times.map(time => (
              <div className='grid grid-cols-4 items-center' key={time.id}>
                <span className='col-span-1 font-bold text-xl text-center'>{time.time}Hrs</span>
                <div className='col-span-3 h-16 flex items-center' >
                  {
                    time.status === 'disponivel' &&
                    <ButtonRealizarReserva timeId={time.id} salaId={salaId} />
                  }
                  {
                    time.status === 'dono' &&
                    <ButtonCancelarReserva id={time.id} />
                  }
                  {
                    time.status === 'indisponivel' &&
                    <h4 className='text-center font-bold text-zinc-300 w-full'>Indisponível</h4>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <ClientBottomNavigation active='agenda' />
    </>
  )
}
