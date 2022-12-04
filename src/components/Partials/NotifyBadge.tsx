import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function NotifyBadge() {
  const [notificationVisibility, setNotificationVisibility] = useState(true);
  const router = useRouter();


  return (
    <div className='grid justify-center'>
      {notificationVisibility && (
        <div className="badge badge-accent animate-pulse" onClick={()=>router.push('/cliente/minha-conta/notificacoes')}>Nova notificação</div>
      )}
    </div>
  )
}
