"use client"
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Switch from "@mui/material/Switch";
import { useState } from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Plans = () => {
  const [isHovered, setIsHovered] = useState(false);

  const CustomSwitchIcon = (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "#FF7500",
      }}
    />
  );
  return (
    <div className="flex flex-col max-w-[1300px] mx-auto">
      {/* heading */}
      <div className="flex flex-col bl:flex-row justify-between gap-y-10 gap-x-30 items-center mb-8">
        <div className="relative w-full">
          <h2 className="font-mona-sans font-semibold text-[42px] leading-relaxed w-full text-center bl:text-left">
          The Premier Choice For
  {/* <span className="pb-4 border-b-4 border-orange-500">Shared </span>Hosting  */}
          </h2>
          <h2 className="font-mona-sans font-semibold text-[42px] leading-relaxed w-full text-center bl:text-left">
  <span className="pb-4 border-b-4 border-orange-500">Shared </span>Hosting 
          </h2>
        </div>
        <div className="flex flex-wrap bl:flex-nowrap items-center gap-2 sm:gap-5">
        
          <p className="font-mono-sans text-[16px] font-light leading-[24px] text-center 2xl:text-left text-[#16191C]">
          Our mission is to accelerate business growth with unparalleled performance, support, and security, surpassing industry-leading hosting providers.
          </p>
        </div>
      </div>
      {/* cards */}
      <section className="pt-10">
        <div className="flex flex-col bl:flex-row w-full justify-center gap-8 items-center">

          
        <div className="mb-5 w-full bg-white hover:bg-[#F9EFE4] px-10 py-10 rounded-2xl border group">
  <div className="mb-0 w-full space-y-6 items-center justify-center mx-auto">
    <span className="items-center justify-center mx-auto w-auto">
    <svg className="items-center featuresvg justify-center mx-auto px-32" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37 54H5C3.67441 53.9984 2.40356 53.4711 1.46622 52.5338C0.528882 51.5964 0.00158786 50.3256 0 49V5C0.00158786 3.67441 0.528882 2.40356 1.46622 1.46622C2.40356 0.528882 3.67441 0.00158786 5 0H51C52.3256 0.00158786 53.5964 0.528882 54.5338 1.46622C55.4711 2.40356 55.9984 3.67441 56 5V37C56 37.2652 55.8946 37.5196 55.7071 37.7071C55.5196 37.8946 55.2652 38 55 38C54.7348 38 54.4804 37.8946 54.2929 37.7071C54.1054 37.5196 54 37.2652 54 37V5C54 4.20435 53.6839 3.44129 53.1213 2.87868C52.5587 2.31607 51.7957 2 51 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V49C2 49.7957 2.31607 50.5587 2.87868 51.1213C3.44129 51.6839 4.20435 52 5 52H37C37.2652 52 37.5196 52.1054 37.7071 52.2929C37.8946 52.4804 38 52.7348 38 53C38 53.2652 37.8946 53.5196 37.7071 53.7071C37.5196 53.8946 37.2652 54 37 54Z" fill="#FF7500"/>
<path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="#FF7500"/>
<path d="M13 8C14.1046 8 15 7.10457 15 6C15 4.89543 14.1046 4 13 4C11.8954 4 11 4.89543 11 6C11 7.10457 11.8954 8 13 8Z" fill="#FF7500"/>
<path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="#FF7500"/>
<path d="M55 12H1C0.734784 12 0.48043 11.8946 0.292893 11.7071C0.105357 11.5196 0 11.2652 0 11V5C0.00158786 3.67441 0.528882 2.40356 1.46622 1.46622C2.40356 0.528882 3.67441 0.00158786 5 0H51C52.3256 0.00158786 53.5964 0.528882 54.5338 1.46622C55.4711 2.40356 55.9984 3.67441 56 5V11C56 11.2652 55.8946 11.5196 55.7071 11.7071C55.5196 11.8946 55.2652 12 55 12ZM2 10H54V5C54 4.20435 53.6839 3.44129 53.1213 2.87868C52.5587 2.31607 51.7957 2 51 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V10Z" fill="#FF7500"/>
<path d="M49 7H43C42.7348 7 42.4804 6.89464 42.2929 6.70711C42.1054 6.51957 42 6.26522 42 6C42 5.73478 42.1054 5.48043 42.2929 5.29289C42.4804 5.10536 42.7348 5 43 5H49C49.2652 5 49.5196 5.10536 49.7071 5.29289C49.8946 5.48043 50 5.73478 50 6C50 6.26522 49.8946 6.51957 49.7071 6.70711C49.5196 6.89464 49.2652 7 49 7ZM39 7H37C36.7348 7 36.4804 6.89464 36.2929 6.70711C36.1054 6.51957 36 6.26522 36 6C36 5.73478 36.1054 5.48043 36.2929 5.29289C36.4804 5.10536 36.7348 5 37 5H39C39.2652 5 39.5196 5.10536 39.7071 5.29289C39.8946 5.48043 40 5.73478 40 6C40 6.26522 39.8946 6.51957 39.7071 6.70711C39.5196 6.89464 39.2652 7 39 7ZM37 36H9C8.20435 36 7.44129 35.6839 6.87868 35.1213C6.31607 34.5587 6 33.7956 6 33V19C6 18.2044 6.31607 17.4413 6.87868 16.8787C7.44129 16.3161 8.20435 16 9 16H47C47.7957 16 48.5587 16.3161 49.1213 16.8787C49.6839 17.4413 50 18.2044 50 19V27C50 27.2652 49.8946 27.5196 49.7071 27.7071C49.5196 27.8946 49.2652 28 49 28C48.7348 28 48.4804 27.8946 48.2929 27.7071C48.1054 27.5196 48 27.2652 48 27V19C48 18.7348 47.8946 18.4804 47.7071 18.2929C47.5196 18.1054 47.2652 18 47 18H9C8.73478 18 8.48043 18.1054 8.29289 18.2929C8.10536 18.4804 8 18.7348 8 19V33C8 33.2652 8.10536 33.5196 8.29289 33.7071C8.48043 33.8946 8.73478 34 9 34H37C37.2652 34 37.5196 34.1054 37.7071 34.2929C37.8946 34.4804 38 34.7348 38 35C38 35.2652 37.8946 35.5196 37.7071 35.7071C37.5196 35.8946 37.2652 36 37 36Z" fill="#FF7500"/>
<path d="M47 59C44.4288 59 41.9154 58.2376 39.7776 56.8091C37.6398 55.3807 35.9735 53.3503 34.9896 50.9749C34.0056 48.5995 33.7482 45.9856 34.2498 43.4638C34.7514 40.9421 35.9895 38.6257 37.8076 36.8076C39.6257 34.9895 41.9421 33.7514 44.4638 33.2498C46.9856 32.7482 49.5995 33.0056 51.9749 33.9896C54.3503 34.9735 56.3807 36.6398 57.8091 38.7776C59.2376 40.9154 60 43.4288 60 46C59.996 49.4466 58.6251 52.7509 56.188 55.188C53.7509 57.6251 50.4466 58.996 47 59ZM47 35C44.8244 35 42.6977 35.6451 40.8887 36.8538C39.0798 38.0625 37.6699 39.7805 36.8373 41.7905C36.0048 43.8005 35.7869 46.0122 36.2114 48.146C36.6358 50.2798 37.6835 52.2398 39.2218 53.7782C40.7602 55.3166 42.7202 56.3642 44.854 56.7886C46.9878 57.2131 49.1995 56.9952 51.2095 56.1627C53.2195 55.3301 54.9375 53.9202 56.1462 52.1113C57.3549 50.3023 58 48.1756 58 46C57.9966 43.0837 56.8365 40.2878 54.7744 38.2256C52.7122 36.1635 49.9163 35.0034 47 35Z" fill="#FF7500"/>
<path d="M47 56C45.0222 56 43.0888 55.4135 41.4443 54.3147C39.7998 53.2159 38.5181 51.6541 37.7612 49.8268C37.0043 47.9996 36.8063 45.9889 37.1922 44.0491C37.578 42.1093 38.5304 40.3275 39.9289 38.9289C41.3275 37.5304 43.1093 36.578 45.0491 36.1922C46.9889 35.8063 48.9996 36.0043 50.8268 36.7612C52.6541 37.5181 54.2159 38.7998 55.3147 40.4443C56.4135 42.0888 57 44.0222 57 46C56.9971 48.6513 55.9426 51.1931 54.0679 53.0679C52.1931 54.9426 49.6513 55.9971 47 56ZM47 38C45.4178 38 43.871 38.4692 42.5554 39.3482C41.2399 40.2273 40.2145 41.4767 39.609 42.9385C39.0035 44.4003 38.845 46.0089 39.1537 47.5607C39.4624 49.1126 40.2243 50.538 41.3432 51.6569C42.462 52.7757 43.8874 53.5376 45.4393 53.8463C46.9911 54.155 48.5997 53.9965 50.0615 53.391C51.5233 52.7855 52.7727 51.7602 53.6518 50.4446C54.5308 49.129 55 47.5823 55 46C54.9976 43.879 54.154 41.8456 52.6542 40.3458C51.1545 38.846 49.121 38.0024 47 38Z" fill="#FF7500"/>
<path d="M47 47.5C47.8284 47.5 48.5 46.8284 48.5 46C48.5 45.1716 47.8284 44.5 47 44.5C46.1716 44.5 45.5 45.1716 45.5 46C45.5 46.8284 46.1716 47.5 47 47.5Z" fill="#FF7500"/>
<path d="M40 47H38C37.7348 47 37.4804 46.8946 37.2929 46.7071C37.1054 46.5196 37 46.2652 37 46C37 45.7348 37.1054 45.4804 37.2929 45.2929C37.4804 45.1054 37.7348 45 38 45H40C40.2652 45 40.5196 45.1054 40.7071 45.2929C40.8946 45.4804 41 45.7348 41 46C41 46.2652 40.8946 46.5196 40.7071 46.7071C40.5196 46.8946 40.2652 47 40 47ZM40.636 53.364C40.4383 53.364 40.2449 53.3053 40.0805 53.1954C39.9161 53.0855 39.788 52.9294 39.7123 52.7467C39.6367 52.564 39.6169 52.3629 39.6554 52.169C39.694 51.975 39.7892 51.7969 39.929 51.657L41.343 50.243C41.5316 50.0608 41.7842 49.96 42.0464 49.9623C42.3086 49.9646 42.5594 50.0698 42.7448 50.2552C42.9302 50.4406 43.0354 50.6914 43.0377 50.9536C43.04 51.2158 42.9392 51.4684 42.757 51.657L41.343 53.071C41.1555 53.2585 40.9012 53.3639 40.636 53.364ZM47 56C46.7348 56 46.4804 55.8946 46.2929 55.7071C46.1054 55.5196 46 55.2652 46 55V53C46 52.7348 46.1054 52.4804 46.2929 52.2929C46.4804 52.1054 46.7348 52 47 52C47.2652 52 47.5196 52.1054 47.7071 52.2929C47.8946 52.4804 48 52.7348 48 53V55C48 55.2652 47.8946 55.5196 47.7071 55.7071C47.5196 55.8946 47.2652 56 47 56ZM53.364 53.364C53.0988 53.3639 52.8445 53.2585 52.657 53.071L51.243 51.657C51.0608 51.4684 50.96 51.2158 50.9623 50.9536C50.9646 50.6914 51.0698 50.4406 51.2552 50.2552C51.4406 50.0698 51.6914 49.9646 51.9536 49.9623C52.2158 49.96 52.4684 50.0608 52.657 50.243L54.071 51.657C54.2108 51.7969 54.306 51.975 54.3446 52.169C54.3832 52.3629 54.3633 52.564 54.2877 52.7467C54.212 52.9294 54.0839 53.0855 53.9195 53.1954C53.7551 53.3053 53.5617 53.364 53.364 53.364ZM56 47H54C53.7348 47 53.4804 46.8946 53.2929 46.7071C53.1054 46.5196 53 46.2652 53 46C53 45.7348 53.1054 45.4804 53.2929 45.2929C53.4804 45.1054 53.7348 45 54 45H56C56.2652 45 56.5196 45.1054 56.7071 45.2929C56.8946 45.4804 57 45.7348 57 46C57 46.2652 56.8946 46.5196 56.7071 46.7071C56.5196 46.8946 56.2652 47 56 47ZM51.95 42.05C51.7523 42.05 51.559 41.9913 51.3945 41.8814C51.2301 41.7715 51.102 41.6154 51.0263 41.4327C50.9507 41.25 50.9309 41.0489 50.9694 40.855C51.008 40.661 51.1032 40.4829 51.243 40.343L52.657 38.929C52.8456 38.7468 53.0982 38.646 53.3604 38.6483C53.6226 38.6506 53.8734 38.7558 54.0588 38.9412C54.2442 39.1266 54.3494 39.3774 54.3517 39.6396C54.354 39.9018 54.2532 40.1544 54.071 40.343L52.657 41.757C52.5644 41.8502 52.4542 41.9241 52.3329 41.9743C52.2115 42.0246 52.0814 42.0504 51.95 42.05ZM47 40C46.7348 40 46.4804 39.8946 46.2929 39.7071C46.1054 39.5196 46 39.2652 46 39V37C46 36.7348 46.1054 36.4804 46.2929 36.2929C46.4804 36.1054 46.7348 36 47 36C47.2652 36 47.5196 36.1054 47.7071 36.2929C47.8946 36.4804 48 36.7348 48 37V39C48 39.2652 47.8946 39.5196 47.7071 39.7071C47.5196 39.8946 47.2652 40 47 40ZM42.05 42.05C41.9186 42.0504 41.7885 42.0246 41.6671 41.9743C41.5458 41.9241 41.4356 41.8502 41.343 41.757L39.929 40.343C39.7468 40.1544 39.646 39.9018 39.6483 39.6396C39.6506 39.3774 39.7558 39.1266 39.9412 38.9412C40.1266 38.7558 40.3774 38.6506 40.6396 38.6483C40.9018 38.646 41.1544 38.7468 41.343 38.929L42.757 40.343C42.8968 40.4829 42.992 40.661 43.0306 40.855C43.0691 41.0489 43.0493 41.25 42.9737 41.4327C42.898 41.6154 42.7699 41.7715 42.6055 41.8814C42.441 41.9913 42.2477 42.05 42.05 42.05ZM49 49C48.7348 48.9999 48.4805 48.8946 48.293 48.707L46.293 46.707C46.1054 46.5195 46.0001 46.2652 46 46V42C46 41.7348 46.1054 41.4804 46.2929 41.2929C46.4804 41.1054 46.7348 41 47 41C47.2652 41 47.5196 41.1054 47.7071 41.2929C47.8946 41.4804 48 41.7348 48 42V45.586L49.707 47.293C49.8468 47.4329 49.942 47.611 49.9806 47.805C50.0192 47.9989 49.9993 48.2 49.9237 48.3827C49.848 48.5654 49.7199 48.7215 49.5555 48.8314C49.391 48.9413 49.1978 49 49 49ZM47 35C46.7348 35 46.4804 34.8946 46.2929 34.7071C46.1054 34.5196 46 34.2652 46 34V30C46 29.7348 46.1054 29.4804 46.2929 29.2929C46.4804 29.1054 46.7348 29 47 29C47.2652 29 47.5196 29.1054 47.7071 29.2929C47.8946 29.4804 48 29.7348 48 30V34C48 34.2652 47.8946 34.5196 47.7071 34.7071C47.5196 34.8946 47.2652 35 47 35Z" fill="#FF7500"/>
<path d="M50 31H44C43.7348 31 43.4804 30.8946 43.2929 30.7071C43.1054 30.5196 43 30.2652 43 30C43 29.7348 43.1054 29.4804 43.2929 29.2929C43.4804 29.1054 43.7348 29 44 29H50C50.2652 29 50.5196 29.1054 50.7071 29.2929C50.8946 29.4804 51 29.7348 51 30C51 30.2652 50.8946 30.5196 50.7071 30.7071C50.5196 30.8946 50.2652 31 50 31ZM31 41H8C7.73478 41 7.48043 40.8946 7.29289 40.7071C7.10536 40.5196 7 40.2652 7 40C7 39.7348 7.10536 39.4804 7.29289 39.2929C7.48043 39.1054 7.73478 39 8 39H31C31.2652 39 31.5196 39.1054 31.7071 39.2929C31.8946 39.4804 32 39.7348 32 40C32 40.2652 31.8946 40.5196 31.7071 40.7071C31.5196 40.8946 31.2652 41 31 41ZM31 45H8C7.73478 45 7.48043 44.8946 7.29289 44.7071C7.10536 44.5196 7 44.2652 7 44C7 43.7348 7.10536 43.4804 7.29289 43.2929C7.48043 43.1054 7.73478 43 8 43H31C31.2652 43 31.5196 43.1054 31.7071 43.2929C31.8946 43.4804 32 43.7348 32 44C32 44.2652 31.8946 44.5196 31.7071 44.7071C31.5196 44.8946 31.2652 45 31 45ZM31 49H8C7.73478 49 7.48043 48.8946 7.29289 48.7071C7.10536 48.5196 7 48.2652 7 48C7 47.7348 7.10536 47.4804 7.29289 47.2929C7.48043 47.1054 7.73478 47 8 47H31C31.2652 47 31.5196 47.1054 31.7071 47.2929C31.8946 47.4804 32 47.7348 32 48C32 48.2652 31.8946 48.5196 31.7071 48.7071C31.5196 48.8946 31.2652 49 31 49Z" fill="#FF7500"/>
</svg>

    </span>
    <div className="font-bold text-lg leading-[26px] text-center font-mono-sans-serif text-[#16191C] mb-2 px-20">Fastest Website Loading Speed</div>
    <p className="font-mona-sans text-base font-normal leading-21 text-center h-[17px] opacity-70 px-10">Lorem ipsum dolor sit amet consectetur. Velit morbi eleifend tellus pharetra porttitor sagittis.</p>
  </div>
  <div className="mt-20 ">
    <div className="w-full h-[52px] text-xl rounded-xl font-bold flex items-center justify-center group">
      <span className="ml-2 text-[#FFA030] text-lg font-semibold leading-6 opacity-0 group-hover:opacity-100">Learn more</span>
      <span className="text-[#FFA030] -ml-28 group-hover:ml-2">
        <FaArrowRight size={15} />
      </span>
    </div>
  </div>
</div>

<div className="mb-5 w-full bg-white hover:bg-[#F9EFE4] px-10 py-10 rounded-2xl border group">
  <div className="mb-0 w-full space-y-6 items-center justify-center mx-auto">
    <span className="items-center justify-center mx-auto w-auto">
    <svg className="items-center featuresvg justify-center mx-auto px-32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4101_10563)">
<path d="M33.3443 42.4975C32.8943 42.4975 32.4468 42.4025 32.0293 42.215L30.2793 41.42C30.1907 41.3823 30.0955 41.3629 29.9993 41.3629C29.903 41.3629 29.8078 41.3823 29.7193 41.42L27.9718 42.215C27.1718 42.5775 26.2518 42.59 25.4418 42.26C25.0397 42.0928 24.6762 41.8451 24.3735 41.5321C24.0708 41.2191 23.8354 40.8474 23.6818 40.44L23.0068 38.64C22.9737 38.5491 22.9212 38.4664 22.853 38.3978C22.7848 38.3291 22.7025 38.2762 22.6118 38.2425L20.8118 37.565C20.4039 37.4128 20.0317 37.1782 19.7185 36.8758C19.4052 36.5735 19.1576 36.2098 18.9911 35.8076C18.8245 35.4053 18.7427 34.9731 18.7505 34.5378C18.7584 34.1025 18.8558 33.6735 19.0368 33.2775L19.8318 31.5275C19.8714 31.4395 19.8919 31.344 19.8919 31.2475C19.8919 31.151 19.8714 31.0555 19.8318 30.9675L19.0368 29.2175C18.8581 28.8212 18.7624 28.3925 18.7557 27.9578C18.7489 27.5232 18.8312 27.0917 18.9975 26.6901C19.1638 26.2884 19.4105 25.925 19.7226 25.6223C20.0346 25.3196 20.4053 25.084 20.8118 24.93L22.6143 24.255C22.7045 24.2212 22.7864 24.1684 22.8545 24.1003C22.9227 24.0321 22.9754 23.9502 23.0093 23.86L23.6843 22.06C23.9943 21.2375 24.6343 20.575 25.4443 20.24C25.8467 20.0747 26.2786 19.9932 26.7136 20.0005C27.1487 20.0079 27.5776 20.1038 27.9743 20.2825L29.7243 21.0775C29.8123 21.1171 29.9077 21.1376 30.0043 21.1376C30.1008 21.1376 30.1962 21.1171 30.2843 21.0775L32.0343 20.2825C32.4308 20.1032 32.8598 20.007 33.2949 19.9997C33.73 19.9923 34.162 20.0741 34.5643 20.24C35.3743 20.575 36.0143 21.2375 36.3243 22.0575L36.9993 23.86C37.0331 23.9502 37.0859 24.0321 37.154 24.1003C37.2221 24.1684 37.3041 24.2212 37.3943 24.255L39.1943 24.93C40.0168 25.24 40.6793 25.88 41.0143 26.69C41.3493 27.5 41.3343 28.4225 40.9718 29.22L40.1768 30.97C40.1372 31.058 40.1167 31.1535 40.1167 31.25C40.1167 31.3465 40.1372 31.442 40.1768 31.53L40.9718 33.28C41.1508 33.6766 41.2467 34.1056 41.2535 34.5407C41.2603 34.9758 41.1778 35.4076 41.0113 35.8096C40.8447 36.2116 40.5976 36.5752 40.2851 36.8779C39.9726 37.1807 39.6013 37.4162 39.1943 37.57L37.3943 38.245C37.3039 38.2785 37.2218 38.3312 37.1536 38.3994C37.0855 38.4675 37.0328 38.5496 36.9993 38.64L36.3243 40.4425C36.0143 41.2625 35.3743 41.925 34.5643 42.2625C34.176 42.417 33.7621 42.4967 33.3443 42.4975ZM30.0018 38.86C30.4493 38.86 30.8968 38.9525 31.3143 39.1425L33.0643 39.9375C33.2943 40.0375 33.4993 39.985 33.6018 39.9475C33.6872 39.9116 33.7645 39.8588 33.829 39.7922C33.8935 39.7256 33.9437 39.6466 33.9768 39.56L34.6518 37.76C34.9718 36.9025 35.6493 36.225 36.5093 35.9025L38.3093 35.225C38.3962 35.1928 38.4757 35.143 38.5425 35.0787C38.6094 35.0145 38.6623 34.9371 38.698 34.8515C38.7336 34.7659 38.7513 34.6738 38.7498 34.5811C38.7483 34.4883 38.7277 34.3969 38.6893 34.3125L37.8943 32.5625C37.7064 32.15 37.6092 31.702 37.6092 31.2487C37.6092 30.7955 37.7064 30.3475 37.8943 29.935L38.6893 28.185C38.7284 28.1006 38.7492 28.0088 38.7505 27.9158C38.7518 27.8227 38.7335 27.7305 38.6968 27.645C38.6619 27.5592 38.6094 27.4817 38.5427 27.4175C38.4759 27.3533 38.3964 27.3039 38.3093 27.2725L36.5093 26.5975C36.0847 26.4384 35.6992 26.1903 35.3784 25.8699C35.0576 25.5496 34.809 25.1643 34.6493 24.74L33.9743 22.9375C33.9421 22.8511 33.8924 22.7722 33.8283 22.706C33.7642 22.6397 33.6871 22.5875 33.6018 22.5525C33.5159 22.5171 33.4238 22.4995 33.331 22.5008C33.2382 22.5021 33.1466 22.5222 33.0618 22.56L31.3118 23.355C30.8988 23.5429 30.4504 23.6401 29.9968 23.6401C29.5431 23.6401 29.0947 23.5429 28.6818 23.355L26.9318 22.56C26.8473 22.521 26.7556 22.5002 26.6626 22.499C26.5695 22.4977 26.4773 22.5159 26.3918 22.5525C26.306 22.5873 26.2285 22.6398 26.1643 22.7066C26.1001 22.7734 26.0507 22.8529 26.0193 22.94L25.3443 24.74C25.0218 25.6 24.3443 26.2775 23.4868 26.6L21.6843 27.275C21.5975 27.3074 21.5184 27.3574 21.4518 27.4218C21.3851 27.4862 21.3325 27.5635 21.2971 27.6491C21.2617 27.7347 21.2443 27.8267 21.2459 27.9193C21.2476 28.0119 21.2683 28.1032 21.3068 28.1875L22.1018 29.9375C22.2897 30.3504 22.3869 30.7988 22.3869 31.2525C22.3869 31.7062 22.2897 32.1546 22.1018 32.5675L21.3068 34.315C21.2677 34.3994 21.2468 34.4911 21.2455 34.5842C21.2442 34.6772 21.2625 34.7695 21.2993 34.855C21.3418 34.955 21.4468 35.1375 21.6843 35.225L23.4868 35.9025C24.3468 36.225 25.0243 36.9025 25.3443 37.7625L26.0193 39.56C26.0515 39.647 26.1015 39.7264 26.1661 39.7931C26.2306 39.8598 26.3083 39.9124 26.3943 39.9475C26.48 39.9817 26.5717 39.9985 26.664 39.9968C26.7563 39.9951 26.8474 39.9749 26.9318 39.9375L28.6818 39.1425C29.0969 38.9563 29.5468 38.86 30.0018 38.86Z" fill="#FF7500"/>
<path d="M36.25 60C35.9666 60.0002 35.6916 59.9041 35.47 59.7275L30 55.3525L24.53 59.7275C24.346 59.8744 24.1243 59.9664 23.8904 59.9928C23.6565 60.0193 23.4198 59.9791 23.2077 59.877C22.9956 59.7748 22.8166 59.6149 22.6914 59.4155C22.5662 59.2161 22.4999 58.9854 22.5 58.75V38.15C22.5 37.8185 22.6317 37.5006 22.8661 37.2661C23.1005 37.0317 23.4185 36.9 23.75 36.9C24.0815 36.9 24.3995 37.0317 24.6339 37.2661C24.8683 37.5006 25 37.8185 25 38.15V56.15L29.22 52.7725C29.4417 52.595 29.7172 52.4983 30.0012 52.4983C30.2853 52.4983 30.5608 52.595 30.7825 52.7725L35 56.15V38.15C35 37.8185 35.1317 37.5006 35.3661 37.2661C35.6005 37.0317 35.9185 36.9 36.25 36.9C36.5815 36.9 36.8995 37.0317 37.1339 37.2661C37.3683 37.5006 37.5 37.8185 37.5 38.15V58.75C37.5003 58.9143 37.4682 59.077 37.4055 59.2288C37.3428 59.3806 37.2508 59.5185 37.1346 59.6346C37.0185 59.7508 36.8806 59.8428 36.7287 59.9055C36.5769 59.9682 36.4142 60.0004 36.25 60Z" fill="#FF7500"/>
<path d="M53.75 55H43.75C43.4185 55 43.1005 54.8683 42.8661 54.6339C42.6317 54.3995 42.5 54.0815 42.5 53.75C42.5 53.4185 42.6317 53.1005 42.8661 52.8661C43.1005 52.6317 43.4185 52.5 43.75 52.5H53.75C55.8175 52.5 57.5 50.8175 57.5 48.75V6.25C57.5 4.1825 55.8175 2.5 53.75 2.5H6.25C4.1825 2.5 2.5 4.1825 2.5 6.25V48.75C2.5 50.8175 4.1825 52.5 6.25 52.5H16.25C16.5815 52.5 16.8995 52.6317 17.1339 52.8661C17.3683 53.1005 17.5 53.4185 17.5 53.75C17.5 54.0815 17.3683 54.3995 17.1339 54.6339C16.8995 54.8683 16.5815 55 16.25 55H6.25C4.59301 54.998 3.00445 54.3389 1.83277 53.1672C0.661102 51.9956 0.00198482 50.407 0 48.75L0 6.25C0 2.805 2.805 0 6.25 0H53.75C57.195 0 60 2.805 60 6.25V48.75C60 52.1975 57.195 55 53.75 55Z" fill="#FF7500"/>
<path d="M58.75 12.5H1.25C0.918479 12.5 0.600537 12.3683 0.366117 12.1339C0.131696 11.8995 0 11.5815 0 11.25C0 10.9185 0.131696 10.6005 0.366117 10.3661C0.600537 10.1317 0.918479 10 1.25 10H58.75C59.0815 10 59.3995 10.1317 59.6339 10.3661C59.8683 10.6005 60 10.9185 60 11.25C60 11.5815 59.8683 11.8995 59.6339 12.1339C59.3995 12.3683 59.0815 12.5 58.75 12.5Z" fill="#FF7500"/>
</g>
<defs>
<clipPath id="clip0_4101_10563">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs>
</svg>


    </span>
    <div className="font-bold text-lg leading-[26px] text-center font-mono-sans-serif text-[#16191C] mb-2 px-20">Fastest Website Loading Speed</div>
    <p className="font-mona-sans text-base font-normal leading-21 text-center h-[17px] opacity-70 px-10">Lorem ipsum dolor sit amet consectetur. Velit morbi eleifend tellus pharetra porttitor sagittis.</p>
  </div>
  <div className="mt-20 ">
    <div className="w-full h-[52px] text-xl rounded-xl font-bold flex items-center justify-center group">
      <span className="ml-2 text-[#FFA030] text-lg font-semibold leading-6 opacity-0 group-hover:opacity-100">Learn more</span>
      <span className="text-[#FFA030] -ml-28 group-hover:ml-2">
        <FaArrowRight size={15} />
      </span>
    </div>
  </div>
</div>
<div className="mb-5 w-full bg-white hover:bg-[#F9EFE4] px-10 py-10 rounded-2xl border group">
  <div className="mb-0 w-full space-y-6 items-center justify-center mx-auto">
    <span className="items-center justify-center mx-auto w-auto">
    <svg className="items-center featuresvg justify-center mx-auto px-32"  viewBox="0 0 58 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8305 15.8029C15.6526 14.9769 15.2045 14.2337 14.557 13.6907C13.9095 13.1477 13.0996 12.8359 12.2552 12.8046C11.4107 12.7732 10.5799 13.0241 9.894 13.5176C9.20805 14.0111 8.70608 14.719 8.46736 15.5296C8.22864 16.3402 8.26679 17.2072 8.57577 17.9937C8.88476 18.7802 9.44698 19.4413 10.1736 19.8727C10.9002 20.304 11.7499 20.4809 12.5883 20.3756C13.4267 20.2702 14.2061 19.8884 14.8034 19.2907C15.2538 18.8425 15.5841 18.2879 15.7636 17.6784C15.9431 17.0688 15.9661 16.4238 15.8305 15.8029ZM13.5287 18.0161C13.295 18.255 13.0041 18.43 12.6837 18.5247C12.3633 18.6193 12.0239 18.6304 11.698 18.5568C11.33 18.4732 10.9932 18.2873 10.7263 18.0205C10.4595 17.7536 10.2736 17.4168 10.19 17.0488C10.1282 16.7589 10.1315 16.4589 10.1998 16.1704C10.2681 15.8819 10.3997 15.6122 10.5849 15.3808C10.7702 15.1494 11.0046 14.962 11.2711 14.8323C11.5376 14.7025 11.8297 14.6335 12.1261 14.6304C12.2724 14.6306 12.4182 14.6465 12.5611 14.6777C12.9291 14.7613 13.2659 14.9472 13.5327 15.214C13.7996 15.4808 13.9855 15.8176 14.0691 16.1856C14.1427 16.5115 14.1316 16.8507 14.037 17.1711C13.9424 17.4915 13.7674 17.7824 13.5287 18.0161Z" fill="#FF7500"/>
<path d="M34.659 34.8688C34.42 34.8688 34.1908 34.9637 34.0218 35.1327C33.8528 35.3017 33.7578 35.531 33.7578 35.77V39.6932C33.7578 39.9322 33.8528 40.1614 34.0218 40.3305C34.1908 40.4995 34.42 40.5944 34.659 40.5944C34.8981 40.5944 35.1273 40.4995 35.2963 40.3305C35.4653 40.1614 35.5603 39.9322 35.5603 39.6932V35.77C35.5603 35.531 35.4653 35.3017 35.2963 35.1327C35.1273 34.9637 34.8981 34.8688 34.659 34.8688Z" fill="#FF7500"/>
<path d="M15.8305 36.9175C15.6526 36.0914 15.2045 35.3482 14.557 34.8052C13.9095 34.2623 13.0996 33.9505 12.2552 33.9191C11.4107 33.8878 10.5799 34.1387 9.894 34.6321C9.20805 35.1256 8.70608 35.8336 8.46736 36.6442C8.22864 37.4548 8.26679 38.3218 8.57577 39.1083C8.88476 39.8948 9.44698 40.5559 10.1736 40.9872C10.9002 41.4186 11.7499 41.5955 12.5883 41.4901C13.4267 41.3847 14.2061 41.003 14.8034 40.4053C15.2538 39.957 15.5841 39.4025 15.7636 38.7929C15.9431 38.1833 15.9661 37.5383 15.8305 36.9175ZM13.5287 39.1307C13.295 39.3695 13.0041 39.5446 12.6837 39.6392C12.3633 39.7339 12.0239 39.7449 11.698 39.6714C11.33 39.5878 10.9932 39.4019 10.7263 39.135C10.4595 38.8682 10.2736 38.5314 10.19 38.1634C10.1282 37.8735 10.1315 37.5734 10.1998 37.285C10.2681 36.9965 10.3997 36.7268 10.5849 36.4954C10.7702 36.264 11.0046 36.0766 11.2711 35.9468C11.5376 35.817 11.8297 35.7481 12.1261 35.745C12.2724 35.7452 12.4182 35.761 12.5611 35.7922C12.9291 35.8758 13.2659 36.0618 13.5327 36.3286C13.7996 36.5954 13.9855 36.9322 14.0691 37.3001C14.1427 37.626 14.1316 37.9653 14.037 38.2857C13.9424 38.6061 13.7674 38.897 13.5287 39.1307Z" fill="#FF7500"/>
<path d="M30.7958 34.8688C30.5567 34.8688 30.3275 34.9637 30.1585 35.1327C29.9895 35.3017 29.8945 35.531 29.8945 35.77V39.6932C29.8945 39.9322 29.9895 40.1614 30.1585 40.3305C30.3275 40.4995 30.5567 40.5944 30.7958 40.5944C31.0348 40.5944 31.264 40.4995 31.433 40.3305C31.602 40.1614 31.697 39.9322 31.697 39.6932V35.77C31.697 35.531 31.602 35.3017 31.433 35.1327C31.264 34.9637 31.0348 34.8688 30.7958 34.8688Z" fill="#FF7500"/>
<path d="M3.41456 58.9484C4.15175 58.9461 4.86811 58.7035 5.45503 58.2574C6.04195 57.8114 6.46743 57.1861 6.66697 56.4764H18.9522C19.1629 57.6336 19.7731 58.6802 20.6762 59.4337C21.5794 60.1872 22.7183 60.6 23.8946 60.6C25.0708 60.6 26.2098 60.1872 27.1129 59.4337C28.0161 58.6802 28.6262 57.6336 28.837 56.4764H41.1223C41.3403 57.2636 41.8363 57.9451 42.5183 58.3947C43.2003 58.8442 44.0221 59.0313 44.8315 58.9213C45.6409 58.8113 46.383 58.4117 46.9203 57.7964C47.4576 57.1812 47.7537 56.392 47.7537 55.5752C47.7537 54.7583 47.4576 53.9692 46.9203 53.3539C46.383 52.7387 45.6409 52.339 44.8315 52.229C44.0221 52.119 43.2003 52.3061 42.5183 52.7557C41.8363 53.2052 41.3403 53.8867 41.1223 54.674H28.837C28.6448 53.6646 28.1507 52.7374 27.42 52.0151C26.6893 51.2928 25.7565 50.8094 24.745 50.6288V46.1766H41.5442C42.5841 46.171 43.5799 45.7555 44.3154 45.0204C45.051 44.2852 45.467 43.2898 45.4733 42.2498V34.4833C49.0139 33.3915 52.1117 31.1945 54.3127 28.2141C56.5138 25.2337 57.7024 21.6267 57.7043 17.9216C57.7043 8.37052 49.9271 0.600103 40.376 0.600103C37.5463 0.589219 34.7577 1.2768 32.2575 2.60185C29.7572 3.92691 27.6226 5.8485 26.0429 8.19619H6.24494C5.21035 8.19745 4.21851 8.60904 3.48701 9.34066C2.75551 10.0723 2.34408 11.0642 2.34299 12.0988V21.1353C2.34318 22.1724 2.75354 23.1673 3.48455 23.903C4.21556 24.6386 5.20786 25.0553 6.24494 25.0621H22.9426V29.3107H6.24494C5.21035 29.312 4.21851 29.7236 3.48701 30.4552C2.75551 31.1868 2.34408 32.1787 2.34299 33.2133V42.2498C2.34318 43.2869 2.75354 44.2819 3.48455 45.0175C4.21556 45.7532 5.20786 46.1699 6.24494 46.1766H22.9426V50.6288C21.943 50.8128 21.0242 51.2995 20.3104 52.0231C19.5967 52.7466 19.1225 53.672 18.9522 54.674H6.66697C6.49939 54.0679 6.16583 53.5207 5.7039 53.0941C5.24196 52.6674 4.67003 52.3783 4.05257 52.2594C3.43512 52.1404 2.79671 52.1963 2.20933 52.4207C1.62195 52.6452 1.10895 53.0293 0.728183 53.5297C0.347415 54.0301 0.114019 54.627 0.0543128 55.2529C-0.00539376 55.8789 0.110963 56.5091 0.390264 57.0725C0.669564 57.6358 1.1007 58.11 1.63506 58.4414C2.16942 58.7729 2.78575 58.9485 3.41456 58.9484ZM40.3693 2.40256C43.4387 2.40254 46.4391 3.3127 48.9912 5.01794C51.5434 6.72318 53.5325 9.14692 54.7071 11.9827C55.8817 14.8184 56.1891 17.9388 55.5903 20.9492C54.9915 23.9596 53.5135 26.7248 51.3431 28.8952C49.1727 31.0656 46.4075 32.5437 43.3971 33.1425C40.3867 33.7413 37.2663 33.434 34.4305 32.2594C31.5948 31.0848 29.171 29.0957 27.4658 26.5436C25.7605 23.9915 24.8503 20.991 24.8503 17.9216C24.855 13.8072 26.4915 9.86254 29.4008 6.95316C32.3102 4.04378 36.2548 2.40723 40.3693 2.40256ZM4.14546 21.1353V12.0988C4.146 11.5421 4.36735 11.0083 4.76094 10.6146C5.15454 10.2209 5.68823 9.99937 6.24494 9.99865H24.9688C23.6968 12.4496 23.0377 15.1724 23.0479 17.9337C23.0465 19.7417 23.3281 21.5387 23.8824 23.2596H6.24494C5.68574 23.2534 5.15158 23.0268 4.75847 22.6291C4.36537 22.2313 4.14508 21.6945 4.14546 21.1353ZM24.745 25.4998C25.5175 26.8833 26.3266 28.152 27.3303 29.3107H24.745V25.4998ZM4.14546 42.2498V33.2133C4.146 32.6566 4.36735 32.1229 4.76094 31.7291C5.15454 31.3354 5.68823 31.1139 6.24494 31.1132H29.1576C31.6594 33.2377 34.7109 34.6116 37.96 35.0766C37.8561 35.1603 37.7718 35.2657 37.713 35.3855C37.6542 35.5053 37.6224 35.6366 37.6198 35.77V39.6932C37.6198 39.9322 37.7147 40.1614 37.8837 40.3304C38.0527 40.4995 38.282 40.5944 38.521 40.5944C38.76 40.5944 38.9892 40.4995 39.1582 40.3304C39.3273 40.1614 39.4222 39.9322 39.4222 39.6932V35.77C39.4275 35.5665 39.3625 35.3673 39.2381 35.2061C39.6073 35.2298 40.0002 35.2432 40.3753 35.2432C41.4814 35.2447 42.5851 35.1403 43.6713 34.9312V42.2498C43.6655 42.8119 43.4395 43.3493 43.0418 43.7466C42.644 44.1438 42.1063 44.3691 41.5442 44.3742H6.24494C5.68574 44.368 5.15158 44.1414 4.75847 43.7436C4.36537 43.3459 4.14508 42.8091 4.14546 42.2498ZM44.3747 53.9982C44.6859 53.9982 44.99 54.0904 45.2487 54.2633C45.5073 54.4361 45.709 54.6818 45.828 54.9692C45.9471 55.2567 45.9782 55.5729 45.9175 55.8781C45.8568 56.1832 45.707 56.4635 45.487 56.6835C45.267 56.9035 44.9868 57.0533 44.6816 57.114C44.3765 57.1747 44.0602 57.1435 43.7728 57.0245C43.4853 56.9054 43.2397 56.7038 43.0668 56.4451C42.894 56.1864 42.8017 55.8823 42.8017 55.5712C42.8022 55.1541 42.9681 54.7543 43.263 54.4594C43.5579 54.1645 43.9577 53.9986 44.3747 53.9982ZM23.8953 52.3486C24.5326 52.3486 25.1557 52.5377 25.6856 52.8917C26.2156 53.2458 26.6286 53.7491 26.8725 54.338C27.1164 54.9268 27.1803 55.5748 27.0559 56.1999C26.9316 56.825 26.6247 57.3992 26.174 57.8499C25.7233 58.3006 25.1491 58.6075 24.524 58.7318C23.8989 58.8562 23.2509 58.7923 22.6621 58.5484C22.0732 58.3045 21.5699 57.8915 21.2158 57.3615C20.8617 56.8316 20.6727 56.2086 20.6727 55.5712C20.6682 55.1467 20.7484 54.7256 20.9087 54.3326C21.069 53.9395 21.3062 53.5825 21.6064 53.2823C21.9065 52.9821 22.2636 52.7449 22.6567 52.5846C23.0497 52.4243 23.4708 52.3441 23.8953 52.3486ZM3.41456 53.9982C3.72567 53.9982 4.0298 54.0904 4.28849 54.2633C4.54717 54.4361 4.74879 54.6818 4.86785 54.9692C4.98691 55.2567 5.01806 55.5729 4.95737 55.8781C4.89667 56.1832 4.74685 56.4635 4.52686 56.6835C4.30687 56.9035 4.02658 57.0533 3.72144 57.114C3.4163 57.1747 3.10002 57.1435 2.81258 57.0245C2.52515 56.9054 2.27947 56.7038 2.10663 56.4451C1.93378 56.1864 1.84152 55.8823 1.84152 55.5712C1.84197 55.1541 2.00784 54.7543 2.30274 54.4594C2.59765 54.1645 2.9975 53.9986 3.41456 53.9982Z" fill="#FF7500"/>
<path d="M33.8235 26.0573L39.836 30.1589C39.991 30.2769 40.1804 30.3407 40.3752 30.3407H40.3761C40.5594 30.3407 40.7382 30.2838 40.8879 30.1779L46.939 26.058C48.8549 24.7512 50.366 21.9127 50.366 19.5951V11.1091C50.364 10.9398 50.3148 10.7744 50.224 10.6316C50.1332 10.4887 50.0043 10.3739 49.8519 10.3002L40.7769 5.84553C40.6428 5.785 40.4977 5.75249 40.3506 5.75H40.3495C40.1676 5.75013 39.9903 5.80657 39.8418 5.91158L30.9123 10.2871C30.7611 10.3613 30.6339 10.4766 30.5451 10.6197C30.4563 10.7628 30.4095 10.928 30.4102 11.0964V19.5951C30.4102 21.9125 31.9076 24.7512 33.8235 26.0573ZM48.5635 19.5951C48.5635 21.319 47.3491 23.5963 45.9234 24.5682L41.279 27.7323L41.2661 8.08998L48.5635 11.6706V19.5951ZM32.2126 11.6586L39.4543 8.11019L39.4732 27.7299L34.8398 24.5682C33.4144 23.5963 32.2126 21.3189 32.2126 19.5951V11.6586Z" fill="#FF7500"/>
</svg>


    </span>
    <div className="font-bold text-lg leading-[26px] text-center font-mono-sans-serif text-[#16191C] mb-2 px-20">Fastest Website Loading Speed</div>
    <p className="font-mona-sans text-base font-normal leading-21 text-center h-[17px] opacity-70 px-10">Lorem ipsum dolor sit amet consectetur. Velit morbi eleifend tellus pharetra porttitor sagittis.</p>
  </div>
  <div className="mt-20 ">
    <div className="w-full h-[52px] text-xl rounded-xl font-bold flex items-center justify-center group">
      <span className="ml-2 text-[#FFA030] text-lg font-semibold leading-6 opacity-0 group-hover:opacity-100">Learn more</span>
      <span className="text-[#FFA030] -ml-28 group-hover:ml-2">
        <FaArrowRight size={15} />
      </span>
    </div>
  </div>
</div>
        </div>
    
      </section>

      {/* <div className=" flex flex-col bl:flex-row gap-y-10 mx-auto items-center justify-center py-20 bl:py-24">
        <div className="flex flex-col item-center justify-center mx-auto ">
          <div>
            <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.2M+</h2>
          </div>
          <div className="item-center justify-center mt-6">
            <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
              trusted by 1.2 <br />
              millions users
            </p>
          </div>
        </div>
        <div className="hidden bl:block w-[172px]  border-t border-gray-200 transform rotate-90"></div>
        <div className="flex flex-col item-center justify-center mx-auto ">
          <div>
            <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.5M+</h2>
          </div>
          <div className="item-center justify-center mt-6">
            <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
              websites hosted in more <br />
              than <strong>150 </strong>countries
            </p>
          </div>
        </div>
        <div className="hidden bl:block w-[172px]  border-t border-gray-200 transform rotate-90"></div>
        <div className="flex flex-col item-center justify-center mx-auto ">
          <div>
            <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center">96%</h2>
          </div>
          <div className="item-center justify-center mt-6">
            <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
              customer support <br />
              satisfaction score
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Plans;
