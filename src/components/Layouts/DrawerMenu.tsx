import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../Header/index'
import nookies, { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
interface DrawerMenuProps {
  children: React.ReactNode
}

export function DrawerMenu({ children }: DrawerMenuProps) {
  const [showLogin, setShowLogin] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()


  function handleLogout() {
    nookies.destroy(undefined, 'token')
    nookies.destroy(undefined, 'role')
    router.push('/')
    setShowLogin(true)
  }

  useEffect(() => {
    const { 'token': token } = parseCookies()
    if (token) {
      setShowLogin(false)
    }
    inputRef.current.checked = false
  }, [router.pathname])


  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={inputRef} />
      <div className="drawer-content">
        <Header />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <li>
            <a>Sidebar Item 1</a>
          </li> */}
          {
            showLogin && (
              <li>
                <a onClick={() => router.push('/')}>Login</a>
              </li>
            )
          }
          <li>
            <a onClick={() => router.push('/solution-center/sobre-nos')}>Sobre nós </a>
          </li>
          <li>
            <a onClick={() => router.push('/solution-center/ambientes')}>Ambientes </a>
          </li>
          <li>
            <a onClick={() => router.push('/solution-center/planos')}>Planos </a>
          </li>
          <li>
            <a onClick={() => router.push('/solution-center/contato')}>Contato </a>
          </li>
          <li>
            <a onClick={() => router.push('/solution-center/sobre-o-app')}>Sobre o App </a>
          </li>
          {
            !showLogin && (
              <li>
                <a onClick={handleLogout}>Deslogar</a>
              </li>
            )
          }

        </ul>
      </div>
    </div>
  )
}
