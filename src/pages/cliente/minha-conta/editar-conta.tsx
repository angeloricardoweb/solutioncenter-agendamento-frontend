import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ReactInputMask from 'react-input-mask';
import SelectProfession from '../../../components/Forms/SelectProfession';
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'
import HeaderPage from '../../../components/Partials/HeaderPage';
import { api, api_dev, api_local } from '../../../services/axios';

export default function EditarConta() {
  const [refresh, setRefresh] = useState(false)
  const router = useRouter();
  const { 'token': token } = parseCookies()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  interface DataProps {
    name: string;
    email: string;
    cpf: string;
    telefone: string;
    password: string;
    password_confirmation: string;
    profissao_id: string;
  }

  async function handleUpdateUser(data: DataProps) {
    const loadingToast = toast.loading('Atualizando dados...')

    try {
      const response = await api.put('/usuario/update', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success(response.data.message, {
        duration: 3000,
        icon: '✅',
      })

      setRefresh(!refresh)

    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(loadingToast)
  }


  async function getUserData() {
    const response = await api.get('/usuario/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    reset({
      name: response.data.results.nome,
      email: response.data.results.email,
      telefone: response.data.results.telefone,
      profissao_id: response.data.results.profissao_id
    })

  }

  useEffect(() => {
    getUserData()
  }, [refresh])

  return (
    <>
      <section>
        <div className="main_container">
          <div>
            <HeaderPage title={'Atualizar senha'} />
            <form className='max-w-[420px] mx-auto  pb-[100px]' onSubmit={handleSubmit(handleUpdateUser)}>
              <div className="divider">Atualizar senha de acesso</div>
              <div className="label-float mt-3">
                <input
                  type="password"
                  placeholder=" "
                  {...register('password')}
                />
                <label>Senha</label>
              </div>
              <div className="label-float mt-3">
                <input
                  type="password"
                  placeholder=" "
                  {...register('password_confirmation')}
                />
                <label>Repetir Senha</label>
              </div>
              <div className="mt-5">
                <button className='btn btn-primary w-full' disabled={isSubmitting}>Atualizar dados</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ClientBottomNavigation active='minha-conta' />
    </>
  )
}
