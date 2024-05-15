import React from 'react'

const Hero = () => {
  return (
    <div className=''>
<div className="bg-black relative  h-[950px]  items-center justify-center mx-auto ">
            <img
              src="/home.jpg"
            
              alt="Background"
              className="opacity-20 w-full h-full"
            />
   <div className="absolute whole_hero  text-white">
              <div className="w-full md:w-full lg:w-full bl:w-[700px] xl:w-[790px] 2xl:w-[600px] h-[429px] mb-[20px]">
                <div className="w-full buddy1">
                  <h2 className="font-mono-sans text-[15px] italic font-light leading-[30px]">
                    <span className="opacity-75">Welcome to </span>
                    <span className="text-orange-500 font-bold">HostBuddy</span>
                  </h2>
                </div>
                <div className="w-full buddy2">
                  <h2 className="font-mono font-medium">
                    Lorem ipsum dolor sit amet
                  </h2>
                </div>
                <div className="buddy3">
                  <p className="font-mono font-light]">
                    <span className="opacity-75">
                      By trusting us with your business and projects needs, we
                      promise a
                    </span>
                    <span className="text-orange-500 font-bold ml-1 mr-1">
                      99.9%
                    </span>
                    <span className="opacity-75">
                      uptime on any services we provide, outside of any standard
                      maintenance we may provide.{" "}
                    </span>
                  </p>
                </div>
                <div className="buddy4 flex  ">
                  <div className="w-[140px] h-[52px] bg-orange-500 text-white rounded-xl">
                    <div className="buddy_button1 flex items-center justify-center gap-2 mx-auto">
                      <div className="w-[24px] h-[24px]">
                        <img src="/shoppingcart.svg" alt="cart" />
                      </div>
                      <div className="w-[92px] h-[13px] -mt-2">
                        <h2 className="font-mona-sans font-semibold text-[16px] leading-[21.6px]">
                          Order Now
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-[160px] h-[52px] flex items-center justify-center gap-[6px]">
                    <div className="w-[134px] h-[12px]">
                      <h2 className="font-mona-sans font-medium text-[16px] leading-[19.2px]">
                        Configure Server
                      </h2>
                    </div>
                    <div className="w-[16px] h-[20px] mt-2">
                      <img src="/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="w-[216.41px] h-[26px] mt-[8px] flex items-center gap-2">
                  <div className="w-[11.41px] h-[8.27px]  -mt-2">
                    <img src="/tick2.svg" alt="tick" />
                  </div>
                  <div className="w-[195px] h-[26px]">
                    <h2 className="text-[13px] underline opacity-75 capitalize">
                      30 day money back guarantee
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" lg:w-[300px] 2xl:w-[448px] 2xl:h-[448px] ">
                <img
                  src="/homegaming/herologo.svg"
                  alt="Hero Logo"
                  className="  mx-auto mt-20"
                />
              </div>
            </div>
    </div></div>
  )
}

export default Hero