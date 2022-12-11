import React from 'react'
import Admin from '../../components/Layouts/Admin'
import HeaderPage from '../../components/Partials/HeaderPage'

export default function Ambientes() {
  return (
    <section>
      <div className="main_container">
        <HeaderPage title="Ambientes" />
        <div className="mt-5">
          <p>Nossos ambientes foram elaborados para atender à sua necessidade. Todas as salas possuem:</p>
          <div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/wifi.png" alt="wifi" width={20} />
              <strong>Internet Ilimitada</strong>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/phone.png" alt="wifi" width={20} />
              <strong>Ligações Ilimitada</strong>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/ar.png" alt="wifi" width={20} />
              <strong>Salas Climatizadas</strong>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/security.png" alt="wifi" width={20} />
              <strong>Segurança e praticidade</strong>
            </div>
          </div>
          <div className='mt-5'>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Clarice Lispector</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/clarice-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/litter.png" alt="ico" width={28} />
                <img src="/icons/president-chair.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/abajour.png" alt="ico" width={28} />
              </div>
              <p className='text-center text-brand-brown-600'>A sala dispõe de luminária e mocho.</p>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Carlos Drummond de Andrade</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/carlos-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/sofa.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/chair-2.png" alt="ico" width={28} />
              </div>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Cecília Meireles</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/cecilia-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/sofa.png" alt="ico" width={28} />
                <img src="/icons/chair-2.png" alt="ico" width={28} />
              </div>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Rui Barbosa</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/rui-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/sofa.png" alt="ico" width={28} />
                <img src="/icons/president-chair.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/tv.png" alt="ico" width={28} />
              </div>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Machado de Assis</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/machado-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/sofa.png" alt="ico" width={28} />
                <img src="/icons/president-chair.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/tv.png" alt="ico" width={28} />
              </div>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Monteiro Lobato</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/monteiro-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/sofa.png" alt="ico" width={28} />
                <img src="/icons/chair-2.png" alt="ico" width={28} />
              </div>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Luís Fernando Veríssimo</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/luis-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/sofa.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
                <img src="/icons/chair-2.png" alt="ico" width={28} />
              </div>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Cora Carolina</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/cora-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/sofa.png" alt="ico" width={28} />
                <img src="/icons/chair.png" alt="ico" width={28} />
              </div>
            </div>
            <div className='mb-5 border-b pb-5'>
              <h3 className='text-center'>Carolina de Jesus</h3>
              <div className='shadow bg-cover w-full aspect-video bg-[url(/img/rooms/carolina-min.jpeg)]' />
              <div className='flex justify-around mt-2'>
                <img src="/icons/litter.png" alt="ico" width={28} />
                <img src="/icons/president-chair.png" alt="ico" width={28} />
                <img src="/icons/president-chair.png" alt="ico" width={28} />
                <img src="/icons/president-chair.png" alt="ico" width={28} />
                <img src="/icons/tv.png" alt="ico" width={28} />
                <img src="/icons/abajour.png" alt="ico" width={28} />
              </div>
              <p className='text-center text-brand-brown-600'>A sala dispõe de luminária e mocho.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
