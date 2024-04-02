import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div>
        <video height="452" width="768" autoPlay  >
          <source src="/video.mp4" />
          Your browser does not support the video tag...
        </video>
      </div>
      <div>
        <h4 className="text-orange-500 font-bold italic text-xl">Domain Name Search</h4>
      </div>
      <div className="">
        <h2 className="font-extrabold text-7xl">Find Your Dream Domain Name</h2>
      </div>

      <div>
        <h4  className="font-bold mb-10">
          Use our domain checker tool to find the perfect name for your online
          project.
        </h4>
      </div>

     ddddv

      <div>
       <h2>
   <span className="text-black font-bold text-xl">   .com </span>
   <span className="italic text-xs text-gray-800 font-bold"> $25.00 </span>
   <span className="text-black font-bold">   $19.00 </span>  
   <span className="text-black font-bold text-xl">   .co </span>
   <span className="italic text-xs text-gray-800 font-bold"> $25.00 </span>
   <span className="text-black font-bold">  $15.00</span>  
   <span className="text-black font-bold text-xl">   .net</span>
   <span className="italic text-xs text-gray-800 font-bold"> $25.00 </span>
   <span className="text-black font-bold">   $16.00 </span>  

   <span className="text-black font-bold text-xl">    .store </span>
   <span className="italic text-xs text-gray-800 font-bold"> $25.00 </span>
   <span className="text-black font-bold">  $18.00</span>  
        </h2>
      </div>
    </div>
  );
};

export default Hero;
