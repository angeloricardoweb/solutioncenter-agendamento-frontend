import Link from 'next/link'
import React from 'react'
import { Header } from '../Header/index'
import nookies from 'nookies'
import { useRouter } from 'next/router'
interface DrawerMenuProps {
  children: React.ReactNode
}

export function DrawerMenu({ children }: DrawerMenuProps) {

  const router = useRouter()

  function handleLogout(){
    nookies.destroy(undefined, 'token')
    nookies.destroy(undefined, 'role')
    router.push('/')
  }

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
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
          <li>
            <a onClick={handleLogout}>Deslogar</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
