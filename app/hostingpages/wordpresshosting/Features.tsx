"use client";
import { useEffect, useState } from "react";
import { testimonials } from "../../(landing)/components/constants/features";

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
  const [slideReveal, setSlideReveal] = useState(false); // State for slide reveal animation

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

  useEffect(() => {
    // Triggering slide reveal animation after a short delay to allow rendering
    const timeout = setTimeout(() => {
      setSlideReveal(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-4 relative bg-gradient-to-b from-[#FFFFFF] to-[#FF7500] mx-auto flex flex-col w-full items-center justify-center opacity-70">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between slide-reveal">
          <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
            Experience Exceptional Shared Hosting{" "}
            <span className="pb-4 border-b-4 border-orange-500">Features </span>
          </h2>
        </div>
        <div className="flex flex-row gap-4 mt-16 overflow-hidden transition-all duration-500 h-full pb-32">
          {Array.from({ length: columns }, (_, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col w-full gap-4 ${
                slideReveal ? "slide-reveal" : "" // Apply slide reveal class conditionally
              }`}
            >
              {visibleTestimonials.map(
                (testimonial, index) =>
                  index % columns === columnIndex && (
                    <div
                      key={index}
                      className="group relative bg-[#FFF3EA] hover:bg-[#FFFFFF]/100 px-8 py-10 rounded-2xl space-y-5"
                    >
                      <div className="flex flex-col gap-5 justify-between w-full">
                        <div className="flex justify-between flex-row">
                          <img
                            src={testimonial.author.image_url}
                            alt="download"
                            width={70}
                            height={50}
                            className="select-none"
                            draggable={false}
                          />
                          <h1 className="font-light text-[14.45px] opacity-70 pl-2">
                            {testimonial.number}
                          </h1>
                        </div>
                        <h1 className="font-semibold text-[24px] leading-8">
                          {testimonial.author.names}
                        </h1>
                      </div>
                      <p className="leading-6 text-[16px] opacity-50">
                        {testimonial.testimonial}
                      </p>
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
