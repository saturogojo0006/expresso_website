import React, { useState, useEffect } from "react";
import Image from "next/image";

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Array of images for the carousel
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678142/Gallery/IMG_0790_lbqit4.jpg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678137/Gallery/IMG_0791_ny4ntg.jpg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678132/Gallery/IMG_0792_eujzbl.jpg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678141/Gallery/IMG_0793_ph6ihx.jpg",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678132/Gallery/IMG_0792_eujzbl.jpg",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678139/Gallery/IMG_0794_i34yhl.jpg",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719679468/Gallery/DSC_0948_3_11zon_p5lpxh.jpg",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678133/Gallery/IMG_0796_wg5plx.jpg",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678160/Gallery/IMG_0786_upwn99.jpg",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678217/Gallery/DSC_0339_p0uyl5.jpg",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719679443/Gallery/_DSC0056_1_11zon_etimct.jpg",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719679339/Gallery/DSC_0478_1_11zon_bjv6a3.jpg",
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678134/Gallery/IMG_0795_pqa2uc.jpg",
    },
  ];

  // Function to handle next slide
  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newIndex);
  };

  // Start the interval when component mounts
  useEffect(() => {
    const id = setInterval(nextSlide, 3000); // Auto change slide every 2 seconds
    setIntervalId(id);

    return () => {
      clearInterval(intervalId); // Clean up on component unmount
    };
  }, [currentSlide]); // Re-run effect when currentSlide changes

  // Stop auto changing on mouse enter
  //   const handleMouseEnter = () => {
  //     clearInterval(intervalId);
  //   };

  // Resume auto changing on mouse leave
  //   const handleMouseLeave = () => {
  //     const id = setInterval(nextSlide, 3000);
  //     setIntervalId(id);
  //   };

  return (
    <>
      <div
        className={`text-[20vw] sm:text-[8vw] relative z-10 font-antonio text-center bg-black text-white`}
        style={{ backgroundImage: `url('https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748547/event_n8qwxn_hsmjg7.png')` }}
      >
        GALLERY{" "}
      </div>
      <div
        className="relative w-full h-[480px] sm:h-[640px] flex items-center justify-center bg-gray-900"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748547/event_n8qwxn_hsmjg7.png')` }}
      >
        <div
          className="relative w-[90%] m-2 h-96 lg:h-[620px] overflow-hidden shadow-lg rounded-lg"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full h-full flex">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute top-0 left-0 w-full h-full transform transition-transform ${
                  index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-2  text-white rounded-full p-2"
            onClick={prevSlide}
          >
            <Image
              src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748603/leftarrow-artdesc_s2ckx6_drmkfn.png"
              width={20}
              height={20}
              alt="leftarrow"
            />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white rounded-full p-2"
            onClick={nextSlide}
          >
            <Image
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664945/expresso/rightarrow-artdesc_yckiew.png"
              width={20}
              height={20}
              alt="rightarrow"
            />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-12 h-1 rounded-md   focus:outline-none ${
                  index === currentSlide ? "bg-[#ffa723]" : "bg-yellow-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
