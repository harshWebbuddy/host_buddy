"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
interface StarRatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
}
const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  onChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const handleStarClick = (newRating: number) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          className={`text-3xl ${
            index <= rating ? "text-yellow-500" : "text-gray-300"
          } focus:outline-none`}
          onClick={() => handleStarClick(index)}
        >
          ★
        </button>
      ))}
    </div>
  );
};
const Ratingpanel = () => {
  const handleRatingChange = (newRating: number) => {
    console.log("New rating:", newRating);
    // Handle the rating change logic here
  };
  return (
    <motion.div className="flex flex-col md:flex-row justify-center items-center mx-auto bg-[#F5F5F5] w-full md:w-[1220px] 2xl:w-[1220px] 2xl:h-[169.27px] xl:w-[1000px] pa:w-[800px] p-10 rounded-2xl mt-16" whileHover={{scale:1.1}}>
    <div className="md:flex items-center justify-center pa:gap-x-2 md:gap-x-28  2xl:gap-x-20 mt-16 mb-6">
      <div className="font-mona-sans font-semibold   text-center md:text-left h-[63px] pa:-mt-40 2xl:-mt-8">
        <h3 className="font-bold text-[20px] leading-[63px]">Customer Happiness</h3>
      </div>
      <div className="flex flex-col md:flex-row pa:flex-row justify-between 2xl:mt-8 md:gap-2 2xl:gap-x-2 pa:flex-wrap md:flex-nowrap 2xl:flex-nowrap">
        <div className="flex flex-col items-center pa:w-[40%] mb-20 hover:scale-105 transition-transform">
          <div className="text-xl font-bold text-blue-600 mb-4 mt-3">
            G<span className="text-red-600">o</span>o
            <span className="text-yellow-500">g</span>l
            <span className="text-blue-600">e</span>
          </div>
          <StarRating initialRating={3.5} onChange={handleRatingChange} />
          <h2 className="text-[15px]">
            <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
              4.9/5 | 9010
            </span>{" "}
            reviews
          </h2>
        </div>
  
       <div className="hidden md:flex items-center 2xl:-mt-20 md:opacity-100 pa:opacity-0 2xl:opacity-100">
          <div className="2xl:w-[50px] pa:w-[30px] border-t  border-gray-600 transform rotate-90 opacity-1" style={{ borderStyle: 'dotted' }}></div>
        </div>
        <div className="flex flex-col items-center pa:w-[40%] mb-20 hover:scale-105 transition-transform">
        <h2 className="text-xl font-bold mb-4 mt-3">Trustpilot</h2>
        <StarRating initialRating={3.5} onChange={handleRatingChange} />
        <h2 className="text-[15px]">
          <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
            4.9/5 | 9010
          </span>
          reviews
        </h2>
      </div>
  
      
     <div className="hidden md:flex items-center 2xl:-mt-20 md:opacity-100 pa:opacity-0 2xl:opacity-100">
          <div className="2xl:w-[50px] pa:w-[30px] border-t  border-gray-600 transform rotate-90 opacity-1" style={{ borderStyle: 'dotted' }}></div>
        </div>
        <div className="flex flex-col items-center pa:w-[40%] mb-20 hover:scale-105 transition-transform">
        <h2 className="text-xl font-bold mb-4 mt-3">Trustpilot</h2>
        <StarRating initialRating={3.5} onChange={handleRatingChange} />
        <h2 className="text-[15px]">
          <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
            4.9/5 | 9010
          </span>
          reviews
        </h2>
      </div>
  
      
      <div className="hidden md:flex items-center md:opacity-100 pa:opacity-0 2xl:opacity-100">
          <div className="2xl:w-[50px] pa:w-[30px] border-t  border-gray-600 transform rotate-90 opacity-1" style={{ borderStyle: 'dotted' }}></div>
        </div>
     
      <div className="flex flex-col items-center pa:w-[40%]  pa:mr-12 mb-4 hover:scale-105 transition-transform">
        <h2 className="text-xl font-bold mb-4 mt-3">Trustpilot</h2>
        <StarRating initialRating={3.5} onChange={handleRatingChange} />
        <h2 className="text-[15px]">
          <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
            4.9/5 | 9010{" "}
          </span>{" "}
          reviews
        </h2>
      </div>
      </div>
    </div>
   
  </motion.div>
  
  );
};
export default Ratingpanel;