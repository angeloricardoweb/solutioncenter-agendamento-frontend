import React, { useEffect, useState } from 'react'
import { ChevronLeft } from '../../../../components/Icons/Chevron'
import { useRouter } from 'next/router'
import { api_dev, api_local } from '../../../../services/axios'

interface DetailProps {
  id: string
  cliente: string
  sala: string
  data: string
  status: string
}

export default function Detail() {
  const router = useRouter()
  const { id } = router.query

  const [detail, setDetail] = useState<DetailProps>()

  async function getData() {
    try {
      const response = await api_dev.get(`/admin/agenda/details/${id}`, {
        headers: {
          'Authorization': 'Bearer 123456'
        }
      })
      setDetail(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()

  }, [id])


  return (
    <section>
      <div className='main_container'>
        <div className='flex justify-between'>
          <span onClick={() => router.back()} className="pr-5 py-3">
            <ChevronLeft />
          </span>
          <h2 className='text-center'>Detalhes</h2>
        </div>
        <div className='mt-4 p-4 border rounded-md flex flex-col gap-3'>
          {
            detail && (
              <div>
                <h3>Cliente</h3>
                <p>{detail?.cliente}</p>
                <h3>Sala</h3>
                <p>{detail?.sala}</p>
                <h3>Data</h3>
                <p>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "full", timeStyle: "short" }).format(
                  new Date(detail?.data)
                )}</p>
                <h3>Status</h3>
                <p>{detail?.status}</p>
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
  )
}
