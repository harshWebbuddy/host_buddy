import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Unique = () => {
  return (
    <section className=" relative pt-20 pb-20">
    <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-center py-2">
      <Image src="/dotted.svg" alt="" width={100} height={100} className="ml-1 absolute left-0 top-20 opacity-50 2xl:visible sm:invisible" />
      <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between ">
        <div className="w-full flex  space-y-9 flex-col animate-slide-from-left">
          <div className="space-y-5">
            <h4 className="text-[42px] text-black font-semibold font-mona-sans leading-normal">
            Optimized Value, Transparent 
Pricing,<span className="text-orange-500"> Sustainable Rates! </span>
          
            </h4>
            <p className="text-[16px] leading-loose font-mono-sans">
            Discover the power of scalability and high performance with our VPS hosting.
            </p>
          </div>
          <div className="flex flex-row  items-center">
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-1" />
              <p className="capitalize leading-7 text-lg ">
              No Overselling            </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-1" />
              <p className="capitalize leading-7 text-lg ">
              Dedicated Resources            </p>
            </li>
           
          </ul>
            <ul className="w-full space-y-4">
           
            <li className="flex gap-4 items-start pr-12">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-1" />
              <p className="capitalize leading-7 text-lg ">
              Transparent Billing          </p>
            </li>
             <li className="flex gap-4 items-start pr-12">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-1" />
              <p className="capitalize leading-7 text-lg ">
              Secured Infrastructure          </p>
            </li>
          </ul>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center relative animate-slide-from-right">
  <Image src="/vpshosting/manunique.svg" alt="" width={570} height={570} className="" />
</div>

      </div>
    </div>
  </section>

  )
}

export default Unique