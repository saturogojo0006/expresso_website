import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import Home from "../pages/Home";
const Layout = ({ children, metadata }) => {
  return (
    <>
      <Head>
        <title>Expresso Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Expresso is the club where literature and art collide, creating a vibrant community "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <div className=" ">
        <div className=" sm:w-48 ">
          <Navbar />
        </div>
        {/* <Home /> */}
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
