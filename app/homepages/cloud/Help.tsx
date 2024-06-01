import Image from 'next/image'
import React from 'react'

function Help() {
  return (
    <div className="pt-[80px] pb-[260px]">
      <div className="space-y-5 max-w-[1300px] mx-auto">
        <div className="flex flex-col bl:flex-row items-center gap-5">
          <div className="w-full px-10 py-7 bg-[#F5F5F5] flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
            <Image src="/s3.svg" width={40} height={40} alt="Call Icon" />
            <div className="bg-gray-500/10 w-[3px] h-20"></div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-md 2xl:text-2xl font-bold bl:whitespace-nowrap">Sales Help</h2>
              <p className="text-md 2xl:text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
            </div>
          </div>
          <div className="w-full px-10 py-7 bg-[#F5F5F5] flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
            <Image src="/s1.svg" width={40} height={40} alt="Call Icon" />
            <div className="bg-gray-500/10 w-[3px] h-20"></div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-md 2xl:text-2xl font-bold bl:whitespace-nowrap">Support Chat</h2>
              <p className="text-md 2xl:text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
            </div>
          </div>
          <div className="w-full px-10 py-7 bg-[#F5F5F5] hidden 2xl:flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
            <Image src="/s2.svg" width={40} height={40} alt="Call Icon" />
            <div className="bg-gray-500/10 w-[3px] h-20"></div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-lg 2xl:text-2xl font-bold bl:whitespace-nowrap">Support Email</h2>
              <p className="text-md 2xl:text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
            </div>
          </div>
        </div>
        <div className="bl:max-w-lg mx-auto w-full px-10 py-7 bg-[#F5F5F5] flex 2xl:hidden items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
          <Image src="/s4.svg" width={40} height={40} alt="Call Icon" />
          <div className="bg-gray-500/10 w-[3px] h-20"></div>
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-lg 2xl:text-2xl font-bold bl:whitespace-nowrap">Support Email</h2>
            <p className="text-md 2xl:text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help