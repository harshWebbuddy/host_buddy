"use client";

import Image from "next/image";


const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find
        </h1>

        <p className="hero__subtitle">
          Streamline experience with our effortless booking
          process.
        </p>

        
      </div>
      <div className="hero__image-container">
        

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
