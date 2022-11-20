import React, { useEffect, useState } from 'react'
import { ChevronLeft } from '../../../../components/Icons/Chevron'
import { useRouter } from 'next/router'
import { api, api_dev, api_local } from '../../../../services/axios'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { parseCookies } from 'nookies'
import toast from 'react-hot-toast'

interface DetailProps {
  id: string
  cliente: string
  sala: string
  dia: string
  pago: string
  hora: string
}

export default function Detail() {
  const router = useRouter()
  const { id } = router.query
  const {'token': token} = parseCookies()

  const [detail, setDetail] = useState<DetailProps>()

  async function getData() {
    try {
      const response = await api.get(`/admin/agendamento/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setDetail(response.data.results);
    } catch (error) {
      if(error.response.data.error){
        toast.error(error.response.data.message)
      }
      router.back()
    }
  }

  useEffect(() => {
    getData()

  }, [id])


  return (
    <Admin title="agenda">
      <section>
        <div className='main_container'>
          <HeaderPage title="Detalhes"/>
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
            <div>
              <h3>Cancelar agendamento</h3>
              <div>
                <button className='btn btn-outline'>Remover</button>
              </div>
            </div>
            <div>
              <h3>Marcar agendamento como pago</h3>
              <div className='flex gap-2'>
                <button className='btn btn-success'>Sim</button>
                <button className='btn btn-outline'>Não</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Admin>
  )
}
