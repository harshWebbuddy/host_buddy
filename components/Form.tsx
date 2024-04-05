"use client";
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
    <div className="w-full bg-gray-200 ">    
    <div className="  w-full md:max-w-[1220px] h-[982px]  p-8 rounded-lg  items-center justify-center mx-auto">
      <div className="c items-center justify-center mx-auto">
      <h2 className=" h-[63px] font-mona-sans text-4xl font-semibold item text-center text-black">
        Full out the Contact Form
      </h2>
      </div >
      <div className="w-[326px] h-[26px] top-[152px] left-[797px]  mt-8 md:mt-0   font-mona-sans text-sm font-light leading-26 text-center mx-auto">   
         <p className="text-xs mb-4 md:mr-0 mr-6  text-center">
        We will help you to choose the best plan!
      </p>
      </div>

      <form onSubmit={handleSubmit}>
  <div className="flex flex-col md:flex-row gap-3 mt-4 items-center justify-center mx-auto">
    <div className="w-[350px] md:w-[600px] h-[53px] px-16 md:pt-17.61 pb-18.39 gap-0 border-t-0 border-r-0 border-b-0 rounded-tl-10">
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-1 md:px-4  py-1 md:py-2 w-full text-left"
        placeholder="Full Name"
        required
      />
    </div>
    <div className="w-[350px] md:w-[600px] h-[53px] px-16 pt-17.61 pb-18.39 gap-0 border-t-0 border-r-0 border-b-0 rounded-tl-10">
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-1 md:px-4  py-1 md:py-2 w-full text-left"
        placeholder="Email Address"
        required
      />
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-center mx-auto">
    <div className="text-left w-[350px] md:w-[600px] h-[53px] px-16 pt-17.61 pb-18.39 gap-0 border-t-0 border-r-0 border-b-0 rounded-tl-10">
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-1 md:px-4  py-1 md:py-2 w-full text-left"
        placeholder="Subject"
        required
      />
    </div>
    <div className="w-[350px] md:w-[600px] h-[53px] px-16 pt-17.61 pb-18.39 rounded-tl-10 ">
      <select
        id="selectedDocument"
        name="selectedDocument"
        value={formData.selectedDocument}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-0 md:px-4 py-1 md:py-2 w-full text-left"
        required
      >
        <option value="Select Document">Select Document</option>
        <option value="Document 1">Document 1</option>
        <option value="Document 2">Document 2</option>
        <option value="Document 3">Document 3</option>
      </select>
    </div>
  </div>
  <div className="mt-4 items-center justify-center mx-auto">
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-[220px] md:w-[1019px] h-[133px] ml-9 md:ml-16 b-100.01 rounded-tl-10 text-left"
      placeholder="Message"
      required
    ></textarea>
  </div>
  <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-4">
    <div className="w-[230px] md:w-[511px] h-[24px] top-[545px] left-[374px] font-mona-sans text-base font-normal leading-24 tracking-tighter md:ml-16 flex flex-row items-center mb-4 text-left">
      <input
        type="checkbox"
        id="agreeTerms"
        name="agreeTerms"
        checked={formData.agreeTerms}
        onChange={handleCheckboxChange}
        className="mr-3 h-6 w-6" 
        required
      />
      <label htmlFor="agreeTerms" className="text-sm">
        I have read and agree to the terms and conditions
      </label>
    </div>
    <button
      type="submit"
      className="bg-orange-500 text-white text-xs px-6 py-3 rounded-md hover:bg-orange-600 md:w-[135.93px] md:mr-20 h-[48px] top-[533px] rounded-tl-10"
    >
      Submit Ticket
    </button>
  </div>
</form>

      <div className="flex  justify-center md:justify-around w-full mt-20 gap-12 mx-auto mb-80 md:mb-40">
        <div className="w-1/4 bg-white-200 p-4 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <img
              src="\phone-call-svgrepo-com.svg"
              alt="Call Icon"
              className="w-10 h-10"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sales Help</h3>
            <p className="text-gray-700">24/7/365 Through the Chat Widget</p>
          </div>
        </div>
        <div className="w-1/4 bg-white-200 p-4 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <img
              src="\phone-call-svgrepo-com.svg"
              alt="Call Icon"
              className="w-10 h-10"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support Chat</h3>
            <p className="text-gray-700">24/7/365 Through the Chat Widget.</p>
          </div>
        </div>
        <div className="w-1/4 bg-white-200 p-4 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <img
              src="\phone-call-svgrepo-com.svg"
              alt="Call Icon"
              className="w-10 h-10"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support Email</h3>
            <p className="text-gray-700">24/7/365 Through the Chat Widget</p>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ContactForm;
