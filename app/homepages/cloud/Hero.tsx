import React from 'react';

const Hero = () => {
  return (
    <div className='bg-gray-900  overflow-hidden'>
   <div className=' hostingcontent_img bg-gray-900 opacity-90 mx-auto'>
      <div className="content  mx-auto">
        <div className='cloudbuddy'>
           {/* 1//  */}
           <div className="w-[175px] h-[30px] mb-10">
                  <h2 className="font-mono-sans italic">
                    <span className="text-white text-[15px] font-thin">Welcome to </span>
                    <span className="text-orange-500 font-bold text-[15px]">HostBuddy</span>
                  </h2>
                </div>
                {/* 2 */}
                <div className="w-full h-[168px] ">
                  <h2 className="font-mono font-medium cloudbuddy2">
                  Cloud Reseller
Hosting
                  </h2>
                </div>
                {/* 3 */}
                <div className="cloudbuddy3">
                  <p className="font-mono font-light ">
                    <span className="text-white">
                    The perfectCloud Reseller Hostingfor digital agencies, hosting resellers and freelancers who need a powerful, scalable and secure cloud reseller hosting solution. You can easily create multiple cPanel accounts and allocate resources as needed in WHM, so you can always meet the demands of your clients.
                    </span>
                  
                  </p>
                </div>
                {/* 4 */}
                <div className="buddybutton">
                  <div className="buddy_button1 bg-orange-500 text-white rounded-xl">                                 
                        <h2 className="font-mona-sans font-semibold  ">
                        Features
                        </h2>             
                  </div>
                  <div className="cloudbuddy_button2 flex flex-row gap-[10px] ">
                    <div className="">
                      <h2 className="font-mona-sans font-medium text-white  ">
                      Reseller Hosting
                      </h2>
                    </div>
                    <div className="w-[16px] h-[20px] mt-0.5">
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
