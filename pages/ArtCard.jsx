import React from "react";
import Image from "next/image";
import {FaInstagram, FaLinkedin } from 'react-icons/fa';


// const ArtCard = ({ art }) => {
//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
//       <Image src={art.artImage} width={200} height={200} alt={art.artName} className="rounded-lg" />
//       <h2 className="mt-4 text-xl font-bold text-white">{art.artName}</h2>
//       <p className="mt-2 text-sm text-gray-400">{art.description}</p>
//       <p className="mt-2 text-sm text-gray-400">by {art.artist}</p>
//     </div>
//   );
// };

const ArtCard = ({ art }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-black rounded-xl shadow-lg border-2 border-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col col-span-1 md:col-span-8/10 bg-black items-start">
          <div className="text-3xl text-center text-white font-antonio">
            {art.artName}
          </div>
          <div className="text-sm text-left text-white font-antonio mt-2">
            {art.medium}
          </div>
        </div>
        <div className="col-span-1 md:col-span-2/10 bg-black border-yellow-500 border-l-4 border-b-4 m-0 p-0.5 text-white">
          <div className="border-2 border-white mb-1">
            <Image src={art.artistImage} width={70} height={90} />
          </div>
          <div className=" flex flex-shrink text-white justify-between text-center text-sm font-sans">{art.artist}<div>
              <a href={art.instagram} target="blank"><FaInstagram className="text-white m-0.5 align-middle w-2 h-2 md:w-4 md:h-4 hover:cursor-pointer" /></a>
            </div>
            <div>
              <a href={art.linkedin} target="blank">
                <FaLinkedin className="text-white text-center justify-center m-0.5 align-middle w-2 h-2 md:w-4 md:h-4 hover:cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-2">
           <Image src = {art.artImage}
                  width={250}
                  height={280}
           />
      </div>
      <div className="text-white text-sm font-sans">
            {art.description} ;
      </div>

    </div>
  );
};

export default ArtCard;
