import { parseCookies } from 'nookies'
import React, { useEffect } from 'react'
import AdminBottomNavigation from '../Partials/AdminBottomNavigation'
import { useRouter } from 'next/router'
export default function Admin({ children, title }) {
  const { token: token } = parseCookies()
  const { role: role } = parseCookies()
  const router = useRouter();

  useEffect(() => {
    if (!token || role !== 'Administrador') {
      console.log('token', token);
      router.push('/')
    }
  }, [])

  return (
    <div>{children}
      <AdminBottomNavigation active={title} />
    </div>
  )
}
