// import Image from "next/image";
import { Inter } from "next/font/google";
// import Home from "./Home";
import LandingPage from "./LandingPage";
import About from "./About";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Home /> */}
      <LandingPage />
      <About />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Expresso Website</h1>
      </main>
    </>
  );
}
