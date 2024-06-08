import React from "react";
import Image from "next/image";

const ArtCard = ({ art }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
      <Image src={art.artImage} width={200} height={200} alt={art.artName} className="rounded-lg" />
      <h2 className="mt-4 text-xl font-bold text-white">{art.artName}</h2>
      <p className="mt-2 text-sm text-gray-400">{art.description}</p>
      <p className="mt-2 text-sm text-gray-400">by {art.artist}</p>
    </div>
  );
};

export default ArtCard;
