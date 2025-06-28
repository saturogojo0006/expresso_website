import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div
      className="relative flex items-center justify-center h-[400px] p-4 sm:h-[600px] md:h-[700px] object-contain"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748598/HomePageBG_t6uqqf_oxizue.png)` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748598/HomePageBG_t6uqqf_oxizue.png)` }}
      ></div>

      <div className="relative flex items-center justify-center z-10">
        <Image
          src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748579/HomeBg2_ctpawj_qku31v.png"
          width={960}
          height={660}
          className="relative z-10"
          alt="Background Image"
        />
        <div className="absolute flex items-center justify-center space-x-0 z-20">
          <Image
            src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748581/HomeBgTxt_ogwyeu_remmtb.png"
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
