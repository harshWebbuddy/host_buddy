"use client"

import Image from "next/image";
import React, { useState } from "react";

const options = ["Key Features", "Control Panel Features", "Server Features", "Security", "Email"];

const OptionSelector = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const renderContent = (option: string) => {
    switch (option) {
      case "Key Features":
        return <div className="">
            <div className="bg-[#FFFFFF] rounded-2xl">
            <div className="flex sm:flex-col flex-col 2xl:flex-row md:flex-row bl:flex-row lg:flex-row xl:flex-row grids-cols-2 2xl:grid-cols-3 space-x-4 w-full ">        
          <ul className="w-full space-y-2  text-[10px] 2xl:text-[15px] p-4 pl-8">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
          </ul>
          <svg className="2xl:flex hidden w-1 mt-2 -translate-x-0" height="510px" viewBox="0 0 1 613" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18555e-08" x2="0.499973" y2="613" stroke="#E9E9E9"/>
</svg>

          <ul className="w-full space-y-2   text-[10px] 2xl:text-[15px] p-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>


          
          </ul>
        </div>


            </div>
        </div>;
      case "Control Panel Features":
        return <div className="option-content">
             <div className="bg-[#FFFFFF] rounded-2xl">
            <div className="flex sm:flex-col flex-col 2xl:flex-row md:flex-row bl:flex-row lg:flex-row xl:flex-row grids-cols-2 2xl:grid-cols-3 space-x-4 w-full ">        
          <ul className="w-full space-y-2  text-[10px] 2xl:text-[15px] p-4 pl-8">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
          </ul>
          <svg className="2xl:flex hidden w-1 mt-2 -translate-x-0" height="510px" viewBox="0 0 1 613" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18555e-08" x2="0.499973" y2="613" stroke="#E9E9E9"/>
</svg>

          <ul className="w-full space-y-2   text-[10px] 2xl:text-[15px] p-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>


          
          </ul>
        </div>


            </div>
        </div>;
      case "Server Features":
        return <div className="option-content">
         <div className="bg-[#FFFFFF] rounded-2xl">
            <div className="flex sm:flex-col flex-col 2xl:flex-row md:flex-row bl:flex-row lg:flex-row xl:flex-row grids-cols-2 2xl:grid-cols-3 space-x-4 w-full ">        
          <ul className="w-full space-y-2  text-[10px] 2xl:text-[15px] p-4 pl-8">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
          </ul>
          <svg className="2xl:flex hidden w-1 mt-2 -translate-x-0" height="510px" viewBox="0 0 1 613" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18555e-08" x2="0.499973" y2="613" stroke="#E9E9E9"/>
</svg>

          <ul className="w-full space-y-2   text-[10px] 2xl:text-[15px] p-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>


          
          </ul>
        </div>


            </div>
    </div>;
        case "Security":
          return <div className="option-content">
          <div className="bg-[#FFFFFF] rounded-2xl">
            <div className="flex sm:flex-col flex-col 2xl:flex-row md:flex-row bl:flex-row lg:flex-row xl:flex-row grids-cols-2 2xl:grid-cols-3 space-x-4 w-full ">        
          <ul className="w-full space-y-2  text-[10px] 2xl:text-[15px] p-4 pl-8">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
          </ul>
          <svg className="2xl:flex hidden w-1 mt-2 -translate-x-0" height="510px" viewBox="0 0 1 613" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18555e-08" x2="0.499973" y2="613" stroke="#E9E9E9"/>
</svg>

          <ul className="w-full space-y-2   text-[10px] 2xl:text-[15px] p-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>


          
          </ul>
        </div>


            </div>
      </div>;
          case "Email":
            return <div className="option-content">
       <div className="bg-[#FFFFFF] rounded-2xl">
            <div className="flex sm:flex-col flex-col 2xl:flex-row md:flex-row bl:flex-row lg:flex-row xl:flex-row grids-cols-2 2xl:grid-cols-3 space-x-4 w-full ">        
          <ul className="w-full space-y-2  text-[10px] 2xl:text-[15px] p-4 pl-8">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
          </ul>
          <svg className="2xl:flex hidden w-1 mt-2 -translate-x-0" height="510px" viewBox="0 0 1 613" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18555e-08" x2="0.499973" y2="613" stroke="#E9E9E9"/>
</svg>

          <ul className="w-full space-y-2   text-[10px] 2xl:text-[15px] p-4">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Custom Branding              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
              Unlimited Addon Domains
              </p>
            </li>


          
          </ul>
        </div>


            </div>
        </div>;
      default:
        return null;
    }
  };
 
  return (
    <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row bl:flex-row md:flex-row grid-cols-1 2xl:grid-cols-2  xl:grid-cols-2 bl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  max-w-[1300px] bg-[#F9EFE4] mx-auto p-4 border rounded-2xl overflow-hidden ">
      <div className="w-full 2xl:w-1/2 p-4  bg-white rounded-2xl  ">
        <ul className="space-y-0 w-full text-sm 2xl:text-md">
          {options.map((option, index) => (
            <li
              key={index}
              className={`cursor-pointer p-4 w-full ${
                selectedOption === option ? "bg-orange-500 text-white font-semibold" : "bg-white text-black font-bold"
              } rounded-2xl`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full p-4">
        <div className="text-xs 2xl:text-xl">
          {renderContent(selectedOption)}
        </div>
      </div>
    </div>
  );
};

export default OptionSelector;
