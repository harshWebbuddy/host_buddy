"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    selectedDocument: "Select Document",
    message: "",
    agreeTerms: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can add form submission logic here
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      agreeTerms: e.target.checked,
    });
  };
  return (
    <section className="w-full  px-4 py-5  ">
      <div className="w-full max-w-[1360px] items-center justify-center mx-auto">
        <div className="items-center justify-center mx-auto">
          <h2 className="font-mona-sans text-5xl font-semibold item text-center text-black mt-3">Full out the Contact Form</h2>
        </div>
        <p className="text-center my-5">We will help you to choose the best plan!</p>
        <form onSubmit={handleSubmit} className="w-full mt-10">
          <div className="flex flex-col bl:flex-row mt-4 items-center justify-center w-full gap-6">
            <div className="w-full h-[53px]">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-full h-[53px]">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="flex flex-col bl:flex-row mt-4 items-center justify-center w-full gap-6">
            <div className="w-full h-[53px]">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Subject"
                required
              />
            </div>
            <div className="w-full relative">
  <select
    id="selectedDocument"
    name="selectedDocument"
    value={formData.selectedDocument}
    onChange={handleChange}
    className="border border-gray-300 rounded-xl w-full h-[56px] px-4 pr-8 text-left appearance-none"
    required
  >
    <option value="Select Document">Select Document</option>
    <option value="Document 1">Document 1</option>
    <option value="Document 2">Document 2</option>
    <option value="Document 3">Document 3</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.898438 6.10781L3.09844 4.00781L7.99844 8.90781L12.8984 4.00781L15.0984 6.10781L7.99844 13.2078L0.898438 6.10781Z" fill="#BBBBBB"/>
</svg>

  </div>
</div>

          </div>
          <div className="mt-4 items-center justify-center ml-1 w-full">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl w-full min-h-[150px] max-h-[500px] text-left p-4"
              placeholder="Message"
              required></textarea>
          </div>
          <div className="flex flex-col bl:flex-row justify-center items-center bl:justify-between mt-4">
            <div className="font-mona-sans text-base font-normal leading-24 tracking-tighter flex flex-row items-center text-left ml-3">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
                className="mr-4 h-6 w-6"
                required
              />
              <label htmlFor="agreeTerms">I have read and agree to the terms and conditions</label>
            </div>
            <button type="submit" className="submith2 ">
              Submit Ticket
            </button>
          </div>
        </form>
        <div className=" pt-[80px] pb-[260px]">
        <div className="space-y-5 mx-auto ">
            <div className="flex flex-col bl:flex-row items-center gap-5">
              <div className="w-full px-10 py-7   hover:bg-white bg-[#F5F5F5] flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
                <div className="bg-gray-500/10 w-[3px] h-20"></div>
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-2xl font-bold bl:whitespace-nowrap">Sales Help</h2>
                  <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
                </div>
              </div>
              <div className="w-full px-10 py-7   hover:bg-white bg-[#F5F5F5] flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
                <div className="bg-gray-500/10 w-[3px] h-20"></div>
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-2xl font-bold bl:whitespace-nowrap">Support Chat</h2>
                  <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
                </div>
              </div>
              <div className="w-full px-10 py-7   hover:bg-white bg-[#F5F5F5] hidden 2xl:flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
                <div className="bg-gray-500/10 w-[3px] h-20"></div>
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-2xl font-bold bl:whitespace-nowrap">Support Email</h2>
                  <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
                </div>
              </div>
            </div>
            <div className="bl:max-w-lg mx-auto w-full px-10 py-7  hover:bg-white bg-[#F5F5F5]  flex 2xl:hidden items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
              <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
              <div className="bg-gray-500/10 w-[3px] h-20"></div>
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-2xl font-bold bl:whitespace-nowrap">Support Email</h2>
                <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;