import React, { useState } from 'react'
import Link from 'next/link';
const Navbar = () => {
  const [isnav, setIsnav] = useState(true);


  return <div className="bg-black resize w-screen max-w-screen ">
    <div className="text-white flex flex-end">
      <a href="/"> <div className='text-white mr-[100px]  mt-5'><img src="/assets/logo.svg" alt="" /></div></a>
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
          <ul className="bg-cover bg-local  lg: h-[6.4rem]  flex flex-col md:flex-row lg:flex-auto mt-[0.25rem] max-w-[87.5rem] w-screen justify-end md:bg-[url('/nav.svg')] lg:md:bg-[url('/nav.svg')] lg:w-[87.5rem]">
            <div className=' mr-8 flex flex-col md:flex-row lg:flex-row items-center text-black'>
              <li className="bg-[url(' /nav.svg')] md:bg-none"> <a href="/" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>HOME</a></li>
              <li> <a href="/Event" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>EVENTS</a></li>
              <li> <a href="/Almuni" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>ALUMNI</a></li>
              <li> <a href="/Gallery" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>ART</a></li>
              <li> <a href="/" className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>LITERARY</a></li>

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

      <center>{!isnav && (
        <>
          <ul className='md:hidden m-[10rem] flex flex-col'>
            <li>
              <Link href="/">
                <p className="nav-link">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/Event">
                <p className="nav-link">Events</p>
              </Link>
            </li>
            <li>
              <Link href="/Alumini">
                <p className="nav-link">Alumni</p>
              </Link>
            </li>
            <li>
              <Link href="/Gallery">
                <p className="nav-link">Art</p>
              </Link>
            </li>
            <li>
              <Link href="/Team">
                <p className="nav-link">Literary</p>
              </Link>
            </li>
            <li>
              <Link href="/section">
                <p className="nav-link">Section</p>
              </Link>
            </li>
          </ul>
        </>
      )
      }</center>

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