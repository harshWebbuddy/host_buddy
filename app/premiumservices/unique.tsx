"use client";
import Image from "next/image";
import React, { useState } from "react";

const Unique = () => {
  return (
    <section className="bg-[#F9EFE4] relative">
    <div className="p-4 w-full max-w-[1420px] mx-auto flex flex-col 2xl:flex-row bl:flex-row items-center justify-center py-20">
      {/* <Image src="/dotted.svg" alt="" width={100} height={100} className="ml-1 absolute left-0 top-20 opacity-50" /> */}
      <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between  ">
      <div className="w-full flex justify-center">
          <Image src="/ps/unique.svg" alt="" width={550} height={550} className="uniqueimage" />
        </div> <div className="w-full ">
          <div className="space-y-5">
            <h4 className="text-5xl text-black font-semibold font-mona-sans leading-normal">
              What Makes Host<span className="text-orange-500">Buddy </span>
              Unique?
            </h4>
            <p className="text-[16px] leading-loose font-mono-sans">
              Lorem ipsum dolor sit amet conscatetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu. Erat nibh
              nisl lacinia egestas mauris facilisi aliquam sit mauris.{" "}
            </p>
          </div>
          <div className="space-y-2 2xl:max-w-xl">
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                <div className="ml-8 flex bl:flex-row items-center">
                  <Image src="/ps/unique1.svg" alt="" width={48} height={48} className="text-[#16191C]/30 group-hover:text-orange-500 transition-all duration-500 w-full max-w-fit" />
                  <div className="transition-all duration-300 cursor-pointer m-8 bl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">24/7 & 365 Days Support </h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div>
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                <div className="ml-8 flex bl:flex-row items-center">
                  <Image src="/ps/unique2.svg" alt="" width={48} height={48} className="text-[#16191C]/30 group-hover:text-orange-500 transition-all duration-500 w-full max-w-fit" />
                  <div className="transition-all duration-300 cursor-pointer m-8 bl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">Free WHM & cPanel</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                      Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div>
            <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
              <div className="ml-8 flex bl:flex-row items-center">
                <Image src="/ps/unique3.svg" alt="" width={48} height={48} className="text-[#16191C]/30 group-hover:text-orange-500 transition-all duration-500 w-full max-w-fit" />
                <div className="transition-all duration-300 cursor-pointer m-8 bl:gap-6 text-[#16191C]">
                  <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">Perfomance Optimized </h2>
                  <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </section>

  );
};

export default Unique;
