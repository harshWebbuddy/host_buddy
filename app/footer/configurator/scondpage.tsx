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
    <section className="w-full bg-[#F5F5F5]">
      <div className=" mx-auto   pt-20" style={{ maxWidth: "1350px" }}>
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
                    <span>Setup Fees</span>
                    <span className="font-bold">$0.00 USD</span>
                  </div>
                  <div className="line21"></div>
                </div>
                <div className="text-[18px] ">
                  <div className="justify-between flex">
                    <span>Setup Fees</span>
                    <span className="font-bold">$0.00 USD</span>
                  </div>
                  <div className="line21"></div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src="/config12.svg" alt="" width={100} height={100}/>
    </section>
  );
};

export default PageSecond;
