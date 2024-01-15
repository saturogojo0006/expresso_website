import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Expresso Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <div className=" ">
        <div className="pb-12 sm:w-48 ">
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
