"use client"
import React from "react";

const SvgMap = () => {
  // Function to handle hover
  const handleHover = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.currentTarget.style.fill = "#FF7500"; // Change fill color to red on hover
  };

  // Function to handle mouse leaving
  const handleMouseLeave = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.currentTarget.style.fill = "#ececec"; // Restore original fill color when mouse leaves
  };

  return (
    <svg
      baseProfile="tiny"
      fill="#ececec"
      height="857"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".2"
      version="1.2"
      viewBox="0 0 2000 857"
      width="2000"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: `url('/cursormid.svg'), auto` }} // Set custom cursor
    >
      {/* Country paths with hover effect */}
      {/* Add event listeners for hover and mouse leave */}
      <path
        d="M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z"
        id="AF"
        name="Afghanistan"
        className="country"
        onMouseOver={handleHover} // Handle mouse over event
        onMouseLeave={handleMouseLeave} // Handle mouse leave event
      ></path>
      {/* Other country paths */}
    </svg>
  );
};

const LocationPage = () => {
  return (
    <div className="flex flex-col pa:h-[650px] h-[500px] md:h-[927px] items-center justify-center padding bg-black">
        <div className="margin">      {/* Headline */}
      <div className="w-full md:w-[1220px] h-[126px] flex flex-col md:flex-row md:gap-[129px] mb-28 md:mb-20">
      <div className="w-full md:w-[594px] h-[126px] wording">
      <h1 className="mb-4 text-center md:text-left font-mona-sans heading font-semibold wording text-white  ">
        Our Datacenters Are Located In <span className="text-orange-500">7 Regions</span>
      </h1>
      </div>
      {/* Text */}
      <div className="w-full md:w-[497px] h-[72px]  items-center justify-center ">
      <p className="text-lg md:mb-8 text-white opacity-75 text-[13px] md:text-[16px] text-center md:text-left md:w-[497px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, do eiusmod
        temporb incididunt lorem ipsu dolor sit amet
      </p>
      </div>
      </div>
      {/* Image */}
      <div className="w-full md:w-[1220px] md:h-[581px]  items-center justify-center mx-auto">
     <img src="/world.svg" />
     </div>
     
     
</div>
    </div>
  );
};

export default LocationPage;
