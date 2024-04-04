// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
const Support = () => {
  return (
        <div className="w-full h-[900px] md:h-[517px] top-[2124px]  bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="flex flex-col gap-5 justify-center item ">
          <div className="mx-auto   flex flex-col md:flex flex-row md:gap-96 md:mt-12">
            <h4 className="text-3xl sm:text-5xl text-white font-semibold font-mona-sans leading-[63px]">
              Why Choose HostBuddy
              <div className="w-40 h-1 bg-orange-500 mt-4 ml-3"></div>

            </h4>
            <p className="text-white text-base sm:text-lg mt-2 opacity-80 font-light leading-7 w-80">
              Lorem ipsum dolor sit amet consectetur. Sit placerat pellentesque
              lacus elementum bibendum. Vitae tortor scelerisque maecenas amet sit.
            </p>
            {/* Orange line below "Why Choose HostBuddy" */}
          </div>
        <div className="flex flex-col sm:flex-row gap-[85px] md:gap-[20px] w-[1220px]  h-[216.18px]  md:left-385 md:border-b-[8px] border-[#000] md:rounded-t-[8.56px]  md:items-center justify-center mx-auto mt-60 md:mt-16 ">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative flex-1 w-[342px] h-[139.12px] gap-10">
             <div className="absolute -top-7 left-9 w-14 h-14 flex justify-center items-center rounded-xl transition-all duration-300 bg-white hover:bg-orange-500">
  <Image
    src="/headphones.svg"
    alt="logo"
    width={18}
    height={18}
    className="object-contain"
  />
</div>
            
              <div className="bg-[#3C3C3C] shadow-solid-orange rounded-2xl group hover:bg-[#F9EFE4]  text-[#FFFFFF] hover:text-[#16191C] p-6 sm:p-8 transition-all duration-300 cursor-pointer">
                <h2 className="text-lg font-bold mt-4 w-[344px] h-[26px]  opacity-1 mb-4">Support 24x7x365</h2>
                <p className="sm:text-base  w-[342px] h-[96px] opacity-70 font-mona-sans text-base font-normal leading-[24px] text-left">
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