"use client"
import { ArrowIcon } from "@/components/svgs";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import React, { useEffect, useState } from "react";
const CardsComponent = () => {
  const [slideReveal, setSlideReveal] = useState(false); // State for slide reveal animation
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5 // Trigger animation when 50% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  useEffect(() => {
    // Triggering slide reveal animation after a short delay to allow rendering
    const timeout = setTimeout(() => {
      setSlideReveal(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="space-y-28 p-4 max-w-[1300px] mx-auto pt-36 pb-20">
    <div className={`w-full flex flex-col xl:flex-row gap-16 items-center ${slideReveal ? "slide-reveal" : ""}`}>        <div className="w-full space-y-4 items-start">
          <div className="item-start pr-20">
            <h2 className="text-4xl leading-10 font-semibold">Advanced Features Included in Shared Hosting</h2>
          </div>
        <div className="flex flex-row  items-center">
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Multiple PHP Support              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Cache Manager              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Gzip Compression              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Control Panel            </p>
            </li>
             <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Terminal Access            </p>
            </li>
              <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
WP-CLI            </p>
            </li>
          </ul>
            <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Latest Hardware            </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
HTTP/2 and HTTP/3 Support             </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Web Application Firewall             </p>
            </li>
            <li className="flex gap-4 items-start pr-12">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Uptime Institutes Tier 
IV Certification           </p>
            </li>
             <li className="flex gap-4 items-start pr-12">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
Outbound e-Mail Security 
& Delivery            </p>
            </li>
          </ul>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/hosting/card1.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            {/* <Image src="/card1triangle.svg" width={70} height={70} alt="" className="absolute -top-10 -right-10" /> */}
            {/* <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -left-10 -bottom-10" /> */}
          </div>
        </div>
      </div>
      <div className={`w-full flex flex-col xl:flex-row-reverse gap-16 items-center ${slideReveal ? "slide-reveal" : ""}`}>
        <div className="w-full space-y-5">
          <div className="">
            <h2 className="text-4xl leading-10 font-semibold">Server Located in India</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[16px] font-light">
Enhance Your Hosting Experience! Boost website load times to maximize server response, SEO rankings, and sales. Opt for a server closer to your audience, especially in India, for enhanced reliability and lightning-fast page loads.              </p>
            </li>
           <div className="bg-white border-orange-500 border flex flex-row w-52 rounded-xl p-3  items-center justify-center">
              <h2 className="font-medium text-[20px]  leading-normal ">Get Started </h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 "/>
          </div>
          </ul>
         
        </div>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/hosting/card2.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            {/* <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-10 -left-10" /> */}
            {/* <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10" /> */}
          </div>
        </div>
      </div>
      <div className={`w-full flex flex-col xl:flex-row gap-14 items-center ${slideReveal ? "slide-reveal" : ""}`}>
          <div className="w-full space-y-5">
          <div className="">
            <h2 className="text-4xl leading-10 font-semibold">Start Fast with the Built-In One-Click Installer</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[16px] font-light">
Enhance Your Hosting Experience! Boost website load times to maximize server response, SEO rankings, and sales. Opt for a server closer to your audience, especially in India, for enhanced reliability and lightning-fast page loads.              </p>
            </li>
            <div className="bg-white border-orange-500 border flex flex-row w-52 rounded-xl p-4  items-center justify-center">
              <h2 className="font-medium text-[20px]  leading-normal ">Get Started </h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 "/>
          </div>
          </ul>
         
        </div>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/hosting/card3.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            {/* <Image src="/card3.svg" width={150} height={150} alt="" className="absolute -top-10 -left-10 z-[12]" /> */}
            {/* <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -left-10 -bottom-10" /> */}
          </div>
        </div>
      </div>
      <div className={`w-full flex flex-col xl:flex-row-reverse gap-16 items-center ${slideReveal ? "slide-reveal" : ""}`}>
        <div className="w-full space-y-4">
          <div className="">
           <h2 className="text-4xl leading-10 font-semibold">Free Website Migration</h2>
          </div>
          <ul className="w-full space-y-4">
          
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[16px] font-light">
Switching web hosts can be daunting, especially considering the importance of your website's data. At HostBuddy, we understand this concern, which is why we offer a hassle-free migration service at no extra cost. Our expert support team will guide you through the process, ensuring a seamless transition to our servers. Rest assured, we prioritize the safety and integrity of your data, ensuring your website remains intact but with improved hosting services.              </p>
            </li>
            <div className="bg-white border-orange-500 border flex flex-row w-52 rounded-xl p-4  items-center justify-center">
              <h2 className="font-medium text-[20px]  leading-normal ">Get Started </h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 "/>
          </div>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/hosting/card4.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            {/* <Image src="/cards4.svg" width={200} height={200} alt="" className="absolute -top-10 -left-20" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
