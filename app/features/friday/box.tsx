"use client";
import { testimonials } from "@/app/(landing)/components/constants/friday";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Features() {
  const [viewAll, setViewAll] = useState(false);
  const visibleTestimonials = viewAll ? testimonials : testimonials.slice(0, 6);

  return (
    <div className="p-4 relative mx-auto flex flex-col w-full items-center justify-center opacity-100">
      <div className="max-w-[1350px] mx-auto">
        <div className="slide-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500 h-full">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="col-span-1">
              <Image
                src={testimonial.author.image2}
                alt=""
                width={440}
                height={50}
                className="rounded-2xl relative z-[1] translate-y-16"
              />
              <div className="group relative border bg-white hover:bg-[#FFF3EA] z-[2] px-4 md:px-8 lg:px-16 py-6 md:py-10 rounded-2xl space-y-5">
                <div className="flex flex-col w-full">
                  <div className="flex justify-between flex-row absolute right-2 top-2">
                    <Image
                      src={testimonial.author.image_url}
                      alt="download"
                      width={70}
                      height={50}
                      className="select-none"
                      draggable={false}
                    />
                  </div>
                  <h1 className="font-extrabold text-[20px] md:text-[24px] lg:text-[26px] leading-[24px] md:leading-[30px] capitalize pt-2">
                    {testimonial.author.names}
                  </h1>
                </div>
                <p className="leading-6 text-[14px] md:text-[16px] lg:text-[18px] opacity-50 pr-2 group-hover:text-black">
                  {testimonial.testimonial}
                </p>
                <h2 className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[16px] md:leading-[18px] lg:leading-[22px]">
                  /1st year purchases only
                </h2>
                <div className="pr-8 md:pr-16 lg:pr-48">
                  <div className="bg-orange-500 rounded-lg p-2">
                    <h2 className="text-white font-semibold text-[14px] md:text-[16px] leading-normal capitalize mx-auto text-center">
                      Buy Now
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
