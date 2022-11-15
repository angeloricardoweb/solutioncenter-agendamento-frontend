import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Icons/Loading';
import Admin from '../../../components/Layouts/Admin'
import CardCliente from '../../../components/Partials/CardCliente';
import HeaderPage from '../../../components/Partials/HeaderPage'
import { api_dev, api_local } from '../../../services/axios';
import { ICliente } from '../../../types';

export default function Clientes() {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [filtro, setFiltro] = useState<number>(0);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false);

  async function getClientes() {
    setLoading(true);
    try {
      const response = await api_dev.get(`/clientes?tipo=${filtro}&search=${search}`)
      setClientes(response.data.results.clientes);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getClientes()
  }, [filtro, search])

  return (
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Clientes" />
          <div className="grid grid-cols-6 gap-3">
            <input type="search" placeholder="Buscar" className="input input-bordered w-full max-w-xs col-span-4" style={{ borderRadius: "0.5rem" }}
              onChange={e => setSearch(e.target.value)}
            />

            <select className="select select-bordered w-full max-w-xs col-span-2"
              onChange={e => setFiltro(e.target.value)}          >
              <option value={0} selected>Todos</option>
              <option value={1} >Ativos</option>
              <option value={2}>Inativos</option>
            </select>
          </div>
          {
            loading &&
            <Loading />
          }

          {
            !loading &&
            clientes.length > 0 && clientes.map(cliente => (
              <CardCliente key={cliente.id} cliente={cliente} />
            ))
          }
        </div>
      </section>
    </Admin>
  )
}

