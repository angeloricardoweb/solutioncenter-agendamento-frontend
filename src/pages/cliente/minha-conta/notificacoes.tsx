import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'
import HeaderPage from '../../../components/Partials/HeaderPage'
import MessageCard from '../../../components/Partials/MessageCard'
import { api, api_dev, api_local } from '../../../services/axios'

export default function Notificacoes() {
  const [dataNotificacoes, setDataNotificacoes] = useState({
    visualizada: false,
    notificacoes: []
  })
  const { token: token } = parseCookies()

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

  async function setVisualizada() {
    try {
      await api.patch(`/notificacoes`,{}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNotificacoes()
    setTimeout(() => {
      setVisualizada()
    }, 2000)
  }, [])

  return (
    <>
      <section>
        <div className="main_container">
          <div>
            <HeaderPage title='Notificações' />
            <div className='mt-5 flex flex-col gap-5 my-[90px]'>
              {
                dataNotificacoes.notificacoes.length > 0 && dataNotificacoes.notificacoes.map(data => (
                  <MessageCard key={data.id} data={data} />
                ))
              }
              {
                dataNotificacoes.notificacoes.length === 0 && (
                  <div className='text-center'>
                    <span className='text-brand-brown-600'>Nenhuma notificação</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
      <ClientBottomNavigation active='minha-conta' />
    </>
  )
}
