import { parseCookies } from 'nookies';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { api } from '../../services/axios';

export default function GenerateRelatory() {



  const currentDay = new Date().toISOString().split('T')[0]

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();


  async function handleReportGenerate(data) {

    const { 'token': token } = parseCookies()

    const loadingToast = toast.loading('Enviando seu relatório...')
    try {

      const response = await api.get('/admin/relatorio-geral', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          inicio: data.inicio,
          fim: data.fim,
          email: data.email
        }
      });

      reset({
        inicio: '',
        fim: '',
        email: '',
      });

      toast.success(response.data.message, {
        duration: 5000,
        icon: '✅',
      })

    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(loadingToast)
  }

  return (
    <form className='mt-5 mb-5' onSubmit={handleSubmit(handleReportGenerate)}>
      <h3>Gerar relatório por período</h3>
      <p>Insira um período abaixo</p>
      <div className='grid grid-cols-2 gap-3 mt-2'>
        <div>
          <label className='text-brand-blue-600'>Data inicial</label>
          <input type="date" className='input input-bordered w-full'
            max={currentDay}
            {...register('inicio', { required: true })}
          />
          {errors.inicio && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
        </div>
        <div>
          <label className='text-brand-blue-600'>Data Final</label>
          <input type="date" className='input input-bordered w-full'
            max={currentDay}
            {...register('fim', { required: true })}
          />
          {errors.fim && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
        </div>
        <div className='col-span-2'>
          <label className='text-brand-blue-600'>E-mail que vai receber o relatório</label>
          <input type="email" className='input input-bordered w-full'
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
        </div>
      </div>
      <div className="grid justify-center">
        <button className='btn btn-primary mt-3' disabled={isSubmitting}>Gerar Relatório</button>
      </div>
    </form>
  )
}
