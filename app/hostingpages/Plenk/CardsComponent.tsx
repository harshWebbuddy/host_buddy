  import Image from "next/image";
  import React from "react";

  const CardsComponent = () => {
    return (
      <div className="background-design  space-y-20 p-4 max-w-[1300px] mx-auto pt-32 pb-20">
    
        <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-72 items-center">
          <div className="w-full space-y-4">
            <div className="">
              <h2 className="text-[42px] leading-[63px] font-semibold">Browser Terminal</h2>
            </div>
            <ul className="w-full space-y-4">
              <li className="flex gap-4 items-start">
                <p className=" leading-[24px] pr-8">
                Run shortcuts, manage files, or tweak VPS settings right from your browser. No need to install additional software  just enter your commands and execute them via the web-based terminal.              </p>
              </li>
        
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative">
              <Image src="/vpshosting/1.jpeg" width={500} height={500} alt="" className="rounded-2xl relative " />
              <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-8 -left-8" />
              <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="absolute -right-10 -bottom-10  z-10" />
            </div>
          </div>
        </div>
        <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-0 items-center">
        <div className="w-full flex justify-center">
            <div className="relative">
              <Image src="/vpshosting/2.jpeg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
              <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-8 rotate-90 -right-9" />
              <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="absolute -left-10 -bottom-10" />
            </div>
          </div> <div className="w-full space-y-4">
            <div className="">
              <h2 className="text-[42px] leading-[63px] font-semibold">Scalable VPS Hosting</h2>
            </div>
            <ul className="w-full space-y-4">
              <li className="flex gap-4 items-start">
                <p className=" leading-[24px] pr-12">
                Start small and scale when you outgrow your plan. Whenever you need more server resources for your projects, upgrading to a higher-tier VPS hosting plan takes just a few clicks.   </p>       </li>
        
            </ul>
          </div>
      
        </div>
      </div>
    );
  };

  export default CardsComponent;
