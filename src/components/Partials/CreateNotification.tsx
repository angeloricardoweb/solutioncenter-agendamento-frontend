import { parseCookies } from 'nookies'
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { api } from '../../services/axios'

export default function CreateNotification({ setReset }: any) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();


  const { token: token } = parseCookies()
  console.log(token);


  async function createNotify(data) {
    const loadingToast = toast.loading('Criando notificação...')

    try {
      const response = await api.post('/admin/notificacoes', {
        message: data.message
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      reset({
        message: ''
      })
      toast.success(response.data.message)
      setReset(old => !old)

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
    toast.dismiss(loadingToast)
  }

  return (
    <form onSubmit={handleSubmit(createNotify)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Mensagem</span>
          {
            errors.message &&
            <span className="label-text-alt text-warning">Obrigatório</span>
          }
        </label>
        <textarea className="textarea textarea-bordered h-24 text-zinc-700" placeholder="Ex: Não atenderemos no dia 10 de fevereiro, pois teremos manutenção geral."
          {...register('message', { required: true })}
        ></textarea>

        <button className='btn btn-primary mt-2'>Criar notificação</button>
      </div>
    </form>
  )
}
