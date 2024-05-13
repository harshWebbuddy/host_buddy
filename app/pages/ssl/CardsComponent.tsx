import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="">
      <img src="/ssl/design.svg" className="absolute   h-[700px] right-[700px]"/>
      <div className="space-y-96 p-4 max-w-[1350px] mx-auto ">
        <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-0 gap-y-20  items-center">
         
        <div className="w-full flex justify-center">
            <div className="">
              <Image
                src="/ssl/card1.svg"
                width={774}
                height={438}
                alt=""
                className="rounded-2xl absolute top-0 left-[500px]" 
              />
             
           
            </div>
          </div> 
          <div className="w-full space-y-4">
          <div className="">
       <h2 className="text-[42px] leading-[63px] font-semibold">     First, the <span className="text-orange-500">SSL agreement</span></h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <p className="capitalize text-[15px] leading-loose">
              When a visitor enters an SSL-protected website, your SSL certificate automatically creates a secure, encrypted connection with their browser. Your site is most secure when SSL is deployed on all pages and subdomains        </p>
            </li>

         
          </ul>
        </div>
      
        </div>
        <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-0 gap-y-20  items-center">
         
       
          <div className="w-full space-y-4">
          <div className="">
       <h2 className="text-[42px] leading-[63px] capitalize font-semibold">   Now you're <span className="text-orange-500">good to go</span></h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <p className="capitalize text-[15px] leading-loose">
              When a visitor enters an SSL-protected website, your SSL certificate automatically creates a secure, encrypted connection with their browser. Your site is most secure when SSL is deployed on all pages and subdomains        </p>
            </li>

         
          </ul>
        </div>
        <div className="w-full flex justify-center">
            <div className="">
              <Image
                src="/ssl/card2.svg"
                width={774}
                height={438}
                alt=""
                className="rounded-2xl absolute top-0 right-[550px]" 
              />
             
           
            </div>
          </div>
        </div>
        <div className=" background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-0 gap-y-20  items-center">
         
        <div className="w-full flex justify-center">
            <div className="">
              <Image
                src="/ssl/card3.svg"
                width={774}
                height={438}
                alt=""
                className="rounded-2xl absolute top-0 left-[500px]" 
              />
             
           
            </div>
          </div> 
          <div className="w-full space-y-4">
          <div className="">
       <h2 className="text-[42px] leading-[63px] font-semibold capitalize">  The  <span className="text-orange-500">padlock</span> icon appears</h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <p className="capitalize text-[15px] leading-loose">
              When a visitor enters an SSL-protected website, your SSL certificate automatically creates a secure, encrypted connection with their browser. Your site is most secure when SSL is deployed on all pages and subdomains        </p>
            </li>

         
          </ul>
        </div>
      
        </div>
       
      </div>
      <img src="/ssl/design.svg" className="absolute   h-[900px] right-[500px]"/>
    </div>
  );
};

export default CardsComponent;
