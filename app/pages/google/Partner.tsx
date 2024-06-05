"use client";
import { testimonials } from "@/app/(landing)/components/constants/google";
import Image from "next/image";
import { useEffect, useState } from "react";
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
    <div className="slide-reveal p-4 relative mx-auto flex flex-col w-full items-center justify-center pt-10 2xl:pt-20 2xl:mt-20 ">
      <div className="max-w-[1360px] mx-auto">
      <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
          <h2 className="text-[22px] xl:text-[32px] 2xl:text-[42px] leading-normal font-bold text-white w-full 2xl:max-w-xl ">
          Top Google Workspace <span className="pb-1 2xl:pb-4 border-b-4 border-orange-500">Premier Partner</span> 
          </h2>
          <p className="w-full font-normal text-white 2text-[14px] xl:text-[16px]2 2xl:pr-16 2xl:pt-16 leading-loose max-w-3xl">
          Unlock your team's full potential with the expertise of our Top Google Workspace Premier Partner.          </p>
        </div>
        <div className="flex flex-row gap-4 mt-8 2xl:mt-16 overflow-hidden transition-all duration-500 h-full pb-10 2xl:pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-full gap-4">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="relative hover:bg-[#ffffff] bg-[#363E44] group  px-12 py-10 rounded-2xl space-y-5">
                  <div className="flex flex-col gap-5 justify-between group w-full">
                    <div className="flex justify-between flex-row items-center">
                    <h1 className="font-bold text-[22px] 2xl:text-[24px] leading-[36px] group-hover:text-black text-white pt-4">{testimonial.author.names}</h1>
                      <Image src={testimonial.author.image_url} alt="download" width={70} height={52} className="w-[70px] h-[52px]" draggable={false} />
                    </div>
                   
                  </div>
                  <p className="leading-6 text-[14px] 2xl:text-[16px] text-[#FFFFFF]/50 group-hover:text-black">{testimonial.testimonial}</p>
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
