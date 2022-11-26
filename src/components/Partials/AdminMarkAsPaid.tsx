import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React from 'react'
import toast from 'react-hot-toast'
import { api } from '../../services/axios'

export default function AdminMarkAsPaid({ reservaId, setRefresh, detail }: any) {
  const { 'token': token } = parseCookies()

  async function handleMarkAsPaid(status: string) {
    const toasty = toast.loading('Aguarde...')
    try {
      const response = await api.patch(`/admin/agendamento`, {
        status,
        reservaId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      toast.success(response.data.message)
      setRefresh(old => !old)
    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(toasty)
  }

  return (
    <div>
      <h3>Alterar status do Pagamento</h3>
      <div className='flex gap-2'>
        {detail.pago === 'Pago' ? (
          <button className='btn btn-outline' onClick={() => handleMarkAsPaid("Pendente")}>Pendente</button>

        ) : (
          <button className='btn btn-success' onClick={() => handleMarkAsPaid("Pago")}>Pago</button>

        )}
      </div>
    </div>
  )
}
