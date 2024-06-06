import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FooterBox = () => {
  return (
    <div className=" border  flex flex-col  gap-5 2xl:gap-10 justify-between text-white rounded-xl items-center">
    
    
     
        <form>
          <div className=" rounded-xl flex flex-row 2xl:gap-32 items-center w-full bg-white">
            <input className="h-[26px] text-[10px] outline-none flex-1 w-full bg-transparent px-0 2xl:px-4 text-black" placeholder="Your email address" />
            <div className="flex gap-x-1 2xl:gap-x-3 w-36 2xl:w-32 items-center text-[#FF7500] bg-gradient-to-b from-[#292E34] to-[#16191C] px-6 h-[46px]  2xl:h-[56px] rounded-xl">
              Submit <FaArrowRight />
            </div>
          </div>
        </form>
    </div>
  );
};

export default FooterBox;
