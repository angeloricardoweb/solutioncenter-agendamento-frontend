import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';

const RecuperarSenha: NextPage = () => {
  return (
    <section>
      <div className="main_container">
        <div>
          <form className='max-w-[420px] mx-auto'>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <h2 className='mt-5'>Recuperar senha</h2>
            <span className='font-bold text-base'>
              Digite seu e-mail de recuperação de senha
            </span>
            <div className="label-float mt-3">
              <input
                type="email"
                placeholder=" "
              />
              <label>E-mail</label>
            </div>

            <div className="mt-5">
              <button className='btn btn-primary w-full'>ENVIAR CÓDIGO DE RECUPERAÇÃO</button>
            </div>
            <Link href="/">
              <button className='btn btn-outline w-full mt-2' type="button">Voltar</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecuperarSenha;
