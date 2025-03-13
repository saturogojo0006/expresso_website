import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Changed the import for FaTwitter
import Image from "next/image";

const AlumniCard = ({ member }) => {
  return (
    <div
      style={{
        width: "210px",
        height: "260px",
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
      {/* <div className="mt-0 mb-2 text-sm text-right font-Antonio">
          <h3>{member.branch}</h3>
        </div> */}
      <div className="text-center">
        <h2 className="mt-2 text-xl font-semibold font-Antonio">
          {member.name}
        </h2>
        <div className="mt-1 font-semibold mb-4 text-lg font-Antonio">
          <h3>{member.branch}</h3>
        </div>
        <div className="flex justify-center items-center space-between space-x-10 cursor-pointer">
          {member.instagram && (
            <a
              href={member.instagram}
              className="text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <FaTwitter />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
