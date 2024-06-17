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
    <section className="h-full min-h-[50vh] overflow-hidden relative bg-black flex items-center justify-center">
      <img src="/cloud.png" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-100 object-cover bg-blend-color-dodge !z-[1]" />
      <div className="max-w-[800px] xl:max-w-[1250px] 2xl:max-w-[1250px] mx-auto text-white px-4 pt-20 2xl:pt-40 pb-10   2xl:py-40">
      <div className="h-full flex items-center relative !z-[2] flex-col md:flex-row bl:flex-row lg:flex-row xl:flex=row 2xl:flex-row justify-center gap-20">
      <div className="relative w-full flex flex-col justify-start space-y-2 2xl:space-y-4 animate-left-to-right">
          <div className='relative w-full flex flex-col justify-start space-y-0'>
            <h2 className="font-mono-sans text-sm font-light  leading-relaxed text-left italic" >
            Welcome to<span className="text-orange-500 font-bold "> HostBuddy</span>
              </h2>
      <h1 className="font-mono-sans font-medium  text-[22px] xl:text-[51px] 2xl:text-[58px] leading-normal 2xl:leading-[84px] text-left 2xl:text-left ">Cloud Reseller
      Hosting</h1>
            </div>
            <p className="font-mono-sans text-[10px] 2xl:text-[16px] font-light leading-loose text-left  text-[#EBEBEB]">
            The perfect Cloud Reseller Hosting for digital agencies, hosting resellers and freelancers who need a powerful, scalable and secure cloud reseller hosting solution. You can easily create multiple cPanel accounts and allocate resources as needed in WHM, so you can always meet the demands of your clients.              </p>
            <div className="flex flex-wrap 2xl:flex-row 2xl:space-y-4 space-y-4 justify-start space-x-2  2xl:space-x-6 !mt-10 ">
            <div className="2xl:h-[56px]  flex item-center justify-center bg-orange-500 rounded-xl py-4  px-6 2xl:px-12  gap-x-3">
          


              <h2 className="font-mona-sans text-[16px] 2xl:text-[18px] font-semibold leading-[21.6px] text-left">Features</h2>
            </div>
            <div className="h-full  flex item-center justify-center  rounded-xl py-0 w-auto px-0  gap-x-3">
            <h2 className="font-mona-sans text-[14px] 2xl:text-[18px] font-semibold leading-[21.6px] text-left">Reseller Hosting</h2>
            <svg className="mt-0.5" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.9349 1.10156L7.67969 0.35677C8.01823 0.0520828 8.52604 0.0520828 8.83073 0.35677L15.4323 6.92448C15.737 7.26302 15.737 7.77083 15.4323 8.07552L8.83073 14.6771C8.52604 14.9818 8.01823 14.9818 7.67969 14.6771L6.9349 13.9323C6.63021 13.5937 6.63021 13.0859 6.9349 12.7474L11.0313 8.85417H1.3151C0.841146 8.85417 0.502604 8.51562 0.502604 8.04167V6.95833C0.502604 6.51823 0.841146 6.14583 1.3151 6.14583H11.0313L6.9349 2.28646C6.63021 1.94792 6.59635 1.4401 6.9349 1.10156Z" fill="white"/>
</svg>

            </div>
          </div>
      
          </div>

          <div className="2xl:flex hidden  w-full item-center justify-center animate-slide-from-rightdirection">
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHosting;
