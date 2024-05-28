import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="bg-[#F9EFE4]">
      <div className="  space-y-24 p-4 max-w-[1350px] mx-auto pt-20 pb-32">
        <div className="animate-slide-from-left background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-60 gap-y-20  items-center">
         
          <div className="w-full flex justify-center">
            <div className="relative">
              <Image
                src="/cpanel/card1.svg"
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
          </div> <div className="w-full space-y-4">
            <div className="w-full">
              <h4 className="text-[39px] text-black font-semibold font-mona-sans leading-normal">
                Just Click Once to
              </h4>
              <h4 className="text-[39px] text-black font-semibold font-mona-sans leading-normal">
                Install These <span className="text-orange-500">Applications</span>
              </h4>
            </div>
            <ul className="w-full space-y-4">
              <li className="flex gap-4 items-start">
                <p className=" leading-[24px] pr-8">
                  Installing apps is a breeze! Deploy your favorite CMS
                  application and enjoy the best web hosting in India and
                  worldwide.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="animate-slide-from-right background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-y-20  items-center">
         
       
         <div className="w-full space-y-4">
           <div className="w-full">
             <h4 className="text-[39px] text-black font-semibold font-mona-sans leading-normal">
             Free Website <span className="text-orange-500"> Migration</span>
             </h4>
          
           </div>
           <ul className="w-full space-y-4">
             <li className="flex gap-4 items-start">
               <p className=" leading-[24px] pr-8">
               We ve updated our Professional Email plans to make it simple, secure, and mobile-friendly. Now you can sync all your accounts across all devices, promote your business every time you send and receive emails, easily manage folders, and more. Plus, it’s cost-effective.
               </p>
             </li>
           </ul>
         </div>
         <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/cpanel/card2.svg"
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
       <div className="a  nimate-slide-from-left background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-y-20  items-center">
         
         <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/cpanel/card3.svg"
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
         </div> <div className="w-full space-y-4">
           <div className="w-full">
          
             <h4 className="text-[39px] text-black font-semibold font-mona-sans leading-normal">
             CPane Certified <span className="text-orange-500">Experts </span>
             </h4>
           </div>
           <ul className="w-full space-y-4">
             <li className="flex gap-4 items-start">
               <p className=" leading-[24px] pr-8">
               Professional Email works with Outlook, Apple Mail and other top programs to keep all your devices — from your laptop to your smartphone and tablet — up to date and in sync. Your latest emails, contacts, and appointments are at your fingertips, wherever you are.
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
