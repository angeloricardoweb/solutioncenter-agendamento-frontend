import React from 'react'
import Admin from '../../components/Layouts/Admin'
import DescriptionBlock from '../../components/Partials/DescriptionBlock'
import HeaderPage from '../../components/Partials/HeaderPage'

export default function Planos() {
  return (
    <section>
      <div className="main_container">
        <HeaderPage title="Planos" />
        <div className="mt-5">
          <p>Nossos planos atendem a sua necessidade. Em todos eles, os custos com recepcionista, água, café, energia elétrica, segurança, internet e limpeza, estão inclusos no valor do aluguel.</p>
          <div className='grid md:grid-cols-3 gap-3 mt-4'>
            <div className=' bg-zinc-200 rounded-xl shadow overflow-hidden border'>
              <div className='bg-brand-blue-600 p-5'>
                <h3 className='text-white'>Hora avulsa</h3>
              </div>
              <div className='p-5'>

                <DescriptionBlock title={'Período'} value={'60 minutos'} />
                <DescriptionBlock title={'Valor'} value={'R$ 45,00'} />
              </div>
            </div>

            <div className=' bg-zinc-200 rounded-xl shadow overflow-hidden border'>
              <div className='bg-brand-blue-600 p-5'>
                <h3 className='text-white'>Turno</h3>
              </div>
              <div className='p-5'>

                <DescriptionBlock title={'Período'} value={'6hrs'} />
                <DescriptionBlock title={'Valor'} value={'R$ 240,00'} />
                <DescriptionBlock title={'Hora adicional'} value={'R$ 40,00'} />
              </div>
            </div>
            <div className=' bg-zinc-200 rounded-xl shadow overflow-hidden border'>
              <div className='bg-brand-blue-600 p-5'>
                <h3 className='text-white'>Diária</h3>
              </div>
              <div className='p-5'>

                <DescriptionBlock title={'Período'} value={'08hrs às 18hrs'} />
                <DescriptionBlock title={'Valor'} value={'R$ 350,00'} />
                <DescriptionBlock title={'Hora adicional'} value={'R$ 40,00'} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
