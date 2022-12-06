import React from 'react'
import Admin from '../../../components/Layouts/Admin'
import HeaderPage from '../../../components/Partials/HeaderPage'

export default function Relatorios() {
  return (
    <Admin title="relatorios">
      <div className="main_container">
        <HeaderPage title="Relatórios" />
        <h3 className='text-center'>Área em desenvolvimento</h3>
        <div className="grid justify-center">
          <hr />
          <button className='btn btn-primary'>Gerar relatório</button>
        </div>
      </div>
    </Admin>
  )
}
