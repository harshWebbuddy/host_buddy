"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

  const CardsComponent = () => {
    const controlsImage = useAnimation();
    const controlsContent = useAnimation();
     const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });
    useEffect(() => {
      if (inView) {
        controlsImage.start({ x: 0, opacity: 1 });
        controlsContent.start({ x: 0, opacity: 1 });
      } else {
        controlsImage.start({ x: -100, opacity: 0 });
        controlsContent.start({ x: 100, opacity: 0 });
      }
    }, [controlsImage, controlsContent, inView]);
  
 
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);
  
    const imageVariants = {
      hidden: { x: 0, opacity: 0 },
      visible: { x: -100, opacity: 1, transition: { duration: 1 } },
    };
  
    const contentVariants = {
      hidden: { x: 0, opacity: 0 },
      visible: { x: 100, opacity: 1, transition: { duration: 1 } },
    };
  
  
    return (
      <div className="background-design  space-y-20 p-4 max-w-[1200px] mx-auto pt-20 2xl:pt-40 pb-16 2xl:pb-24">
    
    <div className="background-design w-full flex flex-col xl:flex-row-reverse justify-between  items-center" ref={ref}>
      <motion.div className="w-full space-y-4" initial="hidden" animate={controls} variants={contentVariants}>
        <div className="">
          <h2 className="text-[42px] leading-[63px] font-semibold">Browser Terminal</h2>
        </div>
        <ul className="w-full space-y-4">
          <li className="flex gap-4 items-start">
            <p className="leading-[24px] pr-8">
              Run shortcuts, manage files, or tweak VPS settings right from your browser. No need to install additional software—just enter your commands and execute them via the web-based terminal.
            </p>
          </li>
        </ul>
      </motion.div>
      <motion.div className="w-full flex justify-center" initial="hidden" animate={controls} variants={imageVariants}>
        <div className="relative">
          <Image src="/vpshosting/1.jpeg" width={500} height={500} alt="" className="rounded-2xl relative" />
          <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-8 -left-8" />
          <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="absolute -right-10 -bottom-10 z-10" />
        </div>
      </motion.div>
    </div>
    <div className="background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-20 items-center">
      <AnimatePresence>
        {inView && (
          <motion.div
            key="image"
            initial={{ x: -100, opacity: 0 }}
            animate={controlsImage}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <div className="relative">
              <Image src="/vpshosting/2.jpeg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
              <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-8 rotate-90 -right-9" />
              <Image src="/vpshosting/bigsquare.svg" alt="" width={600} height={346} className="absolute -left-10 -bottom-10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={controlsContent}
        transition={{ duration: 0.5 }}
        className="w-full space-y-4"
      >
        <div>
          <h2 className="text-[42px] leading-[63px] font-semibold">Scalable VPS Hosting</h2>
        </div>
        <ul className="w-full space-y-4">
          <li className="flex gap-4 items-start">
            <p className="leading-[24px] pr-12">
              Start small and scale when you outgrow your plan. Whenever you need more server resources for your projects, upgrading to a higher-tier VPS hosting plan takes just a few clicks.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
      </div>
    );
  };

  export default CardsComponent;
