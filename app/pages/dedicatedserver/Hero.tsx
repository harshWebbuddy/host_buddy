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
        <div className="max-w-[800px] xl:max-w-[1250px] 2xl:max-w-[1250px] mx-auto text-white px-4 pt-20 2xl:pt-40 pb-10   2xl:py-40">
        <div className="h-full flex items-center relative !z-[2] flex-col md:flex-row bl:flex-row lg:flex-row xl:flex=row 2xl:flex-row justify-center gap-20">
      <div className="relative w-full flex flex-col justify-start space-y-2 2xl:space-y-5 animate-left-to-right">
          <div className='relative w-full flex flex-col justify-start space-y-0'><h2 className="font-mono-sans text-sm font-light italic leading-relaxed text-left">
                  <span className="text-orange-500 font-bold ">India VPS Hosting</span>
                </h2>
                <h1 className="font-mono-sans font-medium  text-[30px] xl:text-[46px] 2xl:text-[61px] leading-[54px] 2xl:leading-[84px] text-left 2xl:text-left ">                Powerful Dedicated
                </h1>
                <h1 className="font-mono-sans font-medium  text-[30px] xl:text-[46px] 2xl:text-[61px] leading-[54px] 2xl:leading-[84px] text-left 2xl:text-left ">                Server Exclusively Yours
                </h1>
              </div>
              <p className="font-mono-sans text-[14px] font-light leading-loose text-left  text-[#EBEBEB]">
                Leverage VPS Power for Ultimate Control, Enhanced Security, and Lightning-Fast Speed. Elevate Your Hosting Experience Now!
              </p>
              <div className="flex flex-row justify-start !mt-4 2xl:!mt-10 ">
            <div className="h-[56px]  flex item-center justify-center bg-orange-500 rounded-xl py-4 w-auto px-6  gap-x-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="2" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">View Plans</h2>
            </div>
          </div>
          <p className="flex  xl:mx-auto 2xl:mx-0 gap-2 underline justify-start  text-[#FFFFFF]">
              <Image src="/tick2.svg" alt="tick" width={11.41} height={8.27} />
              <span className='opacity-80 capitalize items-start justify-start text-left text-[14px] leading-[26px] font-light  '> 30 day money back guarantee</span>
            </p>
            </div>

            <div className="w-full item-center justify-center animate-slide-from-rightdirection">
              <Image src="/dedicated/hero.svg" alt="" width={300} height={200} className="item-center justify-center mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <div className="-translate-y-8 items-center justify-center mx-auto relative z-10 opacity-100">
      <div
  className="bg-[#F9EFE4] rounded-full shadow-md w-full py-4 p-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-items-center max-w-[936px] mx-auto"
  style={{ boxShadow: '0 -10px 15px -3px rgba(255,117, 0,1), 0 -4px 6px -2px rgba(255, 117, 0,1)' }}
>
  <div className="relative group text-center w-full">
    <div className="rounded-xl px-4 text-[18px] text-black font-semibold py-2 hover:text-orange-500">
      Pricing
    </div>
            <span className="absolute bottom-0 left-44 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
  </div>
  <div className="relative group text-center w-full">
    <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
      Features
    </div>
            <span className="absolute bottom-0 left-44 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
  </div>
  <div className="relative group text-center w-full">
    <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
      Add-Ons
    </div>
            <span className="absolute bottom-0 left-44 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
  </div>
  <div className="relative group text-center w-full">
    <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
      Testimonials
    </div>
            <span className="absolute bottom-0 left-44 w-16 h-1 bg-orange-500 transform  opacity-0 group-hover:opacity-100  transition-transform duration-300"></span>
  </div>
</div>

      </div>

   </section>
  );
};
export default HeroHosting;
