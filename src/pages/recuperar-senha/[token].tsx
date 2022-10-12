import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';

const NovaSenha: NextPage = () => {
  return (
    <section>
      <div className="main_container">
        <div>
          <form className='max-w-[420px] mx-auto'>
            <img src="/logo-solution-azul.svg" alt="solution center" />
            <h2 className='mt-5'>Atualizar Senha</h2>
            <span className='font-bold text-base'>
              Por favor, digite sua nova senha abaixo
            </span>
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
              <button className='btn btn-primary w-full'>Atualizar senha</button>
            </div>
            <Link href="/">
              <button className='btn btn-outline w-full mt-2' type="button">Cancelar</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NovaSenha;
