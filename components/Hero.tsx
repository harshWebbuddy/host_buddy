import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h4>Domain Name Search</h4>
      </div>
      <div>
        <h2>Find Your Dream Domain Name</h2>
      </div>

      <div>
        <h4>
          Use our domain checker tool to find the perfect name for your online
          project.
        </h4>
      </div>

      <div className="flex justify-center mt-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Find your dream domain"
          className="w-96 p-3 rounded-l-full outline-none focus:ring focus:ring-blue-400"
        />
        <button className="absolute top-0 right-0 h-full w-28 bg-orange-500 text-white rounded-3xl flex justify-center items-center">
          Search
        </button>
      </div>
    </div>

      <div></div>
    </div>
  );
};

export default Hero;
