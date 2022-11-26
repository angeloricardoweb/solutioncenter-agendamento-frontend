import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'
import ButtonLayout from '../../../components/Partials/ButtonLayout'
import { useGlobal } from '../../../context/GlobalContextProvider'
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies'
import { api } from '../../../services/axios'
import DescriptionBlock from '../../../components/Partials/DescriptionBlock'
import HeaderPage from '../../../components/Partials/HeaderPage'

interface IUser {
  id: number;
  nome: string;
  email: string;
  profissao: string;
  telefone: string;
  admin: boolean;
  ativo: boolean;
  cpf: string;
}

export default function MinhaConta() {
  const { handleLogout } = useGlobal()
  const [userData, setUserData] = useState<IUser | undefined>()

  const router = useRouter();

  const { 'token': token } = parseCookies();

  async function getMe() {
    try {
      const response = await api.get('/usuario/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserData(response.data.results)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getMe()
  }, [])


  return (
    <>
      <section>
        <div className="main_container">
          <div>
            <HeaderPage title='Minha conta' />

            <div className='flex flex-col gap-2 mt-5'>
              <h2>Bem vindo, {userData?.nome}</h2>
              <DescriptionBlock title={'Telefone'} value={userData?.telefone} />
              <DescriptionBlock title={'Profissão'} value={userData?.profissao} />
              <DescriptionBlock title={'E-mail'} value={userData?.email} />
              <DescriptionBlock title={'Status'} value={userData?.ativo ? 'Ativo' : 'Inativo'} />

              <ButtonLayout name="Atualizar senha" handler={() => router.push("/cliente/minha-conta/editar-conta")} />
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
