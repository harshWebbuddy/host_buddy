import React from 'react';

const LocationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* Headline */}
      <h1 className="text-3xl font-bold mb-4 text-center">Our Datacenters Are Located In <span className="text-orange-500">7 Regions</span></h1>
      
      {/* Text */}
      <p className="text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i</p>
      
      {/* Image */}
      <img src="/world-map-from-dots-outline-world-map-continents-with-dots_47243-1324.avif" alt="Datacenter" className="w-96 h-auto" style={{ width: '500px', height: 'auto' }} />
    </div>
  );
};

export default LocationPage;
