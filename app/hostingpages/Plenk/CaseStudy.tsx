"use client";
import { caseStudies } from '@/app/(landing)/components/constants/casestudies';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Unique = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    elementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative  py-20">
       <div className="max-w-[1360px] flex flex-row mx-auto items-center justify-center p-4">
        <Image
          src="/microsoft/dotted.svg"
          alt=""
          width={100}
          height={100}
          className="ml-1 absolute right-0 top-20 opacity-50 2xl:flex hidden"
        />
        <div>
          <h1 className="text-[26px] xl:text-[32px] 2xl:text-[42px] font-semibold">
            Our Featured <span className="pb-4 border-b-4 border-orange-500">CaseStudy</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-6 gap-x-4 mt-10  2xl:mt-20">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                ref={(el) => {
                  elementsRef.current[index] = el;
                }}
                className="space-y-6 opacity-0 transition-opacity duration-500 ease-out transform translate-x-[-100px]" // Initial state
              >
                <Image
                  src={caseStudy.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-[240px] object-cover rounded-xl"
                />
                <h1 className="text-md 2xl:text-xl font-bold leading-relaxed">{caseStudy.title}</h1>
                <div className="relative max-w-fit flex flex-row group items-center justify-center !mt-4">
                  <div className="flex items-center gap-x-3 pb-2">
                    <p className="text-[12px] cursor-pointer 2xl:text-[16px] font-bold text-orange-500">Read more</p>
                    <img src="/orangearrow.svg" className="w-[11px] text-orange-500"  alt="readmore"/>
                  </div>
                  <div className="bg-orange-500 h-0.5 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;

