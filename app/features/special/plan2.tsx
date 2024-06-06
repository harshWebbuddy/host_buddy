"use client"
import React, { useEffect, useState } from "react";
import { testimonials } from "@/app/(landing)/components/constants/featuresection";
import Image from "next/image";
import FooterBoxinside from "./boxinside";
const Support = () => {
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
  const visibleTestimonials = viewAll ? testimonials : testimonials.slice(0, 3);

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
  <div className="animate-fade-in w-full bg-[#F9EFE4]   px-3 pt-10 2xl:pt-20">

      <div className="w-full flex flex-col max-w-[1220px] mx-auto !z-[20]">
      <div className="flex flex-col bl:flex-row justify-between gap-y-10 gap-x-30 items-center  pb-10 2xl:pb-16">
        <div className="relative w-full items-center justify-center flex-col space-y-2 mx-auto">
          <h2 className=" capitalize font-mona-sans text-black font-semibold 2xl:font-bold text-[26px] xl:text-[32px] 2xl:text-[42px] leading-relaxed w-full 2xl:text-center ">
          Check Individual Promo Codes?
          </h2>
      <p className="item-center justify-center mx-auto text-md text-left 2xl:text-center 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        </div>
      
      </div>
    <div className="flex flex-col md:flex-row gap-4 overflow-hidden transition-all duration-500 h-full">
  {Array.from({ length: columns }, (_, columnIndex) => (
    <div key={columnIndex} className="flex flex-col w-full gap-8">
      {visibleTestimonials.map(
        (testimonial, index) =>
          index % columns === columnIndex && (
            <div key={index} className="group relative border bg-[#FFFFFF] px-6 md:px-16 py-10 rounded-2xl space-y-5">
              <div className="flex flex-col w-full">
                <div className="flex justify-between flex-row absolute right-2 top-2">
                  <Image src={testimonial.author.image_url} alt="author" width={70} height={50} className="select-none" draggable={false} />
                </div>
                <h1 className="font-extrabold text-[20px] md:text-[22px] leading-[26px] md:leading-[30px] capitalize pt-2">{testimonial.author.names}</h1>
                <div className="flex flex-row">
                  <h1 className="font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] capitalize pt-2 text-orange-500 line-through pr-1">{testimonial.numberstrike}</h1>
                  <h1 className="font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] capitalize pt-2 text-orange-500 pr-1">{testimonial.now}</h1>
                  <h1 className="font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] capitalize pt-2 text-orange-500">{testimonial.number}</h1>
                </div>
              </div>
              <p className="leading-6 text-[16px] md:text-[18px] opacity-50 pr-2 group-hover:text-black">{testimonial.testimonial}</p>
              <div className="pr-10 md:pr-32">
                <div className="bg-orange-500 rounded-lg p-2">
                  <h2 className="text-white font-semibold text-[14px] md:text-[16px] leading-normal capitalize mx-auto text-center">show Code</h2>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  ))}
</div>

        <img src="/features/design.svg" className='2xl:flex hidden right-0 absolute !z-[10] opacity-100'/></div>
     
        <div className="max-w-[1217px] mx-auto translate-y-20">
        <FooterBoxinside />
      </div>
    </div>
  );
};
export default Support;











