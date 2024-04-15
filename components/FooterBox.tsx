import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const FooterBox = () => {
  return (
    <div className='flex flex-col md:flex-row pa:flex-row bg-orange-500 rounded-lg justify-between w-[300px] md:w-[1220px] pa:w-[600px]  h-[470px] pa:h-[280px] md:h-[206.67px]  p-5'>
      <div className='flex flex-col justify-between w-[230px] md:w-[453px] pa:w-[253px] h-[132px]  m-5 '>
        <div className='w-[82px] h-[30px]'>
          <h5 className='font-inter italic text-base font-light leading-7 text-left text-white'>Newsletter</h5>
        </div>
        <div className='md:w-[453px] h-[101.67px]'>
          <h2 className='font-MonaSans font-semibold text-4xl leading-12 text-left text-white'>Don't miss Any News & offers From Us.</h2>
        </div>
      </div>
      <div className='flex flex-col justify-between w-[230px] md:w-[546px] pa:w-[253px]  h-[170px] m-5 sm:m-10'>
        <div>
          <p className='font-mona-sans text-base font-normal leading-6 text-left text-white -mt-5 '>Metus sed Disse aliquet amet ultrices faucibus mauris sito diattis morbi suspendisse pellentesque pulvinar interdum justo suspendisse.</p>
        </div>
        <div className="flex justify-center h-[56px] md:w-[546px] ">
          <div className="relative -mt-1 md:-mt-14 md:mr-10  ">
            <input
              type="text"
              placeholder="Your email address"
              className="w-[250px] md:w-[500px]  h-[56px] pl-2  text-left rounded-xl text-xs md:text-xl outline-none focus:ring focus:ring-white"
            />
            <button className="text-xs md:text-xl  absolute font-sans top-0.5 md:top-0.5 right-0.5 md:right-1 w-[120px]  h-[51px] bg-gradient-to-b from-gray-800 to-gray-900 text-orange-500 rounded-xl flex justify-center items-center">
              <h4 className='ml-2 md:ml-0 p-4 gap-4 rounded-tl-[10px] text-base '> Subscribe</h4>
              <FaArrowRight className="mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
