import React, { useEffect, useState } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { api } from '../../../../services/axios';
import { parseCookies } from 'nookies';

export default function Historico() {
  const [historicoList, setHistoricoList] = useState()

  const {token:token} = parseCookies()

  async function getHistorico() {
    try {
      const response = await api.get('/admin/historico',{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.data.results);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getHistorico()

  }, [])

  return (
    <Admin title="opcoes">
      <div className="main_container">
        <HeaderPage title="Histórico" />
        <div className='mt-3'>

        </div>
      </div>
    </Admin>
  )
}
