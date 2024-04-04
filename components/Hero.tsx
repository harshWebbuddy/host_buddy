import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 h-full min-h-[85vh] relative py-40 px-3">
      <div className="absolute inset-0 w-full h-full">
        {/* background video */}
        <video height="452" width="768" autoPlay className="absolute inset-0 object-cover w-full h-full">
          <source src="/video.mp4" />
          Your browser does not support the video tag...
        </video>

        {/* video overlay */}
        <div className="absolute z-[1] bg-[#16191C] bg-opacity-80 inset-0 w-full h-full" />
      </div>

      {/* main content in the hero section */}
      <div className="relative z-[2] w-full h-full flex flex-col space-y-10 justify-center items-center text-white">
        <h4 className="text-orange-500 font-bold italic">Domain Name Search</h4>
        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-7xl !mt-5 text-center">Find Your Dream Domain Name</h2>
        <h4 className="text-lg text-center">Use our domain checker tool to find the perfect name for your online project.</h4>
        <div className="bg-white rounded-full p-1 w-full max-w-5xl mx-auto focus-within:ring-[3px] ring-white/80 transition-all duration-500">
          <form className="flex w-full">
            <input
              type="text"
              alt=""
              className="w-full flex-1 outline-none placeholder:text-[#B8B8B8] bg-transparent rounded-full px-5 text-black text-lg"
              placeholder="Find your dream domain"
            />
            <button className="bg-[#FF7500] h-[62px] rounded-full w-full flex-1 max-w-[182px] hover:bg-opacity-80 transition-all duration-300 text-lg">
              Search
            </button>
          </form>
        </div>
        <div className="w-full flex flex-wrap mx-auto max-w-5xl justify-center items-center gap-6">
          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .com </span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $19.00 </span>
          </h2>
          <div className="h-3 w-3 bg-[#FF7500] rounded-full mt-1" />
          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .co </span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $15.00</span>
          </h2>
          <div className="h-3 w-3 bg-[#FF7500] rounded-full mt-1" />

          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .net</span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $16.00 </span>
          </h2>
          <div className="h-3 w-3 bg-[#FF7500] rounded-full mt-1" />

          <h2 className="font-bold text-base sm:text-xl space-x-1">
            <span> .store </span>
            <span className="text-white/40 font-bold text-lg line-through"> $25.00 </span>
            <span> $18.00</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;