import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Icons/Loading';
import ClientBottomNavigation from '../../components/Partials/BottomNavigation'
import HeaderPage from '../../components/Partials/HeaderPage';
import ReservaCard from '../../components/Partials/ReservaCard'
import { api, api_dev, api_local } from '../../services/axios';

export default function Reservas() {
  const [dataReservas, setDataReservas] = useState([])
  const { 'token': token } = parseCookies()
  const [loading, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)

  async function getReservas() {
    setLoading(true)
    try {
      const response = await api.get(`usuario/reservas?type=futuras`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setDataReservas(response.data.results)

    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }


  useEffect(() => {
    getReservas()
  }, [refresh])


  return (
    <>
      <section>
        <div className="main_container">
          <div>
            <HeaderPage title='Reservas em andamento' />
            <div className='mt-5 flex flex-col gap-5 mb-[100px]'>
              {loading && <Loading />}
              {
                !loading && dataReservas && dataReservas.map(reserva => (
                  <ReservaCard key={reserva.id} setRefresh={setRefresh} reserva={reserva} />
                ))
              }
              {
                !loading && dataReservas.length <= 0 && <p>Ops, você não tem reservas em andamento</p>
              }
            </div>
          </div>
        </div>
      </section>
      <ClientBottomNavigation active='reservas' />
    </>
  )
}
