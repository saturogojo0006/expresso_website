import React, { useState, useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_5t5pkom",
        "template_gpiyyjr",
        form.current,
        "qbFbZxKnJe3gn9Jlm"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            phone: "",
          });
          setFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
    });
    setFormSubmitted(false);
    setErrors({});
  };

  return (
    <div className="bg-black flex flex-col items-center">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full sm:w-1/2">
          <Image
            src="/treeup1.png"
            width={1200}
            height={300}
            alt="image"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <Image
            src="/treeup2.png"
            width={1000}
            height={300}
            alt="image"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full px-4 sm:px-8 py-8">
        <div className="w-full sm:w-5/12 sm:pl-2 sm:pr-6">
          <Image
            src="/contactus.png"
            width={500}
            height={480}
            alt="image"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-full sm:w-7/12 flex flex-col sm:pl-6 mt-6 sm:mt-0">
          <div className="space-y-4">
            <div className="font-antonio mt-4">
              <p className="text-white font-bold text-3xl sm:text-5xl lg:text-8xl">
                CONNECT TO US
              </p>
            </div>
            <div className="font-antonio font-thin">
              <p className="text-white text-xl sm:text-3xl lg:text-6xl">
                TO KNOW MORE
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-2">
            <form
              ref={form}
              className="rounded-md py-2 shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="mb-2 font-medium text-white"
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="Enter your First Name"
                  />
                  {errors.firstName && (
                    <span className="text-red-500">{errors.firstName}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="mb-2 font-medium text-white"
                  >
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="Enter your Last Name"
                  />
                  {errors.lastName && (
                    <span className="text-red-500">{errors.lastName}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 font-medium text-white"
                  >
                    EMAIL
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="Enter your E-mail ID"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-2 font-medium text-white"
                  >
                    PHONE
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b-2 text-lg border-gray-400 focus:border-blue-500 outline-none bg-black text-white"
                    placeholder="Enter your Phone Number"
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label
                  htmlFor="message"
                  className="text-white text-lg sm:text-2xl"
                >
                  Leave a message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  cols="30"
                  rows="6"
                  className="mt-2 w-full p-2 rounded-xl text-base border-2 bg-black text-white"
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">{errors.message}</span>
                )}
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  type="submit"
                  className="rounded-3xl border-white border-2 text-sm sm:text-lg w-24 sm:w-32 h-10 text-white hover:bg-[#FFBC58]"
                >
                  {loading ? "Loading..." : "REGISTER"}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-3xl border-white border-2 text-sm sm:text-lg w-24 sm:w-32 h-10 text-white hover:bg-[#FFBC58]"
                >
                  RESET
                </button>
              </div>
            </form>
            {formSubmitted && (
              <p className="text-green-500 mt-4">Thank you for your message!</p>
            )}
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/expresso_nitp/" target="blank">
              <FaInstagram className="text-white w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.facebook.com/expresso.nitp/" target="blank">
              <FaFacebook className="text-white w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/expressonitp/"
              target="blank"
            >
              <FaLinkedin className="text-white w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="mailto:expressoclub@nitp.ac.in" target="blank">
              <IoIosMail className="text-white w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://maps.app.goo.gl/ochD6thH9G93RZJK8" target="blank">
              <SiGooglemaps className="text-white w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="w-full">
          <Image
            src="/treebottom.png"
            width={1200}
            height={140}
            alt="image"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
