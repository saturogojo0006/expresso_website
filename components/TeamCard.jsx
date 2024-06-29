import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Changed the import for FaTwitter
import Image from "next/image";

const TeamCard = ({ member }) => {
  return (
    <div
      className=""
      style={{
        width: "210px",
        height: "275px",
        borderRight: "10px solid #000",
        borderBottom: "10px solid #000",
        backgroundColor: "white",
        padding: "16px",
      }}
    >
      <div className="ml-8 flex items-center justify-center w-24 h-24">
        <Image
          height={200}
          src={member.image}
          width={200}
          alt={member.name}
          className="object-cover rounded-full w-24 h-24"
        />
      </div>
      <div className="mt-0 mb-2 text-sm text-right font-Antonio">
        <h3>{member.branch}</h3>
      </div>
      <div className="text-center justify-evenly ">
        <h2 className="text-xl font-normal font-Antonio">{member.name}</h2>
        <p className="text-lg mb-4 font-Antonio">{member.position}</p>
        <div className="flex justify-center items-center space-between space-x-10 cursor-pointer">
          <a
            href={member.instagram}
            className="text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href={member.linkedin}
            className="text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
