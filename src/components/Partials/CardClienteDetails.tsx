import React from 'react'
import DescriptionBlock from './DescriptionBlock'

export default function CardClienteDetails({ data }) {
  return (
    <div className='flex flex-col gap-3'>
      <DescriptionBlock title={'Nome'} value={data.nome} />
      <DescriptionBlock title={'E-mail'} value={data.email} />
      <DescriptionBlock title={'Profissão'} value={data.profissao} />
      <DescriptionBlock title={'Telefone'} value={data.telefone} />
      <DescriptionBlock title={'CPF'} value={data.cpf} />
      <div>
        <strong className='text-xl'>Admin: </strong>
        {data.admin ? <span className='badge bg-green-600'>Sim</span> : <span className='badge bg-red-400'>Não</span>}
      </div>
      <div>
        <strong className='text-xl'>Ativo: </strong>
        {data.ativo ? <span className='badge bg-green-600'>Sim</span> : <span className='badge bg-red-400'>Não</span>}
      </div>
    </div>
  )
}

