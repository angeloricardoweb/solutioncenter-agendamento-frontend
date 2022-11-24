import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React from 'react'
import toast from 'react-hot-toast'
import { api } from '../../services/axios'

export default function AdminSwitchUserType({ userId, setRefresh }: any) {
  const { 'token': token } = parseCookies()

  async function handleSwitchUserType(status: boolean) {
    const toasty = toast.loading('Aguarde...')
    try {
      const response = await api.post(`/admin/clientes`, {
        admin: status,
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
      <h3 className='text-center'>Permissão do usuário</h3>
      <div className='grid grid-cols-2 gap-3'>
        <button className='btn btn-outline' onClick={() => handleSwitchUserType(true)}>Tornar Admin</button>
        <button className='btn btn-outline' onClick={() => handleSwitchUserType(false)}>Tornar Cliente</button>
      </div>
    </div>
  )
}
