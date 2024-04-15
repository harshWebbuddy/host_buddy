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
    <div className="flex flex-col pa:flex-row md:flex-row gap-8 items-center justify-center md:ml-6">
      <Box imageSrc="./homegaming/games1.png" />
      <Box imageSrc="./homegaming/games3.png" />
      <Box imageSrc="./homegaming/games2.png" />
    </div>
  );
};
const Games = () => {
  return (
    <div className="md:w-[1220.08px] items-center justify-center mx-auto margin padding flex flex-col gap-20 md:gap-10 md:mt-60 pa:mt-10  ">
      <div className="justify-between flex flex-col   gap-[20px]  mr-24 md:-mr-8 pa:-ml-28 md:mt-32">
        <h2 className="heading w-96 md:w-full pa:w-full font-semibold md:h-[126px] items-center justify-center ml-32  pa:ml-12 ">
          Choose From Over 3 Different Games
        </h2>
        <p className="w-[400px] ml-32 md:ml-48 md:-mt-20  pa:w-full  md:w-[600px] h-[48px] text-[16px] items-center justify-center ">
          Our mission is to accelerate business growth with unparalleled.
        </p>
      </div>
      <div>
        <IndependentHoverBoxesVertical />
      </div>
    </div>
  );
};

export default Games;
