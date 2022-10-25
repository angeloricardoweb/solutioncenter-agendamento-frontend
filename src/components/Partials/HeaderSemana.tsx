import React, { useEffect, useState } from 'react'
import { api, api_dev } from '../../services/axios'
import { useGlobal } from './../../context/GlobalContextProvider';

interface HeaderSemanaProps {
  month: string;
  week: [
    {
      id: number;
      day_of_week: string;
      day_of_month: string;
      enabled: boolean;
    }
  ]
}

export default function HeaderSemana() {
  const { setRoomData, roomData } = useGlobal()
  const [semana, setSemana] = useState<HeaderSemanaProps | undefined>()
  // get current day of month
  const btnEnabled = "shadow flex flex-col items-center p-1 rounded-lg cursor-pointer";
  const btnDisabled = "shadow flex flex-col items-center p-1 rounded-lg cursor-pointer bg-zinc-300";
  const btnActived = "shadow ring-2 ring-brand-brown-600 ring-offset-2 rounded-lg";


  async function getDatasDaSemana() {
    try {
      const response = await api.get('/agendamento')
      setSemana(response.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDatasDaSemana()
  }, [])

  function handleSelectDay(day: string, enabled: boolean) {
    if (enabled) {
      setRoomData({ ...roomData, day: day })
    }
  }


  return (
    <div>
      <h2 className='text-center'>{semana?.month}</h2>
      <div className='grid grid-cols-7 gap-3 mt-5'>
        {semana?.week.map(item => (
          <div key={item.id} className={`${item.day_of_month == roomData.day && btnActived}`} onClick={() => handleSelectDay(item.day_of_month, item.enabled)}>
            <div className={item.enabled ? btnEnabled : btnDisabled}>
              <span className='text-sm text-brand-blue-600'>
                {item.day_of_week}
              </span>
              <span className='font-bold text-brand-blue-600'>
                {item.day_of_month}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
