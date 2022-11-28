import { parseCookies } from 'nookies';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Admin from '../../../../components/Layouts/Admin'
import HeaderPage from '../../../../components/Partials/HeaderPage'
import { api } from '../../../../services/axios';
import { toast } from 'react-hot-toast';



export default function AbrirHorarios() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { 'token': token } = parseCookies()


  async function handleCloseRoom(data: any) {
    const toasty = toast.loading('Fechando horários...')
    try {
      const response = await api.patch('/admin/agenda/gerencia-horarios', {
        dia: data.dia,
        horarios: data.horarios,
        tipo: "abrir"
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
    toast.dismiss(toasty)
  }

  return (
    <Admin title="opcoes">
      <div className="main_container">
        <HeaderPage title="Abrir horários" />
        <h3 className=''>Selecione o dia e os horários que devem ser abertos, caso estejam fechados.</h3>
        <form onSubmit={handleSubmit(handleCloseRoom)} className="pb-24">

          <div className='flex flex-col gap-2 mt-5'>
            <div>
              <label htmlFor="date" className='text-brand-blue-600'>Dia</label>

              <input type="date" name="date" id="date" className='input input-bordered w-full'
                {...register('dia', { required: true })}
              />
            </div>
          </div>
          <div className='mt-3'>
            <span className='text-brand-blue-600 font-bold'>Horários</span>

            {
              ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"].map((item) => (
                <label className="label cursor-pointer border rounded-lg mb-2" key={item}>
                  <span className="label-text">{item}:00</span>
                  <input value={item} type="checkbox" className="checkbox"
                    {...register('horarios', { required: true })}
                  />
                </label>
              ))
            }

          </div>
          <div className='mt-3'>
            <button className='btn btn-success' disabled={isSubmitting}>Abrir horários</button>
          </div>
        </form>
      </div>
    </Admin>
  )
}
