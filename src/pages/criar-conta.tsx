import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from '../components/Icons/Chevron'
import { api } from '../services/axios';
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask'
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function CriarConta() {

  const router = useRouter();

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
  }

  //cadastrar um usuario
  async function handleRegister(data: DataProps) {

    const loadingToast = toast.loading('Registrando...')
    try {
      const response = await api.post('/registro', data);
      reset({
        name: '',
        cpf: '',
        email: '',
        telefone: '',
        password: '',
        password_confirmation: '',
      });

      toast.success(response.data.message, {
        duration: 5000,
        icon: '✅',
      })

      router.push('/')

    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(loadingToast)
  }


  return (
    <section>
      <div className="main_container">
        <div>
          <form className='max-w-[420px] mx-auto' onSubmit={handleSubmit(handleRegister)}>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <p className='mt-2'>Faça agora seu pré registro para nosso novo App de Agendamento</p>
            <h2 className='mt-5'>Criar uma conta</h2>
            <div className="label-float mt-3">
              <input
                type="text"
                placeholder=" "
                {...register('name', { required: true })}
              />
              <label>Nome</label>
              {errors.name && (
                <span className="text-red-500 text-sm">O nome é obrigatório</span>
              )}
            </div>

            <div className="label-float mt-3">
              <ReactInputMask
                mask={'999.999.999-99'}
                type="text"
                placeholder=" "
                {...register('cpf', { required: true })}
              />
              <label>CPF</label>
              {errors.cpf && (
                <span className="text-red-500 text-sm">O CPF é obrigatório</span>
              )}
            </div>
            <div className="label-float mt-3">
              <ReactInputMask
                mask={'(99) 99999-9999'}
                type="text"
                placeholder=" "
                {...register('telefone', { required: true })}

              />
              <label>Telefone/Whatsapp</label>
              {errors.telefone && (
                <span className="text-red-500 text-sm">O telefone é obrigatório</span>
              )}
            </div>
            <div className="divider">Dados de acesso</div>
            <div className="label-float mt-3">
              <input
                type="email"
                placeholder=" "
                {...register('email', { required: true })}

              />
              <label>E-mail</label>
              {errors.email && (
                <span className="text-red-500 text-sm">O email é obrigatório</span>
              )}
            </div>
            <div className="label-float mt-3">
              <input
                type="password"
                placeholder=" "
                {...register('password', { required: true, minLength: 6 })}
              />
              <label>Senha</label>
              {errors.password && (
                <span className="text-red-500 text-sm">Digite uma senha de pelo menos 6 digitos</span>
              )}
            </div>
            <div className="label-float mt-3">
              <input
                type="password"
                placeholder=" "
                {...register('password_confirmation', { required: true, minLength: 6 })}

              />
              <label>Repetir Senha</label>
              {errors.password_confirmation && (
                <span className="text-red-500 text-sm">Repita sua senha</span>
              )}
            </div>
            <div className="mt-5">
              <button className='btn btn-primary w-full' disabled={isSubmitting}>Criar minha conta</button>
            </div>
            <div className='mt-3'>
              <Link href="/">
                <div className='flex items-center gap-2 py-2 cursor-pointer'>
                  <span className='font-bold text-base'>
                    Já possuo uma conta
                  </span>
                  <ChevronRight />
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
