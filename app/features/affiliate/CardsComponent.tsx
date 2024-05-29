import { ArrowIcon } from "@/components/svgs";
import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="space-y-28 p-4 max-w-[1300px] mx-auto ">
     
      <div className="slide-reveal w-full flex flex-col xl:flex-row-reverse space-x-2 space-y-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/features/card1.svg" width={500} height={500} alt="" className="rounded-2xl w-full  relative z-10" />
          </div>
        </div>
        <div className="w-full space-y-8">
          <div className="w-full ">
          <h2 className="text-[52px] leading-16 font-medium 2xl:font-bold">Affiliate FAQsn</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
            <p className="capitalize leading-6 text-[16px] 2xl:text-[20px] font-light">
              Check out our FAQs to start your Affiliate business strong.</p>
            </li>
         
          </ul>
          <button className="bg-white border-orange-500 border w-full  2xl:w-48 items-center flex flex-row justify-center">
              <h2 className="font-medium text-[16px]  leading-normal ">Get Answers</h2> <img src="/hosting/ArrowIcon.svg" className="pl-6"/>
          </button>
        </div>
        
      </div>
      <div className="slide-reveal w-full flex flex-col xl:flex-row-reverse gap-x-32  space-y-16 items-center">
      <div className="w-full space-y-8">
          <div className="w-full ">
          <h2 className="text-[52px] leading-16 font-medium 2xl:font-bold">Affiliate Assets</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
            <p className="capitalize leading-6 text-[16px] 2xl:text-[20px] font-light">
              Make an impact with our provided visuals and generate sale.</p>
            </li>
         
          </ul>
          <button className="bg-white border-orange-500 border w-full  2xl:w-60 items-center flex flex-row justify-center">
              <h2 className="font-medium text-[16px]  leading-normal ">Check all assets</h2> <img src="/hosting/ArrowIcon.svg" className="pl-6"/>
          </button>
        </div> 
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/features/card2.svg" width={500} height={500} alt="" className="rounded-2xl w-full  relative z-10" />
          </div>
        </div>
       
      
      </div>
      <div className="slide-reveal w-full flex flex-col xl:flex-row-reverse gap-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/features/card4.svg" width={500} height={500} alt="" className="rounded-2xl  w-full relative z-10" />
          </div>
        </div>
         <div className="w-full space-y-8">
         <div className="w-full ">
            <h2 className="text-[52px] leading-16 font-medium 2xl:font-bold">Affiliate Program Agreement</h2>
          </div>
           
          <ul className="w-full space-y-8">
          
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[16px] 2xl:text-[20px] font-light">
              Ready to join? Read carefully our guidelines for a successful affiliation.</p>
            </li>
            <button className="bg-white border-orange-500 border w-full  2xl:w-72 items-center flex flex-row justify-center">
              <h2 className="font-medium text-[16px]  leading-normal ">Read affiliate agreement</h2> <img src="/hosting/ArrowIcon.svg" className="pl-6"/>
          </button>
          </ul>
        </div>
       
      </div>
   
    </div>
  );
};

export default CardsComponent;
