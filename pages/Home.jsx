import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div
      className="relative flex items-center justify-center h-[400px] p-4 sm:h-[600px] md:h-[700px] object-contain"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664989/expresso/HomePageBG_t6uqqf.png)` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664989/expresso/HomePageBG_t6uqqf.png)` }}
      ></div>

      <div className="relative flex items-center justify-center z-10">
        <Image
          src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664986/expresso/HomeBg2_ctpawj.png"
          width={960}
          height={660}
          className="relative z-10"
          alt="Background Image"
        />
        <div className="absolute flex items-center justify-center space-x-0 z-20">
          <Image
            src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719664976/expresso/HomeBgTxt_ogwyeu.png"
            width={800}
            height={900}
            className="z-20 mb-16"
            alt="Foreground Image 3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
