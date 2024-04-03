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
    <div className="w-8/12 mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Fill out the Contact Form
      </h2>
      <p className="text-xs mb-4 text-center">
        We will help you to choose the best plan!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4">
          <div className="w-6/12">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="w-6/12">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="w-6/12">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Subject"
              required
            />
          </div>
          <div className="w-6/12">
            <select
              id="selectedDocument"
              name="selectedDocument"
              value={formData.selectedDocument}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            >
              <option value="Select Document">Select Document</option>
              <option value="Document 1">Document 1</option>
              <option value="Document 2">Document 2</option>
              <option value="Document 3">Document 3</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full h-32"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="flex flex-row justify-center md:justify-between mt-4">
          <div className="flex flex-row items-center mb-4">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
              className="mr-2"
              required
            />
            <label htmlFor="agreeTerms" className="text-sm">
              I have read and agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
          >
            Submit Ticket
          </button>
        </div>
      </form>
      <div className="flex  justify-center md:justify-around w-full mt-20 gap-12 mx-auto mb-20">
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
  );
};

export default ContactForm;
