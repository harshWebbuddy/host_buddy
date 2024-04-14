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
      className="w-[350px] ma:w-[396px] ma:h-[264px]  items-center justify-center mx-auto border rounded-xl flex flex-col  bg-[#F9EFE4] hover:bg-white pb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[300px] ma:w-[340.32px] ma:h-[199px] group flex flex-col  ">
       <div className='flex flex-row items-center justify-between'><img src={imageSrc} className=" mx-auto mt-4 ml-1" alt="Icon" />
       <div>0{count}</div></div> 
        <h2 className="font-bold w-[150px] ma:w-[340.32px] item-center justify-center mx-auto  mt-6 text-left text-[24px] mr-80 ma:mr-0">{title}</h2>
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
    <div className="flex flex-col pa:flex-row ma:flex-row gap-8 items-center justify-center ma:ml-6 flex-wrap">
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
    <div className='w-full items-center justify-center mx-auto margin padding flex flex-col gap-20 ma:gap-20 pa:mt-10 p-10 bg-gradient-to-r from-white to-orange-300 '>
      <div className='ma:w-[1200px] mt-20'>
        <div className='item-center justify-center mx-auto -ml-[470px]'>
          <h2 className='heading w-80 ma:w-[985px] pa:w-full font-semibold ma:h-[126px] items-center justify-center ml-[470px] ma:ml-[470px] pa:ml-[460px] '>Experience Exceptional Shared Hosting Features</h2>
          <div className="w-[110px] h-1 ma:w-44 pa:w-[130px]  bg-orange-500 ma:-mt-14 ml-[655px] ma:ml-[1265px] pa:ml-[1060px] "></div>
        </div>
      </div>
      <div className='ma:w-[1280px] mb-20'>
        <IndependentHoverBoxesVertical/>
      </div>
    </div>
  );
};

export default Features;
