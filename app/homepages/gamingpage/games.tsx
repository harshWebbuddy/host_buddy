"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface BoxProps {
  imageSrc: string;
  width: number;
  height: number;
}

const Box: React.FC<BoxProps> = ({ imageSrc, width, height }) => {
  return (
    <motion.div
      className="group relative mx-auto rounded-2xl overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
      whileHover={{ animation: "shakeRotate 0.5s ease-in-out" }}
    >
      <Image
        src={imageSrc}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        alt="Icon"
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-[#16191C] bg-opacity-70 w-full h-full flex flex-col justify-center items-center p-6 rounded-3xl">
          <div className="text-center">
            <h2 className="text-white font-bold text-[27px]">DOOM</h2>
            <h2 className="text-[27px] font-bold text-white">$24.98/mo</h2>
          </div>
          <motion.div
            className="mt-4"
            whileHover={{ scale: 1.2 }}
          >
            <Image src="/homegaming/button.svg" alt="Button" width={50} height={50} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const IndependentHoverBoxesVertical = () => {
  return (
    <div className="w-full grid gap-y-10 items-center justify-center sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 2xl:gap-x-6">
      <Box imageSrc="/homegaming/games1.png" width={280} height={350} />
      <Box imageSrc="/homegaming/games3.png" width={330} height={350} />
      <Box imageSrc="/homegaming/games2.png" width={260} height={350} />
    </div>
  );
};

const Games = () => {
  return (
    <div className="slide-reveal items-center justify-center mx-auto flex flex-col space-y-10 pt-20 2xl:pt-60">
      <div className="w-full flex flex-col justify-between items-center gap-2">
        <h1 className="w-full text-black font-mona-sans text-[22px] 2xl:text-[42px] font-bold leading-relaxed text-center">
          Choose From Over 3 Different Games
        </h1>
        <p className="text-[16px] text-black leading-loose text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className="mx-auto pt-16 max-w-[1300px]">
        <IndependentHoverBoxesVertical />
      </div>
    </div>
  );
};

export default Games;
