import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full">
      <video className="w-full" height="452" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag...
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h4 className="text-orange-500 font-bold italic text-xl mb-8">
          Domain Name Search
        </h4>
        <h2 className="font-extrabold text-4xl sm:text-7xl text-white mb-10">
          Find Your Dream Domain Name
        </h2>
        <h4 className="font-bold mb-7 text-white">
          Use our domain checker tool to find the perfect name for your online
          project.
        </h4>
        <div className="flex justify-center mt-10 mb-7">
          <div className="relative">
            <input
              type="text"
              placeholder="Find your dream domain"
              className="w-full sm:w-96 p-3 rounded-full outline-none focus:ring focus:ring-white"
            />
            <button className="absolute top-0 right-0 h-full w-24 sm:w-32 bg-orange-500 text-white rounded-3xl flex justify-center items-center">
              Search
            </button>
          </div>
        </div>
        <h2 className="text-white flex flex-wrap items-center justify-center  sm:justify-center">
          <span className="text-white font-bold text-xl">.com </span>
          <span className="italic text-xs text-gray-400 font-bold line-through">
            $25.00
          </span>
          <span className="text-white font-bold"> $19.00 </span>
          <span className="inline-flex items-center">
            <Image
              src="/orange.png"
              alt="Dot"
              width={10}
              height={10}
              className="mr-2 ml-2 item-center"
            />
          </span>
                   <span className="text-white font-bold text-xl"> .co </span>
          <span className="italic text-xs text-gray-400 font-bold line-through">
            $25.00
          </span>
          <span className="text-white font-bold"> $19.00 </span>
          <span className="inline-flex items-center">
            <Image
              src="/orange.png"
              alt="Dot"
              width={10}
              height={10}
              className="mr-2 ml-2 item-center"
            />
          </span>
          <span className="dot-before"></span>
          <span className="text-white font-bold text-xl"> .net </span>
          <span className="italic text-xs text-gray-400 font-bold line-through">
            $25.00
          </span>
          <span className="text-white font-bold"> $16.00 </span>
          <span className="inline-flex items-center">
            <Image
              src="/orange.png"
              alt="Dot"
              width={10}
              height={10}
              className="mr-2 ml-2 item-center"
            />
          </span>
          <span className="dot-before"></span>
          <span className="text-white font-bold text-xl"> .store </span>
          <span className="italic text-xs text-gray-400 font-bold line-through">
            $25.00
          </span>
          <span className="text-white font-bold"> $18.00</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;