import React, { useEffect } from 'react'
import { useGlobal } from '../../context/GlobalContextProvider'
import { api } from '../../services/axios'

export default function TimeList({ setShowTimeList }) {
  const { roomData } = useGlobal()

  async function getSemana() {
    try {
      const response = await api.get(`/semana?day=${roomData.day}&salaId=${roomData.sala_id}`);
      console.log(response.data.results);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSemana()
  }, [roomData])

  return (
    <div className='bg-zinc-100 p-4'>
      <header>
        <span onClick={() => setShowTimeList(false)}>
          fechar
        </span>
      </header>
      <h3>Sala 1</h3>
      <div className='grid grid-cols-4'>
        <span>10h</span>
        <div>Marcar horário</div>
      </div>
    </div>
  )
}
