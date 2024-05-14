"use client";
import { testimonials } from "@/app/(landing)/components/constants/google";
import { Star } from "@/components/svgs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
export default function Partner() {
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
  const visibleTestimonials = viewAll ? testimonials : testimonials.slice(0, 12 );

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
    <section style={{
      backgroundImage: "url('/sitelock/blaack.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }} className="background w-full relative">
    <div className="p-4 relative mx-auto flex flex-col w-full items-center justify-center pt-10 2xl:pt-20 mt-20 ">
      <div className="max-w-[1360px] mx-auto">
      <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
          <h2 className="text-[42px] leading-normal font-bold text-white w-full 2xl:max-w-xl ">
          Top Google Workspace <span className="pb-4 border-b-4 border-orange-500">Premier Partner</span> 
          </h2>
          <p className="w-full font-normal text-white text-[16px] pr-16 pt-16 leading-loose max-w-3xl">
          Unlock your team's full potential with the expertise of our Top Google Workspace Premier Partner.          </p>
        </div>
        <div className="flex flex-row gap-4 mt-16 overflow-hidden transition-all duration-500 h-full pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-full gap-4">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="group relative bg-[#363E44]  px-12 py-10 rounded-2xl space-y-5">
                  <div className="flex flex-col gap-5 justify-between w-full">
                    <div className="flex justify-between flex-row items-center">
                    <h1 className="font-bold text-[24px] leading-[36px] text-white pt-4">{testimonial.author.names}</h1>
                      <Image src={testimonial.author.image_url} alt="download" width={70} height={52} className="w-[70px] h-[52px]" draggable={false} />
                    </div>
                   
                  </div>
                  <p className="leading-6 text-[16px] text-[#FFFFFF]/50">{testimonial.testimonial}</p>
                </div>
                  )
              )}
            </div>
          ))}
        </div>
      </div>
     
    </div></section>
  );
}