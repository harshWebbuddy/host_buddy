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
      className="gap-[20px] flex flex-col border-[#16191C] hover:bg-white rounded-2xl border w-full ma:w-[350px] h-[285px] items-start p-8 justify-start cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} className="image" alt="Web Design Icon" />
      <h2 className="text-black text-[24px] leading-[24px] font-semiboldw-full ma:w-[318px] h-[30px]">{title}</h2>
      <p className="text-[16px] leading-[24px] h-[48px] opacity-70">{description}</p>
      <img src={isHovered ? arrowIconSrc : "/hirebox1a.svg"} className="" alt="Arrow Icon" />
    </div>
  );
};
const IndependentHoverBoxesVertical = () => {
  return (
    <div className="flex flex-col pa:flex-row ma:flex-row gap-8 items-center justify-center">
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
    <div className="flex flex-col pa:flex-row ma:flex-col gap-8">
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
      <div className="bg-[#F9EFE4] w-full  ma:w-[1219px] ma:h-[1066px] rounded-3xl items-center justify-center mx-auto flex flex-col ">
        <div className="flex flex-col ma:flex-row items-center justify-center mx-auto ">
        <div className="pt-20 ma:pt-20 ma:mr-28">
          <div className="flex flex-row w-[150px] ma:w-[361px] h-[63px] gap-8 items-center justify-center ml-28 ma:ml-2 ">
            <img src="/hostbuddy.svg" />
            <img src="/proservice.svg" />
          </div>
          <div className="flex flex-col gap-4 padding">
            <h2 className="heading ma:w-[405px] font-bold">Hire a Pro - We'll Do It For You</h2>
            <p className="ma:w-[539px]">Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.</p>
          </div>
        </div>
        <motion.div className="ma:w-[456px]  h-[511px] rounded-3xl flex flex-row ma:p-10 " whileHover={{scale:1.11}}>
     <img src="/video.svg" className="w-[350px] ma:w-[456px] h-[511px] ma:ml-8  "/>
      </motion.div>
      </div>
      <div  className="flex flex-col ma:flex-row gap-8 ma:-mt-20 ma:ml-8 mb-20 padding">
      <IndependentHoverBoxesStraight/>
      {/* <div className="flex flex-row gap-8 items-center justify-center">
      <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
<div className="gap-[20px] flex flex-col border-[#16191C] hover:bg-white rounded-2xl border w-[350px] h-[285px] items-start p-8 justify-start">
  <img src="/hirebox1.svg" className="image" alt="Web Design Icon" />
  <h2 className="text-black text-[24px] leading-[24px] font-semibold w-[318px] h-[30px]">Web Design</h2>
  <p className="text-[16px] leading-[24px] h-[48px] opacity-70">Laoreet scelerisque euismod egestas suspendisse.</p>
  <img src={hovered ? "/arroworange.svg" : "/hirebox1a.svg"} className="" alt="Arrow Icon" />
</div>
</div>
<div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
<div className="gap-[20px] flex flex-col border-[#16191C] hover:bg-white rounded-2xl border w-[350px] h-[285px] items-start p-8 justify-start">
  <img src="/hirebox1.svg" className="image" alt="Web Design Icon" />
  <h2 className="text-black text-[24px] leading-[24px] font-semibold w-[318px] h-[30px]">Web Design</h2>
  <p className="text-[16px] leading-[24px] h-[48px] opacity-70">Laoreet scelerisque euismod egestas suspendisse.</p>
  <img src={hovered ? "/arroworange.svg" : "/hirebox1a.svg"} className="" alt="Arrow Icon" />
</div>
</div>
        
<div>
    
</div>
      </div> */}
      <IndependentHoverBoxesVertical/>
      </div>    
      </div>
    </div>
  );
};

export default Pro;
