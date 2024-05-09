import { caseStudies } from '@/app/(landing)/components/constants/casestudies';
import Image from 'next/image'
import React from 'react'
import { BiChevronRight } from "react-icons/bi";

const CaseStudy = () => {
  return (
      <section className="bg-[#F5F5F5] mt-20 py-20 mb-72">
        <div className="max-w-[1360px] mx-auto p-4">
          <h1 className="text-[42px] font-semibold">
            Our Featured <span className="pb-4 border-b-4 border-orange-500">CaseStudy</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-6 gap-x-4 mt-10">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="space-y-6">
                <Image src={caseStudy.image} alt="" width={500} height={500} className="w-full h-[240px] object-cover rounded-xl" />
                <h1 className="text-xl font-bold leading-relaxed">{caseStudy.title}</h1>
                <div className="relative max-w-fit flex flex-row group items-center justify-center !mt-4">
                  <div className="flex items-center gap-x-3 pb-2">
                    <p className="text-[16px] font-bold text-orange-500">Read more</p>
                    <img src="/orangearrow.svg" className=" w-[11px] text-orange-500" />
                  </div>
                  <div className="bg-orange-500 h-0.5 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CaseStudy
