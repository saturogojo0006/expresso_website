import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [parentHeight, setParentHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
      if (window.innerWidth >= 600 && window.innerWidth < 800) {
        setParentHeight(780); // Adjust height for screens between 600px and 800px
      } else {
        setParentHeight(showFullDescription ? 700 : 380);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [showFullDescription]);

  useEffect(() => {
    setParentHeight(showFullDescription ? 300 : 280);
  }, [showFullDescription]);

  const handleReadMore = () => setShowFullDescription(true);
  const handleReadLess = () => setShowFullDescription(false);

  const fullText =
    "Expresso is the club where literature and art collide, creating a vibrant community for passionate students. It's a dynamic hub designed to nurture and showcase your talents, whether in crafting words or painting visuals. Immerse yourself in poetry slams, art workshops, and diverse events that provide a platform to discover and showcase your creative flair. Connect with a supportive community of fellow students, writers, and artists, leaving an indelible mark in this enchanting space. From diverse opportunities to skill development workshops, Espresso Club is more than a club – it's a journey of creative discovery. Contribute to the college's cultural tapestry, organize events, participate in campus initiatives, and make a lasting impression. Ready to embark on this creative odyssey? Sign up, become a member, and let your unique talents complete our Espresso Club mosaic. Join us, and let your creativity brew in the extraordinary blend of inspiration!";
  const shortText = fullText.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <div className="w-full flex flex-col items-center bg-black md:bg-white">

      <div className="flex flex-row justify-between gap-x-4 sm:gap-x-20 md:gap-x-80 lg:gap-x-80 items-center my-2 z-5">
        <div className="w-full sm:w-1/2 flex justify-center ">
          <Link href="/Literature">
            <button className="border-2 border-white rounded-3xl px-6 py-2 text-2xl sm:text-4xl lg:mr-80 bg-black text-white font-serif cursor-pointer">
              LITERATURE
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start z-5">
          <Link href="/Art">
            <button className="border-2 border-white rounded-3xl px-6 py-2 text-2xl sm:text-4xl bg-black text-white font-serif cursor-pointer">
              ART
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end w-full bg-black md:bg-black z-4">
        <div className="relative flex justify-center items-center bg-black md:bg-white w-full overflow-hidden object-contain" style={{ height: parentHeight }}>
          <Image
            src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664940/expresso/Group_319_ml1fvd.png"
            alt="Bus Image"
            width={1200}
            height={800}
            className="hidden sm:block object-contain"
            style={{}}
          />
          <Image
            src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664940/expresso/Group_320_uwpigl.png"
            alt="Bus Image"
            width={1200}
            height={800}
            className="block sm:hidden object-cover"
            style={{ scale: "98%" }}
          />
        </div>
      </div>

      <div className="relative bg-black md:bg-white w-full flex flex-col items-center">
        <div className="relative h-auto sm:h-120 bg-slate-900 px-12 pt-6 pb-3 mx-4 rounded-3xl my-3 text-white flex flex-col lg:flex-row items-start gap-x-6 justify-between lg:mx-20 lg:gap-x-16 lg:h-100">
          <div className="flex flex-col items-start">
            <span className="text-5xl mb-2 font-semibold text-orange-300">
              ABOUT
            </span>
            <span className="text-2xl font-futura hover:underline md:text-3xl">
              EXPRESSO
            </span>
          </div>
          <div className="mt-4 sm:mt-0 text-left md:text-xl">
            <p className="p-0 w-full">
              {isMobile && !showFullDescription ? shortText : fullText}
            </p>
            {isMobile && (
              <div className="text-center mt-4">
                {showFullDescription ? (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadLess}
                  >
                    Read Less
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadMore}
                  >
                    Read More
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
