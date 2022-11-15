import Link from 'next/link'
import React from 'react'
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'
import ButtonLayout from '../../../components/Partials/ButtonLayout'
import { useGlobal } from '../../../context/GlobalContextProvider'
import { useRouter } from 'next/router';

export default function MinhaConta() {
  const { handleLogout } = useGlobal()

  const router = useRouter();



  return (
    <>
      <section>
        <div className="main_container">
          <div className='bg-white shadow rounded-md'>
            <h2 className='text-center'>Minha conta</h2>
            <div className='flex flex-col gap-2 mt-5'>

              <ButtonLayout name="Editar conta" handler={() => router.push("/cliente/minha-conta/editar-conta")} />
              <ButtonLayout name="Histórico" handler={() => router.push("/cliente/minha-conta/historico")} />
              <ButtonLayout name="Notificações" handler={() => router.push("/cliente/minha-conta/notificacoes")} />
              <ButtonLayout name="Sair" handler={handleLogout} />

            </div>
          </div>



        </div>
      </section>
      <ClientBottomNavigation active='minha-conta' />
    </>
  )
}
