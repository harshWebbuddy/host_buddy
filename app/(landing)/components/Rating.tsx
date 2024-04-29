"use client";
import Image from "next/image";
import React, { useState } from "react";
interface StarRatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  color?: string;
}
const StarRating: React.FC<StarRatingProps> = ({ initialRating = 0, onChange, color }) => {
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
          className={`text-4xl ${index <= rating ? `${color ?? "text-yellow-500"}` : "text-gray-300"} focus:outline-none`}
          onClick={() => handleStarClick(index)}>
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
    <div className="w-full max-w-[1360px] mx-auto bg-[#F5F5F5] rounded-3xl mt-20">
      <div className="flex flex-col 2xl:flex-row items-center p-10 gap-14">
        <div className="w-full max-w-fit font-mona-sans font-semibold text-center bl:text-left">
          <h3 className="font-bold text-3xl leading-relaxed">Customer Happiness</h3>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10">
          <div className="flex flex-col items-center">
            <div className="space-y-3">
              <Image src="/trustpilot.svg" alt="" width={150} height={40} />
              <Image src="/trustpilot-reviews.svg" alt="" width={180} height={40} />
              <h2 className="">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010</span> reviews
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="space-y-2">
              <Image src="/google1.svg" alt="" width={100} height={40} className="-mb-3" />
              <StarRating initialRating={3.5} onChange={handleRatingChange} />
              <h2 className="">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010</span> reviews
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="space-y-3">
              <Image src="/hostadvice.svg" alt="" width={120} height={40} className="mt-2"/>
              <StarRating initialRating={3.5} onChange={handleRatingChange} />
              <h2 className="">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010</span> reviews
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="space-y-3">
              <Image src="/serchen.svg" alt="" width={120} height={40} />
              <StarRating initialRating={4} onChange={handleRatingChange} color="!text-[#73CF11]" />
              <h2 className="">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010 </span> reviews
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ratingpanel;
