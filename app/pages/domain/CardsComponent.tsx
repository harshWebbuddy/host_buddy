import { ArrowIcon } from "@/components/svgs";
import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="space-y-28 p-4 max-w-[1300px] mx-auto pt-36 pb-20">
     
      <div className="w-full flex flex-col xl:flex-row-reverse space-y-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/domain/card1.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/card3.svg" width={150} height={150} alt="" className="absolute -top-16 -left-16 z-[12]" />
          </div>
        </div>
        <div className="w-full space-y-5">
          <div className="w-full ">
            <h2 className="text-[52px] leading-10 font-bold">Free Privacy Protection</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[18px] font-light flex flex-col space-y-6">
              <span>Lorem ipsum dolor sit amet consectetur. Integer sed suspendisse imperdiet enim feugiat id tortor turpis ipsum. Nunc ultrices iaculis fermentum in.</span>
            <span>   Non enim libero mattis elementum ornare pellentesque dui consequat. Etiam aliquam orci massa enim nunc egestas facilisis</span>
            <span> tincidunt purus. Quis tellus posuere donec nisi pulvinar eget. Integer proin facilisi proin facilisis urna. Ac elit metus fermentum diam cras. Id ut in nulla pellentesque facilisis. Lacus penatibus augue justo nunc tellus. Volutpat aliquam volutpat arcu suspendisse nunc aliquam eu morbi in. Et neque sit dui velit. </span>    </p>
            </li>
         
          </ul>
          <button className="bg-white border-orange-500 border w-full items-center flex flex-row justify-center">
              <h2 className="font-medium text-[16px]  leading-normal ">Domain Name Search</h2> <img src="/hosting/ArrowIcon.svg" className=""/>
          </button>
        </div>
        
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-14 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/domain/card2.svg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-10 -left-10" />
            <Image src="/domain/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10" />
          </div>
        </div>
          <div className="w-full space-y-5">
          <div className="">
            <h2 className="text-4xl leading-10 font-semibold">Purchased a Domain Already? Transfer It to Hostinger Today</h2>
          </div>
          <ul className="w-full space-y-10">
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[16px] font-light">
              Manage your website domain at Hostinger by quickly transferring it from your current registrar – it only takes a few clicks. </p>
            </li>
             <button className="bg-white border-orange-500 border flex flex-row  items-center justify-center">
              <h2 className="font-medium text-[16px]  leading-normal ">Get Started </h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 items-center justify-center "/>

          </button>
          </ul>
         
        </div>
      
      </div>
      <div className="w-full flex flex-col xl:flex-row-reverse gap-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/cards1.jpg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/card1triangle.svg" width={70} height={70} alt="" className="absolute -top-10 -right-10" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -left-10 -bottom-10" />
          </div>
        </div>
         <div className="w-full space-y-4">
          <div className="">
           <h2 className="text-4xl leading-10 font-semibold">Register a Domain Name For Free</h2>
          </div>
          <ul className="w-full space-y-4">
          
            <li className="flex gap-4 items-start">
              <p className="capitalize leading-6 text-[16px] font-light">
              Lorem ipsum dolor sit amet consectetur. Amet eu non dignissim commodo convallis mauris. Dui est mauris dictum aliquet justo sodales nulla. At ac vel morbi vestibulum eget lectus faucibus diam.</p>
            </li>
              <button className="bg-white border-orange-500 border flex flex-row  items-center justify-center">
              <h2 className="font-medium text-[16px]  leading-normal ">Get Started </h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5  items-center justify-center "/>

          </button>
          </ul>
        </div>
       
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-16 items-center">
        <div className="w-full space-y-4">
          <div className="">
            <h2 className="text-3xl leading-relaxed font-semibold">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Volutpat ut et urna gravida non <span className="font-bold"> justo nibh enim habitant sed ante. </span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper mi tortor dolor <span className="font-bold"> nulla aliquam. Sed placerat.</span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit <span className="font-bold"> amet consectetur. </span> Luctus aliquam ut volutpat ipsum fermentum quisque tortor.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Lorem faucibus <span className="font-bold"> dignissim nibh </span> vitae urna ultrices. Ultricies.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/cards1.jpg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/card1triangle.svg" width={70} height={70} alt="" className="absolute -top-10 -right-10" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -left-10 -bottom-10" />
          </div>
        </div>
      </div>
     s
    </div>
  );
};

export default CardsComponent;
