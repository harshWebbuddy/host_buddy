import React from "react";
import Ratingpanel from "./rating";

const GamingPage = () => {
  return (
    <div>
     <div className="bg-black">
    
      <div className=" relative w-full 2xl:w-[1920px] h-[950px] 2xl:h-[757px] md:overflow-hidden items-center justify-center mx-auto  ">
      <img
          src="/home.jpg"
          width="1920px"
          height="57px"
          alt="dsdff"
          className="opacity-50 object-cover"
        />
        <div className="flex flex-col 2xl:flex-row justify-start items-start  ">
          <div className="mx-auto absolute w-full 2xl:w-[1220px] 2xl:ml-[300px] h-[757px] xl:flex-row top-[100px] md:top-[50px] 2xl:gap-[100px] left-[23px] md:left-[50px] 2xl:justify-between inset-0 items-center justify-center text-white  flex flex-col 2xl:flex-row pa:flex-col pa:-ml-36 pa:mt-20 2xl:-mt-10 xl:-ml-2 ">
            <div className="relative md:w-[600px] md:h-[429px] w-full pa:ml-0 ">
              <div className="w-full 2xl:w-[175px] h-[30px] items-center justify-center  mp:mt-10">
                <h2 className="font-mono-sans text-[15px] italic font-light leading-[30px] text-left">
                  <span className="text-white opacity-75">Welcome to </span>
                  <span className="text-orange-500 font-bold">HostBuddy</span>
                </h2>
              </div>
              <div className="w-full 2xl:w-[570px] h-[168px]  2xl:mb-28">
                <h2
                  className="font-mono  font-medium 
                2xl:leading-[84px] text-left text-white 2xl:text-[62px] text-[32px] leading-[64px] "
                >
                  Lorem ipsum dolor sit amet{" "}
                </h2>
              </div>
              <div className="w-[365px] 2xl:w-[600px] pa:w-[800px] h-[78px]  pa:-mt-24 2xl:mb-10 mb-20 pa:mb-2">
                <p className="font-mono text-[18px] font-light leading-[26px] text-left ">
                  <span className="opacity-75">
                    By trusting us with your business and projects needs, we
                    promise a
                  </span>
                  <span className="text-orange-500 opacity-100 font-bold ml-1 mr-1">
                    99.9%
                  </span>{" "}
                  <span className="opacity-75">
                    uptime on any services we provide, outside of any standard
                    maintenance we may provide.{" "}
                  </span>
                </p>
              </div>
              <div className="flex flex-row w-[350px] gap-2">
                <div className="mp:w-[140px] 2xl:w-[184.95px] h-[52px] bg-orange-500 text-white  rounded-xl">
                  <div className="w-[184.95px] 2xl:w-[120px] gap-2 h-[52px]  flex flex-row item-center justify-center mx-auto py-3.5">
                    <div className="item-center justify-center mx-auto w-[24px] h-[24px] ">
                      <img src="/shoppingcart.svg" width="24px" height="24px" />
                    </div>
                    <div className="w-[92px] h-[13px] item-center justify-center mx-auto mp:mr-8 2xl:mr-0 ">
                      <h2 className="font-mona-sans 2xl:text-[16px] mp:text-[12px] font-semibold leading-[21.6px] text-left">
                        Order Now
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-[160px] h-[20px] gap-[6px] flex flex-row item-center justify-center ml-8 mp:ml-2 2xl:ml-8 py-3.5">
                  <div className="w-[134px] h-[12px] item-center justify-center mx-auto">
                    <h2 className="font-mona-sans text-[16px] font-medium leading-[19.2px] text-left">
                    Configure Server
                    </h2>
                  </div>
                  <div className="item-center justify-center mx-auto w-[16px] h-[20px] mt-0.5">
                    <img src="/arrow.svg" width="16px" height="20px" />
                  </div>
                </div>
              </div>
              <div className="w-[216.41px] h-[26px] mt-8 md:mt-6 flex flex-row gap-1  ">
                <div className="item-center justify-center mt-1">
                  <img
                    src="/tick2.svg"
                    alt="tick"
                    width="11.41px"
                    height="8.27px"
                    className="opacity-100"
                  />
                </div>
                <div className="w-[195px] h-[26px] item-center justify-center mx-auto">
                  <h2 className="text-[14px] underline opacity-75 capitalize">
                    30 day money back garantee
                  </h2>
                </div>
              </div>
            </div>
            <div className="2xl:w-[448px] pa:w-[300px] 2xl:h-[448px] item-center justify-center mr-10 pa:ml-56 mp:mt-20  pa:mt-0 mp:w-[200px]">
              <img
                src="/homegaming/herologo.svg"
                className="item-center justify-center mx-auto w-[350px]  mp:h-[250px] 2xl:w-[256px] pa:w-[300px] h-[60px] 2xl:h-[473px]"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="relative 2xl:-mt-28 mp:-mt-20 mp:-ml-2 xl:-mt-80">
      <div className="2xl:ml-[30px] mt-0  relative z-10 "><Ratingpanel /></div>  
        <img src="/homegaming/rating.svg" className="ml-[0px] w-[12000px] 2xl:-mt-60 mp:-mt-[10px] z-0 relative xl:-mt-20 " />
      </div>
    </div>  
  );
};

export default GamingPage;
