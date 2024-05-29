import { Panela, Panelb, Panelc } from '@/components/svgs'
import Image from 'next/image'
import React from 'react'

const Planpanel = () => {
  return ( 
        <section className=" relative">
        <div className="p-4 w-full max-w-[1330px] mx-auto flex flex-col xl:flex-row items-center justify-center ">
          <div className="slide-reveal flex flex-col space-x-4 space-y-12 2xl:flex-row mx-auto items-center justify-between ">
            <div className="w-full flex flex-col space-y-12">
              <div className="space-y-3.5">
                <h4 className="text-[39px] text-black font-semibold 2xl:font-bold font-mona-sans leading-normal">
                User-First     <span className="pb-4 border-b-4 border-orange-500">Affiliate Marketing</span>
                 
                </h4>
              
              </div>
              <div className="space-y-8 2xl:max-w-xl">
                <div className="relative group space-y-3">
                 
                    <div className="flex xl:flex-row space-x-10 items-center featuresvg4">
                    <svg className='absolute top-2 ' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-opacity="0.2" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   
                     <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
                        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">Your Very Own Manager</h2>
                        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                        Meet your personal affiliate account manager. A marketing professional who will consult and answer questions, helping you towards success.                    </p>
                      </div>
                 
                  </div>
                </div>
                <div className="relative group space-y-3">
                  <div className="cursor-pointer flex w-full group">
                    <div className="flex xl:flex-row space-x-10 items-center featuresvg4">
                    <svg className='absolute top-2 ' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-opacity="0.2" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   
                     <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
                        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">High Conversion Rate</h2>
                        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                        Our brand & effective promo materials mean the traffic you send to Hostinger will convert.  </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group space-y-3">
                  <div className="cursor-pointer flex w-full group">
                    <div className="flex xl:flex-row space-x-10 items-center featuresvg4">
                    <svg className='absolute top-2 ' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-opacity="0.2" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   
                     <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
                        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">A Special Affiliate Program</h2>
                        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                        Earn, grow, and expand with WebBuddy's Affiliate Program. Everything you need to start promoting is a click away. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group space-y-3">
                  <div className="cursor-pointer flex w-full group">
                    <div className="flex xl:flex-row space-x-10 items-center featuresvg4">
                    <svg className='absolute top-2 ' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8L8 14L20 2" stroke="#05D71A" stroke-opacity="0.2" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   
                     <div className="transition-all duration-300 cursor-pointer  xl:gap-6 text-[#16191C]">
                        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">Easy to Start and Maintain</h2>
                        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                        Professionally designed banner packages, seasonal e-books, and more assets to increase conversions.  </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Image src="/features/plan.svg" alt="" width={550} height={550} className="w-full 2xl:w-[700px]" />
            </div>
          </div>
        </div>
      </section>
    
      )
    }

export default Planpanel;