import { Panela, Panelb, Panelc } from '@/components/svgs'
import Image from 'next/image'
import React from 'react'

const Adds = () => {
  return (
    <section className="bg-[#F9EFE4] relative">
    <div className="p-4 w-full max-w-[1420px] mx-auto flex flex-col md:flex-row items-center justify-center py-20">
      <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between ">
        <div className="w-full space-y-10 ">
          <div className="space-y-3.5">
            <h4 className="text-[42px]  font-semibold font-mona-sans leading-normal">
            Why Choose Us?
            </h4>
            <p className="text-[16px]  pr-10 leading-loose font-mono-sans">
            Running a business can be challenging, so to help we offer a FREE website builderwith FREE stock images and FREE email with every domain name.
            </p>
          </div>
          <div className="space-y-2 2xl:max-w-xl flex flex-col ">
          <div className="relative group space-x-6 flex flex-row container">
              <div className='sidebar'></div>
              <div className="cursor-pointer flex w-full group  transition-all duration-300  rounded-xl">
                <div className="flex xl:flex-row items-center ">
                
                  <div className="transition-all duration-300 cursor-pointer   text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 text-[#16191C]/50  group-hover:text-[#16191C]">Infrastructure & Technology Used</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left paragraph">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group space-x-2 flex flex-row  container">
              <div className='sidebar'></div>
              <div className="cursor-pointer flex w-full group  transition-all duration-300  rounded-xl">
                <div className="flex xl:flex-row items-center ">
                
                  <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 text-[#16191C]/50  group-hover:text-[#16191C]">70+ free one-click installs</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left paragraph">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group space-x-2 flex flex-row  container">
              <div className='sidebar'></div>
              <div className="cursor-pointer flex w-full group  transition-all duration-300  rounded-xl">
                <div className="flex xl:flex-row items-center ">
                
                  <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 text-[#16191C]/50  group-hover:text-[#16191C]"> SSl Certificate</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left paragraph">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group space-x-2 flex flex-row container ">
              <div className='sidebar'></div>
              <div className="cursor-pointer flex w-full group  transition-all duration-300  rounded-xl">
                <div className="flex xl:flex-row items-center ">
                
                  <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 text-[#16191C]/50  group-hover:text-[#16191C]">Support</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left paragraph">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.                    </p>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        
        </div>
        <div className="w-full flex justify-center">
          <div className="relative items-center justify-center mt-40 ">
            <Image src="/plenk/choose.jpeg" width={497} height={301} alt="" className="rounded-2xl relative z-10 " />
          </div>
          
        </div>   
        </div>
      </div>

  </section>
  )
}

export default Adds;