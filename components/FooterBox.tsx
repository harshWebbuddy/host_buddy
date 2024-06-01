import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FooterBox = () => {
  return (
    <div className="bg-[#FF7500] px-5 sm:px-10 md:px-20 py-8 sm:py-12 flex flex-col lg:flex-row gap-5 2xl:gap-10 justify-between text-white rounded-3xl items-center">
      <div className="space-y-2 w-full">
        <h2 className="text-lg font-extralight italic text-center lg:text-left">Newsletter</h2>
        <h1 className="text-4xl 2xl:text-5xl font-bold max-w-lg leading-normal text-center lg:text-left mx-auto lg:mx-0">Don't miss Any News & offers From Us.</h1>
      </div>
      <div className="space-y-5 max-w-2xl">
        <p className="leading-loose text-md 2xl:text-lg text-center lg:text-left">
          Metus sed Disse aliquet amet ultrices faucibus mauris sito diattis morbi suspendisse pellentesque pulvinar interdum justo suspendisse.
        </p>
        <form>
          <div className="p-1 rounded-xl flex items-center w-full bg-white">
            <input className="h-[26px] text-[14px] outline-none flex-1 w-full bg-transparent px-0 2xl:px-4 text-black" placeholder="Your email address" />
            <div className="flex gap-x-1 2xl:gap-x-3 w-36 2xl:w-40 items-center text-[#FF7500] bg-gradient-to-b from-[#292E34] to-[#16191C] px-6 h-[46px]  2xl:h-[56px] rounded-xl">
              Subscribe <FaArrowRight />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterBox;
