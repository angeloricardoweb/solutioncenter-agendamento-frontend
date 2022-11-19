import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'
import HeaderPage from '../../../components/Partials/HeaderPage'
import MessageCard from '../../../components/Partials/MessageCard'
import { api, api_dev, api_local } from '../../../services/axios'

export default function Notificacoes() {
  const [dataNotificacoes, setDataNotificacoes] = useState([])
  const {'token': token} = parseCookies()

  async function getNotificacoes() {
    try {
      const response = await api.get(`/notificacoes`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setDataNotificacoes(response.data.results)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNotificacoes()
  }, [])

  return (
    <>
      <section>
        <div className="main_container">
          <div className='bg-white shadow rounded-md'>
            <HeaderPage title='Notificações' />
            <div className='mt-5 flex flex-col gap-5 my-[90px]'>
              {
                dataNotificacoes && dataNotificacoes.map(data => (
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
