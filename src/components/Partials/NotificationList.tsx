import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'
import { api } from '../../services/axios';
import MessageCardAdmin from './MessageCardAdmin';

export default function NotificationList({ reset, setReset }: any) {

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

  useEffect(() => {
    getNotificacoes()
  }, [reset])

  return (
    <div>
      <div className='mt-5 flex flex-col gap-5 my-[90px]'>
        {
          dataNotificacoes.notificacoes.length > 0 && dataNotificacoes.notificacoes.map(data => (
            <MessageCardAdmin key={data.id} data={data} setReset={setReset} />
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
  )
}
