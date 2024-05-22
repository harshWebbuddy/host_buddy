import Image from "next/image";
import React from "react";

const HeroHosting = () => {
  return (
    <section>
    <section className="h-full min-h-[50vh] overflow-hidden relative bg-black flex items-center justify-center">
      <img
        src="/home.jpg"
        width={1920}
        height={1080}
        alt=""
        className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]"
      />
      <div className="max-w-[1300px] mx-auto text-white  pl-10 pt-40 pb-10 2xl:py-40">
        <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
          <div className="relative w-full flex flex-col justify-center 2xl:justify-start space-y-5">
            <div className="relative w-full flex flex-col justify-center 2xl:justify-start space-y-0">
              <h2 className="font-mono-sans text-sm font-light italic leading-relaxed text-center 2xl:text-left">
                {/* <span className="text-white opacity-90 font-light">Welcome to </span> */}
                <span className="text-orange-500 font-bold">
                  India Dedicated Server
                </span>
              </h2>
              <h1 className="font-mono-sans font-medium text-[52px] leading-[84px] text-center 2xl:text-left ">
                Powerful Dedicated
              </h1>
              <h1 className="font-mono-sans font-medium text-[52px] leading-[84px] text-center 2xl:text-left w-full">
                Server Exclusively Yours
              </h1>
            </div>
            <p className="font-mono-sans text-[16px] font-light leading-loose text-center 2xl:text-left text-[#EBEBEB]">
              Lorem ipsum dolor sit amet consectetur. Facilisis ultrices varius
              netus non sit. Fermentum laoreet suspendisse nibh ut egestas. Non
              feugiat in sed eleifend nunc mi sodales facilisi. Nisl tortor
              vestibulum neque amet.{" "}
            </p>
            <div className="flex flex-row justify-center 2xl:justify-start !mt-10 ">
              <button className="h-[56px]  flex item-center justify-center bg-orange-500 rounded-xl py-4 w-auto px-6  gap-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">
                  View Plans
                </h2>
              </button>
              {/* <button className="relative max-w-fit flex group items-center justify-center !mt-0 px-4">
              <div className="flex items-center gap-x-3">
                <p className="text-[16px] font-bold text-white">Read more</p>
                <Image src="/arrow.svg" alt="" width={20} height={20} />
              </div>
              <div className="bg-white h-0.5 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
            </button> */}
            </div>
            <p className="flex max-w-fit mx-auto 2xl:mx-0 gap-2 underline text-[#EBEBEB]">
              <Image src="/tick2.svg" alt="tick" width={11.41} height={8.27} />
              <span className="opacity-70 capitalize text-[14px] leading-[26px] font-light">
                {" "}
                30 day money back garantee
              </span>
            </p>
          </div>

          <div className="w-full item-center justify-center">
            <Image
              src="/dedicated/hero.svg"
              alt=""
              width={280}
              height={500}
              className="item-center justify-center mx-auto"
            />
          </div>
        </div>
   
      </div>
    </section>
    <div className="-translate-y-8 items-center justify-center mx-auto relative z-10 opacity-100">
    <div className="bg-[#F9EFE4] rounded-full shadow-md  w-full py-4 flex flex-row p-2 grids-cols-2 flex-wrap sm:grids-cols-2 bl:grid-cols-4 lg:grid-cols-4  xl:grid-cols-4  2xl:grid-cols-4 items-center justify-around max-w-[936px] mx-auto" style={{ boxShadow: '0 -10px 15px -3px rgba(255,117, 0,1), 0 -4px 6px -2px rgba(255, 117, 0,1)' }}>
          <div className="relative group">
            <div className="rounded-xl px-4 text-[18px] text-black font-semibold py-2 hover:text-orange-500">
              Pricing
            </div>
            <span className="absolute bottom-0 left-4 w-16 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
          <div className="relative group">
          <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
              Features
            </div>
            <span className="absolute bottom-0 left-4 w-16 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
          <div className="relative group">
            <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
              Add-Ons
            </div>
            <span className="absolute bottom-0 left-4 w-16 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
          <div className="relative group">
          <div className="py-2 px-4 text-[18px] font-semibold leading-[26px] hover:text-orange-500">
              Testimonials
            </div>
            <span className="absolute bottom-0 left-4 w-16 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
        </div>
      </div></section>
  );
};
export default HeroHosting;
