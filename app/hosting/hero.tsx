import React from "react";

const HostingPage = () => {
  return (
    <div>
      {" "}
      <div className="bg-black relative w-full h-[1200px] ma:h-[757px] ma:overflow-hidden  ">
        <img
          src="/home.jpg"
          width="1920px"
          height="57px"
          alt="dsdff"
          className="opacity-50 object-cover"
        />
        <div className="flex flex-col ma:flex-row   ">
          <div className="padding mx-auto absolute w-full ma:w-[1920px] h-[757px] top-[100px] ma:top-[50px] left-[23px] ma:-left-[30px] gap-[400px] inset-0 items-center justify-center text-white  flex flex-col ma:flex-row   ">
            <div className="relative ma:w-[600px] ma:h-[429px] w-full  ">
              <div className="w-full ma:w-[175px] h-[30px] items-center justify-center mb-4">
                <h2 className="font-mono-sans text-[15px] italic font-light leading-[30px] text-left">
                  <span className="text-orange-500 font-bold">
                    Shared Hosting
                  </span>
                </h2>
              </div>
              <div className="w-full ma:w-[537px] h-[168px]">
                <h2 className="font-mono-sans text-[29px] pa:text-[50px]  font-medium wording text-left text-white ma:text-[62px] ma:leading-[84px] pa:leading-[54px]">
                  Start Your Online Journey with Us
                </h2>
              </div>
              <div className="w-[365px] ma:w-[600px] pa:w-[800px] h-[78px] -mt-16 pa:-mt-8 ma:mt-4 ">
                <p className="font-mono text-[18px]  font-light leading-[26px] text-left pa:w-[700px] ">
                  <span className="opacity-75">
                    Explore our affordable shared hosting plans, offering
                    everything you need to create, host, and manage your
                    website. Enjoy optimal speed, security, and
                  </span>
                  <span className="text-orange-500 opacity-100 font-bold ml-1 mr-1">
                    {" "}
                    24/7 expert support
                  </span>{" "}
                  <span className="opacity-75">
                    {" "}
                    Trusted by users worldwide.
                  </span>
                </p>
              </div>
              <div className="flex flex-row w-[350px] mt-32 ma:mt-8 pa:mt-10">
                <div className="w-[184.95px] h-[52px] bg-orange-500 text-white  rounded-xl">
                  <div className="w-[125px] h-[24px] gap-[9px] flex flex-row item-center justify-center mx-auto py-3.5">
                    <div className="item-center justify-center mx-auto">
                      <img src="/Hostingeye.svg" width="24px" height="24px" />
                    </div>
                    <div className="w-[92px] h-[13px] item-center justify-center mx-auto">
                      <h2 className="font-mona-sans text-[17px] font-semibold leading-[21.6px] text-left">
                        View Plans
                      </h2>
                    </div>
                  </div>
                </div>
                {/* <div className="w-[160px] h-[20px]  flex flex-row item-center justify-center ml-8 py-3.5">
                
            <div className="w-[134px] h-[12px] item-center justify-center mx-auto">
                <h2 className="font-mona-sans text-[15px] font-semibold leading-[19.2px] text-left">Hosting Overview</h2>  
            </div>
            <div className="item-center justify-center mx-auto py-0.5">
    <img src="/arrow.svg" width="16px" height="20px"/>
            </div>
            </div> */}
              </div>
              <div className="w-[216.41px] h-[26px] mt-8 ma:mt-6 flex flex-row gap-1  ">
                <div className="item-center justify-center mt-1">
                  <img
                    src="/tick.png"
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
            <div className="w-[350px]  ma:w-[526.79px] pa:w-[600px] h-[60px] ma:h-[481.8px] item-center justify-center -mt-[300px]  ma:mt-0 mr-40 ma:mr-0">
              <img
                src="/HostingHero.svg"
                className="item-center justify-center mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingPage;
