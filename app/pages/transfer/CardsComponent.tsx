import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="bg-[#F9EFE4]">
      <div className="  space-y-24 p-4 max-w-[1350px] mx-auto py-20">
      <div className=" slide-reveal background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-40 gap-y-20  items-center">
         
      <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/transfer/card1.svg"
               width={528}
               height={496}
               alt=""
               className="rounded-2xl relative z-[20]"
             />
            
           
           </div>
         </div> 
         <div className="w-full space-y-4 2xl:space-y-8">
         <div className="">
           <h2 className="text-[32px] 2xl:text-[42px] leading-normal font-semibold">To Ensure a  <span className="text-orange-500">Successful</span>  Domain Transfer</h2>
         </div>
         <ul className="w-full space-y-4">
           <li className="flex gap-4 items-start">
             <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
             <p className="capitalize  leading-loose text-[15px] 2xl:text-[18px]">
             Make sure it has been more than 60 days since the domain registration or last transfer.            </p>
           </li>
           <li className="flex gap-4 items-start">
             <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
             <p className="capitalize leading-loose text-[15px] 2xl:text-[18px]">
             Check your domain status, it should not be in Pending Delete or Redemption status.             </p>
           </li>
           <li className="flex gap-4 items-start">
             <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
             <p className="capitalize leading-loose text-[15px] 2xl:text-[18px]">
             Make sure you have access to the domain’s EPP code. <a className="text-orange-500 underline"> Learn more about EPP</a>
             </p>
           </li>
           <li className="flex gap-4 items-start">
             <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
             <p className="capitalize leading-loose text-[15px] 2xl:text-[18px]">
             Your Whois privacy protection should be disabled before the transfer process.
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
