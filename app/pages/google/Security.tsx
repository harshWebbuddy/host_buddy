import Image from "next/image";
import React from "react";

const Security = () => {
  return (
    <div className="">
      <div className="  space-y-24 p-4 max-w-[1350px] mx-auto  ">
        <div className=" slide-reveal background-design w-full flex flex-col xl:flex-row-reverse justify-between 2xl:space-x-20 space-y-10 2xl:space-y-20  items-center">
         
      
       
        <div className="w-full flex justify-center 2xl:pt-60 items-center ">
            <div className="relative">
              <Image
                src="/google/card1.svg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[20]"
              />
             
             
            </div>
          </div>
          <div className="w-full space-y-4 2xl:space-y-10">
          <div className="">
            <h2 className="text-[24px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] font-semibold">Google Suite<span className="text-orange-500"> Security Features</span> </h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-[14px] 2xl:text-[18px] leading-loose 2xl:pr-10">
              Custom inbound filtering tools for spam emails, to complement powerful spam filters that automatically work with no up-front configuration             </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-[14px] 2xl:text-[18px] leading-loose 2xl:pr-10">
              To help employees set secure passwords, G Suite provides the ability to set custom password length along with visual strength indicators.              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-[14px] 2xl:text-[18px] leading-loose 2xl:pr-10">
              Optional email archiving, having unlimited retention option.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-[14px] 2xl:text-[18px] leading-loose 2xl:pr-10">
              Custom outbound filtering tools for spam emails to inhibit confidential information from being exposed.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-[14px] 2xl:text-[18px] leading-loose 2xl:pr-10">
              Implemented SSL connections to ensure secure connection (HTTPS).
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-[14px] 2xl:text-[18px] leading-loose 2xl:pr-10">
              Custom information sharing rules to determine how broadly employees are allowed to share with Google Calendar, Google Docs, and Google Sites.
              </p>
            </li>
          </ul>
        </div> 
        </div>
      
      </div>
    </div>
  );
};

export default Security;
