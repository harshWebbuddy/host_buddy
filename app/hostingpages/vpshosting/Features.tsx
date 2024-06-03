"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "../../(landing)/components/constants/vpsfeatures";
import { BiChevronRight } from "react-icons/bi";
import { Star } from "@/components/svgs";

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

  const boxVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-4 relative bg-[#F9EFE4] mx-auto flex flex-col w-full items-center justify-center pt-10 2xl:pt-20 mt-20">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col gap-y-2 2xl:gap-y-6">
          <h2 className="text-[22px] xl:text-[32px] 2xl:text-[42px] leading-[40px] 2xl:leading-[63px] font-semibold text-black w-full">
            Experience <span className="pb-1 2xl:pb-4 border-b-4 border-orange-500">Feature</span>-Rich VPS Hosting
          </h2>
          <p className="text-[14px] 2xl:text-[16px] font-light leading-[24px]">
            Our <span className="font-bold">VPS plans </span> come fully loaded with all the latest features. Enjoy full control, customization, high-performance and more.
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-6 2xl:mt-12 overflow-hidden h-full pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <motion.div key={columnIndex} className="flex flex-col w-full gap-4" variants={boxVariants} initial="hidden" animate="visible">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="group relative bg-[#FFFFFF] px-6 py-10 rounded-2xl space-y-5">
                      <div className="flex flex-row gap-x-0 px-6">
                        <div className="w-full h-full">
                          <Image src={testimonial.author.image_url} alt="download" width={79} height={79} className="select-none" draggable={false} />
                        </div>
                        <div>
                          <h1 className="font-semibold text-[16px] 2xl:text-[18px] leading-8">{testimonial.author.names}</h1>
                          <p className="leading-6 text-[14px] 2xl:text-[16px] opacity-50">{testimonial.testimonial}</p>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
