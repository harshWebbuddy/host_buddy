"use client";
import { testimonials } from "@/app/(landing)/components/constants/featurepromo";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
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
  const visibleTestimonials = viewAll ? testimonials : testimonials.slice(0, 6);

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
    
    <div className="p-4 relative mx-auto flex flex-col w-full items-center justify-center opacity-100">
      <div className="max-w-[1360px] mx-auto">
       
      <div className="slide-reveal flex flex-col md:flex-row gap-4 pt-10 2xl:pt-20 overflow-hidden transition-all duration-500 h-full pb-10 2xl:pb-20">
  {Array.from({ length: columns }, (_, columnIndex) => (
    <div key={columnIndex} className="flex flex-col w-full gap-8">
      {visibleTestimonials.map(
        (testimonial, index) =>
          index % columns === columnIndex && (
            <div key={index} className="group relative border hover:bg-[#FFF3EA] px-4 md:px-8 lg:px-16 py-10 rounded-2xl space-y-5">
              <div className="flex flex-col w-full">
                <div className="flex justify-between flex-row absolute right-2 top-2">
                  <Image src={testimonial.author.image_url} alt="download" width={70} height={50} className="select-none" draggable={false} />
                </div>
                <h1 className="font-extrabold text-[20px] md:text-[22px] lg:text-[26px] leading-[24px] lg:leading-[30px] capitalize pt-2">{testimonial.author.names}</h1>
              </div>
              <p className="leading-6 text-[16px] lg:text-[18px] opacity-50 pr-2 group-hover:text-black">{testimonial.testimonial}</p>
              <h2 className="text-[14px] lg:text-[16px] font-medium leading-[18px] lg:leading-[22px]">/1st year purchases only</h2>
              <div className="pr-10 md:pr-32 lg:pr-52">
                <div className="bg-orange-500 rounded-lg p-2">
                  <a href="/footer/cart">
                    <h2 className="text-white font-semibold text-[14px] lg:text-[16px] leading-normal mx-auto text-center">Buy Now</h2>
                  </a>
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
