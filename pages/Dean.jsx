import styles from "./Professor.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Professor() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [parentHeight, setParentHeight] = useState(500); // Initial height

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Update the height of Parent3 when showFullDescription changes
    if (showFullDescription) {
      setParentHeight(700); // Auto height when full description is shown
    } else {
      setParentHeight(380); // Default height when full description is not shown
    }
  }, [showFullDescription]);

  const handleReadMore = () => {
    setShowFullDescription(true);
  };

  const handleReadLess = () => {
    setShowFullDescription(false);
  };

  const fullText = `Dear Creative Souls,

    It gives me great pleasure to welcome you to the Expresso-The Literary and Art Club NIT Patna; a hub of creativity and imagination.
    I am delighted to introduce you to a world where literature and art blend seamlessly to spark innovation and expression.
    Our club thrives on the unique voices and perspectives each member brings, where every story matters and every stroke of art conveys something extraordinary. Whether you’re a writer, an artist, or someone who loves to explore the intersection of words and visuals, we’re excited to have you as part of our journey.
    Together, let’s make this a space where ideas flow freely, inspiration abounds, and creativity knows no bounds. Thank you for being an integral part of this wonderful community.

    Warm regards,
    Dr. Subodh Srivastava
    Associate Dean (SW)
    NIT Patna 
    Bihta campus`;

  const fullTextWithLineBreaks = fullText.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line.trim()}
      <br />
    </React.Fragment>
  ));

  const shortText = fullText.split(" ").slice(0, 120).join(" ") + "...";

  return (
    <>
      <div className="bg-black p-0 m-0 min-h-[400px] flex flex-col gap-y-4 justify-center w-full md:bg-[url('https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664949/expresso/profbg_vptvyp.png')] md:bg-cover">
        <div className="flex flex-col items-center lg:justify-start lg:items-start lg:ml-40 lg:z-10">
          <div className="text-white flex flex-row items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664975/expresso/Letter_q0gqv7.png"
              width={44}
              height={140}
              alt="msg-image"
            />
            <span className="font-antonio text-xl md:text-[46px] ">
              MESSAGE FROM OUR
            </span>
          </div>

          <div className="text-[#FEB952] text-xl mt-[-50px] md:text-[46px] md:mt-[-10px] leading-tight">
            ASSOCIATE DEAN (SW)
          </div>
          <div className="font-antonio text-md  text-gray-200 md:text-[30px] md:pt-4 ">
          NIT PATNA BIHTA CAMPUS
          </div>
        </div>

        <div className="flex flex-row justify-center items-center relative lg:mt-[-9.5%] lg:ml-[70%] lg:z-10">
          <span>
            <Image
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1734656125/expresso/Subodh_Sir_vqwpl8.png"
              width={240}
              height={230}
              alt="Professor Image"
            />
          </span>
          <span className="hidden absolute right-0 top-1/2 transform -translate-y-1/2 mr-24 md:mr-64 lg:mr-28">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </a>
          </span>
        </div>

        <div className="text-sm text-white m-4 p-4 overflow-auto lg:mx-36 lg:text-lg lg:backdrop-filter lg:backdrop-blur-md lg:mt-[-15%] lg:z-8 lg:pt-32 lg:rounded-md">
          <p>
            {isMobile && !showFullDescription
              ? shortText
              : fullTextWithLineBreaks}
          </p>
          {isMobile &&
            (showFullDescription ? (
              <span
                className={`read-less cursor-pointer underline ${styles.readLess}`}
                onClick={handleReadLess}
              >
                Read Less
              </span>
            ) : (
              <span
                className={`read-more cursor-pointer underline ${styles.readMore}`}
                onClick={handleReadMore}
              >
                Read More
              </span>
            ))}
        </div>
      </div>
    </>
  );
}

export default Professor;
