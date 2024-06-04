import React from "react";
import Image from 'next/image';
// import bus from "../public/contactus.png";
// import artblackbg from "../About Us Photos/art_img.png"
import image from "../About Us Photos/Group 316.png"
const About = () => {
  return (
    <>
      <div>
        <div className='flex'>      
          <div className='flex-row   w-1/2 pl-8'>
            <button className="border-4 border-black rounded-3xl mx-60 px-10 py-2 text-4xl bg-zinc-900 text-white hover:bg-zinc-700 hover:scale-110 font-serif">LITERATURE</button>
           {/* <img src="" className="h-full w-full" alt=""/> */}
          </div>
          <div  className='flex-row   w-1/2  border-black pl-4'>
          <button className="border-4 border-black rounded-3xl mx-80 px-24 py-2 text-4xl bg-gray-200 hover:bg-gray-300 hover:scale-110 font-serif">ART</button>
          </div>
        </div>
          <hr/>
          <div className="flex justify-end mt-1">
  {/* <div className="border-4 border-black relative"> */}
    <Image
      src={image}
      alt="Bus Image"
      width={1200} // Adjust the width as needed
      height={800} // Adjust the height as needed
      className="p-1 m-0"
      style={{ marginTop: "-120px"}}
      styleb={{ marginBottom: "-50px" }}
    />
  </div>
{/* </div> */}


        <div className="relative h-96 mt-[-100px]  ">
          <div className="w-40 h-48 bg-orange-300 rounded-full ml-7"></div>

          <div className="absolute mb-20 top-8 bg-slate-900 px-12 pt-6 pb-3 mx-6 rounded-3xl my-3 text-white flex items-start gap-x-8 justify-between">
            <div className="flex flex-col">
              <span className="text-5xl mb-2 font-semibold text-orange-300 hover:underline">ABOUT</span>
              <span className="text-2xl font-futura hover:underline">EXPRESSO</span>
            </div>
            <div className="hover:underline">
            <script className = " absolute mb-20"></script>
            Expresso is the club where literature and art collide, creating a vibrant community for passionate students. It's a dynamic hub designed to nurture and showcase your talents, whether in crafting words or painting visuals. Immerse yourself in poetry slams, art workshops, and diverse events that provide a platform to discover and showcase your creative flair. Connect with a supportive community of fellow students, writers, and artists, leaving an indelible mark in this enchanting space. From diverse opportunities to skill development workshops, Espresso Club is more than a club – it's a journey of creative discovery. Contribute to the college's cultural tapestry, organize events, participate in campus initiatives, and make a lasting impression. Ready to embark on this creative odyssey? Sign up, become a member, and let your unique talents complete our Espresso Club mosaic. Join us, and let your creativity brew in the extraordinary blend of inspiration!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
