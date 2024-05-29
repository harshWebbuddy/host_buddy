import { Panela, Panelb, Panelc } from '@/components/svgs'
import Image from 'next/image'
import React from 'react'

const Unique = () => {
  return (
    <section className=" relative bg-gradient-to-b from-[#292E34] to-[#16191C] pt-20 pb-20">
    <div className="p-4 w-full max-w-[1350px] mx-auto flex flex-col xl:flex-row items-center justify-center py-2">
      <div className="slide-reveal flex flex-col 2xl:flex-row mx-auto justify-center 2xl:justify-between space-y-20 items-center 2xl:space-x-52">
        <div className="w-full flex  space-y-16 flex-col">
        <div className="flex flex-col  2xl:items-start ">
          <h2 className="text-[36px] leading-[63px] font-semibold text-white w-full ">
        <span className="pb-4 border-b-4 border-orange-500">Started by</span> AI, Completed by You
          </h2>
          
        </div>
          <div className="flex flex-row  items-center">
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-1" />
              <p className="capitalize leading-7 text-lg text-white ">
              Answer three simple questions, and AI will create your website.           </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-1" />
              <p className="capitalize leading-7 text-lg text-white ">
              Generate SEO-friendly content, including unique copy 
and relevant images          </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-1" />
              <p className="capitalize leading-7 text-lg text-white ">
              Customize your site further with the drag-and-drop editor.         </p>
            </li>
          </ul>
         
          </div>
        </div>
        <div className="w-full flex flex-row justify-center relative bottom-4">
  <Image src="/websitebuilder/unique.svg" alt="" width={436} height={316} className="h-full" />
</div>

      </div>
    </div>
  </section>

  )
}

export default Unique