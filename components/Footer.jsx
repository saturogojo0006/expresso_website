import React from "react";

const Footer = () => {
  return <div>
    <footer className="flex bg-[#0C0C0C]">
      <div className='bg-[#0C0C0C] h-20 w-full'>
        <div className='flex items-center justify-between p-4'>
          <div className='flex space-x-4'>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Facebook.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
            <a href='https://instagram.com' className='text-white'><img src='/assets/Instagram.svg' alt='Instagram' /></a>
          </div>

          <div className='text-white text-xs font-["Antoino"] ml-5'>
            &copy; Expresso NIT Patna 2024
          </div>

          <div className="text-white flex flex-col">
            <p className="text-antinoregular text-[13.82px] mb-1">Student Activity Centre (SAC), NIT Patna</p>
            <p className="text-antinoregular text-[13.82px]">Ashok Rajpath, Patna, Bihar - 800005</p>
          </div>
        </div>
      </div>
      <img src="/assets/logo.svg" alt="Logo" className="h-12 w-auto m-4" />
    </footer>
  </div>;
};

export default Footer;
