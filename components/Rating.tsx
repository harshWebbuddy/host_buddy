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
    <motion.div className="flex flex-col md:flex-row justify-center items-center mx-auto w-full md:w-[1220px] xl:w-full p-10 rounded-2xl mt-16" whileHover={{ scale: 1.1 }}>
      <div className="flex flex-col items-center md:flex-row gap-10 xl:gap-20">
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-white text-lg md:text-xl xl:text-2xl">Customer Happiness</h3>
          <div className="flex items-center gap-2">
            <span className="text-white text-lg md:text-xl xl:text-2xl">Google</span>
            <StarRating initialRating={3.5} onChange={handleRatingChange} />
          </div>
          <h2 className="text-white text-xs md:text-sm xl:text-base">
            <span className="text-white font-semibold">4.9/5 | 9010</span> reviews
          </h2>
        </div>
        <div className="hidden md:flex items-center h-[2px] xl:h-[60px] w-[30px] xl:w-[60px] border-t border-gray-300"></div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-white text-lg md:text-xl xl:text-2xl">Trustpilot</h3>
          <div className="flex items-center gap-2">
            <span className="text-white text-lg md:text-xl xl:text-2xl">Trustpilot</span>
            <StarRating initialRating={3.5} onChange={handleRatingChange} />
          </div>
          <h2 className="text-white text-xs md:text-sm xl:text-base">
            <span className="text-white font-semibold">4.9/5 | 9010</span> reviews
          </h2>
        </div>
        {/* Add more rating panels here if needed */}
      </div>
    </motion.div>
  );
};

export default Ratingpanel;