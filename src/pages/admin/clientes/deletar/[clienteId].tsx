import React, { useEffect } from 'react'
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { useRouter } from 'next/router'
import { api_dev, api_local } from '../../../../services/axios';
export default function Deletar() {
  const [loading, setLoading] = React.useState<boolean>(false)

  const router = useRouter();
  const { clienteId } = router.query;


  return (
    <Admin title="clientes">
      <section>
        <div className="main_container">
          <HeaderPage title="Deletar usuário" />
          <h3 className='text-center'>Tem certeza que deseja deletar esse usuário?</h3>
          <div className='grid grid-cols-2 gap-3 mt-5'>
            <button className='btn btn-warning'>sim, Deletar</button>
            <button className='btn btn-outline' onClick={() => router.back()}>Cancelar</button>
          </div>
        </div>
      </section>
    </Admin>
  )
}
