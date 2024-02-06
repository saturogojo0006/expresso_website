// import Image from "next/image";
import { Inter } from "next/font/google";
// import Home from "./Home";
import LandingPage from "./LandingPage";
import About from "./About";
<<<<<<< Updated upstream
import Team from "./Team";
=======
import Contact from "./Contact";
>>>>>>> Stashed changes
const inter = Inter({ subsets: ["latin"] });
<style>
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;700&family=Poppins&display=swap');
</style>

export default function Home() {
  return (
    <>
<<<<<<< Updated upstream
      {/* <Home /> */}
      {/* <LandingPage />
      <About /> */}
      <Team/>
      {/* <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Expresso Webte</h1>
      </main> */}
=======
      {/* <Home />
      <LandingPage />
      <About />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Expresso Website</h1>
        <Contact/>
      </main> */}
      <Contact/>
>>>>>>> Stashed changes
    </>
  );
}
