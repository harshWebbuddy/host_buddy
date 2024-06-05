import { ArrowIcon } from "@/components/svgs";
import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="space-y-10 2xl:space-y-28 p-4 max-w-[1300px] mx-auto ">
     
      <div className="slide-reveal w-full flex flex-col xl:flex-row-reverse space-x-2 space-y-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/features/card1.svg" width={500} height={500} alt="" className="rounded-2xl w-full  relative z-10" />
          </div>
        </div>
        <div className="w-full space-y-6 2xl:space-y-8">
          <div className="w-full ">
          <h2 className="text-[40px] 2xl:text-[52px] leading-16 font-medium 2xl:font-bold">Affiliate FAQsn</h2>
          </div>
          <ul className="w-full ">
            <li className="flex gap-4 items-start">
            <p className="capitalize leading-6 text-[16px] 2xl:text-[20px] font-light">
              Check out our FAQs to start your Affiliate business strong.</p>
            </li>
         
          </ul>
     
            <div className="bg-white border-orange-500 border  2xl:w-60 p-4 rounded-2xl items-start flex flex-row justify-start">
                <h2 className="font-medium text-[16px] 2xl:text-[24px] text-left leading-normal ">Get Answers</h2> <img src="/hosting/ArrowIcon.svg" className="w-4 mt-1 2xl:mt-2  ml-6  "/>
            </div>
        </div>
        
      </div>
      <div className="slide-reveal w-full flex flex-col xl:flex-row-reverse gap-x-32  space-y-16 items-center">
      <div className="w-full space-y-6 2xl:space-y-8">
          <div className="w-full ">
          <h2 className="text-[40px] 2xl:text-[52px]  leading-16 font-medium 2xl:font-bold">Affiliate Assets</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
            <p className="capitalize leading-6 text-[16px] 2xl:text-[20px] font-light">
              Make an impact with our provided visuals and generate sale.</p>
            </li>
         
          </ul>
         
          <div className="bg-white border-orange-500 border  2xl:w-60 p-4 rounded-2xl items-start flex flex-row justify-start">
              <h2 className="font-medium text-[16px] 2xl:text-[24px] text-left leading-normal ">Check all assets</h2> <img src="/hosting/ArrowIcon.svg" className="w-4 mt-1 2xl:mt-2  ml-6  "/>
          </div>
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
        <div className="w-full space-y-6 2xl:space-y-8">
         <div className="w-full ">
            <h2 className="text-[40px] 2xl:text-[52px]  leading-16 font-medium 2xl:font-bold">Affiliate Program Agreement</h2>
          </div>
           
          <ul className="w-full space-y-8">
          
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[16px] 2xl:text-[20px] font-light">
              Ready to join? Read carefully our guidelines for a successful affiliation.</p>
            </li>
  
          <div className="bg-white border-orange-500 border  2xl:w-96 p-4 rounded-2xl items-start flex flex-row justify-start">
              <h2 className="font-medium text-[16px] 2xl:text-[24px] text-left leading-normal ">Read affiliate agreement</h2> <img src="/hosting/ArrowIcon.svg" className="w-4 mt-1 2xl:mt-2  ml-6  "/>
          </div>
          </ul>
        </div>
       
      </div>
   
    </div>
  );
};

export default CardsComponent;
