import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const ArtCard = ({ art, openOverlay }) => {
  return (
    <div className="flex flex-col items-center p-1 bg-transparent rounded-xl shadow-lg border-2 border-white w-60 h-90 backdrop-filter backdrop-blur-md">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="flex flex-col col-span-1 md:col-span-8/10 bg-transparent items-start">
          <div className="text-xl font-bold text-center text-white font-antonio">
            {art.artName}
          </div>
          <div className="text-[10] text-left text-white font-antonio mt-2">
            {art.medium}
          </div>
        </div>
        <div className="flex flex-col col-span-1 items-center text-bold md:col-span-2/10 bg-transparent border-white border-l-4 border-b-4 m-0 p-0.5 text-black">
          <div className="mb-1">
            <Image
              src={art.artistImage}
              width={65}
              height={80}
              alt={art.artist}
            />
          </div>
          <div className="flex flex-col items-center font-bold text-white text-center text-[10px] font-sans">
            <span>{art.artist}</span>
            <div className="flex">
              <a href={art.instagram} target="_blank" className="mx-1">
                <FaInstagram className="text-white m-0.5 align-middle w-3 h-5 hover:cursor-pointer" />
              </a>
              <a href={art.linkedin} target="_blank" className="mx-1">
                <FaLinkedin className="text-white m-0.5 align-middle w-3 h-5 hover:cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-2 cursor-pointer" onClick={() => openOverlay(art)}>
        <Image src={art.artImage} width={240} height={250} alt={art.artName} />
      </div>
      <div className="text-white text-sm font-sans mt-2">{art.description}</div>
    </div>
  );
};

export default ArtCard;
