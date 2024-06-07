// import { FiHeadphones } from "react-icons/fi";
import React from "react";
const Support = () => {

  return (
    <div className="w-full hostbuddy  py-20 px-3">

      <div className="w-full max-w-[1220px] mx-auto flex flex-col 2xl:flex-row gap-y-10 justify-center items-center ">
        <div className="slide-reveal mx-auto 2xl:flex flex-col justify-between">
          <h4 className="text-[22px] xl:text-[32px] 2xl:text-[42px] md:text-4xl text-white font-semibold font-mona-sans leading-[63px]">
          Unlimited Bandwidth<span className="text-orange-500 ">*</span>

     
          </h4>
          <p className="text-white text-[15px] mt-2 opacity-80 font-light leading-[26px] 2xl:pr-[400px] 2xl:pt-5 ">
          Yep, because like Cell Phone Overage Charges, Bandwidth Overages SUCK even more!
          </p>
          {/* Orange line below "Why Choose HostBuddy" */}
        </div>
            <div className="slide-reveal ">
<img src="/plenk/bandwidth.svg" className="w-full" alt=""/>
    </div>
      </div>
    </div>
  );
};
export default Support;











