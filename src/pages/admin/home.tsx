import React, { useState } from 'react';
import dynamic from 'next/dynamic';


export default function Home() {

  const CalendarComponent = dynamic(() => import('../../components/Calendar'), { ssr: false });

  return (
    <div className='main_container'>
      <div className='flex justify-center w-full'>
        <CalendarComponent />
      </div>
    </div>
  );
}
