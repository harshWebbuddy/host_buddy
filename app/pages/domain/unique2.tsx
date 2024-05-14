"use client";

import { testimonials } from "@/app/(landing)/components/constants/testimonials";
import { Star } from "@/components/svgs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

export default function Uniquepanelpage() {
  return (
    <div className=" relative  mx-auto flex flex-col  w-full items-center justify-center pt-10 2xl:pt-20 mt-20">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
          <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full pr-60 capitalize ">
            Check our transfer prices below
          </h2>
          <p className="w-full font-normal text-black text-[16px] leading-loose max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Et lacus at id lectus ac.
            Gravida fames bibendum gravida quis sapien quam. Cum malesuada
            tortor ac pulvinar erat. At cras volutpat quam at habitasse quam
            felis parturient.
          </p>
        </div>
        <div className="w-full  mx-auto bg-[#F5F5F5] rounded-2xl mt-20">
        
            <div className="w-full  grid grid-cols-1 lg:grid-cols-5 bl:grid-cols-5 sm:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-x-0 gap-y-10 items-center justify-center">
              <div className=" flex w-full px-40">
               
                  <span className="font-mona-sans text-[24px] font-semibold leading-[30px] ">
                    .com
                  </span>
               
              </div>
              <svg className="w-full hidden sm:flex" 
                  width="1"
                  height="54"
                  viewBox="0 0 1 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.499998"
                    y2="54"
                    stroke="#D6D6D6"
                  />
                </svg>

              <div className="text-[11px] px-0  w-full mx-auto">
                <span className="font-mona-sans text-[24px] w-full  font-semibold leading-[30px] ">
                  $9.99/year
                </span>{" "}
                Renewal Price $15.99/year
              </div>
              <svg className="w-full hidden sm:flex" 
                width="1"
                height="54"
                viewBox="0 0 1 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="54"
                  stroke="#D6D6D6"
                />
              </svg>

              <div className="w-full ">
                <svg className="w-full"
                  width="27"
                  height="19"
                  viewBox="0 0 27 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.21849 14.853L23.9928 0.507795C24.3415 0.169265 24.7555 0 25.2349 0C25.7143 0 26.1284 0.169265 26.477 0.507795C26.8257 0.846325 27 1.24833 27 1.71381C27 2.17929 26.8257 2.58129 26.477 2.91982L10.4388 18.4922C10.0901 18.8307 9.68337 19 9.21849 19C8.75362 19 8.34685 18.8307 7.99819 18.4922L0.502066 11.2138C0.153409 10.8753 -0.0136557 10.4733 0.000871642 10.0078C0.015399 9.54232 0.196991 9.14031 0.545648 8.80178C0.894305 8.46325 1.30834 8.29399 1.78774 8.29399C2.26714 8.29399 2.68117 8.46325 3.02983 8.80178L9.21849 14.853Z"
                    fill="#05D71A"
                  />
                </svg>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
