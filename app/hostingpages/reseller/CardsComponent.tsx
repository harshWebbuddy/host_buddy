import { ArrowIcon } from "@/components/svgs";
import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#292E34]/100 to-[#16191C]/100">
    <div className="space-y-10 2xl:space-y-28 p-4 max-w-[1300px] mx-auto 2xl:py-20">
     
      <div className="w-full flex flex-col xl:flex-row-reverse space-y-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/reseller/1.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
          </div>
        </div>
        <div className="w-full space-y-6">
          <div className="w-full ">
            <h2 className="text-[42px] 2xl:text-[52px] leading-10 2xl:leading-tight font-bold text-white">Start Fast with the Built-In One-Click Installer</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 2xl:leading-8 text-[12px] 2xl:text-[18px] text-white font-light flex flex-col space-y-6">
              Select your preferred CMS application and go live instantly! Our advanced shared business hosting plans in India come with Softaculous, a robust software installer tool allowing you to install applications like WordPress, Joomla, Magento, and over 400 other apps with just a single click!</p>
            </li>
         
          </ul>
          <div className="group w-52 h-[52px] text-white border-orange-500 border text-xl rounded-xl    ring-1 ring-[black] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-white">Get Started</h4>{" "}
              <span className="ml-4 -mt-0.5 ">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008 11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#FFFFFF"/>
</svg>

              </span>
            </div>
        </div>
        
      </div>
      <div className="w-full flex flex-col xl:flex-row space-y-20 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/reseller/2.svg" width={600} height={500} alt="" className="rounded-2xl relative z-10" />
          </div>
        </div>
          <div className="w-full space-y-5">
          <div className="w-full ">
          <h2 className="text-[42px] 2xl:text-[52px] leading-10 2xl:leading-tight font-bold text-white">SFree Website Migration</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
            <p className="capitalize leading-6 2xl:leading-8 text-[12px] 2xl:text-[18px] text-white font-light flex flex-col space-y-6">
              Switching web hosts can be daunting, especially considering the importance of your website's data. At HostBuddy, we understand this concern, which is why we offer a hassle-free migration service at no extra cost. Our expert support team will guide you through the process, ensuring a seamless transition to our servers. Rest assured, we prioritize the safety and integrity of your data, ensuring your website remains intact but with improved hosting services.</p>
            </li>
            <div className="group w-52 h-[52px] text-white border-orange-500 border text-xl rounded-xl    ring-1 ring-[black] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-white">Get Started</h4>{" "}
              <span className="ml-4 -mt-0.5 ">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008 11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#FFFFFF"/>
</svg>

              </span>
            </div>
          </ul>
         
        </div>
      
      </div>
   
     
    </div>
    </section>
  );
};

export default CardsComponent;
