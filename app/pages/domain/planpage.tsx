import { Panela, Panelb, Panelc } from '@/components/svgs'
import Image from 'next/image'
import React from 'react'

const Planpanel = () => {
  return (
    <section className=" relative">
    <div className="pt-8 pb-12 w-full max-w-[1360px] mx-auto flex flex-col xl:flex-row items-center justify-center">
      <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between ">
      <div className="w-full flex flex-col space-y-4">
      <div className="flex w-full text-left justify-start pr-40" style={{  maxWidth: '900px' }}>
  <h4 className="text-[42px] text-black font-semibold capitalize font-mona-sans leading-[63px]">
    Transfer a Domain Name in {" "} <span className="text-orange-500"> 4 </span>Simple Steps:
  </h4>
</div>
          <div className="space-y-2 max-w-[1300px] justify-between space-x-10 flex flex-col  xl:flex-row  2xl:flex-row">
         <div className='flex flex-col w-full'> 
           <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
             
                       
                 <div className="transition-all duration-300 cursor-pointer space-y-2 py-8 px-4 pl-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1  group-hover:text-orange-500">Enter the Domain Name You Want to Transfer</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Simply enter your domain name and click on Transfer.                    </p>
                 
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div>
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
            
                <div className="transition-all duration-300 cursor-pointer space-y-2 py-8 px-4 pl-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1  group-hover:text-orange-500">Prepare Domain for Transfer</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Unlock the domain you want to transfer at your current registrar.                   </p>
                 
            
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div>
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
            
                <div className="transition-all duration-300 cursor-pointer space-y-2 py-8 px-4 pl-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1  group-hover:text-orange-500">Proceed With the Purchase</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Enter the EPP code or domain transfer authorization code and confirm transfer.              </p>
                 
            
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div>
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
            
                <div className="transition-all duration-300 cursor-pointer space-y-2 py-8 px-4 pl-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1  group-hover:text-orange-500">Confirm domain transfer email</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    You will receive a confirmation letter from your domain registry.           </p>
                 
            
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div></div>
            <div className="w-full flex items-start justify-start">
          <Image src="/transfer/unique.svg" alt="" width={528} height={496} className="w-full" />
        </div>
          </div>
        </div>
     
      </div>
    </div>
  </section>

  )
}

export default Planpanel;