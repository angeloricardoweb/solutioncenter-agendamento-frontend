import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Icons/Loading';
import Admin from '../../../components/Layouts/Admin'
import CardCliente from '../../../components/Partials/CardCliente';
import DescriptionBlock from '../../../components/Partials/DescriptionBlock';
import HeaderPage from '../../../components/Partials/HeaderPage'
import { api, api_dev, api_local } from '../../../services/axios';
import { ICliente } from '../../../types';

export default function Clientes() {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [filtro, setFiltro] = useState<any>(0);
  const [filtroAdmin, setFiltroAdmin] = useState<any>(0);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false);

  async function getClientes() {
    const { token: token } = parseCookies()
    console.log(token);


    setLoading(true);
    try {
      const response = await api.get(`/admin/clientes?tipo=${filtro}&search=${search}&admin=${filtroAdmin}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setClientes(response.data.results.clientes);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getClientes()
  }, [filtro, search, filtroAdmin])

  return (
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Usuários" />
          <div className="grid grid-cols-2 gap-3 sticky top-0 bg-white py-3 z-[999]">
            <input type="search" placeholder="Buscar" className="input input-bordered w-full" style={{ borderRadius: "0.5rem" }}
              onChange={e => setSearch(e.target.value)}
            />
            <div className='grid grid-cols-2 gap-3'>
              <select className="select select-bordered w-full max-w-xs"
                onChange={e => setFiltroAdmin(e.target.value)}>
                <option value={0} selected>Clientes</option>
                <option value={1} >Administradores</option>
              </select>
              <select className="select select-bordered w-full max-w-xs"
                onChange={e => setFiltro(e.target.value)}          >
                <option value={0} selected>Todos</option>
                <option value={1} >Ativos</option>
                <option value={2}>Inativos</option>
              </select>
            </div>
          </div>
          <DescriptionBlock title={'Resultados'} value={clientes.length.toString()} />

          {
            loading &&
            <Loading />
          }

          <div className='mb-[120px] overflow-y-auto'>            {
            !loading &&
            clientes.length > 0 && clientes.map(cliente => (
              <CardCliente key={cliente.id} cliente={cliente} />
            ))
          }
          </div>
        </div>
      </section>
    </Admin>
  )
}

