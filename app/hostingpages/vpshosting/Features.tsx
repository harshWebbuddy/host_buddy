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
    
    <div className="p-4 relative bg-[#F9EFE4] mx-auto flex flex-col w-full items-center justify-center pt-10 2xl:pt-20 mt-20 `">
      <div className="max-w-[1360px] mx-auto animate-slide-from-right">
        <div className="flex flex-col 2xl:flex-col gap-y-6 2xl:items-start ">
          <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
          Experience <span className="pb-4 border-b-4 border-orange-500">Feature</span>-Rich VPS Hosting
          </h2>
          <p className="text-[16px] font-light leading-[24px]">
          Our <span className="font-bold">VPS plans </span> come fully loaded with all the latest features. Enjoy full control, customization, high-performance and more.
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-12 overflow-hidden transition-all duration-500 h-full pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-full gap-4">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="group relative bg-[#FFFFFF] px-6 py-10 rounded-2xl space-y-5">
                  <div className="flex flex-row gap-x-0 px-6">
                    <div className="w-full h-full">
                      <Image src={testimonial.author.image_url} alt="download" width={79} height={79} className="select-none" draggable={false} />
                    </div>
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
