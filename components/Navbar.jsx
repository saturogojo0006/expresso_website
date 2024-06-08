import React, { useState } from 'react'
import Link from 'next/link';
const Navbar = () => {
  const [isnav, setIsnav] = useState(true);


  return <div className="bg-black resize w-screen max-w-screen ">
    <div className="text-white justify-center align-center lg:justify-start md:justify-start md:flex flex-end">
      <Link href="/"> <div className='text-white  mr-[100px] lg:mt-6 md:mt-5'><img src="/assets/logo.svg" alt="" />
      </div></Link>
      <div className="top-10 right-5 absolute md:hidden">
        <button
          onClick={() => setIsnav(!isnav)}
          className="text-white focus:outline-none focus:text-white"
        >
          {isnav ? (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            </svg>

          ) : (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 19.707a1 1 0 0 1-1.414-1.414L10.586 12 2.293 3.707a1 1 0 1 1 1.414-1.414L12 10.586l8.293-8.293a1 1 0 1 1 1.414 1.414L13.414 12l8.293 8.293a1 1 0 0 1-1.414 1.414L12 13.414l-8.293 8.293z"
              />
            </svg>
          )}
        </button>


      </div>
      <div className="hidden md:block lg:absolute top-0 right-0">
        <div className=' lg:visible md:visible'>
          <ul className="bg-cover bg-local  lg: h-[6.4rem]  flex flex-col md:flex-row lg:flex-auto mt-[0.25rem] max-w-[87.5rem] w-screen justify-end md:bg-[url('/nav.svg')] lg:md:bg-[url('/nav.svg')] md:w-full lg:w-[87.5rem]">
            <div className=' mr-8 flex flex-col md:flex-row lg:flex-row items-center text-black'>
              <li className="bg-[url(' /nav.svg')] md:bg-none"> <Link href="/" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>HOME</Link></li>
              <li> <Link href="/UpcomingEvent" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>EVENTS</Link></li>
              <li> <Link href="/Almuni" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>ALUMNI</Link></li>
              <li> <Link href="/Gallery" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>ART</Link></li>
              <li> <Link href="/" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>LITERARY</Link></li>

              <li><button
                type="button" href="/"
                className="text-black p-[0.125rem 0.5rem] p-2 h-[3.2rem] text-[1.25rem] w-[8.2rem] font-['Coluna'] font-extrabold mr-16 bg-[#F4B24E] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm text-center 2 dark:focus:ring-yellow-900 hover:border-[0.25rem] border-black "
              >
                Join Us
              </button></li>
            </div>


          </ul>
        </div>


      </div>

      {!isnav && (
        <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-90 z-50 flex justify-center items-center'>
          <button
            onClick={() => setIsnav(!isnav)}
            className="text-white focus:outline-none fixed top-10 right-10"
          >
            {isnav ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 19.707a1 1 0 0 1-1.414-1.414L10.586 12 2.293 3.707a1 1 0 1 1 1.414-1.414L12 10.586l8.293-8.293a1 1 0 1 1 1.414 1.414L13.414 12l8.293 8.293a1 1 0 0 1-1.414 1.414L12 13.414l-8.293 8.293z"
                />
              </svg>
            )}
          </button>
          <ul className='space-y-6'>
            {[
              { href: "/", text: "Home" },
              { href: "/Event", text: "Event" },
              { href: "/Alumni", text: "Alumni" },
              { href: "/Art", text: "Art" },
              { href: "/Literary", text: "Literary" }
            ].map((item, index) => (
              <li key={index} className="group relative">
                <Link href={item.href}>
                  <p className='nav-link font-semibold text-lg font-coluna m-2 transition duration-300 group-hover:text-yellow-700'>
                    {item.text}
                  </p>
                  <hr className='w-40 mt-1 border-t-2 border-gray-300 transition duration-300 transform group-hover:translate-x-2 group-hover:border-yellow-700' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div >


  </div >;
}

export default Navbar




{/*<div className="">
    <div className=" flex end-0 w-full  h-[200px]"> <nav className='bg-black w-screen flex h-[200px] justify-center'>
      <a href=""> <div className='text-white mr-[100px] mt-5'><img src="/assets/logo.svg" alt="" /></div></a>


=======
export default Navbar;

{
  /*<div className="">
    <div className=" flex end-0 w-full  h-[200px]"> <nav className='bg-black w-screen flex h-[200px] justify-center'>
      <a href=""> <div className='text-white mr-[100px] mt-5'><img src="/assets/logo.svg" alt="" /></div></a>


>>>>>>> 264d4c6a21d023815d9b3d81536d2e431da55dfb
      <ul className='bg-cover flex   mt-4  justify-end' style={upper}>
        <div className=' mr-8 flex items-center'>
          <a href="" className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'>HOME</a>
          <a href="" className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'>EVENTS</a>
          <a href="" className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'>ALUMNI</a>
          <a href="" className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'>ART</a>
          <a href="" className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'>LITERARY</a>
        </div>
        <button
          type="button"
          className="text-black text-[20px] w-[200px] pt-2 mt-2  font-['Coluna']  mr-16 bg-[#F4B24E] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" style={{ font: 'bold' }}
        >
          Join Us
        </button>

      </ul>



    </nav>

    </div>
*/}