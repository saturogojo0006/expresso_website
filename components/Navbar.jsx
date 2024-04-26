const Navbar = () => {
  return (
    <>
      <div className="bg-black resize w-screen max-w-screen ">
        <div className="text-white flex flex-end">
          <a href="">
            {" "}
            <div className="text-white mr-[100px] mt-5">
              <img src="/assets/logo.svg" alt="" />
            </div>
          </a>

          <div className="absolute top-0 right-0">
            <ul className="bg-cover bg-local  flex  mt-[0.25rem] max-w-[87.5rem] w-screen justify-end bg-[url('/nav.svg')] lg:w-[87.5rem]">
              <div className=" mr-8 flex items-center text-black">
                <a
                  href=""
                  className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                >
                  HOME
                </a>
                <a
                  href=""
                  className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                >
                  EVENTS
                </a>
                <a
                  href=""
                  className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                >
                  ALUMNI
                </a>
                <a
                  href=""
                  className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                >
                  ART
                </a>
                <a
                  href=""
                  className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                >
                  LITERARY
                </a>
              </div>
              <button
                type="button"
                className="text-black text-[1.25rem] w-[12.5rem] pt-2 mt-2  font-['Coluna']  mr-16 bg-[#F4B24E] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:border-[0.25rem] border-black"
                style={{ font: "bold" }}
              >
                Join Us
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD




  return <div className="bg-black resize w-screen max-w-screen ">
    <div className="text-white flex flex-end">
      <a href=""> <div className='text-white mr-[100px] mt-5'><img src="/assets/logo.svg" alt="" /></div></a>


      <div className="absolute top-0 right-0">
        <ul className="bg-cover bg-local  flex  mt-[0.25rem] max-w-[87.5rem] w-screen justify-end bg-[url('/nav.svg')] lg:w-[87.5rem]">
          <div className=' mr-8 flex items-center text-black'>
            <a href="" className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>HOME</a>
            <a href="" className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>EVENTS</a>
            <a href="" className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>ALUMNI</a>
            <a href="" className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>ART</a>
            <a href="" className=' font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'>LITERARY</a>
          </div>
          <button
            type="button"
            className="text-black text-[1.25rem] w-[12.5rem] pt-2 mt-2  font-['Coluna']  mr-16 bg-[#F4B24E] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:border-[0.25rem] border-black" style={{ font: 'bold' }}
          >
            Join Us
          </button>

        </ul>
      </div>
    </div>
  </div >;
};

export default Navbar;


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
<<<<<<< HEAD
  </div>;*/}
=======
  </div>;*/
}
>>>>>>> 264d4c6a21d023815d9b3d81536d2e431da55dfb
