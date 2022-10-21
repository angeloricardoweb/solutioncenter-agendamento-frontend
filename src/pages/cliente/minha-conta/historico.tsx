import React from 'react'
import ClientBottomNavigation from '../../../components/Partials/BottomNavigation'

export default function Historico() {
  return (
    <>
      <section>
        <div className="main_container">
          <div className='bg-white shadow rounded-md'>
          <h2 className='text-center'>Meu histórico</h2>

          </div>


        </div>
      </section>
      <ClientBottomNavigation active='minha-conta' />
    </>
  )
}
