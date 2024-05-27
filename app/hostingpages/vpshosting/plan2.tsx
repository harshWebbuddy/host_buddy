"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";import { ReactNode } from 'react';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Switch from "@mui/material/Switch";import { useInView } from "react-intersection-observer";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Plan2 = () => {    const [animationClass, setAnimationClass] = useState("");
const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
});

useEffect(() => {
    if (inView) {
        setAnimationClass("slide-in");
    }
}, [inView]);

const AnimatedHeading = ({ children }: { children: ReactNode }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Trigger animation when scrolling from top to down
            if (window.scrollY > 0) {
                setIsAnimated(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.h2
            className="font-mona-sans font-semibold text-[42px] leading-relaxed w-full text-center bl:text-left"
            initial={{ opacity: 0, x: isAnimated ? 0 : 50 }}
            animate={{ opacity: 1, x: isAnimated ? 0 : 0 }}
            transition={{ duration: 3 }}
        >
            {children}
        </motion.h2>
    );
};

const AnimatedParagraph = ({ children }: { children: ReactNode }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Trigger animation when scrolling from top to down
            if (window.scrollY > 0) {
                setIsAnimated(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="font-mono-sans text-[16px] font-light leading-[24px] text-center 2xl:text-left text-[#16191C]"
            initial={{ opacity: 0, x: isAnimated ? 0 : -50 }}
            animate={{ opacity: 1, x: isAnimated ? 0 : 0 }}
            transition={{ duration: 3 }}
        >
            {children}
        </motion.div>
    );
};
  return (
 <div> 
   <div className='bg-gradient-to-b from-[#292E34]  to-[#16191C] pt-20 '> 
      <div className="flex flex-col max-w-[1300px] mx-auto">
    {/* heading */}
    <div className="flex flex-col bl:flex-row justify-between gap-y-6 gap-x-4 items-center mb-8 " >
    <AnimatedHeading> <div className="relative w-full">
        <h2 className="font-mona-sans font-semibold text-[42px] leading-relaxed w-full text-center bl:text-left text-white">
          <span className="pb-4 border-b-4 border-orange-500 text-wite text-white">The Perfect </span>- Web Hosting Plan
        </h2>
      </div></AnimatedHeading>
     <AnimatedParagraph>
       <div className="flex flex-wrap bl:flex-nowrap items-center gap-2 sm:gap-5">
        <h2 className="font-mona-sans text-xs bl:text-base font-normal text-white leading-[24px] bl:leading-[32px] tracking-[0.05em] bl:tracking-[0.2px] text-right w-54 bl:w-71 h-[32px]">
          Monthly
        </h2>
        <div className="toggle-container">
  <input type="checkbox" id="toggle" className="toggle-input"/>
  <label htmlFor="toggle" className="toggle-label">
    <svg className="toggle-svg" width="72" height="34" viewBox="0 0 72 34" fill="#16191C" xmlns="http://www.w3.org/2000/svg">
      <rect className="toggle-background" opacity="0.15" y="0.5" width="72" height="33" rx="16.5" fill="white"/>
      <circle className="toggle-circle" cx="17.5" cy="17" r="10.5" fill="white"/>
    </svg>
  </label>
</div>
        <div>
          <h2 className="font-mona-sans text-base font-normal leading-[32px] tracking-[0.2px] text-right w-[52px] h-[32px] text-white">Yearly</h2>
        </div>
        <div className="px-3 py-0.5 bg-[#3C342D] rounded-3xl">
          <h4 className="text-orange-500 m-2 font-mona-sans font-bold text-xs leading-[15.6px] tracking-[1.625px] text-center w-[77px] h-[16px] top-[6px] left-[10px]">
            Save 25%
          </h4>
        </div>
      </div></AnimatedParagraph>
    </div>
    {/* cards */}
    <section className="mt-10" ref={ref}>
      <div className="flex flex-col bl:flex-row w-full justify-center gap-8 items-center" >
      <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  hover:bg-[#F9EFE4]  bg-[#FFFFFF]/15 p-10 rounded-2xl group" >
         <div className='group-hover:opacity-100 opacity-0 absolute -translate-y-14 translate-x-24'><div className='bg-orange-500 py-1 rounded-3xl border-white w-36  mx-auto item-center justify-center border-4'>
            <h2 className='text-white items-center justify-center mx-auto text-center text-[16px] font-semibold '>Most Popular</h2>
          </div></div>
          <div className="flex flex-col w-full space-y-3 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto group-hover:text-gray-900 text-white">IGNITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 text-white group-hover:text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  text-white group-hover:text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] text-white  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 ring-[#FFFFFF] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
              <span className="ml-2">
                <FaArrowRight size={15} />
              </span>
            </div>
            <div className="flex flex-col justify-center w-full mt-12 group">
              <h3 className="text-xl font-bold mb-7 text-left group-hover:text-black text-white">Major Features</h3>
              <div className="flex flex-col gap-5">
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">RAM:</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">8GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Processor</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">1 Core</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Storage</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">25GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Bandwidth</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">1TB</p>
                </div>
                {/* Additional feature details here */}
              </div>
              <div className="relative max-w-fit mx-auto !mt-12 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#FFFFFF]/60 group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#FFFFFF]/60 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="bg-orange-500 h-[2px] absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div></div>
        <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  hover:bg-[#F9EFE4]  bg-[#FFFFFF]/15 p-10 rounded-2xl group" >
         <div className='group-hover:opacity-100 opacity-0 absolute -translate-y-14 translate-x-24'><div className='bg-orange-500 py-1 rounded-3xl border-white w-36  mx-auto item-center justify-center border-4'>
            <h2 className='text-white items-center justify-center mx-auto text-center text-[16px] font-semibold '>Most Popular</h2>
          </div></div>
          <div className="flex flex-col w-full space-y-3 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto group-hover:text-gray-900 text-white">IGNITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 text-white group-hover:text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  text-white group-hover:text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] text-white  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 ring-[#FFFFFF] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
              <span className="ml-2">
                <FaArrowRight size={15} />
              </span>
            </div>
            <div className="flex flex-col justify-center w-full mt-12 group">
              <h3 className="text-xl font-bold mb-7 text-left group-hover:text-black text-white">Major Features</h3>
              <div className="flex flex-col gap-5">
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">RAM:</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">8GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Processor</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">1 Core</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Storage</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">25GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Bandwidth</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">1TB</p>
                </div>
                {/* Additional feature details here */}
              </div>
              <div className="relative max-w-fit mx-auto !mt-12 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#FFFFFF]/60 group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#FFFFFF]/60 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="bg-orange-500 h-[2px] absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div></div>
        <div className={`slide-item ${animationClass} w-full`}>
          <div  className="mb-5 w-full transition-all  hover:bg-[#F9EFE4]  bg-[#FFFFFF]/15 p-10 rounded-2xl group" >
         <div className='group-hover:opacity-100 opacity-0 absolute -translate-y-14 translate-x-24'><div className='bg-orange-500 py-1 rounded-3xl border-white w-36  mx-auto item-center justify-center border-4'>
            <h2 className='text-white items-center justify-center mx-auto text-center text-[16px] font-semibold '>Most Popular</h2>
          </div></div>
          <div className="flex flex-col w-full space-y-3 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto group-hover:text-gray-900 text-white">IGNITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 text-white group-hover:text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  text-white group-hover:text-[#16191C]/100">/Month</p>
          </div>
          
          <div className="mt-12 group">
           <div className="group w-full h-[52px] text-white  text-xl rounded-xl  group-hover:bg-[#FF7500] ring-1 ring-[#FFFFFF] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
              <span className="ml-2">
                <FaArrowRight size={15} />
              </span>
            </div>
            <div className="flex flex-col justify-center w-full mt-12 group">
              <h3 className="text-xl font-bold mb-7 text-left group-hover:text-black text-white">Major Features</h3>
              <div className="flex flex-col gap-5">
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">RAM:</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">8GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Processor</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">1 Core</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Storage</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">25GB</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-center text-black-700 text-lg  group-hover:text-black text-white">Bandwidth</p>
                  <p className="text-center text-black-700 text-lg font-bold  group-hover:text-black text-white">1TB</p>
                </div>
                {/* Additional feature details here */}
              </div>
              <div className="relative max-w-fit mx-auto !mt-12 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#FFFFFF]/60 group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#FFFFFF]/60 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="bg-orange-500 h-[2px] absolute -bottom-2 left-0 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div></div>
      </div>
     
    </section>

    <div className="flex flex-col bl:flex-row gap-y-10 gap-x-16 mx-auto items-center justify-center py-20 bl:py-24">
  <div className="flex flex-col item-center justify-center mx-auto slide-item">
    <div>
      <h2 className="text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.2M+</h2>
    </div>
    <div className="item-center justify-center mt-6">
      <p className="justify-center text-white font-mona-sans text-lg font-normal text-center leading-relaxed">
        trusted by 1.2 <br />
        millions users
      </p>
    </div>
  </div>
  <div className="hidden bl:block w-[172px] border-t border-gray-200 transform rotate-90"></div>
  <div className="flex flex-col item-center justify-center mx-auto slide-item">
    <div>
      <h2 className="text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.5M+</h2>
    </div>
    <div className="item-center justify-center mt-6">
      <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed text-white">
        websites hosted in more <br />
        than <strong className='text-orange-500 font-bold'>150 </strong>countries
      </p>
    </div>
  </div>
  <div className="hidden bl:block w-[172px] border-t border-gray-200 transform rotate-90"></div>
  <div className="flex flex-col item-center justify-center mx-auto slide-item">
    <div>
      <h2 className="text-orange-500 font-mona-sans font-extrabold text-7xl text-center">96%</h2>
    </div>
    <div className="item-center justify-center mt-6">
      <p className="justify-center text-white font-mona-sans text-lg font-normal text-center leading-relaxed">
        customer support <br />
        satisfaction score
      </p>
    </div>
  </div>
</div>

  <img src="/wordpress/design.svg" className='right-0 absolute opacity-100'/>
  </div>
  </div>
  </div> 
  )
}

export default Plan2