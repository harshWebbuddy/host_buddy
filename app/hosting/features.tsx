"use client"
import React, { useState } from 'react';

interface BoxProps {
  imageSrc: string;
  title: string;
  description: string;
  arrowIconSrc: string;
  count: number;
}

const Box: React.FC<BoxProps> = ({ imageSrc, title, description, arrowIconSrc, count }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[350px] md:w-[396px] md:h-[264px]  items-center justify-center mx-auto border rounded-xl flex flex-col  bg-[#F9EFE4] hover:bg-white pb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[300px] md:w-[340.32px] md:h-[199px] group flex flex-col  ">
       <div className='flex flex-row items-center justify-between'><img src={imageSrc} className=" mx-auto mt-4 ml-1" alt="Icon" />
       <div>0{count}</div></div> 
        <h2 className="font-bold w-[150px] md:w-[340.32px] item-center justify-center mx-auto  mt-6 text-left text-[24px] mr-80 md:mr-0">{title}</h2>
        <p className="text-[16px] mt-6 group-hover:text-[#16191C] w-[331.49px] items-center justify-center mx-auto text-left">{description}</p>
      </div>
    </div>
  );
};

const IndependentHoverBoxesVertical = () => {
  const [count, setCount] = useState(9); // Start with 10 boxes

  const handleAddBox = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col pa:flex-row md:flex-row gap-8 items-center justify-center md:ml-6 flex-wrap">
      {[...Array(count)].map((_, index) => (
        <Box
          key={index}
          imageSrc="/feature1.svg"
          title="Free SSL Certificate"
          description="Lorem ipsum dolor sit amet consectetur. Velit morbi eleifend tellus pharetra porttitor sagittis. "
          arrowIconSrc="/learnmore.svg"
          count={index + 1}
        />
      ))}
    </div>
  );
};

const Features = () => {
  return (
    <div className='w-full items-center justify-center mx-auto margin padding flex flex-col gap-20 md:gap-20 pa:mt-10 p-10 bg-gradient-to-r from-white to-orange-300 '>
      <div className='md:w-[1200px] mt-20'>
        <div className='item-center justify-center mx-auto -ml-[470px]'>
          <h2 className='heading w-80 md:w-[985px] pa:w-full font-semibold md:h-[126px] items-center justify-center ml-[470px] md:ml-[470px] pa:ml-[460px] '>Experience Exceptional Shared Hosting Features</h2>
          <div className="w-[110px] h-1 md:w-44 pa:w-[130px]  bg-orange-500 md:-mt-14 ml-[655px] md:ml-[1265px] pa:ml-[1060px] "></div>
        </div>
      </div>
      <div className='md:w-[1280px] mb-20'>
        <IndependentHoverBoxesVertical/>
      </div>
    </div>
  );
};

export default Features;
