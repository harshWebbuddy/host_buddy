"use client";
import { testimonials } from "@/app/(landing)/components/constants/blog";
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
    
    <div className="p-4 relative mx-auto flex flex-col w-full items-center justify-center opacity-100">
      <div className="max-w-[1350px] mx-auto">
       
      <div className="flex flex-row gap-4 transition-all duration-500 h-full">
  {Array.from({ length: columns }, (_, columnIndex) => (
    <div key={columnIndex} className="flex flex-col w-full gap-8">
      {visibleTestimonials.map(
        (testimonial, index) =>
          index % columns === columnIndex && (
            <div key={index} className="flex flex-col h-full">
              <Image
                src={testimonial.author.image2}
                alt=""
                width={440}
                height={50}
                className="rounded-2xl relative z-[2] translate-y-6"
              />
              <div className="group relative border bg-[#F5F5F5] z-[1] px-16 py-10  space-y-4 rounded-2xl flex flex-col justify-between h-full">
                <div className="flex flex-col w-full">
              <a href="/footer/blognew" >   <h1 className="font-bold text-[24px] leading-[30px] capitalize pt-2">
                    {testimonial.author.names}
                  </h1></a>
                </div>
                <h2 className="text-[16px] font-medium leading-[22px]">
                  March 16, 2022 No Comments
                </h2>
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
