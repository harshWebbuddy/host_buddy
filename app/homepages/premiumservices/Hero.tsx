import React from 'react';

const Hero = () => {
  return (
    <div className='bg-[#16191C] overflow-hidden mx-auto'>
   <div className=' pcontent_img opacity-90 mx-auto'>
      <div className=" pcontent mx-auto max-w-[1200px] flex z-[1] ">
        <div className='pbuddy z-[2]'>
           {/* 1//  */}
           <div className="w-[175px] h-[30px] mb-10">
                  <h2 className="font-mono-sans italic">
                    <span className="text-white text-[15px] font-thin">Welcome to </span>
                    <span className="text-orange-500 font-bold text-[15px]">HostBuddy</span>
                  </h2>
                </div>
                {/* 2 */}
                <div className="w-full h-[168px] pbuddy2">
                  <h2 className="font-mono font-medium ">
                  IPTV Premium
Services
                  </h2>
                </div>
                {/* 3 */}
                <div className="pbuddy3">
                  <p className="font-mono font-light ">
                    <span className="text-white">
                    By trusting us with your business and projects needs, we promise a 99.9% uptime on any services we provide, outside of any standard maintenance we may provide.
                    </span>
                  
                  </p>
                </div>
                {/* 4 */}
                <div className="buddybutton">
                  <div className="buddy_button1 bg-orange-500 text-white rounded-xl">                                 
                        <h1 className="font-mona-sans font-semibold  ">
                        Subscribe Now
                        </h1>             
                  </div>
                  <div className="cloudbuddy_button2 flex flex-row gap-[10px] ">
                    <div className="">
                      <h2 className="font-mona-sans font-medium text-white  ">
                      Contact Us
                      </h2>
                    </div>
                    <div className="w-[16px] h-[20px] mt-0">
                      <img src="/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
        </div>
      
        {/* <div className='hostingbuddy_img  '>
      <img src="./cloudhosting/1.svg" className='hostingbuddy_img2 w-full h-full' />
    </div> */}
      </div>
      </div>
    </div>
  );
};

export default Hero;
