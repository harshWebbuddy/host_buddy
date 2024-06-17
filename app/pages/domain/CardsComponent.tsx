import { ArrowIcon } from "@/components/svgs";
import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="space-y-16 2xl:space-y-40 p-4 max-w-[1300px] mx-auto pt-10 2xl:pt-40 pb-20 2xl:pb-32">
     
      <div className="slide-reveal w-full flex flex-col-reverse gap-10  xl:flex-row-reverse space-y-10 2xl:space-y-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/domain/card1.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/card3.svg" width={150} height={150} alt="" className="2xl:flex hidden absolute -top-16 -left-16 z-[12] animate-triangle2" />
          </div>
        </div>
        <div className="w-full space-y-8 2xl:space-y-10 pr-10">
          <div className="w-full ">
            <h2 className="text-[22px] 2xl:text-[52px] leading-normal font-semibold">Free Privacy Protection</h2>
          </div>
          <ul className="w-full space-y-6 2xl:space-y-10">
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[14px] 2xl:text-[16px] font-light flex flex-col space-y-6">
              <span>Lorem ipsum dolor sit amet consectetur. Integer sed suspendisse imperdiet enim feugiat id tortor turpis ipsum. Nunc ultrices iaculis fermentum in.</span>
            <span>   Non enim libero mattis elementum ornare pellentesque dui consequat. Etiam aliquam orci massa enim nunc egestas facilisis</span>
            <span> tincidunt purus. Quis tellus posuere donec nisi pulvinar eget. Integer proin facilisi proin facilisis urna. Ac elit metus fermentum diam cras. Id ut in nulla pellentesque facilisis. Lacus penatibus augue justo nunc tellus. Volutpat aliquam volutpat arcu suspendisse nunc aliquam eu morbi in. Et neque sit dui velit. </span>    </p>
            </li>
         
          </ul>
          <div className="bg-white hover:bg-orange-500  border-orange-500 border  2xl:w-60 p-4 rounded-2xl w-60 items-start flex flex-row justify-start">
              <h2 className="font-medium text-[16px] text-left leading-normal ">Domain Name Search</h2> <img src="/hosting/ArrowIcon.svg" className="mt-1 ml-4  "/>
          </div>
        </div>
        
      </div>
      <div className="slide-reveal w-full flex flex-col-reverse gap-10 xl:flex-row  items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/domain/card2.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-10 -left-10 animate-triangle2 2xl:flex hidden" />
            <Image src="/domain/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10 2xl:flex hidden" />
          </div>
        </div>
          <div className="w-full space-y-5">
          <div className="">
            <h2 className="text-[32px] 2xl:text-[52px] leading-normal  font-semibold">Purchased a Domain Already? Transfer It to Hostinger Today</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[14px] 2xl:text-[16px] font-light">
              Manage your website domain at Hostinger by quickly transferring it from your current registrar – it only takes a few clicks. </p>
            </li>
            <div className="bg-white hover:bg-orange-500 border-orange-500 border  2xl:w-60 p-4 w-60 rounded-2xl items-start flex flex-row justify-start">
              <h2 className="font-medium text-[16px] text-left leading-normal ">Transfer Your Domain</h2> <img src="/hosting/ArrowIcon.svg" className="mt-1 ml-4  "/>
          </div>
          </ul>
         
        </div>
      
      </div>
      <div className="slide-reveal w-full flex flex-col-reverse gap-10  xl:flex-row-reverse  2xl:gap-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/card12.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10 p-6" />
            <Image src="/bigsquare1.svg" alt="" width={700} height={302} className="2xl:flex hidden absolute w-full -left-0 -bottom-0" />
          </div>
        </div>
         <div className="w-full space-y-4">
          <div className="2xl:pr-40">
           <h2 className="text-[32px] 2xl:text-[42px] leading-normal font-semibold">Register a Domain Name For Free</h2>
          </div>
          <ul className="w-full space-y-4">
          
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[14px] 2xl:text-[16px] font-light">
              Lorem ipsum dolor sit amet consectetur. Amet eu non dignissim commodo convallis mauris. Dui est mauris dictum aliquet justo sodales nulla. At ac vel morbi vestibulum eget lectus faucibus diam.</p>
            </li>
            <div className="bg-white hover:bg-orange-500 border-orange-500 border  w-60 2xl:w-60 p-4 rounded-2xl items-start flex flex-row justify-start">
              <h2 className="font-medium text-[16px] text-left leading-normal ">Domain Name Search</h2> <img src="/hosting/ArrowIcon.svg" className="mt-1 ml-4  "/>
          </div>
          </ul>
        </div>
       
      </div>
  
    </div>
  );
};

export default CardsComponent;
