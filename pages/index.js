import Image from "next/image";
import { Inter } from "next/font/google";
// import Home from "./Home";
import LandingPage from "./LandingPage";
import About from "./About";
import Professor from "./Professor";
import CarouselPage from "./CarouselPage";
// import Event from "./Event";
// import Team from "./Team";
// import Contact from "./Contact";
// import EventDesc from "./EventDesc";
// import EventFirstPage from "./EventFirstPage";
// import AllEventsPage from "./AllEventsPage";

// const inter = Inter({ subsets: ["latin"] });
// <style>
//   @import
//   url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;700&family=Poppins&display=swap');
// </style>;

export default function Home() {
  return (
    <>
      <div>
        <div className="responsive x-0 y-0 object-cover">
          <Image src="/HomePageBG.png" width={1530} height={860} />
        </div>
      </div>
      <div className="">
        <Professor />
      </div>
      <div className="m-2">
        <About />
      </div>
      <div>
        <CarouselPage/>
      </div>
      {/* <Home /> */}
      {/* <LandingPage />
      <About /> */}
      {/* <Team /> */}
      {/* <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Expresso Webte</h1>
      </main> */}
      {/* <Home /> */}
      {/* {/* <Home /> */}
      {/* <LandingPage /> */}
      {/* <About /> */}
      {/* <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Expresso Website</h1>
      </main> */}

      {/* <LandingPage /> */}

      {/* <Contact /> */}
      {/* <Event />
      <EventFirstPage />
      <AllEventsPage />
      <EventDesc
        event={{
          title: "EVENT-2",
          date: "11.10.2023",
          venue: "NEAR SAC",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          images: ["/eventPic.png", "/eventPic.png", "/eventPic.png"], // Array of image paths
        }}
      /> */}
    </>
  );
}
