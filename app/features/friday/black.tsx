// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
import { FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";
const Black = () => {
 const items = [
  {
  
    title: "Seamless management tools",
    description:
      "Lorem ipsum dolor sit amet consectetur. elementum tempor proin in purus tincidunt magna. Integer ut netus nulla pellentesque.",
  },
  {
    
    title: "Website speed Redhot",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet enim faucibus libero viverra lacus. Viverra bibendum euismod quis ultrices ut non. Ut pulvinar vitae in cursus mauris netus.",
  },
  // {
  {
    title: "Dedicated 24/7 support",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet enim faucibus libero viverra lacus. Viverra bibendum euismod quis ultrices ut non. Ut pulvinar vitae in cursus mauris netus.",
  },
];
  return (
    <div className="w-full bg-gradient-to-b from-[#292E34] to-[#16191C]   px-3 py-20">

      <div className="slide-reveal w-full max-w-[1220px] mx-auto">
      <div className="flex flex-col bl:flex-row justify-between gap-y-6 2xl:gap-y-10 gap-x-30 items-center  pb-16">
        <div className="relative w-full items-center justify-center">
          <h2 className=" capitalize font-mona-sans text-white font-semibold 2xl:fomt-bold text-[32px] 2xl:text-[42px] leading-relaxed w-full 2xl:text-left ">
          <span className="pb-1 2xl:pb-4 border-b-4 border-orange-500"> Smart   </span>Main Features Available
          </h2>
      
        </div>
      
      </div>
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-10 2xl:gap-y-14 bl:items-center justify-center mx-auto ">
  {items.map((item, index) => (
    <div key={index} className="relative flex-1 w-full gap-10 group">
      <div className="rounded-xl group  group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl  bg-transparent border text-[#16191C] p-4 pl-8 py-10  cursor-pointer">
        <h2 className="text-[24px] font-bold  leading-[26px] opacity-1 mb-4 text-white group-hover:text-orange-500 ">{item.title}</h2>
        <p className="w-full opacity-70 font-mona-sans text-[16px] font-normal leading-normal text-left text-white group-hover:text-black">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};
export default Black;











