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
      <div className="w-full max-w-[1300px] mx-auto bg-[#F5F5F5]  rounded-3xl mt-14">
        <div className="flex flex-col 2xl:flex-row items-center p-10 gap-[85px]">
          <div className="w-full max-w-fit font-mona-sans font-semibold text-center bl:text-left">
            <h3 className="font-bold text-[24px] leading-[63px]">Customer Happiness</h3>
          </div>
          <div className="w-full grid grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 gap-x-0 gap-y-10 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="space-y-2">
                <Image src="/trustpilot.svg" alt="" width={150} height={40} />
                <Image src="/trustpilot-reviews.svg" alt="" width={180} height={40} />
                <h2 className="px-0  text-[11px] ">
                  <span className="font-mona-sans font-extrabold leading-normal text-left">4.9/5 | 9010</span> reviews
                </h2>
              </div>
          </div>
          <svg className="w-full h-16 pt-2 " width="1" height="57" viewBox="0 0 1 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.63501" x2="0.499998" y2="56.635" stroke="#C8C8C8" stroke-dasharray="2 2"/>
</svg>

          <div className="flex flex-col items-center">
            <div className="space-y-1">
              <Image src="/google1.svg" alt="" width={100} height={40} className="-mb-3" />
             <img src="/hosting/rating1.svg" className="w-auto h-[28px]"/> 
            {/* <StarRating initialRating={3.5} onChange={handleRatingChange} /> */}
            <h2 className="px-0  text-[11px] ">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010</span> reviews
              </h2>
            </div>
          </div>
          <svg className="w-full h-16 pt-2 " width="1" height="57" viewBox="0 0 1 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.63501" x2="0.499998" y2="56.635" stroke="#C8C8C8" stroke-dasharray="2 2"/>
</svg>
          <div className="flex flex-col items-center">
          <div className="space-y-2">
              <Image src="/hostadvice.svg" alt="" width={120} height={40} className="mt-2"/>
              <img src="/hosting/rating1.svg" className="w-auto h-[28px]"/> 

              {/* <StarRating initialRating={3.5} onChange={handleRatingChange} /> */}
              <h2 className="px-0  text-[11px] ">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010</span> reviews
              </h2>
            </div>
          </div>  
          {/* <div className="border-t-[3px] border-dashed border-[#dedede] w-14 h-1 relative  group-hover:opacity-0 transition rotate-90 duration-200" /> */}
          <svg className="w-full h-16 pt-2 " width="1" height="57" viewBox="0 0 1 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.63501" x2="0.499998" y2="56.635" stroke="#C8C8C8" stroke-dasharray="2 2"/>
</svg>
          <div className="flex flex-col items-center">
          <div className="space-y-2.5">
              <Image src="/serchen.svg" alt="" width={100} height={40} />
              <img src="/hosting/rating2.svg" className="w-auto h-[28px]"/> 

              {/* <StarRating initialRating={4} onChange={handleRatingChange} color="!text-[#73CF11]" /> */}
              <h2 className="px-0  text-[11px] ">
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