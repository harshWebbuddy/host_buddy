import React from "react";

const Awards = () => {
  return (
    <div className="ma:w-[1220px] ma:h-[406.92px] flex flex-col ma:gap-16 mx-auto mt-20 mb-20">
      <div className="ma:w-[1218px]  ma:h-[78px] flex  flex-col ma:flex-row mx-auto items-center justify-between  ">
        <div className="w-full ma:w-[528px] ma:h-[63px] margin">
          <h4 className="heading text-center text-black font-semibold font-mona-sans wording">
            Our Awards & Recognition
            <div className="w-[180px] ma:w-36 pa:w-28 h-1 bg-orange-500 ma:mt-2  ml-[105px] ma:ml-[90px] pa:ml-[62px] "></div>
          </h4>
        </div>
        <div className="ma:w-[244px] ma:h-[24px] flex flex-row mt-5 items-center justify-center visible">
          <h2 className="text-[16px] wording font-bold text-orange-500">
            See All Awards & Recognition{" "}
          </h2>
          <img src="/arrowright.svg" className="w-[14px] h-[10px] "/>
        </div>
      </div>
     
  
        <div className="w-full ma:w-[1220px] ma:h-[288.92px] mx-auto bg-[#F5F5F5] rounded-2xl mb-2">
        
        <div className="flex flex-wrap justify-between ma:flex-row  ma:items-center ma:mx-auto ma:justify-evenly mt-10 mb-10 padding">
  <div className="w-[40%] mb-4 ma:w-[202.14px] ma:h-[207.25px]">
    <img src="/awards1.svg" className="w-full" alt="Client 1" />
  </div>
  <div className="w-[40%] mb-4 ma:w-[202.14px] ma:h-[207.25px]">
    <img src="/awards2.svg" className="w-full" alt="Client 2" />
  </div>
  <div className="w-[40%] ma:w-[202.14px] ma:h-[207.25px]">
    <img src="/awards3.svg" className="w-full" alt="Client 3" />
  </div>
  <div className="w-[40%] ma:w-[202.14px] ma:h-[207.25px]">
    <img src="/awards4.svg" className="w-full" alt="Client 4" />
  </div>
</div>
        
      </div>
      <div className="ma:w-[244px] ma:h-[24px] flex flex-row mt-5 items-center justify-center ma:opacity-0 ">
          <h2 className="text-[16px] wording font-bold text-orange-500">
            See All Awards & Recognition{" "}
          </h2>
          <img src="/arrowright.svg" className="w-[14px] h-[10px] "/>
        </div>
    </div>
  );
};

export default Awards;
