"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { testimonials } from "@/app/(landing)/components/constants/featuressl";
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
    
    <div className=" relative bg-gradient-to-b from-[#FFFFFF]/70 to-[#FF7500]/70 mx-auto flex flex-col w-full items-center justify-center pt-10 2xl:pt-20 mt-20 opacity-100">
      <div className="slide-reveal max-w-[1360px] mx-auto">
        <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
          <h2 className="text-[42px] capitalize leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
          reasons to get a HostBuddy <span className="pb-4 border-b-4 border-orange-500">SSL Certificate</span>
          </h2>
        </div>
        <div className="flex flex-row gap-4 mt-16 overflow-hidden transition-all duration-500 h-full pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-full gap-4">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="group relative bg-[#FFF3EA] hover:bg-[#FFFFFF] px-8 py-10 rounded-2xl space-y-5">
                  <div className="flex flex-col gap-5 justify-between w-full">
                    <div className="flex justify-between flex-row">
                    <h1 className="font-semibold capitalize text-[24px] leading-[30px] pr-20">{testimonial.author.names}</h1>
                      <h1 className="font-light text-[14.45px] opacity-70 pl-2">{testimonial.number}</h1>
                    </div>
                  
                  </div>
                  <p className="leading-6 text-[16px] opacity-50">{testimonial.testimonial}</p>
                </div>
                  )
              )}
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}