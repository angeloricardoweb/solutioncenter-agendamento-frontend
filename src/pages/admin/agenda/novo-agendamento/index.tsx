import React, { useEffect, useState } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import { api, api_dev } from '../../../../services/axios'
import { ICliente } from '../../../../types'
import { parseCookies } from 'nookies'
import { getRooms } from '../../../../services/getRooms'
import { getAllClientes } from '../../../../services/getClients'
import toast from 'react-hot-toast'


export default function NovoAgendamento() {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [clientId, setClienteId] = useState<string>();
  const [rooms, setRooms] = useState([] || null)

  const router = useRouter()
  const salaId = router.query.salaId
  const dataId = router.query.dataId
  const hora = router.query.hora

  console.log(dataId, hora, salaId);

  const { 'token': token } = parseCookies()

  async function createAgendamento() {
    const loadingToast = toast.loading('Agendando...')

    try {
      const response = await api.post(`/admin/agendamento`, {
        clienteId: clientId,
        salaId: salaId,
        data: dataId,
        hora: hora
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success(response.data.message, {
        duration: 5000,
        icon: '✅',
      })
      router.back()
    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(loadingToast)
  }


  useEffect(() => {
    if (!salaId || !dataId || !hora) {
      router.push('/admin/agenda/home')
    }
    getAllClientes().then(results => setClientes(results)).catch(error => console.log(error))
    getRooms().then(results => setRooms(results)).catch(error => console.log(error))

  }, [])

  return (
    <Admin title="agenda">
      <section>
        <div className="main_container">
          <HeaderPage title='Novo Agendamento' />
          <div>

            <h3>Sala</h3>
            <div>
              {rooms && rooms.map(room => {
                if (room.sala_id == salaId) {
                  return <p className='text-zinc-900'>{room.title}</p>
                }
              })}
            </div>
            <h3>Dia!:</h3>

            <div>
              <p>{(dataId).toString().split("-").reverse().join("/")}</p>
            </div>
            <h3>Hora:</h3>
            <div>
              <p>{hora}hrs</p>
            </div>
            <h3>Cliente:</h3>
            <select
              className="select select-bordered w-full max-w-xs col-span-2"
              onChange={(e) => setClienteId(e.target.value)}
            >
              <option value="">Selecione um Cliente</option>
              {
                clientes.length > 0 && clientes.map(cliente => (
                  <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                ))
              }
            </select>
            <div className='flex gap-3 mt-5'>
              <button className='btn btn-success' disabled={!clientId} onClick={createAgendamento}>Agendar</button>
              <button className='btn btn-outline' onClick={()=>router.back()}>Voltar</button>
            </div>

          </div>
        </div>
      </section>
    </Admin>
  )
}
