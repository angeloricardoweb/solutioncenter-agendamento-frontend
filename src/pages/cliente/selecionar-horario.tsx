import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router';
import { useGlobal } from '../../context/GlobalContextProvider';
import { api, api_dev } from '../../services/axios';
import { ChevronLeft } from '../../components/Icons/Chevron';
import ButtonRealizarReserva from '../../components/DinamicButtons/ButtonRealizarReserva';
import ButtonCancelarReserva from '../../components/DinamicButtons/ButtonCancelarReserva';
import ClientBottomNavigation from '../../components/Partials/BottomNavigation';



export default function TimeList() {
  const { roomData } = useGlobal()
  const router = useRouter()
  const { day, salaId } = router.query;

  const [roomContent, setRoomContent] = useState({
    name: '',
    date: new Date(),
    times: []
  })

  async function getSemana() {
    try {
      const response = await api_dev.get(`/room-time?day=${day}&salaId=${salaId}`, {
        headers: {
          Authorization: "token-teste"
        }
      });
      setRoomContent(response.data.results)
      return response;
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
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
        <div className='flex flex-col gap-2'>
          {
            roomContent.times && roomContent.times.map(time => (
              <div className='grid grid-cols-4 items-center' key={time.id}>
                <span className='col-span-1 font-bold text-xl text-center'>{time.time}Hrs</span>
                <div className='col-span-3 h-16 flex items-center '                >
                  {
                    time.status === 'disponivel' &&
                    <ButtonRealizarReserva id={time.id} />
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
