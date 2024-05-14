import Image from 'next/image'
import React from 'react'

const Unique = () => {
  const items = [
    {
      title: "Better Google Rankings",
      description: "Show up higher in search results when you have an SSL."
    },
    {

      title: "Industry-standard encryption",
      description: "Show up higher in search results when you have an SSL."
    },
    // {
      {
        title: "Padlock means safety",
        description: "Show up higher in search results when you have an SSL."
      },
      {
      
        title: "Trust Seal",
        description: "Show up higher in search results when you have an SSL."
      },
      {
      
        title: "30-day money-back guarantee",
        description: "Show up higher in search results when you have an SSL."
      },
      {
      
        title: "Padlock means safety",
        description: "Show up higher in search results when you have an SSL."
      },
 
  ];
  return (
    <section style={{
      backgroundImage: "url('/sitelock/blaack.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }} className="background w-full relative pt-20 pb-20">
    <div className="p-4 w-full max-w-[1350px] mx-auto flex flex-col xl:flex-row items-center justify-center ">
      <div className="flex flex-col 2xl:flex-row mx-auto items-center gap-y-10  ">
     
        <div className="w-full flex flex-col space-y-8 items-center justify-center 2xl:mb-40">
        <div className="space-y-3.5 flex-col items-center justify-center">
  <div className='pr-96'>
  <div className='bg-orange-500 h-full rounded-[10px] w-auto relative'>
    <div className='border-4 border-white rounded-[10px] p-2'>
   
      <h2 className='text-white mx-auto items-center px-2 justify-center text-[12px] font-semibold'>Plus</h2>
    </div>
  </div></div>
  <h4 className="text-[24px] text-white pr-20 font-semibold font-mona-sans leading-[36px]">
    Every SSL Certificate plan includes:<span className="text-orange-500"></span>
  </h4>
</div>

        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-14 items-center mx-auto ">
  {items.map((item, index) => (
    <div key={index} className="relative w-full lg:w-1/3 bl:w-1/4 xl:w-1/4 2xl:w-1/4  group"> 
      <div className="absolute -top-6 -left-6 w-16 h-16 flex justify-center items-center">
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8L8 14L20 2" stroke="#05D71A" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 8L8 14L20 2" stroke="#05D71A" strokeOpacity="0.2" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="rounded-2xl group w-full flex items-center justify-center bg-[#1A1A1A] text-[#FFFFFF] cursor-pointer">
        <div className="pt-4 w-full">
          <h2 className="text-[14px] font-bold mt-4 opacity-1 mb-2">{item.title}</h2>
          <p className="w-full opacity-70 font-mona-sans text-[14px] font-normal leading-[24px] text-left">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  </section>

  )
}

export default Unique