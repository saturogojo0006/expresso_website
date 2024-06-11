import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import Image from "next/image";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Handler for form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormSubmitted(true);
    // Clear form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Handler for form reset
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setFormSubmitted(false);
  };
  return (
    <div className="bg-black flex flex-col items-center">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full sm:w-1/2">
          <Image src='/treeup1.png' width={1200} height={300} alt="image" className="object-cover w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2">
          <Image src='/treeup2.png' width={1000} height={300} alt="image" className="object-cover w-full h-auto" />
        </div>
      </div>
      {/* Contact Form */}
      <div className="flex flex-col sm:flex-row w-full px-4 sm:px-8 py-8">
        <div className="w-full sm:w-5/12 sm:pl-2 sm:pr-6">
          <Image src='/contactus.png' width={500} height={480} alt="image" className="object-cover w-full h-auto" />
        </div>
        <div className="w-full sm:w-7/12 flex flex-col sm:pl-6 mt-6 sm:mt-0">
          {/* Content */}
          <div className="space-y-4">
            <div className="font-antonio mt-4">
              <p className="text-white font-bold text-3xl sm:text-5xl lg:text-8xl">CONNECT TO US</p>
            </div>
            <div className="font-antonio font-thin">
              <p className="text-white text-xl sm:text-3xl lg:text-6xl">TO KNOW MORE</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-2">
            <form className="rounded-md py-2 shadow-lg" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="mb-2 font-medium text-white">FIRST NAME</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="Literature"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="mb-2 font-medium text-white">LAST NAME</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange} 
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="Art"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 font-medium text-white">EMAIL</label>
                  <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="expresso@nitp.ac.in"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="mb-2 font-medium text-white">PHONE</label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="+91"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-white text-lg sm:text-2xl">Leave a message :</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  cols="30"
                  rows="6"
                  className="mt-2 w-full p-2 rounded-xl text-base border-2 bg-black text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex space-x-4 mt-4">
                <button type="submit" className="rounded-3xl border-white border-2 text-sm sm:text-lg w-24 sm:w-32 h-10 text-white hover:bg-[#FFBC58]">REGISTER</button>
                <button type="button" onClick={handleReset} className="rounded-3xl border-white border-2 text-sm sm:text-lg w-24 sm:w-32 h-10 text-white hover:bg-[#FFBC58]">RESET</button>
              </div>
            </form>
            {formSubmitted && <p className="text-green-500 mt-4">Thank you for your message!</p>}
          </div>
          <div className="flex space-x-4 mt-4">
            <FaInstagram size={30} className="text-white" />
            <FaFacebook size={30} className="text-white" />
            <FaLinkedin size={30} className="text-white" />
            <IoIosMail size={30} className="text-white" />
            <SiGooglemaps size={30} className="text-white" />
          </div>
        </div>
      </div>
      {/* Footer Images */}
      <div className="w-full bg-black">
        <div className="w-full">
          <Image src='/treebottom.png' width={1200} height={140} alt="image" className="object-cover w-full h-auto" />
        </div>
        {/* <div className="w-full">
          <Image src='/tornpaper2.png' width={1000} height={200} alt="image" className="object-cover w-full h-auto" />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
