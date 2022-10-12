import React, { useEffect, useState } from 'react'
import { api } from '../../services/axios'

export default function HeaderSemana() {
  const [semana, setSemana] = useState({})

  async function getDatasDaSemana() {
    try {
      const response = await api('http://localhost:3000/api/semana')
      console.log(response.data.results);
      setSemana(response.data.results)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDatasDaSemana()
  }, [])


  return (
    <div>
      <h2 className='text-center'>{semana?.month}</h2>

      <div className='grid grid-cols-7 gap-3 mt-5'>
        {semana?.week.map(item => (
          <div key={item.id} className='flex flex-col items-center'>
            <span>
              {item.day_of_week}
            </span>
            <span>
              {item.day_of_month}
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}
