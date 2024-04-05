// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
import { FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";
const Support = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#292E34] to-[#16191C] py-20 px-3">
      <div className="w-full max-w-[1520px] mx-auto">
        <div className="mx-auto md:flex flex-row justify-between">
          <h4 className="text-3xl sm:text-5xl text-white font-semibold font-mona-sans leading-[63px]">
            Why Choose HostBuddy
            <div className="w-40 h-1 bg-orange-500 mt-4 ml-3"></div>
          </h4>
          <p className="text-white text-base sm:text-lg mt-2 opacity-80 font-light leading-7 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sit placerat pellentesque lacus elementum bibendum. Vitae tortor scelerisque maecenas amet sit.
          </p>
          {/* Orange line below "Why Choose HostBuddy" */}
        </div>
        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-14 md:items-center justify-center mx-auto mt-20 md:mt-16 ">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative flex-1 w-full gap-10 group">
              <div className="absolute -top-7 left-9 w-16 h-16 flex justify-center items-center rounded-xl transition-all duration-300 bg-white group-hover:bg-orange-500 text-[#FF7500] group-hover:text-white">
                <FaHeadphonesAlt size={26} />
              </div>

              <div className="bg-[#3C3C3C] shadow-solid-orange rounded-2xl group hover:bg-[#F9EFE4]  text-[#FFFFFF] hover:text-[#16191C] p-6 sm:p-8 transition-all duration-300 cursor-pointer">
                <h2 className="text-xl font-bold mt-4 opacity-1 mb-4">Support 24x7x365</h2>
                <p className="w-full opacity-70 font-mona-sans text-lg font-normal leading-normal text-left">
                  Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a
                  standard.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Support;











