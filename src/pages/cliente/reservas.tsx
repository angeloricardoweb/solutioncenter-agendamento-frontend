import React, { useEffect, useState } from 'react'
import ClientBottomNavigation from '../../components/Partials/BottomNavigation'
import ReservaCard from '../../components/Partials/ReservaCard'
import { api } from '../../services/axios';

export default function Reservas() {
  const [dataReservas, setDataReservas] = useState([])

  async function getReservas() {
    try {
      const response = await api.get(`/reservas`, {
        headers: {
          Authorization: "token-teste"
        }
      });
      setDataReservas(response.data.results.reservas)
      return response;
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getReservas()
  }, [])


  return (
    <>
      <section>
        <div className="main_container">
          <div>
            <h2 className='text-center'>Minhas reservas</h2>
            <div className='mt-5 flex flex-col gap-5'>
              {
                dataReservas && dataReservas.map(reserva => (

                  <ReservaCard />

                ))
              }
            </div>
          </div>
        </div>
      </section>
      <ClientBottomNavigation active='reservas' />
    </>
  )
}
