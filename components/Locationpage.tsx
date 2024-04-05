import React from 'react';

const LocationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-24">
      {/* Headline */}
      <h1 className=" mb-4 text-center  font-mona-sans text-4xl font-semibold leading-16 ">Our Datacenters Are Located In <span className="text-orange-500">7 Regions</span></h1>
      {/* Text */}
      <p className="text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, do eiusmod temporb incididunt lorem ipsu dolor sit amet</p>
      
      {/* Image */}
      <img src="/Content.png" alt="Datacenter" className="w-[1112px] h-[370px] mt-6" />
    </div>
  );
};

export default LocationPage;
