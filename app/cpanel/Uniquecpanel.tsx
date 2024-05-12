import Image from 'next/image';
import React from 'react';




const Uniquecpanel = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FFFFFF]/100 to-[#FF7500]/70">
      <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-center py-24">
      <div className="flex flex-col 2xl:flex-col mx-auto items-center justify-between space-y-20">
     
       
          <div className=" w-full pr-4">
            <h4 className="text-[42px] text-black font-semibold font-mona-sans leading-normal">
         What Makes HostBuddy    <span className="pb-4 border-b-4 border-orange-500 text-wite text-black">Unique ?  </span>
             
            </h4>
          
         
       
        </div>
      <div className="w-full flex flex-col 2xl:flex-row justify-between space-x-10">
  <Image src="/cpanel/unique.jpeg" alt="" width={550} height={550} className="rounded-2xl" />
  <div className=" 2xl:max-w-xl">
  <div className="container">
  <div className="line-container">
    <div className="line"></div> {/* Horizontal line 1 */}
    <div className="line"></div> {/* Horizontal line 2 */}
    <div className="line"></div> {/* Horizontal line 3 */}
  </div>
  <div className="vertical-line"></div> {/* Vertical line */}
</div>
<div className="relative group space-y-3">
  <div className="cursor-pointer flex w-full group  rounded-xl">
    <div className="2xl:pl-8 flex xl:flex-row space-x-16 items-center ">
      <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
        <h2 className="text-[24px] font-bold opacity-1 mb-4 text-white">HostBuddy Scans Daily </h2>
        <p className="font-mona-sans text-white text-[16px] font-normal leading-normal text-left">
          Microsoft 365 gives you valuable, secure collaboration tools like Word, Excel, PowerPoint, and Teams to help you do your best work.                  
        </p>
      </div>
    </div>
  </div>
</div>
<div className="relative group space-y-3">
  <div className="cursor-pointer flex w-full group  transition-all duration-300 rounded-xl">
    <div className="2xl:pl-8 flex xl:flex-row  space-x-16 items-center ">
      <div className="transition-all duration-300 cursor-pointer xl:gap-6 text-[#16191C]">
        <h2 className="text-[24px] font-bold opacity-1 mb-4  text-white ">HostBuddy Identifies Threats</h2>
        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left text-white ">
          Microsoft 365 gives you valuable, secure collaboration tools like Word, Excel, PowerPoint, and Teams to help you do your best work.                    
        </p>
      </div>
    </div>
  </div>
</div>
<div className="relative group space-y-3">
  <div className="cursor-pointer flex w-full group  rounded-xl">
    <div className="2xl:pl-8 flex xl:flex-row space-x-16 items-center ">
      <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
        <h2 className="text-[22px] font-bold opacity-1 mb-4 text-white">HostBuddy Instantly Notifies and Fixes </h2>
        <p className="font-mona-sans text-white text-[16px] font-normal leading-normal text-left">
          Microsoft 365 gives you valuable, secure collaboration tools like Word, Excel, PowerPoint, and Teams to help you do your best work.                  
        </p>
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

export default Uniquecpanel;
