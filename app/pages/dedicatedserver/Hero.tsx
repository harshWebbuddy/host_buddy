"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const HeroHosting = () => { 
const [displayText, setDisplayText] = useState("");
const [imageVisible, setImageVisible] = useState(false);

useEffect(() => {
  let index = 0;
  const text = "";
  const interval = setInterval(() => {
    if (index <= text.length) {
      setDisplayText(text.substring(0, index));
      index++;
    } else {
      clearInterval(interval);
    }
  }, 15); // Adjust the typing speed here (milliseconds)

  // Set imageVisible to true after a delay
  const delay = setTimeout(() => {
    setImageVisible(true);
  }, 1000); // Adjust the delay time as needed

  return () => {
    clearInterval(interval);
    clearTimeout(delay);
  };
}, []);
  return (
    <section className=''>
      <section className="min-h-[20vh] overflow-hidden relative bg-black flex items-center justify-center">
        <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
        <div className="max-w-[1300px] mx-auto text-white  px-10 pt-40 pb-10 2xl:py-36">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
        <div className="relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-5">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
          <h2 className="font-mono-sans text-[16px] font-light italic leading-relaxed text-center 2xl:text-left">
                  <span className="text-orange-500 font-bold ">India VPS Hosting</span>
                </h2>
                <h1 className="font-mono-sans font-medium 2xl:font-semibold text-[50px] 2xl:text-[60px]
           leading-[60px] 2xl:leading-[84px] text-left 2xl:text-left ">
                Powerful Dedicated
                </h1>
                <h1 className="font-mono-sans font-medium 2xl:font-semibold text-[50px] 2xl:text-[60px]
           leading-[60px] 2xl:leading-[84px] text-left 2xl:text-left ">
                Server Exclusively Yours
                </h1>
              </div>
              <p className="font-mono-sans text-[16px] font-light leading-loose text-left  text-[#EBEBEB]">
                Leverage VPS Power for Ultimate Control, Enhanced Security, and Lightning-Fast Speed. Elevate Your Hosting Experience Now!
              </p>
           <div className="flex flex-row w-[350px] mt-32 md:mt-8 pa:mt-10">
                <div className="w-[184.95px] h-[52px] bg-orange-500 text-white  rounded-xl">
                  <div className="w-[125px] h-[24px] gap-[9px] flex flex-row item-center justify-center mx-auto py-3.5">
                    <div className="item-center justify-center mx-auto">
                      <img src="/Hostingeye.svg" width="24px" height="24px" />
                    </div>
                    <div className="w-[92px] h-[13px] item-center justify-center mx-auto">
                      <h2 className="font-mona-sans text-[17px] font-semibold leading-[21.6px] text-left">
                        View Plans
                      </h2>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="w-[216.41px] h-[26px] mt-8 md:mt-6 flex flex-row gap-1  ">
                <div className="item-center justify-center mt-1">
                  <img
                    src="/tick.png"
                    alt="tick"
                    width="11.41px"
                    height="8.27px"
                    className="opacity-100"
                  />
                </div>
                <div className="w-[195px] h-[26px] item-center justify-center mx-auto">
                  <h2 className="text-[14px] underline opacity-75 capitalize">
                    30 day money back garantee
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full item-center justify-center animate-slide-from-rightdirection">
              <Image src="/dedicated/hero.svg" alt="" width={300} height={200} className="item-center justify-center mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <div className="-translate-y-8 items-center justify-center mx-auto relative z-10 opacity-100">
    <div className="bg-[#F9EFE4] rounded-full shadow-md  w-full py-4 flex flex-row p-2 grids-cols-2 flex-wrap sm:grids-cols-2 bl:grid-cols-4 lg:grid-cols-4  xl:grid-cols-4  2xl:grid-cols-4 items-center justify-around max-w-[936px] mx-auto" style={{ boxShadow: '0 -10px 15px -3px rgba(255,117, 0,1), 0 -4px 6px -2px rgba(255, 117, 0,1)' }}>
          <div className="relative group">
            <div className="rounded-xl px-4 text-[18px] text-black font-semibold py-2 hover:text-orange-500">
              Pricing
            </div>
            <span className="absolute bottom-0 left-28 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
          </div>
          <div className="relative group">
          <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
              Features
            </div>
            <span className="absolute bottom-0 left-28 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
          </div>
          <div className="relative group">
            <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
              Add-Ons
            </div>
            <span className="absolute bottom-0 left-28 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
          </div>
          <div className="relative group">
          <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
              Testimonials
            </div>
            <span className="absolute bottom-0 left-28 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
          </div>
        </div>
      </div>

   </section>
  );
};
export default HeroHosting;
