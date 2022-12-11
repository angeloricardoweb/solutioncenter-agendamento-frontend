import React from 'react'
import Admin from '../../components/Layouts/Admin'
import HeaderPage from '../../components/Partials/HeaderPage'

export default function Contato() {
  return (
    <section>
      <div className="main_container">
        <HeaderPage title="Contato" />
        <div className="mt-5">

          <div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/whatsapp.png" alt="wifi" width={20} />
              <div className='flex flex-col'>
                <strong>(91) 99118-8681</strong>
                <strong>(91) 98131-9689</strong>
                <strong>(91) 98252-0417</strong>
              </div>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/instagram.png" alt="wifi" width={20} />
              <strong>@solutioncenterbelem</strong>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/email.png" alt="wifi" width={20} />
              <strong>contato@solutioncenterbelem.com</strong>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <img src="/icons/web.png" alt="wifi" width={20} />
              <strong>www.solutioncenterbelem.com</strong>
            </div>

          </div>
          <div className='mt-5'>

          <h3>Localização</h3>
          <p className='text-justify'>Localização privilegiada, bairro central e próximo a grandes avenidas. Temos estacionamento rotativo, com entrada pela Tv. Humaitá</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.229222488399!2d-48.4647103!3d-1.4405641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff20002686738438!2sSolution%20Center%20Bel%C3%A9m!5e0!3m2!1spt-PT!2sbr!4v1670784628570!5m2!1spt-PT!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mt-3'></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
