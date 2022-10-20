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
      title: 'Sala 1',
      background: '/img/rooms/room-1.png',
      sala_id: 1
    },
    {
      title: 'Sala 2',
      background: '/img/rooms/room-1.png',
      sala_id: 2
    },
    {
      title: 'Sala 3',
      background: '/img/rooms/room-1.png',
      sala_id: 3
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
          <div className='flex flex-col gap-3 mt-5'>
            {rooms.map(room => (
              <div key={room.sala_id} onClick={() => handleShowTimeList(room.sala_id)}>
                <RoomCard background={room.background} title={room.title} />
              </div>
            ))}
          </div>

        </div>
      </section>
      <ClientBottomNavigation active='agenda'/>
    </>
  )
}
