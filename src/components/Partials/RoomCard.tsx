import React from 'react'


interface RoomCardProps {
  title: string;
  background: string;
}

export default function RoomCard(props: RoomCardProps) {
  return (
    <div className='room_card bg-center'
      style={{
        backgroundImage: `url(${props.background})`
      }}>
      <h3 className='text-white bg-brand-brown-600 py-1 px-2 text-sm rounded-md'>{props.title}</h3>
    </div>
  )
}
