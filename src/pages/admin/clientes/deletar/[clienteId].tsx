import React, { useEffect } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import { api, api_dev, api_local } from '../../../../services/axios';
import { parseCookies } from 'nookies';
import toast from 'react-hot-toast';
export default function Deletar() {
  const [loading, setLoading] = React.useState<boolean>(false)

  const router = useRouter();
  const { clienteId } = router.query;
  const { 'token': token } = parseCookies()



  async function deleteCliente() {
    const toasty = toast.loading('Deletando cliente...')
    try {
      const response = await api.delete(`/admin/clientes/${clienteId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success(response.data.message)
      router.push('/admin/clientes')

    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(toasty)
  }


  return (
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Deletar usuário" />
          <h3 className='text-center'>Tem certeza que deseja deletar esse usuário?</h3>
          <div className='grid grid-cols-2 gap-3 mt-5'>
            <button className='btn btn-warning' onClick={() => deleteCliente()}>sim, Deletar</button>
            <button className='btn btn-outline' onClick={() => router.back()}>Cancelar</button>
          </div>
        </div>
      </section>
    </Admin>
  )
}
