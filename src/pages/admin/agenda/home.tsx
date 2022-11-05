import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Admin from '../../../components/Layouts/Admin';


export default function Home() {

  const CalendarComponent = dynamic(() => import('../../../components/Calendar'), { ssr: false });

  return (
    <Admin title={"agenda"}>
      <div className='main_container'>
        <div className='flex justify-center w-full'>
          <CalendarComponent />
        </div>
      </div>
    </Admin>
  );
}
