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
    <section className="w-full   ">
      <div className="slide-reveal w-full max-w-[1250px] items-center justify-center mx-auto ">
        <div className="items-start justify-start space-y-6">
          <h2 className="font-mona-sans text-5xl font-semibold  text-black mt-3 text-left">Leave a Comment</h2>
          <p className="text-left">We will help you to choose the best plan!</p> </div>
     
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
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4 text-left appearance-none"
                required>
                <option value="Select Document">Select Document</option>
                <option value="Document 1">Document 1</option>
                <option value="Document 2">Document 2</option>
                <option value="Document 3">Document 3</option>
              </select>
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
    
      </div>
    </section>
  );
};
export default ContactForm;