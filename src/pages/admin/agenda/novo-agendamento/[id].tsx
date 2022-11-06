import React, { useEffect, useState } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import { api_dev } from '../../../../services/axios'
import { ICliente } from '../../../../types'


export default function NovoAgendamento() {
  const [clientes, setClientes] = useState<ICliente[]>([]);

  async function getAllClientes() {
    try {
      const response = await api_dev.get('/clientes')
      setClientes(response.data.results.clientes);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllClientes()

  }, [])

  return (
    <Admin title="agenda">
      <section>
        <div className="main_container">
          <HeaderPage title='Novo Agendamento' />
          <div>
            <label>Selecione um cliente</label>

            <select>
              {
                clientes.length > 0 && clientes.map(cliente => (
                  <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                ))
              }
            </select>
            <div className='flex gap-3'>
              <button className='btn btn-success'>Agendar</button>
              <button className='btn btn-outline'>Voltar</button>
            </div>

          </div>
        </div>
      </section>
    </Admin>
  )
}
