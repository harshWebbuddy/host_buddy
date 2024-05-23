import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Unique = () => {
  return (
    <section className=" relative">
    <div className="w-full max-w-[1350px] mx-auto flex flex-col xl:flex-row items-center justify-center ">
      <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between ">
        <div className="w-full flex flex-col space-y-16">
          <div className="space-y-3.5">
            <h4 className="text-[39px] text-black font-semibold font-mona-sans leading-normal">
            <span className="pb-4 border-b-4 border-orange-500 font-semibold normal-case "> Related Ar</span>ticles
             
            </h4>
          </div>
          <div className="space-y-10">
          
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group p-10 border hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                <div className="flex xl:flex-row items-center ">
                     
                 <div className="transition-all duration-300 cursor-pointer xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 ">How to upgrade ClientX WHMCS 7.9 Patch?</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    As you all know that we have released the WHMCS 7.9 Compatible HostX version, so here is the detailed procedure to do the upgrade.Users who are already using HostX and upgrading to WHMCS 7.9...                    </p>
                  </div>
                  <div className="group w-20 h-[52px] text-white  text-xl rounded-xl bg-[#16191C] group-hover:bg-[#FF7500] ring-1 ring-[#FFFFFF] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
              <span className="">
                <FaArrowRight size={15} />
              </span>
            </div>
                </div>
              </div>
            </div>
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group p-8 border hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                <div className="flex xl:flex-row items-center ">
                     
                 <div className="transition-all dura  tion-300 cursor-pointer xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 ">How to set only one Guest OS Family?</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    As you all know that we have released the WHMCS 7.9 Compatible HostX version, so here is the detailed procedure to do the upgrade.Users who are already using HostX and upgrading to WHMCS 7.9...                    </p>
                  </div>
                  <div className="group w-20 h-[52px] text-white  text-xl rounded-xl bg-[#16191C] group-hover:bg-[#FF7500] ring-1 ring-[#FFFFFF] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center "   style={{
              borderImage: "linear-gradient(to right, #FF7500, #FF6F00, #FF7500) 1",
              borderStyle: "solid",
            }}>
              <span className="">
                <FaArrowRight size={15} />
              </span>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>

  )
}

export default Unique