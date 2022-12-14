import React, { useEffect, useState } from 'react'
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'
import HeaderPage from '../../../components/Partials/HeaderPage'
import MessageCard from '../../../components/Partials/MessageCard'
import { api_dev, api_local } from '../../../services/axios'

export default function Historico() {
  const [dataHistorico, setDataHistorico] = useState([])

  async function getHistorico() {
    try {
      const response = await api_dev.get(`/historico`, {
        headers: {
          Authorization: "token-teste"
        }
      });
      setDataHistorico(response.data.results.historico)
      console.log(dataHistorico);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getHistorico()
  }, [])

  return (
    <>
      <section>
        <div className="main_container">
          <div className='bg-white shadow rounded-md'>
            <HeaderPage title='Histórico' />
            <div className='mt-5 flex flex-col gap-5 my-[90px]'>
              {
                dataHistorico && dataHistorico.map(data => (
                  <MessageCard key={data.id} data={data} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <ClientBottomNavigation active='minha-conta' />
    </>
  )
}
