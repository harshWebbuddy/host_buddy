"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "../../(landing)/components/constants/cpanel";
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
    
    <div className="p-4 relative  mx-auto flex flex-col w-full items-center justify-center pt-14 2xl:pt-40 opacity-80">
      <div className="max-w-[1360px] mx-auto">
        <div className="slide-reveal flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
          <h2 className="text-[22px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
          <span className="text-orange-500 capitalize">c</span>Panel Hosting Packed with Ultimat<span className="pb-4 border-b-4 border-orange-500">e Feature</span>s
          </h2>
        </div>
        <div className="slide-reveal flex flex-row gap-4 mt-8 2xl:mt-16 overflow-hidden transition-all duration-500 h-full pb-20  2xl:pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-full gap-4">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="group relative border hover:bg-[#F5F5F5] px-8 py-10 rounded-2xl space-y-5">
                  <div className="flex flex-col gap-5 justify-between w-full">
                    <div className="flex justify-between flex-row">
                      <Image src={testimonial.author.image_url} alt="download" width={50} height={50} className="select-none" draggable={false} />
                      <h1 className="font-light text-[12px] 2xl:text-[14.45px] opacity-70 pl-2">{testimonial.number}</h1>
                    </div>
                    <h1 className="font-semibold text-[20px] 2xl:text-[24px] leading-8">{testimonial.author.names}</h1>
                  </div>
                  <p className="leading-6 text-[14px] 2xl:text-[16px] opacity-50">{testimonial.testimonial}</p>
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
