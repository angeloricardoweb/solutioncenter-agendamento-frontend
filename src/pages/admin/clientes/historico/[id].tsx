import React, { useEffect, useState } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { api } from '../../../../services/axios';
import { parseCookies } from 'nookies';
import Loading from '../../../../components/Icons/Loading';
import { useRouter } from 'next/router';

export default function HistoricoCliente() {
  const [historicoList, setHistoricoList] = useState([])
  const [semHistorico, setSemHistorico] = useState(false)

  const router = useRouter()

  const id = router.query.id

  const [loading, setLoading] = useState(false)
  const { token: token } = parseCookies()

  async function getCliente() {
    setLoading(true);
    const response = await api.get(`/admin/clientes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setHistoricoList(response.data.results.historico);
    if(historicoList.length == 0) {
      setSemHistorico(true)
    }
    setLoading(false);
  }

  useEffect(() => {
    getCliente()
  }, [])

  return (
    <Admin title="opcoes">
      <div className="main_container">
        <HeaderPage title="Histórico" />
        <div className='mt-3'>
          {
            loading ? <Loading /> : (
              <div>
                {
                  historicoList?.map((item) => (
                    <div key={item.id} className="p-2 bg-zinc-200 rounded-md my-2">
                      <strong>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(new Date(item.data))}</strong>
                      <p>{item.message}</p>
                    </div>
                  ))
                }
              </div>
            )
          }
          {
            semHistorico && (
                <p className="text-2xl text-zinc-600">Nenhum histórico encontrado</p>
            )
          }
        </div>
      </div>
    </Admin>
  )
}
