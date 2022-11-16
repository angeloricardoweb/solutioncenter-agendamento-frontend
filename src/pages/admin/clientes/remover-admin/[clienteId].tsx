import React, { useEffect } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import { api_dev, api_local } from '../../../../services/axios';
export default function RemoverAdmin() {
  const [loading, setLoading] = React.useState<boolean>(false)

  const router = useRouter();
  const { clienteId } = router.query;


  return (
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Remover Cargo" />
          <h3 className='text-center'>Tem certeza que deseja remover o cargo de ADMINISTRADOR desse usuário?</h3>
          <div className='grid grid-cols-2 gap-3 mt-5'>
            <button className='btn btn-warning'>Sim, remover cargo</button>
            <button className='btn btn-outline' onClick={() => router.back()}>Cancelar</button>
          </div>
        </div>
      </section>
    </Admin>
  )
}
