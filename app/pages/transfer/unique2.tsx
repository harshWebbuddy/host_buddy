"use client";

import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

export default function Uniquepanelpage() {
  const renderPanels = () => {
    return Array.from({ length: 10 }, (_, index) => (
      <div
        key={index}
        className="w-full max-w-[1350px] mx-auto bg-[#F5F5F5] rounded-3xl mb-10"
      >
        <div className="flex flex-col 2xl:flex-row items-center p-2 gap-[85px]">
          <div className="w-full 2xl:p-0 p-8 grid grid-cols-1 xl:grid-cols-5 2xl:grid-cols-5 gap-x-0 gap-y-10 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="space-y-1">
                <Image
                  src="/com.svg"
                  alt=""
                  width={80}
                  height={40}
                  className="-mb-3"
                />
              </div>
            </div>
            <svg
              className="w-full h-16 pt-2 2xl:flex xl:flex hidden"
              width="1"
              height="57"
              viewBox="0 0 1 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.63501"
                x2="0.499998"
                y2="56.635"
                stroke="#C8C8C8"
                stroke-dasharray="2 2"
              />
            </svg>
            <div className="flex flex-col items-center">
              <div className="space-y-2">
                <Image
                  src="/review1.svg"
                  alt=""
                  width={600}
                  height={500}
                  className="mt-2"
                />
              </div>
            </div>
            <svg
              className="w-full h-16 pt-2 2xl:flex xl:flex hidden"
              width="1"
              height="57"
              viewBox="0 0 1 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.63501"
                x2="0.499998"
                y2="56.635"
                stroke="#C8C8C8"
                stroke-dasharray="2 2"
              />
            </svg>
            <div className="flex flex-col items-center">
              <div className="space-y-2.5">
                <Image src="/tick12.svg" alt="" width={30} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="relative mx-auto flex flex-col w-full items-center justify-center">
      <div className="max-w-[1350px] mx-auto">
        <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
          <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:pr-60 capitalize">
            Check our transfer prices below
          </h2>
          <p className="w-full font-normal text-black text-[16px] leading-loose max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Et lacus at id lectus ac.
            Gravida fames bibendum gravida quis sapien quam. Cum malesuada
            tortor ac pulvinar erat. At cras volutpat quam at habitasse quam
            felis parturient.
          </p>
        </div>
        <div className="w-full max-w-[1350px] mx-auto rounded-3xl mt-20">
          <div className="flex flex-col 2xl:flex-row items-center p-10 gap-[85px]">
            <div className="w-full grid grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-x-40 gap-y-10 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="space-y-1">
                  <Image
                    src="/domains.svg"
                    alt=""
                    width={150}
                    height={40}
                    className="-mb-3"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="space-y-2">
                  <Image
                    src="/transfer.svg"
                    alt=""
                    width={300}
                    height={400}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="space-y-2.5">
                  <Image src="/privacy.svg" alt="" width={200} height={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderPanels()}
      </div>
    </div>
  );
}
