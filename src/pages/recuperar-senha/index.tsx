import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import router from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { api } from "../../services/axios";

const RecuperarSenha: NextPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function handleRecoverPassword(data: { email: string }) {

    const loadingToast = toast.loading('Aguarde...')
    try {
      const response = await api.post('/recuperar-senha', data);
      reset({
        email: '',
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
          <form className='max-w-[420px] mx-auto' onSubmit={handleSubmit(handleRecoverPassword)}>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <h2 className='mt-5'>Recuperar senha</h2>
            <span className='font-bold text-base'>
              Digite seu e-mail de recuperação de senha
            </span>
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

            <div className="mt-5">
              <button className='btn btn-primary w-full' disabled={isSubmitting}>ENVIAR CÓDIGO DE RECUPERAÇÃO</button>
            </div>
            <Link href="/">
              <button className='btn btn-outline w-full mt-2' type="button">Voltar</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecuperarSenha;
