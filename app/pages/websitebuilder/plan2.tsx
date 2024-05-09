import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Plan2 = () => {
  return (
    <div className="flex flex-col max-w-[1300px] mx-auto">
    {/* heading */}
    <div className="flex flex-col bl:flex-row justify-between gap-y-16 gap-x-4 items-center mb-8">
      <div className="relative w-full bl:pr-[200px] xl:pr-[300px] 2xl:pr-[400px]">
        <h2 className="font-mona-sans  capitalize text-[42px] leading-relaxed w-full text-center bl:text-left  font-semibold">
        Find the Perfect Website {" "}
<span className="pb-4 border-b-4 border-orange-500 font-semibold normal-case ">Builder Plan </span>For You
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
      <div className="flex flex-col bl:flex-row w-full justify-center gap-8 items-center">
        <div className="mb-5 w-full transition-all  bg-[#F9EFE4] hover:bg-[#16191C] p-10 rounded-2xl group">
          <div className="mb-5 w-full space-y-4 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">IGNITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          <div className="mt-12 group">
            <button className="group w-full h-[52px] text-white  text-xl rounded-xl bg-[#F9EFE4] group-hover:bg-[#FF7500] ring-1 ring-[black] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-black">Choose Plan</h4>{" "}
              <span className="ml-4 -mt-0.5 featuresvg3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008 11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

              </span>
            </button>
            <div className="flex flex-col justify-center w-full mt-12 group">
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
              <div className="relative max-w-fit mx-auto !mt-12 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#16191C] group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#16191C] group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 w-full  bg-[#F9EFE4] hover:bg-[#16191C] p-10 rounded-2xl group">
          <div className="mb-5 w-full space-y-3 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">ELITE</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          <div className="mt-12 group">
            <button className="group w-full h-[52px] text-white  text-xl rounded-xl bg-[#F9EFE4] group-hover:bg-[#FF7500] ring-1 ring-[black] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-black">Choose Plan</h4>{" "}
              <span className="ml-4 -mt-0.5 featuresvg3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008 11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

              </span>
            </button>
            <div className="flex flex-col justify-center w-full mt-12 group">
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
              <div className="relative max-w-fit mx-auto !mt-12 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#16191C] group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#16191C] group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 w-full  bg-[#F9EFE4] hover:bg-[#16191C] p-10 rounded-2xl group">
          <div className="mb-5 w-full space-y-3 group">
            <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0  mx-auto text-gray-900 group-hover:text-white">STELLER</h2>
            <p className="font-mona-sans text-sm font-normal leading-7 text-center  gap-0 opacity-45 group-hover:text-white text-[#16191C]/100 bottom-4 relative">From</p>
            <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45  group-hover:text-white text-[#16191C]/100">/Month</p>
          </div>
          <div className="mt-12 group">
            <button className="group w-full h-[52px] text-white  text-xl rounded-xl bg-[#F9EFE4] group-hover:bg-[#FF7500] ring-1 ring-[black] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-black">Choose Plan</h4>{" "}
              <span className="ml-4 -mt-0.5 featuresvg3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008 11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

              </span>
            </button>
            <div className="flex flex-col justify-center w-full mt-12 group">
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
              <div className="relative max-w-fit mx-auto !mt-12 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#16191C] group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#16191C] group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden lg:hidden bl:hidden mb-5 w-full bg-[#F9EFE4] p-10 rounded-2xl bl:max-w-[500px] mx-auto group">
        <div className="mb-5 w-full space-y-6">
          <h2 className="font-mona-sans font-bold text-2xl bl:text-3xl text-center gap-0 text-[#16191C] group-hover:text-white mx-auto ">IGNITE</h2>
          <p className="font-mona-sans leading-7 w-full gap-0 text-sm text-center mx-auto text-[#16191C]/40">From</p>
          <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
          <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45">/Month</p>
        </div>
        <div className="mt-12 group">
            <button className="group w-full h-[52px] text-white  text-xl rounded-xl bg-[#F9EFE4] group-hover:bg-[#FF7500] ring-1 ring-[black] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-black">Choose Plan</h4>{" "}
              <span className="ml-4 -mt-0.5 featuresvg3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008 11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

              </span>
            </button>
            <div className="flex flex-col justify-center w-full mt-12 group">
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
              <div className="relative max-w-fit mx-auto !mt-12 flex group items-center justify-center">
                <div className="flex items-center gap-x-3 text-[#16191C]/60">
                  <p className="text-[16px] font-bold text-[#16191C] group-hover:text-orange-500 transition-all duration-500">
                    See All Features in Details{" "}
                  </p>
                  <IoIosArrowForward className="text-[#16191C] group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

   
  </div>
  )
}

export default Plan2