import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FooterBoxinside = () => {
  return (
    <div className="bg-[#16191C] px-5 sm:px-10 md:px-20 py-8 sm:py-12 flex flex-col lg:flex-row gap-10 justify-between text-white rounded-3xl items-center">
      <div className="space-y-2 w-full">
        <h2 className="text-[42px] font-semibold text-center lg:text-left">Looking for the best Coupons ?</h2>
        <p className="text-[17px] font-medium max-w-2xl leading-normal text-center lg:text-left mx-auto lg:mx-0">If you want coupons for with deepest discounts, this is the best place to find them.</p>
      </div>
      <div className="space-y-5 max-w-2xl">

      
          <div className=" rounded-xl flex items-center w-full bg-orange-500">
            <button className="flex text-center gap-x-3 items-center text-[#FFFFFF] px-4 font-semibold h-[46px] rounded-xl">
            Go Coupons
            </button>
          </div>
      </div>
    </div>
  );
};

export default FooterBoxinside;
