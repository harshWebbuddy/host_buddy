import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const FooterBox = () => {
  return (
    <div className='mx-auto flex flex-col md:flex-row pa:flex-row bg-orange-500 rounded-lg justify-between w-[300px] xl:w-[1000px] 2xl:w-[1220px] 2xl:h-[206.67px] pa:w-[600px]  h-[470px] pa:h-[280px] md:h-[206.67px]  p-5'>
      <div className='flex flex-col justify-between w-[230px] md:w-[453px] pa:w-[253px] h-[132px]  m-5 '>
        <div className='w-[82px] h-[30px]'>
          <h5 className='font-inter italic text-base font-light leading-7 text-left text-white'>Newsletter</h5>
        </div>
        <div className='md:w-[453px] h-[101.67px]'>
          <h2 className='font-MonaSans font-semibold pa:w-[200px] xl:w-[300px] text-4xl leading-12 text-left text-white'>Don't miss Any News & offers From Us.</h2>
        </div>
      </div>
      <div className='flex flex-col justify-between w-[230px] 2xl:w-[546px] pa:w-[253px]  xl:gap-20 h-[170px] m-5 sm:m-10 pa:gap-20'>
        <div>
          <p className='font-mona-sans text-base font-normal leading-6 text-left text-white -mt-5 '>Metus sed Disse aliquet amet ultrices faucibus mauris sito diattis morbi suspendisse pellentesque pulvinar interdum justo suspendisse.</p>
        </div>
        <div className="flex justify-center h-[56px] 2xl:w-[546px] xl:ml-8 ">
          <div className="relative -mt-1 md:-mt-14 md:mr-10  ">
            <input
              type="text"
              placeholder="Your email address"
              className="w-[250px] 2xl:w-[500px] xl:w-[250px] xl:h-[30px] pa:h-[30px]  h-[56px] pl-2  text-left rounded-xl text-xs md:text-xl outline-none focus:ring focus:ring-white"
            />
            <img src="/subscribe.svg" className='h-[51px] absolute inset-0 2xl:mt-0.5 pa:-mt-2.5 2xl:m-4 pa:ml-48 pa:w-[50px] 2xl:ml-[330px] mp:w-[120px] xl:ml-[188px] 2xl:w-[200px] xl:w-[60px] mp:ml-[120px] xl:-mt-[10px] mp:mt-0.5'/>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
