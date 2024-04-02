import { FiHeadphones } from 'react-icons/fi';
import React from 'react';

const Support = () => {
  return (
    <div className="flex flex-col gap-20 bg-gray-700">
              <div className="absolute top-0 left-0 w-24 h-24 border border-dotted border-gray-500"></div>
    
      <div className="border-b-2 border-gray-400 bg-gray-100 p-4">
        {/* Top Boundary */}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row w-9/12 justify-between mx-auto relative">
          <div> 
            <h2 className="text-3xl font-bold">Why Choose HostBuddy</h2>
          </div>
          <div>
            <p className="text-center w-6/12">Lorem ipsum dolor sit amet consectetur. Sit placerat pellentesque lacus elementum bibendum. Vitae tortor scelerisque maecenas amet sit.</p>     
          </div>
          {/* Orange line below "Why Choose HostBuddy" */}
          <div className="absolute w-1/12 h-1 bg-orange-500 bottom-0 left-0"></div>
        </div>
        
        <div className="flex justify-center items-center flex-grow">
          {/* Three Boxes */}
          <div className="flex justify-around w-6/12 gap-4">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-4/12 relative">
              {/* Orange color square box */}
              <div className="absolute top-0.5 left-9 bg-orange-500 w-10 h-10 flex justify-center items-center rounded-md">
  {/* Headphone icon */}
  <FiHeadphones size={24} color="white" />
</div>

              {/* Content inside the box */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-4">Support 24x7x365</h2>
                <p className="text-white">Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a standard.</p>
              </div>
            </div>
            {/* Repeat the same structure for other boxes */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-4/12">
              <h2 className="text-white text-2xl font-bold mb-4">Support 24x7x365</h2>
              <p className="text-white">Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a standard.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-4/12">
              <h2 className="text-white text-2xl font-bold mb-4">Support 24x7x365</h2>
              <p className="text-white">Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a standard.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 bg-gray-100 p-4">
        {/* Bottom Boundary */}
      </div>
    </div>  
  );
};

export default Support;
