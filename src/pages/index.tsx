import type { NextPage } from "next";
import Head from "next/head";
import { Copyright } from "../components/Copyright";
import { WelcomeDaisyUI } from '../components/WelcomeDaisyUI';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Solution Center Agendamento</title>
        <meta name="description" content="Aplicação em desenvolvimento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center flex-col gap-5 pt-4">
        <h1 className="text-brand-blue-600">
          Solution Center Agendamento
        </h1>
        <h2>Em desenvolvimento</h2>
        <Copyright />
        <Link href="/criar-conta">Criar conta</Link>
      </main>
    </div>
  );
};

export default Home;
