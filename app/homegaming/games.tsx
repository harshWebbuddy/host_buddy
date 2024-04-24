"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface BoxProps {
  imageSrc: string;
}
const Box: React.FC<BoxProps> = ({ imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group inset-0"
      whileHover={{ animation: "shakeRotate 0.5s ease-in-out" }}
    >
      <img
        src={imageSrc}
        className="item-center justify-center mx-auto rounded-2xl  w-[393px] h-[431px]"
        alt="Icon"
      />
      <div className="opacity-0 group-hover:opacity-100 -mt-32 md:w-[392.95px] flex flex-row">
        <div className="bg-opacity-70 -mt-2 md:w-[392.95px] flex flex-row gap-20 bg-[#16191C]  rounded-3xl items-center justify-center p-6">
          <div>
            <h2 className="text-white font-bold text-[27px]">DOOM</h2>
            <h2 className="text-[27px] font-bold text-white">$24.98/mo</h2>
          </div>
          <motion.div
            className="item-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <img src="./homegaming/button.svg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
const IndependentHoverBoxesVertical = () => {
  return (
    <div className="flex flex-col sp:w-full pa:flex-row 2xl:flex-row xl:ml-[0px] 2xl:flex-nowrap gap-8 items-center justify-center md:ml-6 pa:w-[1200px] pa:flex-wrap  2xl:ml-[500px] pa:-ml-[400px] xl:flex-row xl:flex-nowrap" >
      <Box imageSrc="./homegaming/games1.png" />
      <Box imageSrc="./homegaming/games3.png" />
      <Box imageSrc="./homegaming/games2.png" />
  <div className="2xl:opacity-0  pa:opacity-100 xl:opacity-0">         <Box imageSrc="./homegaming/games1.png" />
</div>
    </div>
  );
};
const Games = () => {
  return (
    <div className="gf:p-4 max-w-screen-2xl 2xl:ml-[500px] lg:ml-[100px] lg:mt-20 lg:mb-40 items-center justify-center mx-auto margin padding flex flex-col gap-20 md:gap-10 md:mt-60">
      <div className="justify-between flex flex-col mx-auto w-full max-w-[849px] md:max-w-full gap-20 md:gap-10 md:mt-32">
        <h2 className="font-mono-sans text-[32px] md:text-[26px] lg:text-[42px] font-bold leading-[63px] mx-auto">
          Choose From Over 3 Different Games
        </h2>
        <p className="font-mono-sans text-[16px] md:text-[14px] leading-[24px] mx-auto w-full max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className="mx-auto mt-20">
        <IndependentHoverBoxesVertical />
      </div>
    </div>
  );
};


export default Games;
