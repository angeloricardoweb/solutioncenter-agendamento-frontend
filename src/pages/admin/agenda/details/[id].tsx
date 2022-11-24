import React, { useEffect, useState } from 'react'
import { ChevronLeft } from '../../../../components/Icons/Chevron'
import { useRouter } from 'next/router'
import { api, api_dev, api_local } from '../../../../services/axios'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { parseCookies } from 'nookies'
import toast from 'react-hot-toast'
import AdminMarkAsPaid from '../../../../components/Partials/AdminMarkAsPaid'

interface DetailProps {
  id: string
  cliente: string
  sala: string
  dia: string
  pago: string
  hora: string
}

export default function Detail() {
  const [detail, setDetail] = useState<DetailProps>()
  const [showCancel, setShowCancel] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const router = useRouter()

  const { id } = router.query

  const { 'token': token } = parseCookies()


  async function getData() {
    try {
      const response = await api.get(`/admin/agendamento/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setDetail(response.data.results);
    } catch (error) {
      if (error.response.data.error) {
        toast.error(error.response.data.message)
      }
      router.back()
    }
  }

  async function handleCancelAgendamento() {
    const toasty = toast.loading('Cancelando...')
    try {
      const response = await api.delete(`/admin/agendamento/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      toast.success(response.data.message)
      router.back()
    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(toasty)
  }

  useEffect(() => {
    getData()

  }, [id, refresh])


  return (
    <Admin title="agenda">
      <section>
        <div className='main_container'>
          <HeaderPage title="Detalhes" />
          <div className='mt-4 p-4 border rounded-md flex flex-col gap-3'>
            {
              detail && (
                <div>
                  <h3>Cliente</h3>
                  <p>{detail?.cliente}</p>
                  <h3>Sala</h3>
                  <p>{detail?.sala}</p>
                  <h3>Dia</h3>
                  <p>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
                    new Date(detail?.dia)
                  )}</p>
                  <h3>Hora</h3>
                  <p>{detail?.hora}hrs</p>
                  <h3>Status</h3>
                  <p>{detail?.pago}</p>
                </div>
              )
            }
            <hr />
            <AdminMarkAsPaid reservaId={id} setRefresh={setRefresh}  />
            <hr />
            <div>
              {
                showCancel ? (
                  <div>
                    <p>Tem certeza que deseja cancelar essa reserva?</p>
                    <div className='flex gap-3 mt-3'>
                      <button className='btn btn-warning' onClick={handleCancelAgendamento}>Sim, Cancelar</button>
                      <button className='btn btn-outline' onClick={() => setShowCancel(false)}>Voltar</button>
                    </div>
                  </div>
                ) : (
                  <button className='btn btn-warning' onClick={() => setShowCancel(true)}>Cancelar reserva</button>
                )
              }
            </div>
          </div>

        </div>
      </section>
    </Admin>
  )
}
