import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div
      className="relative flex items-center justify-center h-[400px] p-4 sm:h-[600px] md:h-[700px] lg:h-[800px] object-contain"
      style={{ backgroundImage: `url(/HomeBg1.png)` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/HomeBg1.png)` }}
      ></div>

      <div className="relative flex items-center justify-center z-10">
        <Image
          src="/HomeBg2.png"
          width={960}
          height={660}
          className="relative z-10"
          alt="Background Image"
        />
        <div className="absolute flex items-center justify-center space-x-0 z-20">
          <Image
            src="/HomeBgTxt.png"
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
