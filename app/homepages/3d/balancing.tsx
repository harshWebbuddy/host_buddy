import React from "react";

const Balancing = () => {
  return (
    <div className="w-full  bg-[#F9EFE4]">
      <div className=" 2xl:w-[1920px] 2xl:h-[683px] mb-60 mp:mb-80 mx-auto items-center justify-center ">
        <div className="flex flex-row justify-between   ">
          {" "}
          {/* main div for all the items excluding bg color */}
          <div className="flex flex-col w-[1219px] items-center justify-center mx-auto gap-20 mt-20 mb-20 xl:ml-20   ">
            {" "}
            {/* div for heading nad images */}
            <div className="2xl:-ml-[500px]">
              <div className=" ml-[1340px] 2xl:ml-[700px] pa:ml-[1300px] 2xl:mb-6">
                <h2 className="heading font-semibold relative z-10 ">
                  Cloud Load Balancing
                  
                </h2>
                
              </div>
              <div className="ml-[700px] text-[16px] leading-[24px] font-normal">
                <p>
                  Lorem ipsum dolor sit amet consectetur. In in vel lacus amet
                  habitasse urna. Curabitur ut consectetur massa in sem arcu.
                </p>
              </div>
            </div>
            <div className="items-center 2xl:ml-[320px]   mx-auto flex flex-row 2xl:w-[1219px] justify-center gap-60">
              <div>
                <h2 className="text-[18px] w-[134px] leading-[21.6px] font-bold items-center mb-0 justify-center ml-6">
                  End Users
                </h2>
                <img
                  src="./home3d/balancing1.svg"
                  className="w-[250px] h-[200px]"
                />
              </div>
              <div>
                <h2 className="text-[18px] w-[134px] leading-[21.6px] font-bold items-center justify-center ml-6 mb-12"></h2>
                <img
                  src="./home3d/balancing2.svg"
                  className="w-[250px] h-[200px]"
                />
              </div>
              <div>
                <h2 className="text-[18px] w-[130px] leading-[21.6px] font-bold items-center justify-center mx-auto ml-0.5 mb-0">
                  Load Balancer
                </h2>
                <img
                  src="./home3d/balancing3.svg"
                  className="w-[250px] h-[200px]"
                />
              </div>
              <div>
                <h2 className="text-[18px]  w-[180px] leading-[21.6px] font-bold items-center justify-center mx-auto -ml-2 ">
                  Application Servers
                </h2>
                <img
                  src="./home3d/balancing4.svg"
                  className="w-[150px] h-[200px]"
                />
              </div>
            </div>
          </div>
          <img
            src="./home3d/zig.svg"
            className="mr-1 w-[50px] md:w-[89.71px] md:h-[113.2px] opacity-0 md:opacity-100 mt-20 items-end justify-end   2xl:opacity-100 pa:opacity-0 xl:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Balancing;
