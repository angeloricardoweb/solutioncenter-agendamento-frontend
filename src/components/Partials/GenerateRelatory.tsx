import React from 'react'

export default function GenerateRelatory() {
  const currentDay = new Date().toISOString().split('T')[0]
  return (
    <div className='mt-5 mb-5'>
      <h3>Gerar relatório por período</h3>
      <p>Insira um período abaixo</p>
      <div className='grid grid-cols-2 gap-3 mt-2'>
        <div>
          <label className='text-brand-blue-600'>Data inicial</label>
          <input type="date" className='input input-bordered w-full'
            max={currentDay}
          />
        </div>
        <div>
          <label className='text-brand-blue-600'>Data Final</label>
          <input type="date" className='input input-bordered w-full'
            max={currentDay}
          />
        </div>
        <div className='col-span-2'>
          <label className='text-brand-blue-600'>E-mail que vai receber o relatório</label>
          <input type="email" className='input input-bordered w-full'
          />
        </div>
      </div>
      <div className="grid justify-center">
        <button className='btn btn-primary mt-3'>Gerar Relatório</button>
      </div>
    </div>
  )
}
