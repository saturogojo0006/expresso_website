import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import Image from "next/image";
const Contact = () => {
  return (
    <>
     <div className="bg-black flex flex-col ">
    <div className="flex w-full bg-black">
        <div className="w-[1200px]  object-cover">
          <Image src='/treeup1.png' width={1200} height={300} alt="image" />
        </div>
        <div className="w-[1000px]  object-fit">
          <Image src='/treeup2.png' width={1000} height={300} alt="image" />
        </div>

        </div>

        {/* Contact Form */}
        <div className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-5/12 sm:pl-2 pr-6 pt-8">
              <Image src='/contactus.png' width={500} height={480} alt="image" className=""/>
          </div>
          <div className="ml-6 sm:w-7/12 flex flex-col">
            {/* Content */}
            <div className="flex-col w-[840px] space-y-4 sm:mb-2">
            <div className=" font-antonio mt-4">
              <p className="text-white font-bold  text-5xl sm:text-8xl align-top">CONNECT TO US</p>
            </div>
            <div className="font-antonio font-thin w-[569px] h-[91px] ">
              <p className="text-white text-3xl sm:text-6xl align-top pb-4">TO KNOW MORE</p>
            </div>
          </div>
          <div className="sm:mt-2">
           <form className=" rounded-md sm:py-2 shadow-lg">
    <div class=" flex flex-col sm:grid grid-cols-2">
      <div class="flex flex-col pb-6 sm:-pb-0">
        <label for="first-name" class="mb-2 font-medium text-[16px] text-[#ffffff]">FIRST NAME</label>
        <input type="text" id="first-name" class="w-1/2 border-b-2 text-[16px]  border-[#B6B6B682] focus:border-blue-500 outline-none bg-black text-[#ffffff] " placeholder="Literature"/>
      </div>
      <div class="flex flex-col pb-8 sm:-pb-0">
        <label for="last-name" class="mb-2 text-[16px]  font-medium text-[#ffffff]">LAST NAME</label>
        <input type="text" id="last-name" class="w-1/2 text-[16px]  border-b-2 border-[#B6B6B682] focus:border-blue-500 outline-none bg-black text-[#ffffff]" placeholder="Art"/>
      </div>
    </div>
    <div class=" flex flex-col sm:grid grid-cols-2 mb-4">
    <div class="flex flex-col pb-8" >
        <label for="first-name" class="mb-2 text-[16px]  font-medium text-[#ffffff]">EMAIL</label>
        <input type="text" id="first-name" class=" focus:border-blue-500 outline-none bg-black text-[16px]  text-white border-b-2 border-[#B6B6B682] w-1/2" placeholder="expresso@nitp.ac.in" />
      </div>
      <div className="flex flex-col">
        <label for="last-name" class="mb-2 text-[16px]  font-medium text-[#ffffff]">PHONE</label>
        <input type="text" id="last-name" class=" border-b-2 text-[16px] border-[#B6B6B682] focus:border-blue-500 outline-none bg-black text-[#ffffff] w-1/2" placeholder="+91"/>
      </div>
      </div>
       <div className="flex flex-col  gap-2 pb-4">
        <label for="message" className="text-[rgb(255,255,255)] text-[16px] sm:text-[32px]">Leave a message :</label>
        <div className=" bg-black w-3/4 sm:w-1/2">
          <textarea name="" id="message" cols="100" rows="6" className="w-[100%] rounded-xl text-[12px] border-2 bg-black text-[#ffffff]  sm:letter-spacing:[2px] text-xl" >
            </textarea></div>
      </div> 
              </form>
          </div>
          <div className="flex justify-start space-x-8 mb-8 ">
            <button className="rounded-3xl border-white border-2 text-[10px] w-[100px] h-[35px]  text-white hover:bg-[#FFBC58] p-2  sm:w-[135px] h-[45px] text-[16px]">REGISTER</button>
            <button className="rounded-3xl border-white border-2 text-[10px] w-[100px] h-[35px]  text-white hover:bg-[#FFBC58] p-2 sm:w-[135px] h-[45px] text-[16px]] "> RESET</button>
          </div>
          <div className="text-white flex space-x-4  mb-4 mt-2 w-[230px]">
            <div><FaInstagram size={30} /></div>
            <div><FaFacebook size={30} /></div>
            <div><FaLinkedin size={30} /></div>
            <div><IoIosMail size={30} /></div>
            <div><SiGooglemaps size={30} /></div>
          </div>
        </div>
          </div>
        {/* Footer Images */}
        <div className="flex w-full bg-black bg-cover bg-center bg-no-repeat bg-[url('/treebottom.png')]">
        <div className="w-[1200px]  object-fit bg-cover bg-center">
          <Image src='/treebottom.png' width={1200} height={200} alt="image" />
        </div>
        <div className="w-[1000px]  object-fit">
          <Image src='/tornpaper2.png' width={1000} height={200} alt="image" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
