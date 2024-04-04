import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const FooterBox = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-orange-500 rounded-lg justify-between'>
      <div className='flex flex-col justify-between m-5 sm:m-10 w-full sm:w-1/2'>
        <div>
          <h5 className='font-inter italic text-base font-light leading-[30px] text-left text-white'>Newsletter</h5>
        </div>
        <div>
          <h2 className='font-MonaSans font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[50px] text-left text-white'>Don't miss Any News & offers From Us.</h2>
        </div>
      </div>
      <div className='flex flex-col justify-between m-5 sm:m-10 w-full sm:w-1/2'>
        <div>
          <p className='font-mona-sans text-xl font-normal leading-6 text-left text-white'>Metus sed Disse aliquet amet ultrices faucibus mauris sito diattis morbi suspendisse pellentesque pulvinar interdum justo suspendisse.</p>
        </div>
        <div className="flex justify-center mt-5 sm:mt-10 mb-5 sm:mb-7 mr-7">
          <div className="relative">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full sm:w-96 p-3 rounded-xl text-xs md:text-xl outline-none focus:ring focus:ring-white"
            />
            <button className=" text-xs md:text-xl absolute font-sans top-0 md:top-1 right-0    md:right-1 h-10 w-14 sm:w-32 bg-gradient-to-b from-gray-800 to-gray-900 text-orange-500 rounded-xl flex justify-center items-center ">
             <h2 className='ml-2 md:ml-0'> Subscribe</h2>
              <FaArrowRight className="ml-2 item-center" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
