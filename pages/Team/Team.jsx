import Image from 'next/image';
import React from 'react';

const Team = () => {
  return (
    <div className="min-h-screen relative">
      {/* Common background image */}
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/background1.png')`,
        }}
      ></div>

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        {/* Split text */}
        <div className="text-white text-10xl ml-24 mr-6 font-antonio font-bold text-center">
          <span className="text-black">Te</span>
          <span className="text-gray-200">am</span>
        </div>

        {/* Bottom bar */}
        <div className="bg-black flex justify-around py-4 mt-10 w-2/3 ml-10 mr-6 border border-white rounded-full">
          <div className="flex flex-col items-center text-white">
            <Image src='/office.png' alt="Office" className="w-10 h-10 mb-2" width={100} height={100} />
            <span>Office</span>
          </div>
          <div className="flex flex-col items-center text-white">
          <Image src='/whitepen.png' alt="Office" className="w-12 h-12" width={100} height={100} />
            <span>Literary</span>
          </div>
          <div className="flex flex-col items-center text-white">
          <Image src='/ART.png' alt="Office" className="w-12 h-12 " width={100} height={100} />
            <span>Art</span>
          </div>
          <div className="flex flex-col items-center text-white">
          <Image src='/Developer.png' alt="Office" className="w-12 h-12" width={200} height={200} />
            <span>Web</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
