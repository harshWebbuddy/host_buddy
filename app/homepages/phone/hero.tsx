import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-[#16191C] animate-fade-in  h-[850px] overflow-hidden'>
   <div className='content_img bg-[#16191C]  opacity-90 mx-auto'>
      <div className="content slide-reveal  mx-auto">
        <div className='buddy'>
           {/* 1//  */}
           <div className="w-[175px] h-[30px] mb-10">
                  <h2 className="font-mono-sans italic">
                    <span className="text-white text-[15px] font-thin">Welcome to </span>
                    <span className="text-orange-500 font-bold text-[15px]">HostBuddy</span>
                  </h2>
                </div>
                {/* 2 */}
                <div className="w-full h-[168px] ">
                  <h2 className="font-mono font-medium buddy2">
                  Virtual Phone
Numbers
                  </h2>
                </div>
                {/* 3 */}
                <div className="buddy3">
                  <p className="font-mono font-light ">
                    <span className="text-white">
                      By trusting us with your business and projects needs, we
                      promise a
                    </span>
                    <span className="text-orange-500 font-bold ml-1 mr-1">
                      99.9%
                    </span>
                    <span className="text-white">
                      uptime on any services we provide, outside of any standard
                      maintenance we may provide.{" "}
                    </span>
                  </p>
                </div>
                {/* 4 */}
                <div className="buddybutton">
                  <div className="buddy_button1 bg-orange-500 text-white rounded-xl">                                 
                        <h2 className="font-mona-sans font-semibold  ">
                        Get Prices
                        </h2>             
                  </div>
                  <div className="buddy_button2 flex flex-row gap-[10px] item-center justify-center pt-2">
                    <div className="">
                      <h2 className="font-mona-sans font-medium text-white  ">
                      VOIP Services
                      </h2>
                    </div>
                    <div className="w-[16px] h-[20px] mt-0.5">
                      <img src="/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
        </div>
        <div className='buddy_img  '>
      <img src="/phone/map.svg" className='buddy_img2 opacity-90 w-full h-full' />
    </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
