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
    <section className="h-full min-h-[80vh] overflow-hidden relative bg-black flex items-center justify-center">
      <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
      <div className="max-w-[1265px] mx-auto text-white px-4 pt-40 pb-10 2xl:py-40">
        <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20 ">
          <div className="relative w-full flex flex-col justify-center 2xl:justify-start space-y-5 animate-left-to-right">
            <div className='relative w-full flex flex-col justify-center 2xl:justify-start space-y-0'>
              <h2 className="font-mono-sans text-sm font-light italic leading-relaxed text-center 2xl:text-left">
                <span className="text-orange-500 font-bold ">CodeGuard</span>
              </h2>
              <h1 className="font-mono-sans font-semibold text-[68px] leading-[84px] text-center 2xl:text-left ">
              Backup Your 
Hard Work
              </h1>
            </div>
            <p className="font-mono-sans text-[16px]   font-light leading-loose text-center 2xl:text-left text-[#EBEBEB]">
            Lorem ipsum dolor sit amet consectetur. Pretium malesuada nec volutpat dictumst. Id at vitae aliquet id aliquam viverra ac ante. Senectus molestie.            </p>
            <div className="flex flex-row justify-center 2xl:justify-start !mt-10">
              <div className="h-[56px] flex item-center justify-center bg-orange-500 rounded-xl py-4 w-auto px-6 gap-x-3 transition-transform duration-300 ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left  ">View Plans</h2>
              </div>
            </div>
            <p className="flex max-w-fit mx-auto 2xl:mx-0 gap-2 underline text-[#EBEBEB]">
              <Image src="/tick2.svg" alt="tick" width={11.41} height={8.27} />
              <span className='opacity-70 capitalize text-[14px] leading-[26px] font-light '> 30 day money back guarantee</span>
            </p>
          </div>

          <div className="w-full item-center justify-center animate-slide-from-rightdirection">
            <Image src="/codeguard/hero.svg" alt="" width={300} height={700} className="item-center justify-center mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHosting;
