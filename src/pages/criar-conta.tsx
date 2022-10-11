import React from 'react'
import Link from 'next/link'
import { ChevronRight } from '../components/Icons/ChevronRight'

export default function CriarConta() {
  return (
    <section>
      <div className="main_container">
        <div>
          <form className='max-w-[420px] mx-auto'>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <p className='mt-2'>Faça agora seu pré registro para nosso novo App de Agendamento</p>
            <h2 className='mt-5'>Criar uma conta</h2>
            <div className="label-float mt-3">
              <input
                type="text"
                placeholder=" "
              />
              <label>Nome</label>
            </div>

            <div className="label-float mt-3">
              <input
                type="text"
                placeholder=" "
              />
              <label>CPF</label>
            </div>
            <div className="label-float mt-3">
              <input
                type="text"
                placeholder=" "
              />
              <label>Telefone/Whatsapp</label>
            </div>
            <div className="divider">Dados de acesso</div>
            <div className="label-float mt-3">
              <input
                type="email"
                placeholder=" "
              />
              <label>E-mail</label>
            </div>
            <div className="label-float mt-3">
              <input
                type="password"
                placeholder=" "
              />
              <label>Senha</label>
            </div>
            <div className="label-float mt-3">
              <input
                type="password"
                placeholder=" "
              />
              <label>Repetir Senha</label>
            </div>
            <div className="mt-5">
              <button className='btn btn-primary w-full'>Criar minha conta</button>
            </div>
            <div className='mt-3'>
              <Link href="/login">
                <div className='flex items-center gap-2'>
                  <span className='font-bold text-xl'>
                    Já possuo uma conta
                  </span>
                  <ChevronRight />
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
