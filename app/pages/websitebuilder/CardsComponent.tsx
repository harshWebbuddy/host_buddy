import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="">
      <div className="  space-y-12 2xl:space-y-24 p-4 max-w-[1350px] mx-auto ">
        <div className=" slide-reveal background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-40 gap-y-6 2xl:gap-y-20  items-center">
         
        <div className="2xl:hidden w-full flex justify-center">
            <div className="relative">
              <Image
                src="/websitebuilder/card1.svg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[20]"
              />
             
              <Image
                src="/cpanel/square.svg"
                alt=""
                width={600}
                height={346}
                className="2xl:flex hidden absolute -right-10 -bottom-10  z-10"
              />
            </div>
          </div> 
          <div className="w-full space-y-4">
          <div className="">
            <h2 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] font-semibold">Stunning <span className="text-orange-500">Website Templates</span> to Empower Your Success</h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-xs 2xl:text-xl leading-loose">
              Choose from 150 responsive and fully-customizable templates.              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-xs 2xl:text-xl leading-loose">
              Suitable for your business site, online store, blog, portfolio, 
and more.              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize text-xs 2xl:text-xl  leading-loose">
              Easily move elements and play around with different color 
schemes and fonts.
              </p>
            </li>
         
          </ul>
        </div>
        <div className="w-full hidden 2xl:flex justify-center">
            <div className="relative">
              <Image
                src="/websitebuilder/card1.svg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[20]"
              />
             
              <Image
                src="/cpanel/square.svg"
                alt=""
                width={600}
                height={346}
                className="absolute -right-10 -bottom-10  z-10"
              />
            </div>
          </div> 
        </div>
        <div className=" slide-reveal background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-40 gap-y-6 2xl:gap-y-20  items-center">
         
         <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/websitebuilder/card2.svg"
               width={531}
               height={315}
               alt=""
               className="rounded-2xl relative z-[20]"
             />
            
             <Image
               src="/cpanel/square.svg"
               alt=""
               width={600}
               height={346}
               className="2xl:flex hidden absolute -left-10 -bottom-10  z-10"
             />
           </div>
         </div> <div className="w-full space-y-4">
           <div className="w-full">
          
           <h2 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] font-semibold">
             Your <span className="text-orange-500 capitalize"> eCommerce  </span>Website-Your Profit
             </h2>
           </div>
           <ul className="w-full space-y-4">
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize  text-xs 2xl:text-lgleading-loose">
    Set up an eCommerce site using a template or AI - as you prefer.    </p>
  </li>
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize text-xs 2xl:text-lg leading-loose">
    Sell up to  <span className="font-bold">500 products</span> - no additional transaction fees.
    </p>
  </li>
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize text-xs 2xl:text-lg leading-loose">
    <span className="font-bold"> 20+ </span>  payment methods for a seamless checkout process.
    </p>
  </li>
</ul>
         </div>
       </div>
       <div className=" slide-reveal background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-40 gap-y-6 2xl:gap-y-20  items-center">
       <div className="w-full flex justify-center">
           <div className="2xl:hidden flex relative">
             <Image
               src="/websitebuilder/card2.jpeg"
               width={531}
               height={315}
               alt=""
               className="rounded-2xl relative z-[20]"
             />
            
             <Image
               src="/cpanel/square.svg"
               alt=""
               width={600}
               height={346}
               className="2xl:flex hidden absolute -left-10 -bottom-10  z-10"
             />
           </div>
         </div>  
          <div className="w-full space-y-4">
           <div className="w-full">
          
           <h2 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] font-semibold">
              <span className="text-orange-500 capitalize">24/7   </span>Live Support
             </h2>
           </div>
           <ul className="w-full space-y-4">
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize text-xs 2xl:text-lg leading-loose 2xl:pr-24">
    Need a hand? Contact our Customer Success team
via live chat or email.  </p>
  </li>
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize  text-xs 2xl:text-lgleading-loose">
    No delays - we'll respond in less than 3 minutes.
    </p>
  </li>
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize text-xs 2xl:text-lg leading-loose 2xl:pr-32">
    Our agents are fluent in 10+ languages, ensuring 
smooth communication
    </p>
  </li>
</ul>
         </div>
         <div className="w-full hidden 2xl:flex justify-center">
           <div className="relative">
             <Image
               src="/websitebuilder/card2.jpeg"
               width={531}
               height={315}
               alt=""
               className="rounded-2xl relative z-[20]"
             />
            
             <Image
               src="/cpanel/square.svg"
               alt=""
               width={600}
               height={346}
               className="absolute -left-10 -bottom-10  z-10"
             />
           </div>
         </div>
       </div>
       <div className=" slide-reveal background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-40 gap-y-6 2xl:gap-y-20  items-center">
         
         <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/websitebuilder/card4.jpeg"
               width={531}
               height={315}
               alt=""
               className="rounded-2xl relative z-[20]"
             />
            
             <Image
               src="/cpanel/square.svg"
               alt=""
               width={600}
               height={346}
               className="2xl:flex hidden absolute -left-10 -bottom-10  z-10"
             />
           </div>
         </div> <div className="w-full space-y-4">
           <div className="w-full">
          
           <h2 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] font-semibold">
             Integrate Seamlessly, <span className="text-orange-500 capitalize"> Grow </span> Rapidly
             </h2>
           </div>
           <ul className="w-full space-y-4">
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize  text-xs 2xl:text-lg  leading-loose">
    Beat your competition on Google with built-in SEO tools.   </p>
  </li>
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize  text-xs 2xl:text-lg leading-loose pr-20">
    Chat directly with your customers without switching
between apps.
    </p>
  </li>
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize text-xs 2xl:text-lg  leading-loose">
    Monetize your website by displaying targeted ads.
    </p>
  </li>
  <li className="flex gap-4 items-start">
    <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
    <p className="capitalize  text-xs 2xl:text-lg leading-loose pr-20">
    Track website data and make business decisions with 
confidence.
    </p>
  </li>
</ul>
         </div>
       </div>
      </div>
    </div>
  );
};

export default CardsComponent;
