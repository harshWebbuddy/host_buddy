"use client";
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
    <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white h-full gap-40">
      <div className="font-mona-sans font-semibold text-xl leading-63 text-left w-64 h-16 items-center justify-center ml-20 md:mt-16">
        <h3 className="font-bold">Customer Happiness</h3>
      </div>
      <div>
      <div className="text-xl font-bold text-blue-600 mb-4 mt-3 ">
      G<span className="text-red-600">o</span>o<span className="text-yellow-500">g</span>l<span className="text-blue-600">e</span>
    </div>
        <StarRating initialRating={3.5} onChange={handleRatingChange} />
        <h2 className="text-lg">
        <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
            4.9/5 | 9010{" "}
          </span>{" "}
          reviews
        </h2>
      </div>
      <div>
      <h2 className="text-xl font-bold mb-4 mt-3">Trustpilot </h2>
        <StarRating initialRating={3.5} onChange={handleRatingChange} />
        <h2 className="text-lg">
          <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
            4.9/5 | 9010{" "}
          </span>{" "}
          reviews
        </h2>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 mt-3">Hostadvice</h2>
        <StarRating initialRating={3.5} onChange={handleRatingChange} />
        <h2 className="">
        <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
            4.9/5 | 9010
          </span>{" "}
          reviews
        </h2>
      </div>
      <div>
      <h2 className="text-xl font-bold mb-4 mt-3">Serchen</h2>

        <StarRating initialRating={3.5} onChange={handleRatingChange} />
        <h2 className="text-lg">
        <span className="font-mona-sans font-extrabold text-xs leading-63 text-left w-64 h-16 ">
            4.9/5 | 9010{" "}
          </span>{" "}
          reviews
        </h2>
      </div>
    </div>
  );
};

export default Ratingpanel;
