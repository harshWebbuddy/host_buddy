import Image from 'next/image';
import React from 'react';

const HeroHosting = () => {
  return (
    <section className="h-full min-h-[80vh] overflow-hidden relative flex items-center justify-center">
    
    <div className="max-w-[1300px] mx-auto text-white  px-10 pt-40 pb-10 ">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
        
        <div className="relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-5 2xl:space-y-8">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
      <Image src="/features/empty.svg" width={200 } height={200} alt=''/>


            <h2 className="font-mono-sans text-sm 2xl:text-xl pb-2 font-light italic leading-relaxed text-center 2xl:text-left">
            <span className="text-orange-500 font-bold">Methods for the Payments</span>
          </h2>
          <h1 className="font-mono-sans font-medium text-[60px] 2xl:font-bold leading-[84px] text-left 2xl:text-left ">HostBuddy Affiliate 
Program</h1>

</div>
          <p className="font-mono-sans text-[18px] 2xl:text-[22px] font-light leading-loose text-left 2xl:text-left text-[#EBEBEB]">
          Earn at least <span className='text-orange-500 font-semibold'>60%</span> from every sale. Promote a trusted service loved by millions. Join an affiliate program that values your partnership..</p>
          <div className="flex flex-row justify-center 2xl:justify-start !mt-12 ">
            <button className="h-[56px]  flex item-center justify-center bg-orange-500 rounded-xl py-4 w-auto px-6  gap-x-3">

              <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">Access Affiliate platform</h2>
            </button>
          </div>
          <div className="flex flex-row justify-start 2xl:justify-start !mt-10 ">
         
          </div>
       
        </div>

     
      </div>
    </div>
  </section>
      );
    };
export default HeroHosting;
