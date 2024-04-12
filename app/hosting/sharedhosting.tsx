"use client"
import React,{useState} from 'react'
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
      className="ma:w-[393px] ma:h-[358px] items-center justify-center mx-auto border rounded-xl flex flex-col gap-2 hover:bg-[#F9EFE4] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[350px] ma:w-[249.08px] h-[300px] ma:h-[248.87px] group">
        <img src={imageSrc} className="item-center justify-center mx-auto mt-4" alt="Icon" />
        <h2 className="text-[17px] font-bold w-[150px] ma:w-[141px] item-center justify-center mx-auto text-center mt-6">{title}</h2>
        <p className="text-[16px] text-center mt-6 group-hover:text-[#16191C] w-56 items-center justify-center mx-auto">{description}</p>
      </div>
      <div className="item-center justify-center mx-auto mt-6 pa:mb-4 ">
  <img
    src={isHovered ? arrowIconSrc : "/arrowrightwards.svg"}
    className={isHovered ? "w-30 ma:w-40" : "w-50"}
    alt="Arrow Icon"
  />
</div>
    </div>
  );
};
const IndependentHoverBoxesVertical = () => {
  return (
    <div className="flex flex-col pa:flex-row ma:flex-row gap-8 items-center justify-center ma:ml-6">
      <Box
        imageSrc="/hirebox1.svg"
        title="Fastest Website
        Loading Speed"
        description="Lorem ipsum dolor sit amet consectetur. Velit morbi eleifend tellus pharetra porttitor sagittis. "
        arrowIconSrc="/learnmore.svg"
      />
       <Box
        imageSrc="/hirebox1.svg"
        title="Fastest Website
        Loading Speed"
        description="Lorem ipsum dolor sit amet consectetur. Velit morbi eleifend tellus pharetra porttitor sagittis. "
        arrowIconSrc="/learnmore.svg"
      />
        <Box
        imageSrc="/hirebox1.svg"
        title="Fastest Website
        Loading Speed"
        description="Lorem ipsum dolor sit amet consectetur. Velit morbi eleifend tellus pharetra porttitor sagittis. "
        arrowIconSrc="/learnmore.svg"
      />
    </div>
  );
};
const SharedHosting = () => {

  return (
    <div className='ma:w-[1220.08px] items-center justify-center mx-auto margin padding flex flex-col gap-20 ma:gap-10 pa:mt-10  '>
<div className='justify-between flex flex-col pa:flex-col ma:flex-row  gap-[40px]  mr-24 ma:-mr-8 pa:-ml-28 ma:mt-32'>
    <div className='item-center justify-center mx-auto '>
    <h2 className='heading w-96 ma:w-[471px] pa:w-full font-bold ma:h-[126px] items-center justify-center ml-32 ma:ml-0 pa:ml-12 '>The Premier Choice for
Shared Hosting</h2>
    <div className="w-[110px] h-1 ma:w-36 pa:w-[110px]  bg-orange-500 ma:mt-2 ml-[130px] ma:ml-[0px] pa:ml-[400px] "></div>
    </div>
    <p className='w-[400px] ml-32 ma:ml-0   pa:w-full  ma:w-[600px] h-[48px] text-[16px] items-center justify-center ma:mt-10'>Our mission is to accelerate business growth with unparalleled performance, support, and security, surpassing industry-leading hosting providers.</p>
</div>
<div>
  <IndependentHoverBoxesVertical/>
</div>

        </div>
  )
}

export default SharedHosting;