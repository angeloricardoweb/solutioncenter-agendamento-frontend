import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useRouter } from 'next/router';



export default function CalendarComponent() {

  const [value, onChange] = useState<any>(new Date());
  const [enable, setEnable] = useState<boolean>(false);

  console.log(new Date());

  const router = useRouter();


  function handleRoute() {
    router.push(`/admin/agenda/${new Date(value).toISOString().split('T')[0]}`);
  }


  function enableButton(time) {
    onChange(time);
    setEnable(true);
  }

  return (
    <div className='grid justify-center gap-5'>
      <div className="sc_calendar">
        {/* default value none */}
        <Calendar
          onChange={e => enableButton(e)}
        // onClickDay={() => handleRoute()}
        />
        {/* <Calendar onChange={onChange} value={value} defaultValue={value} /> */}
      </div>
      <h3 className='text-center capitalize'>{new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short'
      }).format(new Date(value))}</h3>
      <button onClick={handleRoute} className='btn bg-brand-brown-600 text-white' disabled={!enable}>Agenda</button>
    </div>
  );
}
