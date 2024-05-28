"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Switch from "@mui/material/Switch";
import { useInView } from "react-intersection-observer";
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
    <div className="flex flex-col max-w-[1250px] mx-auto">
    {/* heading */}
    <div className="slide-reveal flex flex-col bl:flex-row justify-between gap-y-6 gap-x-4 items-center mb-8 " >
     <div className="relative w-full">
        <h2 className="text-black font-mona-sans font-semibold text-[42px] capitalize leading-relaxed w-full text-center bl:text-left">
        <span className="pb-4 border-b-4 border-orange-500 text-wite text-black">The Perfe</span>ct - Web Hosting Plan
        </h2>
      </div>
    
      <div className="flex flex-wrap bl:flex-nowrap items-center gap-2 sm:gap-5">
        <h2 className="font-mona-sans text-[19px] bl:text-base font-medium leading-[24px] bl:leading-[32px] tracking-[0.05em] bl:tracking-[0.2px] text-right w-54 bl:w-71 h-[32px]">
          Monthly
        </h2>
        <div className="toggle-container">
  <input type="checkbox" id="toggle" className="toggle-input"/>
  <label htmlFor="toggle" className="toggle-label">
    <svg className="toggle-svg" width="72" height="34" viewBox="0 0 72 34" fill="#16191C" xmlns="http://www.w3.org/2000/svg">
      <rect className="toggle-background" opacity="0.15" y="0.5" width="72" height="33" rx="16.5" fill="#16191C"/>
      <circle className="toggle-circle" cx="17.5" cy="17" r="10.5" fill="white"/>
    </svg>
  </label>
</div>
        <div>
          <h2 className="font-mona-sans text-base font-medium leading-[32px] tracking-[0.2px] text-right w-[52px] h-[32px] ">Yearly</h2>
        </div>
        <div className="px-3 py-0.5 bg-orange-100 rounded-3xl">
          <h4 className="text-orange-500 m-2 font-mona-sans font-bold text-xs leading-[15.6px] tracking-[1.625px] text-center w-[77px] h-[16px] top-[6px] left-[10px]">
            Save 25%
          </h4>
        </div>
      </div>
    </div>
    {/* cards */}
    <section className="mt-10">
    <div className="flex flex-col bl:flex-row w-full justify-center gap-8 items-center" >
      <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  bg-[#F9EFE4]  hover:bg-[#16191C] px-10 rounded-2xl group" >
      
          <div className="pt-10 lex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">DS1</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
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
         <div className='group-hover:opacity-100 opacity-0 absolute -translate-y-4 translate-x-24'>
          <div className='bg-orange-500 py-1 rounded-3xl border-white w-36  mx-auto item-center justify-center border-4'>
            <h2 className='text-white items-center justify-center mx-auto text-center text-[16px] font-semibold '>Most Popular</h2>
          </div>
          </div>
          <div className="pt-10 lex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">DS2</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
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
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">DS3</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
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
      <div className="flex flex-col bl:flex-row w-full justify-center gap-8 items-center" >
      <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  bg-[#F9EFE4]  hover:bg-[#16191C] px-10 rounded-2xl group" >
      
          <div className="pt-10 lex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">DS5</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
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
         <div className='group-hover:opacity-100 opacity-0 absolute -translate-y-4 translate-x-24'>
          <div className='bg-orange-500 py-1 rounded-3xl border-white w-36  mx-auto item-center justify-center border-4'>
            <h2 className='text-white items-center justify-center mx-auto text-center text-[16px] font-semibold '>Most Popular</h2>
          </div>
          </div>
          <div className="pt-10 lex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">DS4</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
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
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">DS6</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] group-hover:text-white text-black  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 group-hover:ring-[#FFFFFF] ring-[#16191C] 
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
      <div className="slide-reveal mb-5 w-full transition-all gap-96 bg-[#F9EFE4] hover:bg-[#16191C] p-10 flex flex-row rounded-2xl group">
    
      <div className='space-y-40 px-20'>
      <div className=" flex flex-col w-full space-y-2 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">DS4</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          
          <div className='featuresvg3'>
          <svg width="160" height="16" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M159.707 8.70711C160.098 8.31658 160.098 7.68342 159.707 7.29289L153.343 0.928932C152.953 0.538408 152.319 0.538408 151.929 0.928932C151.538 1.31946 151.538 1.95262 151.929 2.34315L157.586 8L151.929 13.6569C151.538 14.0474 151.538 14.6805 151.929 15.0711C152.319 15.4616 152.953 15.4616 153.343 15.0711L159.707 8.70711ZM0 9H159V7H0V9Z" fill="#16191C"/>
</svg>

          </div>
        </div>
        <div className='w-full space-y-10 '>
        <div className="flex flex-col justify-center w-full  group">
              <h3 className="text-xl font-bold mb-7 text-left text-black  group-hover:text-white">Major Features</h3>
              <div className="flex flex-col gap-5">
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black  group-hover:text-white">RAM:</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black  group-hover:text-white">8GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black  group-hover:text-white">Processor</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black  group-hover:text-white">1 Core</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black  group-hover:text-white">Storage</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black  group-hover:text-white">25GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  text-black  group-hover:text-white">Bandwidth</p>
                  <p className="text-center text-black-700 text-lg font-bold  text-black  group-hover:text-white">1TB</p>
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
            <a href="/footer/configurator">
            <div className="group w-full h-[52px] text-white  text-xl rounded-xl bg-[#F9EFE4] group-hover:bg-[#FF7500] ring-1 ring-[black] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-black group-hover:text-white">Configure </h4>
              <span className="ml-8 -mt-0.5 featuresvg3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008 11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

              </span>
            </div> </a> 
          </div>    
        
         
        </div>
    
    </section>

    <div className="flex flex-col bl:flex-row gap-y-10 gap-x-16 mx-auto items-center justify-center py-20 bl:py-24">
    <div className="flex flex-col item-center justify-center mx-auto slide-item">
        <div>
            <h2 className="text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.2M+</h2>
        </div>
        <div className="item-center justify-center mt-6">
            <p className="justify-center  text-black font-mona-sans text-lg font-normal text-center leading-relaxed">
                trusted by 1.2 <br />
                millions users
            </p>
        </div>
    </div>
    <div className="w-[172px] border-t border-gray-200 rotate-90"></div>
    <div className="flex flex-col item-center justify-center mx-auto slide-item">
        <div>
            <h2 className="text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.5M+</h2>
        </div>
        <div className="item-center justify-center mt-6">
            <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed  text-black">
                websites hosted in more <br />
                than <strong className=' font-bold'>150 </strong>countries
            </p>
        </div>
    </div>
    <div className="w-[172px] border-t border-gray-200 rotate-90"></div>
    <div className="flex flex-col item-center justify-center mx-auto slide-item">
        <div>
            <h2 className="text-orange-500 font-mona-sans font-extrabold text-7xl text-center">96%</h2>
        </div>
        <div className="item-center justify-center mt-6">
            <p className="justify-center text-black font-mona-sans text-lg font-normal text-center leading-relaxed">
                customer support <br />
                satisfaction score
            </p>
        </div>
    </div>
</div>
<img src="/zigdesign.svg" className='right-60 absolute translate-y-[1650px] opacity-100'/>

  </div>
  )
}

export default Plan2