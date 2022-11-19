import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import {useRouter} from 'next/router';
export default function CalendarComponent() {
  const [value, onChange] = useState<any>(new Date());
  const router = useRouter();


  function handleRoute(){
    router.push(`/admin/agenda/${new Date(value).toISOString().split('T')[0]}`);
  }



  return (
    <div className='grid justify-center gap-5'>
      <div className="sc_calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <h3 className='text-center capitalize'>{new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short'
      }).format(new Date(value))}</h3>
      <button onClick={handleRoute} className='btn bg-brand-brown-600 text-white'>Agenda</button>
    </div>
  );
}
