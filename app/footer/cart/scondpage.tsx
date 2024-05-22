"use client";
import Image from "next/image";
import React, { useState } from "react";
interface RamOptionProps {
  label: string;
}
const RamOption: React.FC<RamOptionProps> = ({ label }) => (
  <span className="flex flex-row items-center space-x-2">
    <div className="svg-container">
      <svg
        className="default-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.17822"
          y="1.03894"
          width="14.077"
          height="14.077"
          rx="7.0385"
          stroke="#808080"
          strokeWidth="0.938467"
        />
      </svg>
      <svg
        className="hovered-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          fill="#FF7500"
        />
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          stroke="#FF7500"
          strokeWidth="0.938467"
        />
        <rect
          x="5.07812"
          y="5.26196"
          width="5.6308"
          height="5.6308"
          rx="2.8154"
          fill="white"
        />
      </svg>
    </div>
    <h2 className="text-[20px] text-[#16191C]">{label}</h2>
  </span>
);
const RamOption2: React.FC<RamOptionProps> = ({ label }) => (
  <span className="flex flex-row items-center space-x-2">
    <div className="svg-container">
      <svg
        className="default-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.562984"
          y="0.961482"
          width="14.077"
          height="14.077"
          stroke="#808080"
          strokeWidth="0.938467"
        />
      </svg>

      <svg
        className="hovered-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          fill="#FF7500"
        />
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          stroke="#FF7500"
          strokeWidth="0.938467"
        />
        <rect
          x="5.07812"
          y="5.26196"
          width="5.6308"
          height="5.6308"
          rx="2.8154"
          fill="white"
        />
      </svg>
    </div>
    <h2 className="text-[20px] text-[#16191C]">{label}</h2>
  </span>
);
2;
const PageSecond = () => {
  return (
    <section className="w-full bg-[#F5F5F5] h-full">
      <div className=" mx-auto relative  z-[2]   pt-20" style={{ maxWidth: "1350px" }}>
        <div className="flex flex-col 2xl:flex-row justify-between mx-auto 2xl:space-x-10 2xl:space-y-0 space-y-10">
          {/* First Box */}
          <div className="w-full bg-white rounded-3xl">
    <div className="flex flex-col w-full p-6 md:p-10 lg:p-20 pb-8 md:pb-12 lg:pb-16">
      <h1 className="w-full font-mono-sans font-extrabold text-[32px] md:text-[42px] 2xl:text-[52px] leading-tight md:leading-[64px] 2xl:leading-[84px] text-left">
        Dedicated Server
      </h1>
      <p className="text-[16px] md:text-[20px] 2xl:text-[24px]">
        Configure your desired options and continue to checkout
      </p>
    </div>
    <div className="flex flex-col space-y-12 md:space-y-24 lg:space-y-44">
      <div className="px-6 md:px-10 lg:pl-20 space-y-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-semibold">RAM MEMORY</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 md:gap-4 lg:gap-10">
          <RamOption label="Default" />
          <RamOption label="16 GB" />
          <RamOption label="32 GB" />
          <RamOption label="64 GB" />
          <RamOption label="128 GB" />
          <RamOption label="256 GB" />
        </div>
      </div>
      <div className="px-6 md:px-10 lg:pl-20 space-y-4">
        <div className="space-y-4">
          <h1 className="text-[20px] md:text-[24px] font-semibold capitalize">
            STORAGE SSD
          </h1>
          <p>
            <span className="font-semibold">NOTE! </span> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 md:gap-4 lg:gap-10">
          <RamOption label="2x 32GB" />
          <RamOption label="2x 64GB" />
          <RamOption label="2x 128GB" />
          <RamOption label="2x 512GB" />
        </div>
      </div>
      <div className="px-6 md:px-10 lg:pl-20 space-y-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-semibold capitalize">
            Software
          </h1>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap 2xl:flex-row gap-4 2xl:space-x-4  items-center justify-center mx-auto">
            <div className="w-full md:w-auto flex flex-col">
              <input
                type="text"
                id="controlPanel"
                name="controlPanel"
                placeholder="Select Control Panel"
                className="w-full pr-40 px-4 py-4 border rounded-xl"
                required
              />
            </div>
            <div className="w-full md:w-auto flex flex-col">
              <select
                id="operatingSystem"
                name="operatingSystem"
                required
                className="w-full pr-40 px-4 py-4 border rounded-xl"
              >
                <option value="">Select Operating System</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 lg:pl-20 space-y-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-semibold capitalize">
            Add-ons
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 md:gap-4 lg:gap-10">
          <RamOption2 label="Default" />
          <RamOption2 label="WHMCS" />
          <RamOption2 label="Joomla" />
          <RamOption2 label="Magento" />
          <RamOption2 label="Prestashop" />
        </div>
      </div>
      <div className="px-6 md:px-10 lg:pl-20 space-y-4">
        <div className="space-y-4">
          <h1 className="text-[20px] md:text-[24px] font-semibold">IP Address</h1>
          <p>
            <span className="font-semibold">NOTE! </span> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 md:gap-4 lg:gap-10">
          <RamOption label="1 IP" />
          <RamOption label="2 IPs" />
          <RamOption label="3 IPs" />
          <RamOption label="4 IP" />
          <RamOption label="5 IPs" />
          <RamOption label="6 IPs" />
        </div>
      </div>
      <div className="px-6 md:px-10 lg:pl-20 space-y-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-semibold capitalize">
            Billing Cycle
          </h1>
        </div>
        <div className="flex flex-col space-y-2">
          <select
            id="billingCycle"
            name="billingCycle"
            required
            className="w-full pr-10 px-4 py-4 border rounded-xl"
          >
            <option value="">Choose Billing Cycle</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className="px-6 md:px-10 lg:pl-20 space-y-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-semibold capitalize">
            Hostname
          </h1>
        </div>
        <div className="flex flex-col space-y-2 pb-20">
          <input
            type="text"
            id="hostname"
            name="hostname"
            placeholder="servername.yourdomain.com"
            className="w-full pr-10 px-4 py-4 border rounded-xl"
            required
          />
        </div>
      </div>
    </div>
  </div>
          {/* Second Box */}
          <div className="w-full 2xl:w-1/2 bg-white rounded-3xl h-fit ">
            <div className="p-10 space-y-10">
              <div>
                <h1 className="text-[24px] font-semibold">Selected Plan</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8589 9.14338C18.8589 14.1656 14.7531 18.2348 9.76748 18.2348C4.74522 18.2348 0.676083 14.1656 0.676083 9.14338C0.676083 4.15777 4.74522 0.0519811 9.76748 0.0519811C14.7531 0.0519811 18.8589 4.15777 18.8589 9.14338ZM8.70438 13.9824L15.4496 7.23712C15.6696 7.01717 15.6696 6.61392 15.4496 6.39397L14.6065 5.58747C14.3865 5.33086 14.0199 5.33086 13.8 5.58747L8.30113 11.0863L5.69835 8.52018C5.4784 8.26357 5.11181 8.26357 4.89185 8.52018L4.0487 9.32668C3.82875 9.54663 3.82875 9.94988 4.0487 10.1698L7.86122 13.9824C8.08118 14.2023 8.48442 14.2023 8.70438 13.9824Z"
                      fill="#FF7500"
                    />
                  </svg>
                  <h2 className="item-center justify-center">
                    {" "}
                    4x 3.2Ghz 2 Cores
                  </h2>
                </div>
                <div className="flex flex-row space-x-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8589 9.14338C18.8589 14.1656 14.7531 18.2348 9.76748 18.2348C4.74522 18.2348 0.676083 14.1656 0.676083 9.14338C0.676083 4.15777 4.74522 0.0519811 9.76748 0.0519811C14.7531 0.0519811 18.8589 4.15777 18.8589 9.14338ZM8.70438 13.9824L15.4496 7.23712C15.6696 7.01717 15.6696 6.61392 15.4496 6.39397L14.6065 5.58747C14.3865 5.33086 14.0199 5.33086 13.8 5.58747L8.30113 11.0863L5.69835 8.52018C5.4784 8.26357 5.11181 8.26357 4.89185 8.52018L4.0487 9.32668C3.82875 9.54663 3.82875 9.94988 4.0487 10.1698L7.86122 13.9824C8.08118 14.2023 8.48442 14.2023 8.70438 13.9824Z"
                      fill="#FF7500"
                    />
                  </svg>
                  <h2 className="item-center justify-center">
                    {" "}
                    16GB (up to 32GB)
                  </h2>
                </div>
                <div className="flex flex-row space-x-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8589 9.14338C18.8589 14.1656 14.7531 18.2348 9.76748 18.2348C4.74522 18.2348 0.676083 14.1656 0.676083 9.14338C0.676083 4.15777 4.74522 0.0519811 9.76748 0.0519811C14.7531 0.0519811 18.8589 4.15777 18.8589 9.14338ZM8.70438 13.9824L15.4496 7.23712C15.6696 7.01717 15.6696 6.61392 15.4496 6.39397L14.6065 5.58747C14.3865 5.33086 14.0199 5.33086 13.8 5.58747L8.30113 11.0863L5.69835 8.52018C5.4784 8.26357 5.11181 8.26357 4.89185 8.52018L4.0487 9.32668C3.82875 9.54663 3.82875 9.94988 4.0487 10.1698L7.86122 13.9824C8.08118 14.2023 8.48442 14.2023 8.70438 13.9824Z"
                      fill="#FF7500"
                    />
                  </svg>
                  <h2 className="item-center justify-center">
                    {" "}
                    2 x 1TB SATA 3.5
                  </h2>
                </div>
                <div className="flex flex-row space-x-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8589 9.14338C18.8589 14.1656 14.7531 18.2348 9.76748 18.2348C4.74522 18.2348 0.676083 14.1656 0.676083 9.14338C0.676083 4.15777 4.74522 0.0519811 9.76748 0.0519811C14.7531 0.0519811 18.8589 4.15777 18.8589 9.14338ZM8.70438 13.9824L15.4496 7.23712C15.6696 7.01717 15.6696 6.61392 15.4496 6.39397L14.6065 5.58747C14.3865 5.33086 14.0199 5.33086 13.8 5.58747L8.30113 11.0863L5.69835 8.52018C5.4784 8.26357 5.11181 8.26357 4.89185 8.52018L4.0487 9.32668C3.82875 9.54663 3.82875 9.94988 4.0487 10.1698L7.86122 13.9824C8.08118 14.2023 8.48442 14.2023 8.70438 13.9824Z"
                      fill="#FF7500"
                    />
                  </svg>
                  <h2 className="item-center justify-center"> 1TB Bandwidth</h2>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div>
                <h2 className="text-[24px] font-semibold">Order Summary</h2>
                </div>
                <div className="flex flex-col space-y-2">
                <div className="text-[18px] ">
                  <div className="justify-between flex">
                    <span>Setup Fees</span>
                    <span className="font-bold">$0.00 USD</span>
                  </div>
                  <div className="line21"></div>
                </div>
                <div className="text-[18px] ">
                  <div className="justify-between flex">
                  <span>Monthly</span>
                    <span className="font-bold">$82.00 USD</span> 
                  </div>
                  <div className="line21"></div>
                </div>
                <div className="text-[18px] ">
                  <div className="justify-between flex">
                  <span>Total Amount</span>
                    <span className="font-bold">$100.82 USD</span>
                  </div>
                  <div className="line21"></div>
                </div>
                </div>
              </div>
            </div>
            <div className="px-36 pb-10">
            <div className="group w-full h-[52px]  text-white  text-xl rounded-xl bg-orange-500 group-hover:bg-[#FF7500] transition-all duration-300 hover:shadow-2xl  font-bold flex items-center justify-center ">
              <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px] text-white">Continue</h4>
        
            </div></div>
          </div>
        </div>
      </div>
      <Image src="/config12.svg" alt="" width={100} height={100} className="w-full absolute opacity-50 z-[1] -top-60"/>
      <div className="flex mx-auto flex-col space-y-12 max-w-[1350px] xl:items-stretch 2xl:items-stretch pa:items-center pa:justify-center">
      
            <div className="pt-20">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-full px-10 py-7 bg-[#FFFFFF] flex flex-col items-start justify-start rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99479 5.20832C9.18938 5.20832 8.53646 5.86124 8.53646 6.66666C8.53646 7.47207 9.18938 8.12499 9.99479 8.12499V5.20832ZM9.99479 8.12499C10.8002 8.12499 11.4531 7.47207 11.4531 6.66666C11.4531 5.86124 10.8002 5.20832 9.99479 5.20832V8.12499ZM16.4557 6.66666C16.4557 5.86124 15.8028 5.20832 14.9974 5.20832C14.192 5.20832 13.5391 5.86124 13.5391 6.66666H16.4557ZM13.5391 36.6667C13.5391 37.4721 14.192 38.125 14.9974 38.125C15.8028 38.125 16.4557 37.4721 16.4557 36.6667H13.5391ZM9.99479 8.12499H28.3281V5.20832H9.99479V8.12499ZM28.3281 8.12499C29.3637 8.12499 30.2031 8.96446 30.2031 9.99999H33.1198C33.1198 7.35363 30.9745 5.20832 28.3281 5.20832V8.12499ZM30.2031 9.99999V30H33.1198V9.99999H30.2031ZM30.2031 30C30.2031 31.0355 29.3637 31.875 28.3281 31.875V34.7917C30.9745 34.7917 33.1198 32.6464 33.1198 30H30.2031ZM28.3281 31.875H9.99479V34.7917H28.3281V31.875ZM9.99479 31.875C9.87973 31.875 9.78646 31.7817 9.78646 31.6667H6.86979C6.86979 33.3925 8.2689 34.7917 9.99479 34.7917V31.875ZM9.78646 31.6667V8.33332H6.86979V31.6667H9.78646ZM9.78646 8.33332C9.78646 8.21826 9.87973 8.12499 9.99479 8.12499V5.20832C8.2689 5.20832 6.86979 6.60743 6.86979 8.33332H9.78646ZM13.5391 6.66666V36.6667H16.4557V6.66666H13.5391Z" fill="#FF7500"/>
<path d="M21.6641 13.3333H24.9974" stroke="#FF7500" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6641 20H24.9974" stroke="#FF7500" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-2xl font-bold md:whitespace-nowrap">Knowledgebase </h2>
                    <p className="text-lg leading-relaxed text-[#16191C]/70">Lorem ipsum dolor sit amet</p>{" "}
                  </div>
                </div>
                <div className="w-full px-10 py-7 bg-[#FFFFFF] flex flex-col items-start justify-start rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.43814 12.598C8.16129 12.598 7.89066 12.6801 7.66047 12.8339C7.43027 12.9877 7.25086 13.2064 7.14491 13.4621C7.03897 13.7179 7.01125 13.9994 7.06526 14.2709C7.11927 14.5424 7.25258 14.7918 7.44835 14.9876C7.64411 15.1834 7.89353 15.3167 8.16506 15.3707C8.43659 15.4247 8.71804 15.397 8.97382 15.291C9.22959 15.1851 9.44821 15.0057 9.60202 14.7755C9.75583 14.5453 9.83792 14.2747 9.83792 13.9978C9.83792 13.6266 9.69045 13.2705 9.42794 13.008C9.16543 12.7455 8.80939 12.598 8.43814 12.598ZM14.0373 12.598C13.7604 12.598 13.4898 12.6801 13.2596 12.8339C13.0294 12.9877 12.85 13.2064 12.744 13.4621C12.6381 13.7179 12.6104 13.9994 12.6644 14.2709C12.7184 14.5424 12.8517 14.7918 13.0475 14.9876C13.2432 15.1834 13.4927 15.3167 13.7642 15.3707C14.0357 15.4247 14.3172 15.397 14.5729 15.291C14.8287 15.1851 15.0473 15.0057 15.2011 14.7755C15.355 14.5453 15.437 14.2747 15.437 13.9978C15.437 13.6266 15.2896 13.2705 15.0271 13.008C14.7646 12.7455 14.4085 12.598 14.0373 12.598ZM19.6364 12.598C19.3595 12.598 19.0889 12.6801 18.8587 12.8339C18.6285 12.9877 18.4491 13.2064 18.3432 13.4621C18.2372 13.7179 18.2095 13.9994 18.2635 14.2709C18.3175 14.5424 18.4508 14.7918 18.6466 14.9876C18.8424 15.1834 19.0918 15.3167 19.3633 15.3707C19.6348 15.4247 19.9163 15.397 20.1721 15.291C20.4278 15.1851 20.6465 15.0057 20.8003 14.7755C20.9541 14.5453 21.0362 14.2747 21.0362 13.9978C21.0362 13.6266 20.8887 13.2705 20.6262 13.008C20.3637 12.7455 20.0076 12.598 19.6364 12.598ZM14.0373 0C12.199 0 10.3788 0.362064 8.68054 1.06552C6.98224 1.76898 5.43914 2.80005 4.13932 4.09986C1.51422 6.72496 0.0394548 10.2854 0.0394548 13.9978C0.0272176 17.2301 1.14639 20.3648 3.20296 22.8584L0.403398 25.658C0.209168 25.8548 0.0775933 26.1048 0.0252777 26.3763C-0.0270379 26.6479 0.0022493 26.9288 0.109444 27.1838C0.225707 27.4356 0.414182 27.6473 0.650945 27.7918C0.887707 27.9364 1.16208 28.0073 1.43924 27.9956H14.0373C17.7497 27.9956 21.3101 26.5209 23.9352 23.8958C26.5603 21.2707 28.0351 17.7103 28.0351 13.9978C28.0351 10.2854 26.5603 6.72496 23.9352 4.09986C21.3101 1.47477 17.7497 0 14.0373 0ZM14.0373 25.1961H4.81271L6.11451 23.8943C6.24677 23.7646 6.35199 23.61 6.42407 23.4394C6.49616 23.2688 6.53367 23.0856 6.53444 22.9004C6.52918 22.5312 6.37824 22.179 6.11451 21.9206C4.28161 20.0897 3.14021 17.68 2.88478 15.102C2.62934 12.5239 3.27567 9.93706 4.71364 7.78211C6.15162 5.62717 8.29227 4.03747 10.7709 3.28385C13.2495 2.53023 15.9128 2.65931 18.3069 3.64911C20.701 4.63891 22.6779 6.42818 23.9007 8.71209C25.1236 10.996 25.5167 13.6332 25.0131 16.1745C24.5096 18.7157 23.1405 21.0038 21.1391 22.6488C19.1377 24.2938 16.6279 25.194 14.0373 25.1961Z" fill="#FF7500"/>
</svg>


                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-2xl font-bold md:whitespace-nowrap">Customer Support Chat</h2>
                    <p className="text-lg leading-relaxed text-[#16191C]/70">Lorem ipsum dolor sit amet</p>{" "}
                  </div>
                </div>
                <div className="w-full px-10 py-7 bg-[#FFFFFF] flex flex-col items-start justify-start rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.75 0H4.25C3.12283 0 2.04183 0.447767 1.2448 1.2448C0.447767 2.04183 0 3.12283 0 4.25L0 21.25C0 22.3772 0.447767 23.4582 1.2448 24.2552C2.04183 25.0522 3.12283 25.5 4.25 25.5H29.75C30.8772 25.5 31.9582 25.0522 32.7552 24.2552C33.5522 23.4582 34 22.3772 34 21.25V4.25C34 3.12283 33.5522 2.04183 32.7552 1.2448C31.9582 0.447767 30.8772 0 29.75 0ZM31.1667 21.25C31.1667 21.6257 31.0174 21.9861 30.7517 22.2517C30.4861 22.5174 30.1257 22.6667 29.75 22.6667H4.25C3.87428 22.6667 3.51394 22.5174 3.24827 22.2517C2.98259 21.9861 2.83333 21.6257 2.83333 21.25V4.25C2.83333 3.87428 2.98259 3.51394 3.24827 3.24827C3.51394 2.98259 3.87428 2.83333 4.25 2.83333H29.75C30.1257 2.83333 30.4861 2.98259 30.7517 3.24827C31.0174 3.51394 31.1667 3.87428 31.1667 4.25V21.25Z" fill="#FF7500"/>
<path d="M26.2082 5.85382L16.9998 11.1182L7.79149 5.85382C7.63 5.7608 7.45178 5.7005 7.26699 5.67635C7.08221 5.65221 6.89447 5.6647 6.71451 5.71311C6.53455 5.76152 6.36589 5.8449 6.21816 5.9585C6.07042 6.07209 5.94651 6.21367 5.85349 6.37515C5.76047 6.53663 5.70016 6.71485 5.67602 6.89964C5.65188 7.08443 5.66437 7.27216 5.71278 7.45212C5.76119 7.63208 5.84457 7.80075 5.95816 7.94848C6.07176 8.09622 6.21334 8.22013 6.37482 8.31315L16.2915 13.9798C16.507 14.0976 16.7486 14.1594 16.9942 14.1594C17.2397 14.1594 17.4813 14.0976 17.6968 13.9798L27.6135 8.31315C27.7796 8.22336 27.9261 8.10125 28.0444 7.954C28.1627 7.80676 28.2503 7.63735 28.3022 7.45575C28.354 7.27414 28.369 7.084 28.3463 6.89651C28.3236 6.70902 28.2636 6.52796 28.1699 6.36399C28.0762 6.20001 27.9507 6.05642 27.8007 5.94167C27.6507 5.82692 27.4793 5.74332 27.2965 5.69579C27.1137 5.64825 26.9233 5.63775 26.7364 5.66489C26.5495 5.69203 26.3699 5.75626 26.2082 5.85382Z" fill="#FF7500"/>
</svg>


                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-2xl font-bold md:whitespace-nowrap">Send Tickets</h2>
                    <p className="text-lg leading-relaxed text-[#16191C]/70">Lorem ipsum dolor sit amet</p>{" "}
                  </div>
                </div>
              </div>
             
            </div>
          </div>  
    </section>
  );
};

export default PageSecond;
