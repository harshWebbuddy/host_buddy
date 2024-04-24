import React from "react";
import Ratingpanel from "./rating";

const GamingPage = () => {
  return (
    <div className="w-full  md:w-full">
      <div className="bg-black">
        <div className="relative w-full md:w-full h-[950px] xl:h-[800px] 2xl:h-[757px] 2xl:w-[1920px] items-center justify-center mx-auto overflow-hidden">
          <img
            src="/home.jpg"
            width="1920px"
            height="57px"
            alt="Background"
            className="opacity-50 object-cover w-full h-full"
          />
          <div className="absolute top-[100px]   md:top-[50px] left-[23px] md:left-[50px] xl:left-[80px] 2xl:left-[350px] w-full h-[757px] xl:w-[1220px] 2xl:w-[1220px] flex flex-col 2xl:flex-row justify-between items-center text-white">
            <div className="w-full md:w-[600px] xl:w-[500px] 2xl:w-[600px] h-[429px] mb-[20px]">
              <div className="w-full h-[30px] mb-4">
                <h2 className="font-mono-sans text-[15px] italic font-light leading-[30px]">
                  <span className="opacity-75">Welcome to </span>
                  <span className="text-orange-500 font-bold">HostBuddy</span>
                </h2>
              </div>
              <div className="w-full h-[168px] mb-[20px]">
                <h2 className="font-mono font-medium text-[62px] leading-[84px]">
                  Lorem ipsum dolor sit amet
                </h2>
              </div>
              <div className="w-[500px] h-[78px] mb-8">
                <p className="font-mono text-[18px] font-light leading-[26px]">
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
              <div className="w-[350px] flex gap-8 mb-4">
                <div className="w-[140px] h-[52px] bg-orange-500 text-white rounded-xl">
                  <div className="w-[120px] h-[52px] flex items-center justify-center gap-2 mx-auto">
                    <div className="w-[24px] h-[24px]">
                      <img src="/shoppingcart.svg" alt="cart" />
                    </div>
                    <div className="w-[92px] h-[13px]">
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
              <div className="w-[216.41px] h-[26px] mt-[8px] flex items-center gap-1">
                <div className="w-[11.41px] h-[8.27px]">
                  <img src="/tick2.svg" alt="tick" />
                </div>
                <div className="w-[195px] h-[26px]">
                  <h2 className="text-[13px] underline opacity-75 capitalize">
                    30 day money back guarantee
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-[448px] h-[448px] xl:w-[300px] xl:h-[300px] 2xl:w-[256px] 2xl:h-[450px] mb-[20px] 2xl:mb-0">
              <img
                src="/homegaming/herologo.svg"
                alt="Hero Logo"
                className="w-[350px] xl:w-[300px] 2xl:w-[400px] mx-auto"
              />
            </div>
          </div>
        </div>
        <div className=" top-10 left-0 z-10 w-full h-full mb-60">
          <Ratingpanel />
         
        </div>
        <img
          src="/homegaming/rating.svg"
          alt="Rating"
          className="absolute inset-0 z-0 w-full xl:-mt-60"
          />
      </div>
    </div>
  );
};

export default GamingPage;
