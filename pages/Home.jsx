import React from "react";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="responsive x-0 y-0 object-cover">
        <Image src="/HomePageBG.png" width={1530} height={860} />
      </div>
    </>
  );
}
export default Home;
