import React, { useEffect, useState } from 'react'
import Admin from '../../../components/Layouts/Admin'
import HeaderPage from '../../../components/Partials/HeaderPage'
import { api_dev } from '../../../services/axios';
import { ICliente } from '../../../types';




export default function Clientes() {
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
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Clientes" />
          {
            clientes.length > 0 && clientes.map(cliente => (
              <div key={cliente.id} className="p-2 border my-2" >
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs text-white">AA</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cliente.nome}</div>
                    <div className="text-sm opacity-50">{cliente.profissao}</div>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      </section>
    </Admin>
  )
}

