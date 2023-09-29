import Header from '@/app/components/Header';
import EventCard from '@/app/components/Home/EventCard';
import React from 'react'

function Eventpage() {
  return (
    <div>
        <Header activeHeading={4} />
        <EventCard active={true} />
        <EventCard  />
    </div>
  )
}

export default Eventpage;