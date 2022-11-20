import React, { useEffect, useState } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import { api, api_dev, api_local } from '../../../../services/axios';
import { getRooms } from '../../../../services/getRooms';
import { parseCookies } from 'nookies';
import { getCliente } from '../../../../services/getClientById';
import toast from 'react-hot-toast';
export default function AgendarSala() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [rooms, setRooms] = useState([] || null)
  const [salaId, setSalaId] = useState<string>()
  const [dataId, setDataId] = useState<string>()
  const [hora, setHora] = useState<string>()

  const router = useRouter();

  const { clienteId } = router.query;

  const { 'token': token } = parseCookies()

  async function handleCreateAgendamento() {
    const toasty = toast.loading('Agendando...')
    try {
      const response = await api.post(`/admin/agendamento`, {
        clienteId: clienteId,
        salaId: salaId,
        data: dataId,
        hora: hora
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      router.push('/admin/clientes/'+clienteId)
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }

    toast.dismiss(toasty)
  }



  useEffect(() => {
    if (!clienteId) {
      router.push('/admin/clientes')
    }else{
      getCliente(clienteId).then(results => setData(results)).catch(error => console.log(error))
      getRooms().then(results => setRooms(results)).catch(error => console.log(error))
    }

  }, [])

  return (
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Agendar sala" />
          <h3>Cliente: {data && data.nome}</h3>
          <div className=" grid grid-cols-2 gap-3 mt-5">
            {/* datepicker */}

            <div>
              <label htmlFor="date" className='text-brand-blue-600'>Dia</label>

              <input type="date" name="date" id="date" className='input input-bordered w-full'
                onChange={(e) => setDataId(e.target.value)}
              />
            </div>
            {/* timepicker */}
            <div>
              <label htmlFor="time" className='text-brand-blue-600'>Hora</label>
              <select name="time" id="time" className='select select-bordered w-full'
                onChange={(e) => setHora(e.target.value)}
              >
                <option value="">--</option>
                <option value="8">08:00</option>
                <option value="9">09:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
              </select>
            </div>
            <div className='col-span-2'>
              <select
                className="select select-bordered w-full max-w-xs col-span-2"
                onChange={(e) => setSalaId(e.target.value)}
              >
                <option value="">Selecione uma Sala</option>
                {
                  rooms.length > 0 && rooms.map(room => (
                    <option key={room.sala_id} value={room.sala_id}>{room.title}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className='flex justify-center mt-10'>
            <button className='btn btn-primary' disabled={
              salaId && dataId && hora ? false : true
            } onClick={handleCreateAgendamento}>Agendar</button>
          </div>
        </div>
      </section>
    </Admin>
  )
}
