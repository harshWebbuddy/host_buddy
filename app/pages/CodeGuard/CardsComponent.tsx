import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="">
      <div className="  space-y-24 p-4 max-w-[1350px] mx-auto ">
        <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-40 gap-y-20  items-center">
         
        <div className="w-full flex justify-center">
            <div className="relative">
              <Image
                src="/professional/1.svg"
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
          <div className="w-full space-y-4">
          <div className="">
            <h2 className="text-[42px] leading-[63px] font-semibold"><span className="text-orange-500">Email:</span>  Good for Business</h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <p className="capitalize text-[16px] leading-loose">
              Weve updated our Professional Email plans to make it simple, secure, and mobile-friendly. Now you can sync all your accounts across all devices, promote your business every time you send and receive emails, easily manage folders, and more. Plus, it’s cost-effective.             </p>
            </li>

         
          </ul>
        </div>
      
        </div>
        <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-y-20 gap-x-60   items-center">
        <div className="w-full space-y-4">
           <div className="w-full">
          
             <h4 className="text-[42px] text-black font-semibold font-mona-sans leading-normal">
             Domain-based <span className="text-orange-500 capitalize"> email builds trust</span>
             </h4>
           </div>
           <ul className="w-full space-y-4">
  <li className="flex gap-4 items-start">
    <p className="capitalize leading-loose">
    Weve updated our Professional Email plans to make it simple, secure, and mobile-friendly. Now you can sync all your accounts across all devices, promote your business every time you send and receive emails, easily manage folders, and more. Plus, it’s cost-effective.    </p>
  </li>

</ul>
         </div>
         <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/professional/2.svg"
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
       <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-y-20 gap-x-60   items-center">
         
        
         <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/professional/3.svg"
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
         <div className="w-full space-y-4">
           <div className="w-full">
          
             <h4 className="text-[42px] text-black font-semibold capitalize font-mona-sans leading-normal pr-20">
             Stay connected with a    <span className="text-orange-500 capitalize">shared calendar      </span>
             </h4>
           </div>
           <ul className="w-full space-y-4">
  <li className="flex gap-4 items-start">
    <p className="capitalize leading-loose ">
    Professional Email works with Outlook, Apple Mail and other top programs to keep all your devices — from your laptop to your smartphone and tablet — up to date and in sync. Your latest emails, contacts, and appointments are at your fingertips, wherever you are.  </p>
  </li>
 
</ul>
         </div>
       </div>
       <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-y-20 gap-x-40   items-center">
       <div className="w-full space-y-4">
           <div className="w-full">
          
             <h4 className="text-[42px] text-black font-semibold font-mona-sans leading-normal">
             Integrate Seamlessly, <span className="text-orange-500 capitalize"> Grow </span> Rapidly
             </h4>
           </div>
           <ul className="w-full space-y-4">
  <li className="flex gap-4 items-start">
    <p className="capitalize leading-loose">
    Schedule appointments, transfer events from other calendar apps, send invites and get reminders on all your devices so you’re always in the loop.   </p>
  </li>
 
</ul>
         </div>
         <div className="w-full flex justify-center">
           <div className="relative">
             <Image
               src="/professional/4.svg"
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
      </div>
    </div>
  );
};

export default CardsComponent;
