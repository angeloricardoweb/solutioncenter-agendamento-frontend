import React, { useEffect } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import { api_dev, api_local } from '../../../../services/axios';
export default function AgendarSala() {
  const [data, setData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const router = useRouter();
  const { clienteId } = router.query;

  async function getCliente() {
    setLoading(true);
    const response = await api_dev.get(`/clientes/${clienteId}`, {
      headers: {
        Authorization: "token-teste"
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
          <HeaderPage title="Agendar sala" />
          <div className=" grid grid-cols-2 gap-3 mt-5">
            {/* datepicker */}
            <div>
              <label htmlFor="date" className='text-brand-blue-600'>Dia</label>

              <input type="date" name="date" id="date" className='input input-bordered w-full' />
            </div>
            {/* timepicker */}
            <div>
              <label htmlFor="time" className='text-brand-blue-600'>Hora</label>
              <select name="time" id="time" className='select select-bordered w-full'>
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
              <label htmlFor="sala" className='text-brand-blue-600'>Sala</label>
              <select name="sala" id="sala" className='select select-bordered w-full'>
                <option value="1">Cora Carolina</option>
                <option value="2">Clarice Lispector</option>
                <option value="3">Machado de Assis</option>
                <option value="4">Carlos Drummond de Andrade</option>
                <option value="5">Vinicius de Moraes</option>
                <option value="6">Caio Fernando Abreu</option>
                <option value="7">Fernando Pessoa</option>
              </select>
            </div>
          </div>
          <div className='flex justify-center mt-10'>
            <button className='btn btn-primary'>Agendar</button>
          </div>
        </div>
      </section>
    </Admin>
  )
}
