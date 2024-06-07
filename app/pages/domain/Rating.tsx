"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import './slider.css';

const RatingPanel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ratings = [
    {
      src: "/trustpilot.svg",
      reviewsSrc: "/trustpilot-reviews.svg",
      text: "4.9/5 | 9010 reviews"
    },
    {
      src: "/google1.svg",
      reviewsSrc: "/googlerating.svg",
      text: "4.9/5 | 9010 reviews"
    },
    {
      src: "/hostadvice.svg",
      reviewsSrc: "/googlerating.svg",
      text: "4.9/5 | 9010 reviews"
    },
    {
      src: "/serchen.svg",
      reviewsSrc: "/hosting/rating2.svg",
      text: "4.9/5 | 9010 reviews"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % ratings.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [ratings.length]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % ratings.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + ratings.length) % ratings.length);
  };

  return (
    <div className=" w-full max-w-[1300px] mx-auto bg-[#F5F5F5] rounded-3xl ">
      <div className="flex flex-col p-4 items-center  gap-y-4">
        <div className="w-full max-w-fit font-mona-sans font-semibold text-center">
          <h3 className="font-bold text-[22px] leading-normal">Customer Happiness</h3>
        </div>
        <div className="slider-container relative ">
          <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {ratings.map((rating, index) => (
              <div key={index} className="slider-item">
                <div className="flex flex-col gap-y-2 items-center">
                  <Image src={rating.src} alt="" width={150} height={40} />
                  <Image src={rating.reviewsSrc} alt="" width={180} height={40} />
                  <h2 className="px-0 text-[11px]">
                    <span className="font-mona-sans font-extrabold leading-normal text-left">{rating.text}</span>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </div>
    </div>
    
  );
};

export default RatingPanel;
