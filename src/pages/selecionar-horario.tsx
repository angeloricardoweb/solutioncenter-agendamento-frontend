import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ClientBottomNavigation from '../components/Partials/BottomNavigation';
import { useGlobal } from '../context/GlobalContextProvider';
import { api } from '../services/axios';
import { useRouter } from 'next/router';
import ButtonCancelarReserva from '../components/DinamicButtons/ButtonCancelarReserva';


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
      const response = await api.get(`/room-time?day=${roomData.day}&salaId=${roomData.sala_id}`);
      console.log(response.data.results);
      setRoomContent(response.data.results)
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function checkCancelarReserva(){

  }

  useEffect(() => {
    getSemana()
  }, [roomData])

  return (
    <>
      <div className=' main_container'>
        <header>
          <Link href="agendamento">
            Voltar
          </Link>
        </header>
        <h2 className='text-center'>{roomContent.name}</h2>
        <h3 className='text-center'>{new Intl.DateTimeFormat("pt-BR", {	dateStyle: "full"}).format(new Date(roomContent.date))}</h3>
        <div className='flex flex-col gap-2'>
          {
            roomContent.times && roomContent.times.map(time => (
              <div className='grid grid-cols-4 items-center' key={time.id}>
                <span className='col-span-1 font-bold text-xl text-center'>{time.time}Hrs</span>
                <div className='col-span-3 h-16 flex items-center '                >
                  {
                    time.status === 'disponivel' &&
                    <button className="btn btn-primary w-full">
                      Reservar
                    </button>
                  }
                  {
                    time.status === 'dono' &&
                   <ButtonCancelarReserva id={time.id}/>
                  }
                  {
                    time.status === 'indisponivel' &&
                    <h4 className='text-center font-bold text-red-400 w-full'>Indisponível</h4>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <ClientBottomNavigation />
    </>
  )
}
