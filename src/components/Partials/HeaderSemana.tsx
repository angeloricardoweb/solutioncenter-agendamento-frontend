import React, { useEffect, useState } from 'react'
import { api } from '../../services/axios'
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
  const btnEnabled = "flex flex-col items-center p-1 rounded-lg cursor-pointer bg-brand-blue-400";
  const btnDisabled = "flex flex-col items-center p-1 rounded-lg cursor-pointer bg-zinc-300";
  const btnActived = "ring-4 ring-green-600 ring-offset-2 rounded-lg";


  async function getDatasDaSemana() {
    try {
      const response = await api.get('/semana')
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
              <span className='text-sm text-white'>
                {item.day_of_week}
              </span>
              <span className='font-bold text-white'>
                {item.day_of_month}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
