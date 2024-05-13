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
        icon:<svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 25C0 26.3261 0.526784 27.5979 1.46447 28.5355C2.40215 29.4732 3.67392 30 5 30H35C36.3261 30 37.5979 29.4732 38.5355 28.5355C39.4732 27.5979 40 26.3261 40 25V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0ZM36.6667 25C36.6667 25.442 36.4911 25.866 36.1785 26.1785C35.866 26.4911 35.442 26.6667 35 26.6667H5C4.55797 26.6667 4.13405 26.4911 3.82149 26.1785C3.50893 25.866 3.33333 25.442 3.33333 25V5C3.33333 4.55797 3.50893 4.13405 3.82149 3.82149C4.13405 3.50893 4.55797 3.33333 5 3.33333H35C35.442 3.33333 35.866 3.50893 36.1785 3.82149C36.4911 4.13405 36.6667 4.55797 36.6667 5V25Z" fill="#FF7500"/>
        <path d="M30.8375 6.88671L20.0042 13.08L9.17082 6.88671C8.98084 6.77727 8.77117 6.70633 8.55377 6.67793C8.33637 6.64952 8.11551 6.66422 7.90379 6.72117C7.69208 6.77813 7.49365 6.87622 7.31984 7.00986C7.14604 7.1435 7.00025 7.31006 6.89082 7.50004C6.78138 7.69002 6.71044 7.89969 6.68204 8.11709C6.65363 8.33449 6.66833 8.55535 6.72528 8.76707C6.78224 8.97879 6.88033 9.17721 7.01397 9.35102C7.14761 9.52483 7.31417 9.67061 7.50415 9.78004L19.1708 16.4467C19.4243 16.5853 19.7086 16.6579 19.9975 16.6579C20.2864 16.6579 20.5707 16.5853 20.8242 16.4467L32.4908 9.78004C32.6863 9.6744 32.8587 9.53074 32.9978 9.35751C33.1369 9.18429 33.24 8.98499 33.301 8.77133C33.362 8.55768 33.3797 8.33399 33.353 8.11341C33.3263 7.89283 33.2557 7.67982 33.1455 7.48691C33.0352 7.29399 32.8875 7.12507 32.7111 6.99007C32.5346 6.85507 32.3329 6.75671 32.1179 6.70079C31.9028 6.64487 31.6788 6.63251 31.4589 6.66444C31.239 6.69637 31.0277 6.77194 30.8375 6.88671Z" fill="#FF7500"/>
        </svg>
        
        ,
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
    }} className="background w-full relative">
    <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-center py-24">
      <div className="flex flex-row 2xl:flex-row mx-auto items-center justify-between ">
     
        <div className="w-full flex flex-col space-y-8">
          <div className="space-y-3.5 flex flex-col 2xl:flex-row pr-4">
 
          <div className='bg-orange-500  h-full rounded-3xl p-0 relative'>
  <div className='border-4 border-white rounded-2xl p-2'>
    <h2 className='text-white mx-auto items-center justify-center text-[14px] font-semibold'>Plus</h2>
  </div>
</div>



            <h4 className="text-[24px] text-white font-semibold font-mona-sans leading-[36px]">
            Every SSL Certificate
plan includes:<span className="text-orange-500"></span>
             
            </h4>
         
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-14 items-center mx-auto mt-20">
  {items.map((item, index) => (
    <div key={index} className="relative w-full sm:w-1/3 md:w-1/4 lg:w-1/5 gap-10 group">
      <div className="absolute -top-6 -left-6 w-16 h-16 flex justify-center items-center">
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8L8 14L20 2" stroke="#05D71A" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 8L8 14L20 2" stroke="#05D71A" strokeOpacity="0.2" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="rounded-2xl group flex items-center justify-center bg-[#1A1A1A] text-[#FFFFFF] cursor-pointer">
        <div className="pt-4 ">
          <h2 className="text-xl font-bold mt-4 opacity-1 mb-2">{item.title}</h2>
          <p className="w-full opacity-70 font-mona-sans text-[16px] font-normal leading-[24px] text-left">
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