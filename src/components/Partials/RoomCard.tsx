import React from 'react'


interface RoomCardProps {
  title: string;
  background: string;
}

export default function RoomCard(props: RoomCardProps) {
  return (
    <div className='room_card'
      style={{
        backgroundImage: `url(${props.background})`
      }}>
      <h3 className='text-white'>{props.title}</h3>
    </div>
  )
}
