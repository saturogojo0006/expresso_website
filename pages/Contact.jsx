import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import Image from "next/image";

const Contact = () => {
  return (
<>
 <div className="bg-black flex flex-col mx-10 ml-4">
    <div className="flex w-full bg-black">
        <div className="w-[1200px]  object-cover">
          <Image src='/treeup1.png' width={1200} height={300} alt="image" />
        </div>
        <div className="w-[1000px]  object-fit">
          <Image src='/treeup2.png' width={1000} height={300} alt="image" />
        </div>
        </div>
      <div className="flex w-full">
        <div className="w-5/12 pl-2 pr-6">
          <div className="w-[700px] h-[800px] object-cover">
            <Image src='/contactus.png' width={900} height={1500} alt="image" />
          </div>
        </div>
        <div className="ml-6 w-7/12 flex flex-col">
          <div className="flex-col w-[840px] space-y-4 mb-6">
            <div className="w-[649px] h-[140px] font-antonio mt-12">
              <p className="text-white font-bold text-[110px] align-top">CONNECT TO US</p>
            </div>
            <div className="font-antonio w-[569px] h-[91px] ">
              <p className="text-white font-thin text-[70px] align-top pb-6">TO KNOW MORE</p>
            </div>
          </div>
          <div className="mt-12">
           <form className=" rounded-md py-4 shadow-lg">
    <div class="grid grid-cols-2">
      <div class="flex flex-col pb-8">
        <label for="first-name" class="mb-2 text-sm font-medium text-[16px] text-[#ffffff]">FIRST NAME</label>
        <input type="text" id="first-name" class="w-1/2 border-b-2 text-[16px]  border-[#B6B6B682] focus:border-blue-500 outline-none bg-black text-[#ffffff] " placeholder="Literature"/>
      </div>
      <div class="flex flex-col pb-8">
        <label for="last-name" class="mb-2 text-[16px]  font-medium text-[#ffffff]">LAST NAME</label>
        <input type="text" id="last-name" class="w-1/2 text-[16px]  border-b-2 border-[#B6B6B682] focus:border-blue-500 outline-none bg-black text-[#ffffff]" placeholder="Art"/>
      </div>
    </div>
    <div class="grid grid-cols-2 mb-8">
    <div class="flex flex-col" >
        <label for="first-name" class="mb-2 text-[16px]  font-medium text-[#ffffff]">EMAIL</label>
        <input type="text" id="first-name" class=" focus:border-blue-500 outline-none bg-black text-[16px]  text-white border-b-2 border-[#B6B6B682] w-1/2" placeholder="expresso@nitp.ac.in" />
      </div>
      <div class="flex flex-col">
        <label for="last-name" class="mb-2 text-[16px]  font-medium text-[#ffffff]">PHONE</label>
        <input type="text" id="last-name" class=" border-b-2 text-[16px] border-[#B6B6B682] focus:border-blue-500 outline-none bg-black text-[#ffffff] w-1/2" placeholder="+91"/>
      </div>
      </div>
              </form>
          </div>
          <div className="flex justify-start space-x-8 mb-8 ">
            <button className="rounded-3xl border-white border-2 text-[16px]  text-white hover:bg-[#FFBC58] p-2 w-[135px] h-[45px] ">REGISTER</button>
            <button className="rounded-3xl border-white border-2 text-[16px]  text-white hover:bg-[#FFBC58] p-2 w-[135px] h-[45px] "> RESET</button>
          </div>
          <div className="text-white flex space-x-4 pb-8 mb-6 mt-14 w-[230px]">
            <div><FaInstagram size={30} /></div>
            <div><FaFacebook size={30} /></div>
            <div><FaLinkedin size={30} /></div>
            <div><IoIosMail size={30} /></div>
            <div><SiGooglemaps size={30} /></div>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-black bg-cover bg-center bg-no-repeat bg-[url('/treebottom.png')]">
        <div className="w-[1200px]  object-fit bg-cover bg-center">
          <Image src='/treebottom.png' width={1200} height={300} alt="image" />
        </div>
        <div className="w-[1000px]  object-fit">
          <Image src='/tornpaper2.png' width={1000} height={300} alt="image" />
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Contact;
