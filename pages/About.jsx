import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./About.module.css"; // Ensure this import is correct
import Link from "next/link";
const About = () => {
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

  const fullText =
    "Expresso is the club where literature and art collide, creating a vibrant community for passionate students. It's a dynamic hub designed to nurture and showcase your talents, whether in crafting words or painting visuals. Immerse yourself in poetry slams, art workshops, and diverse events that provide a platform to discover and showcase your creative flair. Connect with a supportive community of fellow students, writers, and artists, leaving an indelible mark in this enchanting space. From diverse opportunities to skill development workshops, Espresso Club is more than a club – it's a journey of creative discovery. Contribute to the college's cultural tapestry, organize events, participate in campus initiatives, and make a lasting impression. Ready to embark on this creative odyssey? Sign up, become a member, and let your unique talents complete our Espresso Club mosaic. Join us, and let your creativity brew in the extraordinary blend of inspiration!";
  const shortText = fullText.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <>
      <div className="parent">
        <div
          className={`flex flex-col sm:flex-row justify-center items-center ${styles.parent2}`}
        >
          <div className="flex-row w-full sm:w-1/2 pl-8 sm:flex-col">
            <Link href="/Literature">
              <button
                className={`border-4 border-black rounded-3xl mx-4 sm:mx-60 px-6 sm:px-10 py-2 text-2xl sm:text-4xl bg-black text-white font-serif hover:border-4 hover:border-red-500 ${styles.literature}`}
              >
                LITERATURE
              </button>
            </Link>
          </div>
          <div className="flex-row w-full sm:w-1/2 border-black pl-4 mt-4 sm:mt-0">
            <Link href="/Art">
              <button
                className={`border-4 border-black rounded-3xl mx-4 sm:mx-80 px-6 sm:px-24 py-2 text-2xl sm:text-4xl bg-gray-200 hover:bg-gray-300 hover:scale-110 font-serif ${styles.art}`}
              >
                ART
              </button>
            </Link>
          </div>
        </div>
        <hr className="my-4" />
        <div
          className={`flex justify-center sm:justify-end mt-1 image-wrapper ${styles.img_wrp}`}
        >
          <Image
            src="/Group 319.png"
            alt="Bus Image"
            width={1200}
            height={800}
            className={`mx-24 object-contain p-1 ${styles.bg_img}`}
            style={{ marginTop: "-120px" }}
          />
          <Image
            src="/Group 320.png"
            alt="Bus Image"
            width={1200}
            height={800}
            className={`p-1 ${styles.bg_img2}`}
            // style={{ marginTop: "-120px" }}
          />
        </div>
        <div className={styles.parent3} style={{ height: parentHeight }}>
          <div
            className={`relative h-auto sm:h-96 mt-[-100px] about-section ${styles.description}`}
          >
            <div className="w-40 h-48 bg-orange-300 rounded-full mx-auto sm:ml-7 "></div>
            <div
              className={`absolute top-8 bg-slate-900 px-12 pt-6 pb-3 mx-6 rounded-3xl my-3 text-white flex flex-col sm:flex-row items-start gap-x-8 justify-between ${styles.bgclr}`}
            >
              <div className={`flex flex-col items-center sm:items-start  `}>
                <span className="text-5xl mb-2 font-semibold text-orange-300 hover:underline">
                  ABOUT
                </span>
                <span className="text-2xl font-futura hover:underline">
                  EXPRESSO
                </span>
              </div>
              <div className="mt-4 sm:mt-0 text-center sm:text-left">
                <p className={styles.para}>
                  {isMobile && !showFullDescription ? shortText : fullText}
                </p>
                {isMobile &&
                  (showFullDescription ? (
                    <span
                      className={`read-less ${styles.readLess}`}
                      onClick={handleReadLess}
                    >
                      Read Less
                    </span>
                  ) : (
                    <span
                      className={`read-more ${styles.readMore}`}
                      onClick={handleReadMore}
                    >
                      Read More
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
