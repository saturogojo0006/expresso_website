import React, { useState, useEffect } from "react";
import Image from "next/image";

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Array of images for the carousel
  const images = [
    {
      id: 1,
      src: "https://drive.google.com/uc?export=view&id=1G1wuO0_7CyCNktulgECCEGOM4uRmMw-2",
    },
    {
      id: 2,
      src: "https://drive.google.com/uc?export=view&id=1jDBEUeW7JIy61DllGi7RocjWUzBESqtL",
    },
    {
      id: 3,
      src: "https://drive.google.com/uc?export=view&id=10W4HdBASxwh3gAtzVv0g6mQdTR1VDchb",
    },
    {
      id: 4,
      src: "https://drive.google.com/uc?export=view&id=1IDH1YmLi-I23mnAvIGiW_ii8RR_eCncr",
    },
    {
      id: 5,
      src: "https://drive.google.com/uc?export=view&id=10W4HdBASxwh3gAtzVv0g6mQdTR1VDchb",
    },
    {
      id: 6,
      src: "https://drive.google.com/uc?export=view&id=19WneNRuIINWf8v9vAHN4LGQ43jf56U9Y",
    },
    {
      id: 7,
      src: "https://drive.google.com/uc?export=view&id=1CKJcnMZvKQGQGQIfh2r2KgGNti0q7jrg",
    },
    {
      id: 8,
      src: "https://drive.google.com/uc?export=view&id=11ih-tQyMwvX9MhcWZdfj11qf1rKs6hHN",
    },
    {
      id: 9,
      src: "https://drive.google.com/uc?export=view&id=1P4ftux2rjE_VWrHQs4cycMMuQX7f9SFf",
    },
    {
      id: 10,
      src: "https://drive.google.com/uc?export=view&id=1NJeGeHXIKxzhaEJZpLYWlaiuhhKiZG_l",
    },
    {
      id: 11,
      src: "https://drive.google.com/uc?export=view&id=12QQDUz63xoOHYx5H-zLrO_CB4Csm3qzZ",
    },
    {
      id: 12,
      src: "https://drive.google.com/uc?export=view&id=1FpasbBTw28TRxCmAVI3MysocO8LIukHr",
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
        style={{ backgroundImage: `url('https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664966/expresso/event_n8qwxn.png')` }}
      >
        GALLERY{" "}
      </div>
      <div
        className="relative w-full h-[480px] sm:h-[640px] flex items-center justify-center bg-gray-900"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664966/expresso/event_n8qwxn.png')` }}
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
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664973/expresso/leftarrow-artdesc_s2ckx6.png"
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
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664973/expresso/leftarrow-artdesc_s2ckx6.png"
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
