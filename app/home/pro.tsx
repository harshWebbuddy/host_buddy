"use client"
import { motion } from "framer-motion";
import React,{useState} from "react";

interface BoxProps {
  imageSrc: string;
  title: string;
  description: string;
  arrowIconSrc: string;
}

const Box: React.FC<BoxProps> = ({ imageSrc, title, description, arrowIconSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="gap-[20px] flex flex-col border-[#16191C] hover:bg-white rounded-2xl border w-full md:w-[350px] h-[285px] items-start p-8 justify-start cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} className="image" alt="Web Design Icon" />
      <h2 className="text-black text-[24px] leading-[24px] font-semiboldw-full md:w-[318px] h-[30px]">{title}</h2>
      <p className="text-[16px] leading-[24px] h-[48px] opacity-70">{description}</p>
      <img src={isHovered ? arrowIconSrc : "/hirebox1a.svg"} className="" alt="Arrow Icon" />
    </div>
  );
};
const IndependentHoverBoxesVertical = () => {
  return (
    <div className="flex flex-col pa:flex-row xl:flex-row 2xl:flex-row gap-8 items-center justify-center">
      <Box
        imageSrc="/hirebox1.svg"
        title="Web Design"
        description="Laoreet scelerisque euismod egestas suspendisse."
        arrowIconSrc="/arroworange.svg"
      />
      <Box
        imageSrc="/hirebox1.svg"
        title="Graphic Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        arrowIconSrc="/arroworange.svg"
      />
    </div>
  );
};
const IndependentHoverBoxesStraight = () => {
  return (
    <div className="flex flex-col pa:flex-row xl:flex-col 2xl:flex-col gap-8">
      <Box
        imageSrc="/hirebox1.svg"
        title="Web Design"
        description="Laoreet scelerisque euismod egestas suspendisse."
        arrowIconSrc="/arroworange.svg"
      />
      <Box
        imageSrc="/hirebox1.svg"
        title="Graphic Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        arrowIconSrc="/arroworange.svg"
      />
    </div>
  );
};
const Pro = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="mx-auto item-center justify-center w-full">
      <div className="bg-[#F9EFE4] 2xl:gap-0 w-full  2xl:w-[1219px] 2xl:h-[1066px] pa:gap-0 rounded-3xl items-center justify-center mx-auto flex flex-col ">
        <div className="flex flex-col xl:-mt-10 xl:ml-16 pa:flex-row xl:w-[1100px] xl:justify-between pa:gap-60 2xl:gap-96 2xl:-mt-10 2xl:flex-row items-center justify-center mx-auto 2xl:ml-20 pa:ml-8 pa:-mt-28 ">
        <div className="pa:w-40 pt-20 2xl:-mt-40 2xl:mr-28 pa:ml-0">
          <div className="pa:ml-8 2xl:ml-2 flex flex-row w-[150px] md:w-[361px] h-[63px] gap-8 items-center justify-center ml-28 md:ml-2 ">
            <img src="/hostbuddy.svg" />
            <img src="/proservice.svg" />
          </div>
          <div className="flex flex-col gap-4 padding ">
            <h2 className="heading md:w-[405px] font-bold">Hire a Pro - We'll Do It For You</h2>
            <p className="2xl:w-[539px] pa:w-80">Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.</p>
          </div>
        </div>
        <motion.div className="pa:mt-32 xl:w-[400px] 2xl:w-[456px] pa:w-[300px] h-[511px] rounded-3xl flex flex-row 2xl:mt-10 2xl:p-10 " whileHover={{scale:1.11}}>
     <img src="/video.svg" className="w-[350px] md:w-[456px] h-[511px] md:ml-8  "/>
      </motion.div>
      </div>
      <div  className="flex flex-col xl:flex-row 2xl:flex-row gap-8 2xl:-mt-28 2xl:ml-8 mb-20 padding">
      <IndependentHoverBoxesStraight/>
      <IndependentHoverBoxesVertical/>
      </div>    
      </div>
    </div>
  );
};

export default Pro;
