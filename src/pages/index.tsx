import { useEffect } from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { ChevronRight } from '../components/Icons/Chevron';
import { useGlobal } from '../context/GlobalContextProvider';
import toast from 'react-hot-toast';
import { api } from '../services/axios';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';

const Home: NextPage = () => {

  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  interface DataProps {
    email: string;
    password: string;
  }

  async function handleLogin(data: DataProps) {

    const loadingToast = toast.loading('Logando...')
    try {
      const response = await api.post('/login', data);
      reset({
        email: '',
        password: '',
      });

      console.log(response.data.results);

      setCookie(undefined, 'token', response.data.results.token)
      setCookie(undefined, 'role', response.data.results.role)

      toast.success(response.data.message, {
        duration: 5000,
        icon: '✅',
      })

      if (response?.data.results.role === "Cliente") {
        router.push('/cliente/agendamento')
      }

      if (response?.data.results.role === "Administrador") {
        router.push('/admin/agenda/home')
      }

    } catch (error) {
      console.log(error.response.data);

      toast.error(error.response.data.message)
    }
    toast.dismiss(loadingToast)
  }

  return (
    <section>
      <div className="main_container">
        <div>
          <form className='max-w-[420px] mx-auto' onSubmit={handleSubmit(handleLogin)}>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <h2 className='mt-5'>Login</h2>

            <div className="label-float mt-3">
              <input
                type="email"
                placeholder=" "
                {...register('email', { required: true })}
              />
              <label>E-mail</label>
              {errors.email && (
                <span className="text-red-500 text-sm">Insira seu e-mail</span>
              )}
            </div>
            <div className="label-float mt-3">
              <input
                type="password"
                placeholder=" "
                {...register('password', { required: true })}
              />
              <label>Senha</label>
              {errors.password && (
                <span className="text-red-500 text-sm">Insira sua senha</span>
              )}
            </div>

            <div className="mt-5">
              <button className='btn btn-primary w-full' disabled={isSubmitting}>Login</button>
            </div>
            <Link href="/criar-conta">
              <button className='btn btn-outline w-full mt-2' type="button">Criar minha conta</button>
            </Link>
            <div className='mt-3'>
              <Link href="/recuperar-senha">
                <div className='flex items-center gap-2 py-2 cursor-pointer'>
                  <span className='font-bold text-base'>
                    Esqueci minha senha
                  </span>
                  <ChevronRight />
                </div>
              </Link>
            </div>
          </form>
          <div className="flex justify-center mt-10">
            <button onClick={() => router.push('/admin/agenda/home')} className='btn btn-outline'>Admin Teste</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
