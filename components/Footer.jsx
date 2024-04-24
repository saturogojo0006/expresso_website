import React from "react";

const Footer = () => {
  return <div>
    <footer className="flex bg-[#0C0C0C] max-w-[1631px] w-screen">
      <div className='bg-[#0C0C0C] h-20 '>
        <div className='flex flex-center  justify-between ml-[200px] p-4 w-full'>
          <div className='flex space-x-4 mr-9'>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Facebook.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
          </div>

          <div className='text-white text-xs font-["Antoino"] ml-5'>
            &copy; Expresso NIT Patna 2024
          </div>

          <div className="bottom-0 right-0 relative">
            <div className="flex ">
              <div className="text-white flex flex-col m-3 ">
                <p className="text-antinoregular text-[13.82px] mb-1">Student Activity Centre (SAC), NIT Patna</p>
                <p className="text-antinoregular text-[13.82px]">Ashok Rajpath, Patna, Bihar - 800005</p>

              </div>
              <img src="/assets/logo.svg" alt="Logo" className=" w-11 h-[52.23px]  " />
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>

    </footer>
  </div>;
};

export default Footer;
