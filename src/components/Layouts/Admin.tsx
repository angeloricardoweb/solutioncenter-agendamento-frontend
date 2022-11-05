import React from 'react'
import AdminBottomNavigation from '../Partials/AdminBottomNavigation'

export default function Admin({ children, title }) {
  return (
    <div>{children}
      <AdminBottomNavigation active={title} />
    </div>
  )
}
