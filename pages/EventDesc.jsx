import React from 'react';
import Image from 'next/image';

function EventDesc({ event }) {
  const { title, date, venue, description, images } = event;

  return (
    <div className="flex-col bg-[#4B4B4B] h-full pt-4">
      <button className="float-right mr-4 h-[29px] w-[109px]">
        <div className="flex gap-1 flex-row-reverse items-center">
          <div className="text-white text-xl font-antonio pb-1"> BACK</div>
          <div className="border-2 rounded-full border-white p-1">
            <Image src="/Arrow2.png" width={20} height={20} className="" />
          </div>
        </div>
      </button>

      <div className="flex mt-4 ml-20 gap-2 mr-0 pr-0 ">
        <div className="h-[30px] w-[250px]">
          <Image src="/eventPicture.png" width={250} height={30} alt="image" className="" />
        </div>
        <div className="flex-col mr-0">
          <div className="font-antonio text-[#FEFEFE] text-5xl">{title}</div>
          <div className="text-[#ffffff] h-[200px] w-[900px] text-[16px] pt-4 pl-6 pb-4" style={{ backgroundImage: `url('/event.png')` }}>
            {description}
          </div>

          <div>
            <span className="text-[#FFBC58] text-3xl">DATE:</span>
            <span className="text-white text-3xl pl-2">{date}</span>
          </div>
          <div>
            <span className="text-[#FFBC58] text-3xl">VENUE:</span>
            <span className="text-white text-3xl pl-2">{venue}</span>
          </div>
        </div>
      </div>
      <div className="font-antonio text-7xl pt-6 text-white m-auto">
        <p className="text-center">glimpses</p>
      </div>
      <div className="flex gap-4 mb-2 mt- 4 pt-6 pb-6 pl-4 justify-center">
        {images.map((image, index) => (
          <div key={index} className="bg-[#FFBC58] w-[150px] h-[200px] border-2 rounded-[10px]"></div>
        ))}
      </div>
    </div>
  );
}

export default EventDesc;
