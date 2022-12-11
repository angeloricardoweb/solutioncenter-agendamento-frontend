import React from 'react'
import Admin from '../../../components/Layouts/Admin'
import HeaderPage from '../../../components/Partials/HeaderPage'
import ButtonLayout from './../../../components/Partials/ButtonLayout';
import { useRouter } from 'next/router';

export default function Opcoes() {
  const router = useRouter()
  return (
    <Admin title="opcoes">
      <div className="main_container">
        <HeaderPage title="Opções" />
        <h3 className='text-center'>Área em desenvolvimento</h3>
        <div className='flex flex-col gap-2 mt-5'>
          <ButtonLayout name={'Fechar horarios'} handler={() => router.push('/admin/opcoes/fechar-horarios')} />
          <ButtonLayout name={'Abrir horarios'} handler={() => router.push('/admin/opcoes/abrir-horarios')} />
          <ButtonLayout name={'Notificações'} handler={() => router.push('/admin/opcoes/notificacoes')} />
          <ButtonLayout name={'Histórico'} handler={() => router.push('/admin/opcoes/historico')} />
        </div>
      </div>
    </Admin>
  )
}
