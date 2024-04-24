const Navbar = () => {
  const upper = {
    backgroundImage: 'url("/nav.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "72px",
    width: "1500px", // Adjust the height as needed
    // Add other styles as needed
  };

  return (
    <div>
      <div>
        {" "}
        <nav className="bg-black w-[2200px] flex h-[200px] justify-center">
          <a href="">
            {" "}
            <div className="text-white mr-[100px] mt-5">
              <img src="/assets/logo.svg" alt="" />
            </div>
          </a>

          <ul className="bg-cover flex   mt-4  justify-end" style={upper}>
            <div className=" mr-8 flex items-center">
              <a
                href=""
                className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'
              >
                HOME
              </a>
              <a
                href=""
                className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'
              >
                EVENTS
              </a>
              <a
                href=""
                className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'
              >
                ALUMNI
              </a>
              <a
                href=""
                className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'
              >
                ART
              </a>
              <a
                href=""
                className='text-[15px] font-["Coluna"] p-2 m-[30px] font-semibold  rounded hover:rounded-full hover:border-4 border-black hover:font-extrabold'
              >
                LITERARY
              </a>
            </div>
            <button
              type="button"
              className="text-black text-[20px] w-[200px] pt-2 mt-2  font-['Coluna']  mr-16 bg-[#F4B24E] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
              style={{ font: "bold" }}
            >
              Join Us
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
