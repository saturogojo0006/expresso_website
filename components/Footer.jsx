import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  // const [visits, setVisits] = useState(0);

  // useEffect(() => {
  //   const fetchVisits = async () => {
  //     const response = await fetch("/api/visit?url=home");
  //     const data = await response.json();
  //     setVisits(data.visits);
  //   };

  //   fetchVisits();
  //   console.log(visits);
  // }, []);
  return (
    <footer className="bg-gray-900 max-w-screen mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center mx-0">
        {/* Social Icons */}
        <div className="flex space-x-4 md:mb-0">
          <a href="https://www.instagram.com/expresso_nitp/" target="blank">
            <FaInstagram className="text-white w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.facebook.com/expresso.nitp/" target="blank">
            <FaFacebook className="text-white w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/expressonitp/"
            target="blank"
          >
            <FaLinkedin className="text-white w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="mailto:expressoclub@nitp.ac.in" target="blank">
            <IoIosMail className="text-white w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://maps.app.goo.gl/ochD6thH9G93RZJK8" target="blank">
            <SiGooglemaps className="text-white w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white text-sm font-semibold text-center md:text-left mt-4 mb-2 hover:underline">
          &copy; Expresso NIT Patna 2024
        </div>

        {/* Address and Logo */}
        <div className="flex items-center">
          <div className="text-white text-xs">
            <p className="mb-1 text-'Antonio'">
              Student Activity Centre (SAC), NIT Patna
            </p>
            <p>Ashok Rajpath, Patna, Bihar - 800005</p>
          </div>
          <div className="ml-4">
            <Link href="/" alt=":)">
              <Image src="/assets/logo.svg" alt="Logo" width={80} height={80} />
            </Link>
          </div>
        </div>
      </div>
      {/* <p className="text-white">Visits Number:{visits}</p> */}
    </footer>
  );
};

export default Footer;
