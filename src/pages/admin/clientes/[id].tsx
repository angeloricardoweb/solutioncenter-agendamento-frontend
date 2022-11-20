import React, { useEffect } from 'react'
import Admin from '../../../components/Layouts/Admin'
import HeaderPage from '../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import Loading from '../../../components/Icons/Loading'
import CardClienteDetails from '../../../components/Partials/CardClienteDetails'
import { api, api_dev, api_local } from '../../../services/axios'
import { parseCookies } from 'nookies'
export default function ClientDetails() {
  const [data, setData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const router = useRouter();
  const { id } = router.query;
  const { 'token': token } = parseCookies()

  async function getCliente() {
    setLoading(true);
    const response = await api.get(`/admin/clientes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setData(response.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getCliente()
  }, [])

  return (
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Detalhes do cliente" />
          <div>
            {
              loading &&
              <Loading />
            }
            {
              !loading && data &&
              <CardClienteDetails data={data} />
            }
          </div>
          <div className='mt-10'>
            <h2 className='text-center'>Opções</h2>
            <div className='mt-3 flex gap-3 flex-wrap flex-col'>
              <button className='btn bg-green-600' onClick={() => router.push(`/admin/clientes/agendar-sala/${id}`)}>Agendar sala</button>
              <button className='btn bg-red-400' onClick={() => router.push(`/admin/clientes/deletar/${id}`)}>Deletar cliente</button>
              {
                data && data.admin ? (
                  <button className='btn' onClick={() => router.push(`/admin/clientes/remover-admin/${id}`)}>Remover administrador</button>
                ) : (
                  <button className='btn' onClick={() => router.push(`/admin/clientes/tornar-admin/${id}`)}>Tornar administrador</button>
                )
              }
            </div>
          </div>
          <div className="mb-[90px] mt-10">
            <h2 className='text-center'>Reservas atuais</h2>
            <div className='mt-3 flex gap-3 flex-wrap flex-col'>
              {data?.reservas_atuais?.map((reserva: any) => (
                <div key={reserva.id} className="mb-3 border-b pb-3">
                  <div>
                    <strong>Sala: </strong>
                    <span>{reserva.sala}</span>
                  </div>
                  <div>
                    <strong>Dia: </strong>
                    <span>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(new Date(reserva.dia))}</span>
                  </div>
                  <div>
                    <strong>Hora: </strong>
                    <span>{reserva.hora}hrs</span>
                  </div>
                  <div>
                    <strong>Status: </strong>
                    <span>{reserva.pago}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Admin>
  )
}
