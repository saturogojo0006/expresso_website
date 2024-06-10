"use Client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const UpcomingEvent = () => {
  const [time, setTime] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const events = [
    { id: 1, name: 'EVENT NAME', venue: 'In Front of Architecture Deparment' },
    { id: 2, name: 'PREVIOUS NAME 2', venue: 'COMPUTER SCIENCE' },
    { id: 3, name: 'EVENT', venue: 'SAC BUILDING' },

  ];

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/3 bg-yellow-500 text-white flex flex-col items-left justify-center overflow-y-auto p-4 space-y-4">
        <div className="w-[348px] h-[125.93px] text-black text-[54.45px] font-bold font-['Montserrat'] leading-[54.45px] tracking-wide ml-4 mt-4 pl-2">
          UPCOMING EVENTS
        </div>

        {events.map((event) => (
          <div key={event.id} className="group cursor-pointer w-full" onClick={() => handleEventClick(event)}>
            <div className={`w-full ${selectedEvent?.id === event.id ? 'h-64 bg-zinc-300 rounded-2xl border-2 border-black' : 'h-64 bg-zinc-300 rounded-2xl border-2 border-black opacity-30'} group-hover:opacity-100`}>
              <div className="w-2/4 h-12 bg-white rounded-lg border items-center  top-[10rem] left-[8rem] relative border-black m-4 p-2">
                <div className="text-black text-3xl font-bold font-['Coluna'] tracking-wider">{event.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-2/3 bg-black text-white flex flex-col justify-center p-8">
        <div className='ml-[6rem]'>

          {/*event detail */}
          <div className="opacity-50 text-white text-xl font-normal font-['Montserrat'] leading-snug tracking-wider mb-6">
            COUNTDOWN
          </div>
          <div className="flex space-x-6 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-orange-400 text-6xl md:text-8xl font-medium font-['Montserrat'] leading-tight md:leading-normal tracking-wide md:tracking-wider">
                {hours} :
              </span>
              <span className="text-white mt-2">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-orange-400 text-6xl md:text-8xl font-medium font-['Montserrat'] leading-tight md:leading-normal tracking-wide md:tracking-wider">
                {minutes} :
              </span>
              <span className="text-white mt-2">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-orange-400 text-6xl md:text-8xl font-medium font-['Montserrat'] leading-tight md:leading-normal tracking-wide md:tracking-wider">
                {seconds}
              </span>
              <span className="text-white mt-2">Seconds</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <Image src="/pinLocation.png" alt="Location Pin" width={50} height={50} />
            <div className="flex flex-col items-start">
              <div className="w-20 h-7 rounded-lg border border-orange-400 flex items-center justify-center mb-2">
                <span className="text-white text-sm font-normal font-['Inter']">VENUE</span>
              </div>
              <div className="text-white text-sm font-normal font-['Inter']">
                {selectedEvent ? selectedEvent.venue : 'Select an event'}
              </div>
            </div>
          </div>
          <div className="w-full mt-[17rem] ml-80 flex flex-col">
            <hr className="w-5/12 border-t-4 border-orange-400 my-3" />
            <hr className="w-5/12 border-t-4 border-orange-400 my-3" />
            <hr className="w-5/12 border-t-4 border-orange-400 my-3" />
          </div>




        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;

