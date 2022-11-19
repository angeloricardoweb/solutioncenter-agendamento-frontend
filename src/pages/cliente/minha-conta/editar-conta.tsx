import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ReactInputMask from 'react-input-mask';
import SelectProfession from '../../../components/Forms/SelectProfession';
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'
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
    console.log(data);

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
    const response = await api_dev.get('helper/me', {
      headers: {
        Authorization: `Bearer ${"token"}`
      }
    })
    console.log(response);

    reset({
      name: response.data.results.name,
      cpf: response.data.results.cpf,
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
          <div className='bg-white shadow rounded-md'>
            <h2 className='text-center'>Editar conta</h2>
            <form className='max-w-[420px] mx-auto  pb-[100px]' onSubmit={handleSubmit(handleUpdateUser)}>

              <div className="label-float mt-3">
                <input
                  type="text"
                  placeholder=" "
                  {...register('name')}
                />
                <label>Nome</label>

              </div>

              <div className="label-float mt-3">
                <ReactInputMask
                  mask={'999.999.999-99'}
                  type="text"
                  placeholder=" "
                  {...register('cpf')}
                />
                <label>CPF</label>

              </div>
              <div className="label-float mt-3">
                <ReactInputMask
                  mask={'(99) 99999-9999'}
                  type="text"
                  placeholder=" "
                  {...register('telefone')}

                />
                <label>Telefone/Whatsapp</label>

              </div>

              <SelectProfession register={register} errors={errors} />

              <div className="divider">Dados de acesso</div>

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
