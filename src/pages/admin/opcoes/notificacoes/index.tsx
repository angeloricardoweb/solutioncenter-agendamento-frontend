import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Admin from '../../../../components/Layouts/Admin';
import HeaderPage from '../../../../components/Partials/HeaderPage';
import CreateNotification from '../../../../components/Partials/CreateNotification';
import NotificationList from '../../../../components/Partials/NotificationList';

export default function Notificacoes() {
  const [reset, setReset] = useState(false);
  const router = useRouter()
  return (
    <Admin title="opcoes">
      <div className="main_container">
        <HeaderPage title="Notificações" />
        <h3 className='text-center'>Criar notificação</h3>
        <div className='flex flex-col gap-2 mt-5'>
          <CreateNotification setReset={setReset}/>
        </div>
        <h3 className='text-center mt-4'>Notificações</h3>
        <div className='flex flex-col gap-2 mt-5'>
          <NotificationList reset={reset} setReset={setReset}/>
        </div>
      </div>
    </Admin>
  )
}
