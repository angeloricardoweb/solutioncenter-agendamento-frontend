import React, { useEffect, useState } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { api } from '../../../../services/axios';
import { parseCookies } from 'nookies';
import Loading from '../../../../components/Icons/Loading';

export default function Historico() {
  const [historicoList, setHistoricoList] = useState([])
const [loading, setLoading] = useState(false)
  const {token:token} = parseCookies()

  async function getHistorico() {
    setLoading(true)
    try {
      const response = await api.get('/admin/historico',{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
      setHistoricoList(response.data.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    getHistorico()
  }, [])

  return (
    <Admin title="opcoes">
      <div className="main_container">
        <HeaderPage title="Histórico" />
        <div className='mt-3'>
          {
            loading ? <Loading/> : (
              <div className='overflow-y-scroll h-[600px]'>
                {
                  historicoList?.map((item) => (
                    <div key={item.id} className="p-2 bg-zinc-200 rounded-md my-2">
                      <strong>{new Intl.DateTimeFormat("pt-BR",{dateStyle:"full"}).format(new Date(item.data))}</strong>
                      <p>{item.message}</p>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </Admin>
  )
}
