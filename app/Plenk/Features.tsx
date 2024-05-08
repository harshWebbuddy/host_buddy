"use client";
import { Star } from "@/components/svgs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { testimonials } from "../(landing)/components/constants/hosting";
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
    
    <div className="p-4 relative  mx-auto flex flex-col w-full items-center justify-center 2xl:pt-32">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col 2xl:flex-col gap-y-6 2xl:items-start ">
          <h2 className="text-[42px] leading-[63px] font-semibold capitalize text-black w-full 2xl:max-w-full">
          Our hosting give you more <span className="pb-4 border-b-4 border-orange-500">Feature</span>
          </h2>
          <p className="text-[16px] font-light leading-[24px]">
          Lorem ipsum dolor sit amet consectetur. Condimentum turpis eleifend justo odio. Magna sagittis elementum maecenas.          </p>
        </div>
        <div className="flex flex-row gap-4 mt-16  transition-all duration-500 h-full pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-full gap-8">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="group relative bg-[#FFFFFF] hover:bg-[#F5F5F5] border px-6 py-6 rounded-2xl space-y-5">
                 <div className="right-5 absolute -top-5">
                      <Image src={testimonial.author.image_url} alt="download" width={51} height={51} className="opacity-100" draggable={false} />
                    </div>
                  <div className="flex flex-row gap-x-0 ">
                    
               <div>  
                   <h1 className="font-semibold text-[18px] leading-8">{testimonial.author.names}</h1>
                       <p className="leading-6 text-[16px] opacity-50">{testimonial.testimonial}</p>
                       </div>
                  </div>
              
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
