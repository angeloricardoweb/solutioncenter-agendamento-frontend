import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'
import { api } from '../../services/axios';

export default function NotifyBadge() {
  const [notificationVisibility, setNotificationVisibility] = useState(true);
  const router = useRouter();

  const { token: token } = parseCookies()

  async function getNotificacoes() {
    try {
      const response = await api.get(`/notificacoes`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setNotificationVisibility(response.data.results.visualizada)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getNotificacoes()
  },[])


  return (
    <div className='grid justify-center'>
      {!notificationVisibility && (
        <div className="badge badge-accent animate-pulse" onClick={()=>router.push('/cliente/minha-conta/notificacoes')}>Nova notificação</div>
      )}
    </div>
  )
}
