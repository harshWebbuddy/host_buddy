"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const GameForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    selectedDocument: "Select Document",
    message: "",
    agreeTerms: false,
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
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
    <div className="2xl:-mt-28 pa:-mt-40 pa:mb-40">
    <img src="./homegaming/formupperpart.svg" className="w-full"/>
    <section className="w-full bg-[#F9EFE4]">
      
      <div className="w-full 2xl:w-[1219px] md:h-[982px] pa:w-[1200px] pa:h-[700px] 2xl:h-[661px]  pa:py-20  items-start justify-start mx-auto mp:p-4   ">
        <div className="items-start justify-start mx-auto gap-2 2xl:mb-10 mp:mt-10 xl:ml-[190px]  ">
          <h2 className="font-mona-sans text-[42px] font-semibold item-start  text-black ">
            Full out the Contact Form
          </h2>
          <p className="items-start ">
          We will help you to choose the best plan!
        </p>
        </div>
     
        <form onSubmit={handleSubmit} className="xl:ml-[180px] pa:ml-0 w-full md:w-[800px] mp:w-full pa:w-[800px] 2xl:w-full 2xl:pa:w-[800px] 2xl:mx-auto pa:mx-auto mp:mx-auto 2xl:mb-10">
  <div className="flex flex-col 2xl:flex-row xl:flex-row mp:flex-col pa:flex-row  mt-4 items-center justify-center w-full gap-6">
    <div className="flex-1  mp:w-full">
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
    <div className="flex-1  mp:w-full">
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
  <div className="flex flex-col 2xl:flex-row xl:flex-row mp:flex-col pa:flex-row  mt-4 items-center justify-center w-full gap-6">
    <div className="flex-1  mp:w-full">
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
    <div className="flex-1  mp:w-full relative">
      <select
        id="selectedDocument"
        name="selectedDocument"
        value={formData.selectedDocument}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl w-full h-[56px] px-4 pr-10 text-left appearance-none"
        required
      >
        <option value="Select Document">Select Document</option>
        <option value="Document 1">Document 1</option>
        <option value="Document 2">Document 2</option>
        <option value="Document 3">Document 3</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
  <div className="mt-4 items-center justify-center w-full">
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="border border-gray-300 rounded-xl w-full min-h-[150px] max-h-[500px] text-left p-4"
      placeholder="Message"
      required
    ></textarea>
  </div>
  <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-4">
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
      <label htmlFor="agreeTerms">
      I have read and accept the terms of the privacy policy - <span className="text-orange-500 font-extrabold leading-[24px] text-[16px]">HostBuddy</span>
      </label>
    </div>
    <button
      type="submit"
      className="bg-orange-500 text-white px-6 py-3 mt-7 md:mt-0 rounded-md hover:bg-orange-600 h-[48px] "
    >
      Submit Ticket
    </button>
  </div>
</form>

      </div>
    </section>
    <img src="./homegaming/formupperpart.svg" className="w-full rotate-180 -mt-1"/>
    </div>
  );
};
export default GameForm;
