import React from 'react'
import HeaderPage from '../../components/Partials/HeaderPage'

export default function SobreNos() {
  return (
    <section>
      <div className="main_container">
        <HeaderPage title="Sobre nós" />
        <div className="mt-5">
        <p className='mt-3 text-justify'>O Solution Center foi idealizado pensando em você! Somos profissionais liberais e atendendemos a dinâmica de trabalho que o cenário mundial, cada vez mais, nos traz.</p>
        <p className='mt-3 text-justify'>Por isso, nossa missão é proporcionar ao profissional o espaço perfeito para o desenvolvimento de seu trabalho, com uma estrutura de alto padrão. Nossos ambientes são sofisticados, confortáveis e privados.</p>
        <p className='mt-3 text-justify'>Assim, nós oferecemos segurança, conforto e praticidade ao seu atendimento. Tudo isso sem custo fixo ou burocracia. Aqui você paga somente quando usar.</p>
        </div>
      </div>
    </section>
  )
}
