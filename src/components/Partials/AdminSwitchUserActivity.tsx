import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React from 'react'
import toast from 'react-hot-toast'
import { api } from '../../services/axios'

export default function AdminSwitchUserActivity({ userId, setRefresh }: any) {
  const { 'token': token } = parseCookies()

  async function handleSwitchUserActivity(status: boolean) {
    const toasty = toast.loading('Aguarde...')
    try {
      const response = await api.patch(`/admin/clientes`, {
        ativo: status,
        cliente: userId
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
      <h3 className='text-center'>Status do cliente</h3>
      <div className='grid grid-cols-2 gap-3'>
        <button className='btn btn-success' onClick={() => handleSwitchUserActivity(true)}>Tornar Ativo</button>
        <button className='btn btn-warning' onClick={() => handleSwitchUserActivity(false)}>Tornar Inativo</button>
      </div>
    </div>
  )
}
