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
    <div className="flex flex-col pa:flex-row 2xl:flex-row 2xl:flex-nowrap gap-8 items-center justify-center md:ml-6 pa:w-[1200px] pa:flex-wrap  2xl:ml-[500px] pa:-ml-[400px] xl:flex-row xl:flex-nowrap" >
      <Box imageSrc="./homegaming/games1.png" />
      <Box imageSrc="./homegaming/games3.png" />
      <Box imageSrc="./homegaming/games2.png" />
  <div className="2xl:opacity-0  pa:opacity-100">         <Box imageSrc="./homegaming/games1.png" />
</div>
    </div>
  );
};
const Games = () => {
  return (
    <div className="md:w-[1220.08px] items-center mp:mt-20 justify-center mx-auto margin padding flex flex-col gap-20 md:gap-10 md:mt-60 pa:mt-10 mp:mb-28 ">
      <div className="justify-between flex flex-col   gap-[20px] 2xl:ml-20  mr-24 md:-mr-8 pa:-ml-[350px] md:mt-32 mp:-ml-6 xl:ml-[100px]">
        <h2 className=" font-mono-sans 2xl:text-[42px] mp:text-[32px] leading-[63px] 2xl:w-[849px] w-full mp:ml-24  pa:w-full font-bold md:h-[126px] items-center justify-center ml-32  pa:-ml-2 ">
          Choose From Over 3 Different Games
        </h2>
        <p className="font-mono-sans w-[400px]  mp:w-[300px] mp:ml-24 2xl:-mt-16 2xl:ml-10 mp:mt-2 pa:-mt-16 pa:-ml-14 pa:w-[700px]  2xl:w-[689px] h-[48px] text-[16px] leading-[24px] items-center justify-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.        </p>
      </div>
      <div>
        <IndependentHoverBoxesVertical />
      </div>
    </div>
  );
};

export default Games;
