import React, { useState } from 'react'

import { useRouter } from 'next/router'
import { useGlobal } from '../../context/GlobalContextProvider'
import RoomCard from '../../components/Partials/RoomCard'
import ClientBottomNavigation from '../../components/Partials/BottomNavigation'
import HeaderSemana from '../../components/Partials/HeaderSemana'

export default function Agendamento() {
  const { roomData } = useGlobal()
  const router = useRouter()


  const rooms = [
    {
      title: 'Clarice Lispector',
      background: '/img/rooms/clarice-min.jpeg',
      sala_id: 1
    },
    {
      title: 'Carlos Drummond de Andrade',
      background: '/img/rooms/carlos-min.jpeg',
      sala_id: 2
    },
    {
      title: 'Cecília Meireles',
      background: '/img/rooms/cecilia-min.jpeg',
      sala_id: 3
    },
    {
      title: 'Rui Barbosa',
      background: '/img/rooms/rui-min.jpeg',
      sala_id: 4
    },
    {
      title: 'Machado de Assis',
      background: '/img/rooms/machado-min.jpeg',
      sala_id: 5
    },
    {
      title: 'Monteiro Lobato',
      background: '/img/rooms/monteiro-min.jpeg',
      sala_id: 6
    },
    {
      title: 'Luis Fernando Verissimo',
      background: '/img/rooms/luis-min.jpeg',
      sala_id: 7
    },
    {
      title: 'Cora Coralina',
      background: '/img/rooms/cora-min.jpeg',
      sala_id: 8
    },
    {
      title: 'Carolina de Jesus',
      background: '/img/rooms/carolina-min.jpeg',
      sala_id: 9
    },
  ]

  function handleShowTimeList(salaId) {
    router.push(`/cliente/selecionar-horario?day=${roomData.day}&salaId=${salaId}`);
  }

  return (
    <>
      <section>
        <div className="main_container">

          <HeaderSemana />
          <h3 className='text-center mt-7'>Selecione uma sala</h3>
          <div className='overflow-scroll h-[calc(100vh-275px)]'>

            <div className='flex flex-col gap-3 mt-5 pb-[120px]'>
              {rooms.map(room => (
                <div key={room.sala_id} onClick={() => handleShowTimeList(room.sala_id)}>
                  <RoomCard background={room.background} title={room.title} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <ClientBottomNavigation active='agenda' />
    </>
  )
}
