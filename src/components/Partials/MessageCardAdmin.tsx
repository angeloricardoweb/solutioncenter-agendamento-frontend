import { parseCookies } from 'nookies';
import React, { useState } from 'react'
import { api } from '../../services/axios';

interface IData {
  id: number;
  data: string;
  message: string;
}

export default function MessageCardAdmin({ data, setReset }: { data: IData, setReset: any }) {
  const [showDelete, setShowDelete] = useState(false)

  const { token: token } = parseCookies()
  async function deleteNotify() {
    try {
      await api.delete(`/admin/notificacoes/${data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setReset(old => !old)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='shadow rounded-md p-3 px-5 flex justify-between' onClick={() => setShowDelete(!showDelete)}>
      <header>
        <div>
          <strong>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(new Date(data.data))}</strong>
        </div>
        <span className='text-brand-brown-600'>{data.message}</span>
      </header>
      {
        showDelete && (
          <div className='flex flex-col gap-2'>
            <button className='bg-red-500 text-white rounded-md px-3 py-1' onClick={deleteNotify}>Excluir</button>
            <button className='bg-gray-500 text-white rounded-md px-3 py-1' onClick={() => setShowDelete(false)}>Cancelar</button>
          </div>
        )
      }
    </div>
  )
}
