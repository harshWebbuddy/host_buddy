"use client";

import { Star } from "@/components/svgs";
import Image from "next/image";
import { motion } from "framer-motion";import { ReactNode } from 'react';
import React from 'react'
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { testimonials } from "../../(landing)/components/constants/testimonials";
export default function Testimonials() {   const AnimatedHeading = ({ children }: { children: ReactNode }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Trigger animation when scrolling from top to down
      if (window.scrollY > 0) {
        setIsAnimated(true);
      }
      else{
        setIsAnimated(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="font-mona-sans font-semibold text-[42px] leading-relaxed w-full text-center bl:text-left"
      initial={{ opacity: 0, x: isAnimated ? 0 : 50 }}
      animate={{ opacity: 1, x: isAnimated ? 0 : 0 }}
      transition={{ duration: 5 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedParagraph = ({ children }: { children: ReactNode }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Trigger animation when scrolling from top to down
      if (window.scrollY > 0) {
        setIsAnimated(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="font-mono-sans text-[16px] font-light leading-[24px] text-center 2xl:text-left text-[#16191C]"
      initial={{ opacity: 0, x: isAnimated ? 0 : -50 }}
      animate={{ opacity: 1, x: isAnimated ? 0 : 0 }}
      transition={{ duration: 5 }}
    >
      {children}
    </motion.div>
  );
};
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
    
    <div className="p-4 relative bg-[#F9EFE4]  mx-auto flex flex-col  w-full items-center justify-center pt-10 2xl:pt-20 mt-20">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
       <AnimatedHeading> <h2 className="text-[42px] leading-normal font-bold text-black w-full 2xl:max-w-xl ">
            Featured Client <span className="pb-4 border-b-4 border-orange-500">Testimonials </span> 👏
          </h2></AnimatedHeading> 
       <AnimatedParagraph>   <p className="w-full text-black text-[16px] leading-loose max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
          </p></AnimatedParagraph>
        </div>
        <div className={`flex flex-row gap-4 mt-16 overflow-hidden transition-all duration-500 ${viewAll ? "h-full pb-32" : "h-full max-h-screen"}`}>
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-full gap-4">
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div key={index} className="group relative bg-[#FFFFFF]  px-8 py-10 rounded-2xl space-y-5">
                      <Image src={testimonial.author.image_url} alt="download" width={100} height={100} className="select-none" draggable={false} />
                      <h1 className="font-bold text-2xl">{testimonial.author.names}</h1>
                      <p className="leading-relaxed text-lg">{testimonial.testimonial}</p>
                      <div className="space-y-3">
                        <div className="flex gap-x-1">
                          {[...Array(5)].map((_, index) => (
                            <Star key={index} className={index < testimonial.rating ? "text-yellow-500" : "text-gray-300"} />
                          ))}
                        </div>
                        <p>{testimonial.date}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-40 bg-gradient-to-b from-[##F9EFE00] via-[#F9EFE4]/80 to-[#F9EFE4] absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="relative z-[5] max-w-fit flex flex-row group mt-5" onClick={() => setViewAll(!viewAll)}>
          <div className="flex items-center gap-x-3 pb-2">
            <p className="text-[16px] font-bold text-orange-500">{viewAll ? "View Less" : "View All Testimonials"}</p>
            <BiChevronRight className="text-orange-500" size={20} />
          </div>
          <div className="bg-orange-500 h-0.5 absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500" />
        </div>
        <img src="/vpshosting/fog.svg" className="absolute bottom-0 select-none" />
      </div>
    </div>
  );
}
