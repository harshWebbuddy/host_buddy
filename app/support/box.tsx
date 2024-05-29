"use client";
import React, { ChangeEventHandler, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const box: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null); // Make sure to provide a value of type File | null
  };
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
    <section className="w-full  px-4  ">
      <div className="slide-reveal w-full max-w-[1250px] items-center justify-center mx-auto pt-16">
        <form onSubmit={handleSubmit} className="w-full mt-10">
          <div className="flex flex-col bl:flex-row mt-4 items-center justify-center w-full gap-6">
            <div className="w-full h-[93px] flex flex-col">
              <label
                htmlFor="fullName"
                className="text-[14px] font-semibold mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="w-full h-[93px] flex flex-col">
              <label htmlFor="email" className="text-[14px] font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="w-full h-[93px] flex flex-col">
              <label
                htmlFor="confirmEmail"
                className="text-[14px] font-semibold mb-1"
              >
                Subject
              </label>
              <input
                type="email"
                id="confirmEmail"
                name="Add Subject Here..."
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Add Subject Here..."
                required
              />
            </div>
          </div>
          <div className="flex flex-col bl:flex-row mt-4 items-center justify-center w-full gap-6">
          <div className="w-full h-[93px] flex flex-col">
  <label
    htmlFor="subject"
    className="text-[14px] font-semibold mb-1"
  >
    Department
  </label>
  <select
    id="subject"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    className="border border-gray-300 rounded-xl w-full h-[56px] px-4 bg-white "
    style={{
      background: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC42NjY54LjA0OTcgOEE1LjUwNyA1LjUwNyAwIDAxOC0uNzcyYy0xLjU2NCAwLTIuODk4LjYzNi00LjAzMiAxLjc2MkwwIDhMNC42NjYgNS4zMzR6IiBmaWxsPSIjMDAwIi8+PC9zdmc+) no-repeat right 0.75rem center',
      marginRight: '20rem'
    }}
    required
  >
    <option value="">General Enquiries</option>
    <option value="General Inquiry">General Inquiry</option>
    <option value="Technical Support">Technical Support</option>
    <option value="Sales Inquiry">Sales Inquiry</option>
    {/* Add more options as needed */}
  </select>
</div>

            <div className="w-full h-[93px] flex flex-col">
              <label
                htmlFor="subject"
                className="text-[14px] font-semibold mb-1"
              >
                Related Service
              </label>
              <select
                id="subject"
                name="None"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                required
              >
                <option value="">None</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Sales Inquiry">Sales Inquiry</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="w-full h-[93px] flex flex-col">
              <label
                htmlFor="subject"
                className="text-[14px] font-semibold mb-1"
              >
                Priority
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                required
              >
                <option value="">Medium</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Sales Inquiry">Sales Inquiry</option>
                {/* Add more options as needed */}
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
              required
            ></textarea>
          </div>
          <h2>Attachments</h2>
          <div className="flex flex-col bl:flex-row mt-4 items-center justify-center w-full gap-32 relative">
            <div className="relative flex items-center justify-center w-full h-[56px]">
              <input
                type="text"
                id="uploadFile"
                className="border border-dashed border-gray-300 rounded-xl w-full h-full px-4 pr-12" // Added border-dashed and pr-12 for padding on the right
                placeholder="Allowed File Extensions: .jpg, .gif, .jpeg, .png"
                value={selectedFile ? selectedFile.name : ""}
                readOnly
              />
             
              <div
                className="absolute right-0 top-0 bottom-0 p-4 font-bold bg-orange-500 text-white rounded-xl cursor-pointer"
              >
               <h2>Choose file</h2>
              </div>
              
            </div>
            
            <div className="w-48 h-[52px] text-white text-xl rounded-xl bg-[#FF7500] hover:text-white transition-all duration-300 font-bold flex items-center justify-center border-black border-2">
              <span className="mr-6 -mt-0.5">
                <FaPlus size={15} />
              </span>
              <h4 className="opacity-100 font-monasans font-bold text-[16px] leading-[19.2px] ">
                Add More
              </h4>
            </div>
          </div>

          <div className="flex flex-col bl:flex-row 2xl:translate-x-[420px] justify-center items-center mt-16">
            <div className="flex  flex-col bl:flex-row   2xl:space-x-8 ">
              <div className="w-48 h-[52px] text-orange-500 text-xl rounded-xl border-orange-500 transition-all duration-300 font-bold flex items-center justify-center  border-2">
                <h4 className="opacity-100 font-monasans font-bold text-[16px] leading-[19.2px] ">
                  Cancel
                </h4>
              </div>
              <div className="w-48 h-[52px] text-white text-xl rounded-xl bg-[#FF7500] hover:text-white transition-all duration-300 font-bold flex items-center justify-center border-black border-2">
                <h4 className="opacity-100 font-monasans font-bold text-[16px] leading-[19.2px] ">
                  Submit
                </h4>
                <span className="ml-6 -mt-0.5">
                  <FaArrowRight size={15} />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default box;
