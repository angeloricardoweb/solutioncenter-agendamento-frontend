import type { NextPage } from "next";
import Head from "next/head";
import { Copyright } from "../components/Copyright";
import { WelcomeDaisyUI } from '../components/WelcomeDaisyUI';

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
        <Copyright />
      </main>
    </div>
  );
};

export default Home;
