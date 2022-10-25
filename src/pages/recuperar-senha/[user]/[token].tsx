import type { NextPage } from "next";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { api } from "../../../services/axios";

const NovaSenha: NextPage = () => {

  const router = useRouter()
  const { user, token } = router.query

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function handleResetPassword(data) {
    const loadingToast = toast.loading('Atualizando senha...')

    try {
      const response = await api.put(`/recuperar-senha/${user}/${token}`, data)
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
          <form className='max-w-[420px] mx-auto' onSubmit={handleSubmit(handleResetPassword)}>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <h2 className='mt-5'>Atualizar Senha</h2>
            <span className='font-bold text-base'>
              Por favor, digite sua nova senha abaixo
            </span>
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
              <button className='btn btn-primary w-full' disabled={isSubmitting}>Atualizar senha</button>
            </div>
            <Link href="/">
              <button className='btn btn-outline w-full mt-2' type="button">Cancelar</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NovaSenha;
