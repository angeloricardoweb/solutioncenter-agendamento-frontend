import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import Admin from '../../../components/Layouts/Admin'
import DescriptionBlock from '../../../components/Partials/DescriptionBlock'
import HeaderPage from '../../../components/Partials/HeaderPage'
import { api } from '../../../services/axios'
interface IRelatory {
  name: string;
  mes_atual: string;
  qtd_salas_reservadas: number;
  qtd_salas_pagas: number;
  qtd_salas_pendentes: number;
  qtd_clientes: number;
  qtd_clientes_ativo: number;
  qtd_clientes_inativos: number;

}

export default function Relatorios() {
  const [data, setData] = useState<IRelatory>()
  const { token: token } = parseCookies()


  async function getRelatorioGeral() {
    try {
      const response = await api.get('/admin/relatorios', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setData(response.data.results.main)


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRelatorioGeral()
  }, [])

  return (
    <Admin title="relatorios">
      <div className="main_container">
        <HeaderPage title="Relatórios" />
          {
            data && (
              <>
                <h3>{data.name}</h3>
                <DescriptionBlock title={'Mês atual'} value={data.mes_atual}/>
                <DescriptionBlock title={'Salas reservadas'} value={data.qtd_salas_reservadas.toString()}/>
                <DescriptionBlock title={'Salas pagas'} value={data.qtd_salas_pagas.toString()}/>
                <DescriptionBlock title={'Salas pendentes'} value={data.qtd_salas_pendentes.toString()}/>
                <DescriptionBlock title={'Clientes'} value={data.qtd_clientes.toString()}/>
                <DescriptionBlock title={'Clientes Ativos'} value={data.qtd_clientes_ativo.toString()}/>
                <DescriptionBlock title={'Clientes Inativos'} value={data.qtd_clientes_inativos.toString()}/>
              </>
            )
          }
      </div>
    </Admin>
  )
}
