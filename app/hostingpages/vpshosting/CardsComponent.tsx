"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const CardsComponent = () => {
    return (
      <div className="slide-reveal background-design  space-y-10 2xl:space-y-20 p-4 max-w-[1200px] mx-auto pt-10 2xl:pt-40 pb-6 2xl:pb-24">
    <div className="background-design w-full 2xl:space-x-28 space-y-8  2xl:space-y-8  flex flex-col xl:flex-row justify-between  items-center" >
    <motion.div className="w-full hidden  2xl:flex justify-center" >
        <div className="relative">
          <Image src="/vpshosting/1.jpeg" width={500} height={500} alt="" className="rounded-2xl relative" />
          <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="2xl:flex hidden absolute -top-8 -left-8" />
          <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="2xl:flex hidden absolute -right-10 -bottom-10 z-10" />
        </div>
      </motion.div> 
       <motion.div className="w-full 2xl:space-y-4" >
        <div className="">
          <h2 className="text-[22px] xl:text-[32px] 2xl:text-[42px] leading-[63px] font-semibold">Browser Terminal</h2>
        </div>
        <ul className="w-full space-y-4">
          <li className="flex gap-4 items-start">
            <p className="leading-[24px] pr-8">
              Run shortcuts, manage files, or tweak VPS settings right from your browser. No need to install additional software—just enter your commands and execute them via the web-based terminal.
            </p>
          </li>
        </ul>
      </motion.div>
  
      <motion.div className="w-full flex 2xl:hidden  justify-center" >
        <div className="relative">
          <Image src="/vpshosting/1.jpeg" width={500} height={500} alt="" className="rounded-2xl relative" />
          <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="2xl:flex hidden absolute -top-8 -left-8" />
          <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="2xl:flex hidden absolute -right-10 -bottom-10 z-10" />
        </div>
      </motion.div> 
    </div>
    <div className="background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-6 2xl:gap-20 items-center">
    
     <div className="2xl:flex hidden ">
       <AnimatePresence>

          <motion.div
            key="image"
          
            className="w-full flex justify-center"
          >
            <div className="relative">
              <Image src="/vpshosting/2.jpeg" width={800} height={500} alt="" className="rounded-2xl relative z-10" />
              <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="2xl:flex hidden absolute -top-8 rotate-90 -right-9" />
              <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="2xl:flex hidden absolute -left-10 -bottom-10" />
            </div>
          </motion.div>
      </AnimatePresence>
      </div>
      <motion.div
       
        className="w-full space-y-4"
      >
        <div>
          <h2 className="text-[22px] xl:text-[32px] 2xl:text-[42px] leading-[63px] font-semibold">Scalable VPS Hosting</h2>
        </div>
        <ul className="w-full space-y-4">
          <li className="flex gap-4 items-start">
            <p className="leading-[24px] pr-12">
              Start small and scale when you outgrow your plan. Whenever you need more server resources for your projects, upgrading to a higher-tier VPS hosting plan takes just a few clicks.
            </p>
          </li>
        </ul>
      </motion.div>
         
         <div className="2xl:hidden flex">
            <AnimatePresence>
      
          <motion.div
         
            className="w-full flex justify-center"
          >
            <div className="relative">
              <Image src="/vpshosting/2.jpeg" width={700} height={500} alt="" className="rounded-2xl relative z-10" />
              <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="2xl:flex hidden absolute -top-8 rotate-90 -right-9" />
              <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="2xl:flex hidden absolute -left-10 -bottom-10" />
            </div>
          </motion.div>
      </AnimatePresence></div>
    </div>
      </div>
    );
  };

  export default CardsComponent;
