import React from 'react'
import { useRouter } from 'next/router';


export default function AdminBottomNavigation({ active }: { active: string }) {

  const router = useRouter();

  return (
    <div className="btm-nav shadow">

      <button className={active === "agenda" && "active"} onClick={() => router.push('/admin/agenda/home')}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className='text-sm'>Agenda</span>
      </button>

      <button className={active === "clientes" && "active"} onClick={() => router.push('/admin/clientes')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          fill="none"
          viewBox="0 0 243 160"
        >
          <path
            fill="currentColor"
            d="M114.2 110.9a60.004 60.004 0 0024.24-67.317A60 60 0 1047.8 110.9a95.5 95.5 0 00-45.3 34.9 7.998 7.998 0 004.474 13.069 7.99 7.99 0 003.31-.031A7.987 7.987 0 0015.5 155a80.1 80.1 0 01131 0 7.988 7.988 0 005.217 3.838 7.987 7.987 0 006.348-1.281A7.998 7.998 0 00159.5 145.8a95.502 95.502 0 00-45.3-34.9zM37 61a44 44 0 1188 0 44 44 0 01-88 0zm202.1 95.9a7.908 7.908 0 01-5.948 1.375A7.9 7.9 0 01228 155a80.2 80.2 0 00-65.5-34 8 8 0 110-16 44.002 44.002 0 0044-44 44.002 44.002 0 00-44-44 47.403 47.403 0 00-11.9 1.6 8 8 0 01-9.9-5.5 8.097 8.097 0 015.5-9.9A64.002 64.002 0 01162.5 1a59.9 59.9 0 0133.2 109.9 96.3 96.3 0 0145.4 34.9 8 8 0 01-2 11.1z"
          ></path>
        </svg>
        <span className='text-sm'>Clientes</span>
      </button>
      <button className={active === "relatorios" && "active"} onClick={() => router.push('/admin/relatorios')}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        <span className='text-sm'>Relatórios</span>
      </button>
      <button className={active === "opcoes" && "active"} onClick={() => router.push('/admin/opcoes')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="7"
          fill="none"
          viewBox="0 0 14 4"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.5 2.75a.75.75 0 100-1.5.75.75 0 000 1.5zM7 2.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.5 2.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
          ></path>
        </svg>
        <span className='text-sm'>Opções</span>
      </button>
    </div>
  )
}
