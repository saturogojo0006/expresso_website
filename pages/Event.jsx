import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Event = () => {
  const [events, setEvents] = useState([]);

  // Mimicking an API call to fetch event data
  const fetchEventData = async () => {
    // Simulated data, replace with actual API call
    const data = [
      {
        id: 1,
        title: 'EVENT-1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus ut officiis, maiores dolore nisi aperiam, ipsa tempora autem omnis reprehenderit quisquam recusandae placeat ratione suscipit magni error provident soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias eligendi natus eos quia consequatur cum delectus ipsa modi? Laudantium vitae est unde animi, temporibus voluptatum quis aut possimus quos.',
        image: '/eventPicture.png'
      },
      {
        id: 2,
        title: 'EVENT-2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus ut officiis, maiores dolore nisi aperiam, ipsa tempora autem omnis reprehenderit quisquam recusandae placeat ratione suscipit magni error provident soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias eligendi natus eos quia consequatur cum delectus ipsa modi? Laudantium vitae est unde animi, temporibus voluptatum quis aut possimus quos.',
        image: '/Group 204.png'
      }
    ];
    setEvents(data);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="flex flex-col bg-[#4B4B4B] h-full pt-4 px-4 sm:px-8">
      <button className="self-end h-[29px] w-[109px] mb-4 sm:mb-0">
        <div className="flex gap-1 flex-row-reverse items-center">
          <div className="text-white text-xl font-antonio pb-1">BACK</div>
          <div className="border-2 rounded-full border-white p-1">
            <Image src='/Arrow2.png' width={20} height={20} alt="Arrow" />
          </div>
        </div>
      </button>

      {events.map((event, index) => (
        <div key={event.id} className={`flex flex-col sm:flex-row items-center sm:items-${index % 2 === 0 ? 'start' : 'end'} mt-4 gap-4`}>
          <div className={`w-full sm:w-auto ${index % 2 !== 0 ? 'sm:order-2' : ''}`}>
            <Image src={event.image} width={1500} height={200} alt="Event Picture" className="object-cover w-full h-auto" />
          </div>
          <div className="flex flex-col w-full sm:ml-4">
            <div className={`font-antonio text-[#FEFEFE] text-2xl sm:text-5xl ${index % 2 !== 0 ? 'text-right' : ''}`}>{event.title}</div>
            <div className="text-[#ffffff] text-base sm:text-lg bg-cover bg-center p-4 mt-2" style={{ backgroundImage: `url('/event.png')` }}>
              {event.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
