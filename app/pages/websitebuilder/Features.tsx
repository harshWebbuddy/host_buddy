"use client";
import { Star } from "@/components/svgs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { testimonials } from "../../(landing)/components/constants/vpsfeatures";
export default function Features() {
  const initializeColumns = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1024) {
        return 3;
      } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
        return 2;
      } else {
        return 1;
      }
    }
    return 3; // Default value for server-side rendering
  };

  const [columns, setColumns] = useState(initializeColumns() || 3);
  const [viewAll, setViewAll] = useState(false);
  const visibleTestimonials = viewAll ? testimonials : testimonials.slice(0, 9);

  useEffect(() => {
    const resizeListener = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 1024) {
          setColumns(3);
        } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
          setColumns(2);
        } else {
          setColumns(1);
        }
      }
    };

    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    
    <div className="p-4 relative bg-[#F9EFE4] mx-auto flex flex-col w-full items-center justify-center pt-10 2xl:pt-20 2xl:mt-20 `">
      <div className="slide-reveal max-w-[1360px] mx-auto space-y-10">
        <div className="flex flex-col 2xl:flex-col gap-y-0 2xl:items-center">
        <h4 className="text-[22px] xl:text-[32px] 2xl:text-[42px] text-black font-semibold font-mona-sans leading-normal">
        Build More Than a Website
             </h4>
             <h4 className="text-[22px] xl:text-[32px] 2xl:text-[42px] text-black font-semibold font-mona-sans leading-normal">
       
<span className="text-orange-500 capitalize"> Build Your Brand </span> 
             </h4>
    
        </div>
   <div className="space-y-8">
        <div className="bg-white rounded-2xl  w-full flex flex-col 2xl:flex-row space-x-12 p-2 max-w-[833px] mx-auto  ">
<div  className="bg-orange-500 text-center  text-[14px] 2xl:text-[18px]  rounded-xl px-4 text-white  py-4">Free Domain Name</div>
<div  className="py-4 px-4 text-[14px] 2xl:text-[18px] font-normal leading-[26px]">Online Store</div>

<div className="py-4 px-4 text-[14px] 2xl:text-[18px] font-normal leading-[26px]">Portfolio</div>

<div className="py-4 px-4 text-[14px] 2xl:text-[18px] font-normal leading-[26px]">Blog</div>
<div className="py-4 px-4 text-[14px] 2xl:text-[18px] font-normal leading-[26px] ">Other</div>
       </div>
        <div className="flex flex-col 2xl:flex-row gap-4  transition-all duration-500 pb-20 ">
    <img src="/websitebuilder/brand1.svg"/>
    <img src="/websitebuilder/brand2.svg"/>
    <img src="/websitebuilder/brand3.svg"/>
    <img src="/websitebuilder/brand4.svg"/>

        </div></div> 
      </div>
     
    </div>
  );
}
