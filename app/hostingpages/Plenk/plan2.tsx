"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";import { ReactNode } from 'react';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Switch from "@mui/material/Switch";import { useInView } from "react-intersection-observer";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Plan2 = () => {
  const [animationClass, setAnimationClass] = useState("");
  const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
  });

  useEffect(() => {
      if (inView) {
          setAnimationClass("slide-in");
      }
  }, [inView]);



  return (
 <div> 
   <div className=''> 
      <div className="flex flex-col max-w-[1300px] mx-auto">
    {/* heading */}
    <div className="slide-reveal flex flex-col bl:flex-row justify-between gap-y-6 gap-x-4 items-center mb-8 " >
     <div className="relative w-full">
     <h2 className="text-black font-mona-sans font-semibold text-[22px] 2xl:text-[42px] capitalize leading-relaxed w-full text-center 2xl:text-left">
        Simple & tr<span className="pb-4 border-b-4 border-orange-500 text-wite text-black">ansparent pr</span>icing  
        </h2>
      </div>
    
      <div className="flex flex-wrap bl:flex-nowrap items-center gap-2 2xl:gap-5 ">
        <h2 className="font-mona-sans text-[15px] 2xl:text-[19px] bl:text-base font-medium leading-[24px] bl:leading-[32px] tracking-[0.05em] bl:tracking-[0.2px] text-center 2xl:text-right w-54 bl:w-71 2xl:h-[32px]">
          Monthly
        </h2>
        <div className="toggle-container">
  <input type="checkbox" id="toggle" className="toggle-input"/>
  <label htmlFor="toggle" className="toggle-label">
    <svg className="toggle-svg w-12 2xl:w-16" viewBox="0 0 72 34" fill="#16191C" xmlns="http://www.w3.org/2000/svg">
      <rect className="toggle-background" opacity="0.15" y="0.5" width="72" height="33" rx="16.5" fill="#16191C"/>
      <circle className="toggle-circle" cx="17.5" cy="17" r="10.5" fill="white"/>
    </svg>
  </label>
</div>

        <div>
          <h2 className="font-mona-sans  text-[16px] 2xl:text-[19px] font-medium leading-[32px] tracking-[0.2px] text-center 2xl:text-right w-[52px] h-[32px] ">Yearly</h2>
        </div>
        <div className="px-3 py-1 2xl:py-0.5 bg-orange-100 rounded-3xl">
          <h4 className="text-orange-500 2xl:m-2  text-[9px] 2xl:text-[12px] font-mona-sans font-bold  leading-[15.6px] tracking-[1.625px] text-center w-[57px] xl:w-[77px] h-[16px] top-[6px] left-[10px]">
            Save 25%
          </h4>
        </div>
      </div>
    </div>
    {/* cards */}
    <section className="mt-10 px-4 2xl:px-0" ref={ref}>
      <div className="flex flex-col bl:flex-row w-full justify-center gap-8 items-center" >
      <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  bg-[#F9EFE4]  hover:bg-[#16191C] px-10 rounded-2xl group" >
      
          <div className="pt-10 lex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">IGNITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group cursor-pointer w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
              <span className="ml-2">
                <FaArrowRight size={15} />
              </span>
            </div>
            <div className="flex flex-col justify-center w-full mt-12 group">
              <h3 className="text-xl font-bold mb-7 text-left text-black group-hover:text-white">Major Features</h3>
              <div className="flex flex-col gap-3">
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">RAM:</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">8GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Processor</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">1 Core</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Storage</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">25GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Bandwidth</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">1TB</p>
                </div>
                {/* Additional feature details here */}
              </div>
              <div className="relative max-w-fit mx-auto py-6 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 ">
                  <p className="text-[16px] font-bold text-[#16191C]/60 group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#16191C]/60 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="bg-orange-500 h-[2px] absolute bottom-5 left-0 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div></div>
        <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  bg-[#F9EFE4] hover:bg-[#16191C] px-10 rounded-2xl group" >
         <div className='group-hover:opacity-100 opacity-0 absolute -translate-y-4 translate-x-24 2xl:flex hidden'>
          <div className='bg-orange-500 py-1 rounded-3xl border-white w-36  mx-auto item-center justify-center border-4'>
            <h2 className='text-white items-center justify-center mx-auto text-center text-[16px] font-semibold '>Most Popular</h2>
          </div>
          </div>
          <div className="pt-10 lex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">IGNITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group cursor-pointer w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
              <span className="ml-2">
                <FaArrowRight size={15} />
              </span>
            </div>
            <div className="flex flex-col justify-center w-full mt-12 group">
              <h3 className="text-xl font-bold mb-7 text-left text-black group-hover:text-white">Major Features</h3>
              <div className="flex flex-col gap-3">
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">RAM:</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">8GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Processor</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">1 Core</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Storage</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">25GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Bandwidth</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">1TB</p>
                </div>
                {/* Additional feature details here */}
              </div>
              <div className="relative max-w-fit mx-auto py-6 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#16191C]/60 group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#16191C]/60 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="bg-orange-500 h-[2px] absolute bottom-5 left-0 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div></div>
        <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  bg-[#F9EFE4]  hover:bg-[#16191C] px-10 rounded-2xl group" >
      
          <div className="pt-10 lex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">IGNITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group cursor-pointer w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
              <span className="ml-2">
                <FaArrowRight size={15} />
              </span>
            </div>
            <div className="flex flex-col justify-center w-full mt-12 group">
              <h3 className="text-xl font-bold mb-7 text-left text-black group-hover:text-white">Major Features</h3>
              <div className="flex flex-col gap-3">
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">RAM:</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">8GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Processor</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">1 Core</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Storage</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">25GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black group-hover:text-white">Bandwidth</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black group-hover:text-white">1TB</p>
                </div>
                {/* Additional feature details here */}
              </div>
              <div className="relative max-w-fit mx-auto py-6 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#16191C]/60 group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#16191C]/60 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="bg-orange-500 h-[2px] absolute bottom-5 left-0 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div></div>
      </div>
     
    </section>

  </div>
  </div>
  </div> 
  )
}

export default Plan2