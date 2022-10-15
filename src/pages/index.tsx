import { useEffect } from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import { ChevronRight } from "../components/Icons/ChevronRight";
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    window.alert('Atenção! Ainda estamos em desenvolvimento, nenhuma funcionalidade está disponível.');
  }, [])
  return (
    <section>
      <div className="main_container">
        <div>
          <div className='max-w-[420px] mx-auto'>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <h2 className='mt-5'>Login</h2>

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

            <div className="mt-5">
              <button className='btn btn-primary w-full' onClick={() => router.push('/agendamento')}>Login</button>
            </div>
            <Link href="/criar-conta">
              <button className='btn btn-outline w-full mt-2' type="button">Criar minha conta</button>
            </Link>
            <div className='mt-3'>
              <Link href="/recuperar-senha">
                <div className='flex items-center gap-2 py-2 cursor-pointer'>
                  <span className='font-bold text-base'>
                    Esqueci minha senha
                  </span>
                  <ChevronRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
