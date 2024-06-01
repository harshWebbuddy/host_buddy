"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
const HeroHosting = () => {  
  const videoRef = useRef<HTMLVideoElement>(null); // Provide explicit type assertion

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Access the play method
    }
  };
  return (
    <section className="animate-fade-in h-full min-h-[80vh] overflow-hidden relative bg-black space-y-40 flex flex-col items-center justify-center">
<video
      ref={videoRef}
      src="/video.mp4"
      width={1920}
      height={1080}
      className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]"
      autoPlay
      onEnded={handleVideoEnded} // Call handleVideoEnded function when the video ends
    />
    <div className="slide-reveal absolute bottom-0 2xl:bottom-2 z-[2] w-full h-full flex flex-col space-y-6 2xl:space-y-10 justify-center items-center text-white">
        <h4 className="text-orange-500 font-bold italic">Domain Name Search</h4>
        <h2 className="font-semibold 2xl:font-bold text-2xl sm:text-5xl 2xl:text-7xl capitalize !mt-5 text-center">Find Your Dream Domain Name</h2>
        <h4 className="text-sm 2xl:text-lg text-center">Use our domain checker tool to find the perfect name for your online project.</h4>
        <div className="bg-white rounded-full p-1 w-full max-w-5xl mx-auto focus-within:ring-[3px] ring-white/80 transition-all duration-500">
          <form className="flex w-full">
            <input
              type="text"
              alt=""
              className="w-full flex-1 outline-none placeholder:text-[#B8B8B8] bg-transparent rounded-full 2xl:px-5 text-black text-md 2xl:text-lg"
              placeholder="Find your dream domain"
            />
            <div className="bg-[#FF7500] h-[62px] rounded-full w-full flex-1 mx-auto items-center justify-center max-w-[182px] hover:bg-opacity-80 transition-all duration-300 text-lg">
             <h2 className='text-center items-center justify-center mx-auto pt-4 text-[24px] font-bold'>Search</h2> 
            </div>
          </form>
        </div>
        <div className="2xl:flex hidden w-full flex flex-col md:flex-row mx-auto max-w-5xl justify-center items-center gap-6">
          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .com </span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $19.00 </span>
          </h2>
          <div className="md:h-3 md:w-3 bg-[#FF7500] rounded-full mt-1" />
          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .co </span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $15.00</span>
          </h2>
          <div className="md:h-3 md:w-3 bg-[#FF7500] rounded-full mt-1" />

          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .net</span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $16.00 </span>
          </h2>
          <div className="md:h-3 md:w-3 bg-[#FF7500] rounded-full mt-1" />

          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .store </span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $18.00</span>
          </h2>
        </div>
      </div>
     
  </section>
      );
    };
export default HeroHosting;
