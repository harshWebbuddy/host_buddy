import { Panela, Panelb, Panelc } from '@/components/svgs'
import Image from 'next/image'
import React from 'react'
import Timeline from './timeline';


const Unique = () => {
  return (
    <section className=" relative pt-14 2xl:pt-36 2xl:pb-16">
    <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-center py-2">
      <Image src="/dotted.svg" alt="" width={100} height={100} className="2xl:flex hidden ml-1 absolute left-0 top-20 opacity-50 2xl:visible sm:invisible" />
      <div className="flex flex-col space-y-12 2xl:flex-row mx-auto items-center justify-between ">
        <div className="slide-reveal w-full flex  space-y-9 flex-col">
          <div className="space-y-5">
          <h4 className="text-[24px] xl:text-[32px] 2xl:text-[42px] text-black font-semibold font-mona-sans leading-normal">
            Ignite SEO, Maximize <span className="text-orange-500">Conversions</span>
          
            </h4>
            <p className="text-[14px] 2xl:text-[16px] leading-[24px] 2xl:pr-10 font-mono-sans">
            Lorem ipsum dolor sit amet consectetur. Cursus nulla ligula scelerisque pellentesque sed vitae. Mauris odio sed volutpat felis lacus nibh purus tortor egestas. Enim tempor condimentum nulla cras massa bibendum nibh hac. Ullamcorper commodo in sed congue egestas.
            </p>
          </div>
          <div className="flex flex-col  2xl:flex-row  items-center">
          <ul className="w-full space-y-2 2xl:space-y-4">
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
            <ul className="w-full   space-y-2 2xl:space-y-4">
           
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
        <div className="slide-reveal w-full flex flex-row justify-center relative">
  <Image src="/cpanel/1.jpeg" alt="" width={496} height={332} className="rounded-3xl" />
</div>

      </div>
    </div>
  </section>

  )
}

export default Unique