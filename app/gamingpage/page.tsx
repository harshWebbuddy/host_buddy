"use client";

import Locationpage from "../(landing)/components/Locationpage";
import Image from "next/image";
import Faqs from "../(landing)/components/Faqs";
import { caseStudies } from "../(landing)/components/constants/casestudies";
import { useState } from "react";
import ContactForm from "./Form";
import Games from "./games";

interface StarRatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  color?: string;
}
const StarRating: React.FC<StarRatingProps> = ({ initialRating = 0, onChange, color }) => {
  const [rating, setRating] = useState(initialRating);
  const handleStarClick = (newRating: number) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          className={`text-4xl ${index <= rating ? `${color ?? "text-yellow-500"}` : "text-gray-300"} focus:outline-none`}
          onClick={() => handleStarClick(index)}>
          ★
        </button>
      ))}
    </div>
  );
};
const Ratingpanel = () => {
  const handleRatingChange = (newRating: number) => {
    console.log("New rating:", newRating);
    // Handle the rating change logic here
  };
  return (
      <div className="w-full max-w-[1300px] mx-auto bg-transparent rounded-3xl mt-20">
        <div className="flex flex-col 2xl:flex-row items-center p-10  2xl:space-x-12">
          <div className="w-full max-w-fit font-mona-sans font-semibold text-center bl:text-left">
            <h3 className="font-bold text-[20px] 2xl:text-[24px] leading-[63px] text-white">Customer Happiness</h3>
          </div>
          <div className="w-full grid grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 gap-x-0 gap-y-10 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="space-y-2">
                <Image src="/trustpilotwhite.svg" alt="" width={150} height={40} />
                <Image src="/trustpilot-reviews.svg" alt="" width={180} height={40} />
                <h2 className="px-0  text-[11px]  text-white">
                  <span className="font-mona-sans font-extrabold leading-normal text-left">4.9/5 | 9010</span> reviews
                </h2>
              </div>
          </div>
          <svg className="w-full h-16 pt-2 " width="1" height="57" viewBox="0 0 1 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.63501" x2="0.499998" y2="56.635" stroke="#C8C8C8" stroke-dasharray="2 2"/>
</svg>

          <div className="flex flex-col items-center">
            <div className="space-y-1">
              <Image src="/google1.svg" alt="" width={100} height={40} className="-mb-3" />
             <img src="/hosting/rating1.svg" className="w-auto h-[28px]"/> 
            {/* <StarRating initialRating={3.5} onChange={handleRatingChange} /> */}
            <h2 className="px-0  text-[11px]  text-white">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010</span> reviews
              </h2>
            </div>
          </div>
          <svg className="w-full h-16 pt-2 " width="1" height="57" viewBox="0 0 1 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.63501" x2="0.499998" y2="56.635" stroke="#C8C8C8" stroke-dasharray="2 2"/>
</svg>
          <div className="flex flex-col items-center">
          <div className="space-y-2">
              <Image src="/hostwhite.svg" alt="" width={120} height={40} className="mt-2"/>
              <img src="/hosting/rating1.svg" className="w-auto h-[28px]"/> 

              {/* <StarRating initialRating={3.5} onChange={handleRatingChange} /> */}
              <h2 className="px-0  text-[11px]  text-white">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010</span> reviews
              </h2>
            </div>
          </div>  
          {/* <div className="border-t-[3px] border-dashed border-[#dedede] w-14 h-1 relative  group-hover:opacity-0 transition rotate-90 duration-200" /> */}
          <svg className="w-full h-16 pt-2 " width="1" height="57" viewBox="0 0 1 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.63501" x2="0.499998" y2="56.635" stroke="#C8C8C8" stroke-dasharray="2 2"/>
</svg>
          <div className="flex flex-col items-center">
          <div className="space-y-2.5">
              <Image src="/serchenwhite.svg" alt="" width={100} height={40} />
              <img src="/hosting/rating2.svg" className="w-auto h-[28px]"/> 

              {/* <StarRating initialRating={4} onChange={handleRatingChange} color="!text-[#73CF11]" /> */}
              <h2 className="px-0  text-[11px]  text-white">
                <span className="font-mona-sans font-extrabold leading-relaxed text-left">4.9/5 | 9010 </span> reviews
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function HomeMainPage() {
  return (
    <main className="overflow-hidden">
      {/* hero section */}

      <section className="h-full 2xl:min-h-[80vh] overflow-hidden relative bg-black flex items-center justify-center">
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
    <div className="max-w-[1300px] mx-auto text-white  px-10 pt-40 pb-10 2xl:py-40">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center space-y-10 ">
        <div className="relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-5">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
          <h2 className="font-mono-sans text-[16px] font-light italic leading-relaxed text-center 2xl:text-left">
        <span className="text-white opacity-90 font-light">Welcome to </span>
        <span className="text-orange-500 font-bold">HostBuddy</span>
      </h2>
          <h1 className="font-mono-sans font-medium 2xl:font-semibold text-[50px] 2xl:text-[60px]
           leading-[60px] 2xl:leading-[84px] text-left 2xl:text-left ">Lorem ipsum dolor
           sit amet</h1>

</div>
          <p className="font-mono-sans text-[16px] font-light leading-loose text-left  text-[#EBEBEB]">
          By trusting us with your business and projects needs, we promise a <span className="text-orange-500 ml-0.5">99.9%</span> uptime on any services we provide, outside of any standard maintenance we may provide. </p>
          <div className="flex flex-wrap 2xl:flex-row space-y-4 justify-start space-x-6 !mt-10 ">
            <div className="h-[56px]  flex item-center justify-center bg-orange-500 rounded-xl py-4 w-auto px-6  gap-x-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="19" r="2" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="6" cy="19" r="2" stroke="white" stroke-opacity="0.2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="17" cy="19" r="2" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="17" cy="19" r="2" stroke="white" stroke-opacity="0.2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H6V3H4" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H6V3H4" stroke="white" stroke-opacity="0.2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.06235 4.12722C5.58033 4.09279 5.16166 4.45563 5.12722 4.93765C5.09279 5.41967 5.45563 5.83834 5.93765 5.87278L6.06235 4.12722ZM11.9426 6.30178C12.4247 6.33621 12.8433 5.97337 12.8778 5.49135C12.9122 5.00933 12.5494 4.59066 12.0674 4.55622L11.9426 6.30178ZM20.0092 12.1261C20.0777 11.6477 19.7455 11.2044 19.2671 11.1358C18.7887 11.0673 18.3454 11.3995 18.2768 11.8779L20.0092 12.1261ZM19 13V13.875C19.4353 13.875 19.8044 13.555 19.8662 13.1241L19 13ZM6 12.125C5.51675 12.125 5.125 12.5167 5.125 13C5.125 13.4832 5.51675 13.875 6 13.875V12.125ZM5.93765 5.87278L11.9426 6.30178L12.0674 4.55622L6.06235 4.12722L5.93765 5.87278ZM18.2768 11.8779L18.1338 12.8759L19.8662 13.1241L20.0092 12.1261L18.2768 11.8779ZM19 12.125H6V13.875H19V12.125Z" fill="white"/>
<path d="M6.06235 4.12722C5.58033 4.09279 5.16166 4.45563 5.12722 4.93765C5.09279 5.41967 5.45563 5.83834 5.93765 5.87278L6.06235 4.12722ZM11.9426 6.30178C12.4247 6.33621 12.8433 5.97337 12.8778 5.49135C12.9122 5.00933 12.5494 4.59066 12.0674 4.55622L11.9426 6.30178ZM20.0092 12.1261C20.0777 11.6477 19.7455 11.2044 19.2671 11.1358C18.7887 11.0673 18.3454 11.3995 18.2768 11.8779L20.0092 12.1261ZM19 13V13.875C19.4353 13.875 19.8044 13.555 19.8662 13.1241L19 13ZM6 12.125C5.51675 12.125 5.125 12.5167 5.125 13C5.125 13.4832 5.51675 13.875 6 13.875V12.125ZM5.93765 5.87278L11.9426 6.30178L12.0674 4.55622L6.06235 4.12722L5.93765 5.87278ZM18.2768 11.8779L18.1338 12.8759L19.8662 13.1241L20.0092 12.1261L18.2768 11.8779ZM19 12.125H6V13.875H19V12.125Z" fill="white" fill-opacity="0.2"/>
<path d="M15 5.125C14.5168 5.125 14.125 5.51675 14.125 6C14.125 6.48325 14.5168 6.875 15 6.875V5.125ZM21 6.875C21.4832 6.875 21.875 6.48325 21.875 6C21.875 5.51675 21.4832 5.125 21 5.125V6.875ZM18.875 3C18.875 2.51675 18.4832 2.125 18 2.125C17.5168 2.125 17.125 2.51675 17.125 3H18.875ZM17.125 9C17.125 9.48325 17.5168 9.875 18 9.875C18.4832 9.875 18.875 9.48325 18.875 9H17.125ZM15 6.875H21V5.125H15V6.875ZM17.125 3V9H18.875V3H17.125Z" fill="white"/>
<path d="M15 5.125C14.5168 5.125 14.125 5.51675 14.125 6C14.125 6.48325 14.5168 6.875 15 6.875V5.125ZM21 6.875C21.4832 6.875 21.875 6.48325 21.875 6C21.875 5.51675 21.4832 5.125 21 5.125V6.875ZM18.875 3C18.875 2.51675 18.4832 2.125 18 2.125C17.5168 2.125 17.125 2.51675 17.125 3H18.875ZM17.125 9C17.125 9.48325 17.5168 9.875 18 9.875C18.4832 9.875 18.875 9.48325 18.875 9H17.125ZM15 6.875H21V5.125H15V6.875ZM17.125 3V9H18.875V3H17.125Z" fill="white" fill-opacity="0.2"/>
</svg>


              <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">Order Now</h2>
            </div>
            <div className="h-full  flex item-center justify-center  rounded-xl py-0 w-auto px-0  gap-x-3">
            <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">Hosting Overview</h2>
            <svg className="mt-0.5" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.9349 1.10156L7.67969 0.35677C8.01823 0.0520828 8.52604 0.0520828 8.83073 0.35677L15.4323 6.92448C15.737 7.26302 15.737 7.77083 15.4323 8.07552L8.83073 14.6771C8.52604 14.9818 8.01823 14.9818 7.67969 14.6771L6.9349 13.9323C6.63021 13.5937 6.63021 13.0859 6.9349 12.7474L11.0313 8.85417H1.3151C0.841146 8.85417 0.502604 8.51562 0.502604 8.04167V6.95833C0.502604 6.51823 0.841146 6.14583 1.3151 6.14583H11.0313L6.9349 2.28646C6.63021 1.94792 6.59635 1.4401 6.9349 1.10156Z" fill="white"/>
</svg>

            </div>
          </div>
          <p className="flex  2xl:mx-0 gap-2 underline text-[#EBEBEB]">
            <Image src="/tick2.svg" alt="tick" width={11.41} height={8.27} />
           <span className='opacity-70 capitalize text-[14px] leading-[26px] font-light'> 30 day money back garantee</span>
          </p>
        </div>

        <div className="w-full item-center justify-center">
          <img src="/gaming2.png" alt="" width={256} height={500} className="item-center justify-center mx-auto" />
        </div>
      </div>
    </div>  
    <div className="-bottom-10 2xl:-bottom-10 absolute z-[20]"><Ratingpanel/></div>

</section>
  <img src="/fringe.svg" className="w-full absolute z-[10] -translate-y-2 2xl:-translate-y-4"/>    

<section>
  <Games/>
</section>

      {/* What Makes HostBuddy Unique? */}
     <section className="pt-40 pb-40"><svg className="w-full h-full bottom-0 translate-y-2 "  height="165" viewBox="0 0 1920 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M373.511 45.5L-1.88672 108.5V164.5L1921.89 161.5V106.5L1540.36 45.5L1597.73 89L1272.46 27.5L1335.95 72.5L957.215 0L578.476 74L642.527 27L316.143 89.5L373.511 45.5Z" fill="#FF7500"/>
<path d="M354.574 53.5L-1.88672 110V162.5H1921.89V107L1562.64 54L1598.29 89.5L1300.87 38L1337.07 73L958.329 18L577.919 74.5L614.679 38.5L316.143 90L354.574 53.5Z" fill="#01131B"/>
</svg>
      <section className="bg-[#01131B] relative ">
        <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center py-20">
          <Image src="/dotted.svg" alt="" width={100} height={100} className="ml-1 absolute left-0 top-20 hidden 2xl:flex opacity-50" />
          <div className="flex flex-col space-y-10 mx-auto items-center justify-center ">
          <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-8 space-y-4 mx-auto items-start justify-start 2xl:px-20">
          <div className="w-full">
            <h4 className="text-[42px]  text-white font-semibold font-mona-sans leading-normal">
            Amazing Games 
            </h4>
<span className="text-orange-500 text-[42px]   font-semibold font-mona-sans leading-normal">Control Panel </span>
          </div>
          <p className="text-[16px] text-white leading-loose font-mono-sans">
          By trusting us with your business and projects needs, we promise a 99.9% uptime on any services we provide, outside of any standard.
            </p>
        </div>
            <div className="w-full flex flex-col 2xl:flex-row justify-center">
            <div className="space-y-2 2xl:max-w-xl 2xl:pr-10">
          <div className="relative group space-y-3">
  <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
    <div className="ml-8 flex md:flex-row items-center  featuresvg2">
      <svg
        className="group transition-all duration-300"
    width="46" height="49" viewBox="0 0 36 49" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.3">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2558 0C20.0996 0 20.7837 0.679035 20.7837 1.51667V3.7791C20.7837 4.6167 20.0996 5.29576 19.2558 5.29576C18.412 5.29576 17.728 4.6167 17.728 3.7791V1.51667C17.728 0.679035 18.412 0 19.2558 0ZM8.2567 2.92498C8.98748 2.50616 9.92187 2.7547 10.3438 3.48014L11.4833 5.43944C11.9052 6.16481 11.6548 7.09243 10.9241 7.5112C10.1934 7.93004 9.2589 7.68148 8.83705 6.9561L7.69752 4.9968C7.2756 4.27137 7.52599 3.34381 8.2567 2.92498ZM2.29203 10.3631C1.56126 9.94423 0.626871 10.1928 0.204954 10.9182C-0.216964 11.6436 0.0334252 12.5712 0.7642 12.99L2.73793 14.1212C3.46864 14.54 4.40309 14.2915 4.82495 13.566C5.24687 12.8407 4.99648 11.9131 4.26576 11.4943L2.29203 10.3631ZM21.2272 10.8757C22.6579 8.16891 25.108 7.54276 27.4451 8.76006C29.2235 9.68634 30.4485 12.6519 29.5155 14.4173L25.2526 22.4824C26.3181 22.2859 27.4464 22.7253 28.1511 23.5273C28.5173 23.9439 28.7691 24.4586 28.8385 25.0328C28.8629 25.2354 28.8647 25.4455 28.8406 25.6613C29.1639 25.6602 29.4796 25.6957 29.7813 25.7645C31.3358 26.1189 32.5187 27.3582 32.4491 29.0435C32.4448 29.1468 32.4359 29.2517 32.4219 29.3583C32.4968 29.3647 32.5711 29.3742 32.6449 29.3869C34.7522 29.7492 36.3841 32.6302 35.4242 34.4464L31.6348 41.616C28.463 47.6169 20.4305 50.1068 13.9757 46.7448C8.8773 44.0893 6.32111 40.4828 4.84857 36.3573C3.89926 33.6977 3.12747 31.3018 2.25478 28.5925C1.82458 27.257 1.36987 25.8454 0.857281 24.2886C-0.150562 21.2275 1.31399 18.8538 3.71968 17.9331C6.0196 17.0529 8.68156 18.6154 9.67395 21.0344L11.9066 25.5375C12.2204 26.3251 12.7011 27.007 13.1385 26.1792L21.2272 10.8757ZM9.11652 26.7792L6.93231 22.3739C6.90057 22.3098 6.87107 22.2446 6.84393 22.1785C6.6124 21.614 6.18038 21.1566 5.72432 20.9097C5.28101 20.6698 4.9805 20.7015 4.8189 20.7634C4.24314 20.9838 3.9116 21.3218 3.75012 21.6475C3.60186 21.9466 3.47558 22.477 3.76175 23.3462C4.28915 24.948 4.75032 26.3798 5.18282 27.7227C6.04604 30.4027 6.79509 32.7284 7.72878 35.3442C8.97731 38.842 11.0617 41.8015 15.3955 44.0587C20.4169 46.6742 26.5729 44.6641 28.9289 40.2066L32.6423 33.181C32.6258 33.0954 32.5822 32.9592 32.4889 32.8012C32.3799 32.6164 32.2502 32.4824 32.1502 32.4092C32.1274 32.3925 32.1099 32.3814 32.0977 32.3745C31.292 32.2892 30.5525 31.8895 30.0429 31.2619C29.5199 30.6178 29.2846 29.7896 29.3915 28.9692C29.3991 28.9113 29.3961 28.8795 29.3939 28.8671C29.3939 28.8671 29.3879 28.8599 29.3815 28.8536C29.335 28.8082 29.1638 28.6936 28.8511 28.6947C27.9805 28.6976 27.1499 28.3318 26.5679 27.6889C26.0205 27.0843 25.7419 26.2885 25.7904 25.4812C25.7821 25.4773 25.7746 25.4743 25.7683 25.4723C24.6314 25.6656 23.48 25.2066 22.7937 24.2833C22.0989 23.3484 22.003 22.1018 22.5468 21.0731L26.7782 13.0674C26.7799 13.0495 26.7815 13.0215 26.7806 12.9825C26.7776 12.8351 26.7404 12.6124 26.6401 12.35C26.5407 12.0899 26.4038 11.8554 26.2616 11.6784C26.1286 11.513 26.0367 11.4535 26.026 11.4466C25.4434 11.1432 25.0925 11.1832 24.9239 11.2365C24.7584 11.2889 24.3563 11.4842 23.9331 12.285L15.8444 27.5885C15.6122 28.0279 15.0356 28.9623 13.8483 29.3902C12.4118 29.9079 11.206 29.3266 10.5991 28.8576C10.0489 28.4325 9.71273 27.9219 9.5375 27.6266C9.36474 27.3357 9.22588 27.0412 9.11652 26.7792ZM10.4429 24.7505C10.4385 24.7587 10.4338 24.7678 10.4338 24.7678L10.4327 24.7699L10.4429 24.7505Z" fill="white"/></g>
</svg>

      <div className="transition-all duration-300 cursor-pointer m-8 md:gap-6 text-[#16191C]">
        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-sefty-orange text-white ">Easy Configuration</h2>
        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left text-white group-hover:text-[#16191C]/70">
        Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.        </p>
      </div>
    </div>
  </div>
</div>

<div className="relative group space-y-3">
  <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
    <div className="ml-8 flex md:flex-row items-center  featuresvg2">
    <svg width="60" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path d="M27.675 27.495C28.8755 26.4558 29.8385 25.1705 30.4985 23.7263C31.1584 22.2821 31.5 20.7128 31.5 19.125C31.5 16.1413 30.3147 13.2798 28.205 11.17C26.0952 9.06026 23.2337 7.875 20.25 7.875C17.2663 7.875 14.4048 9.06026 12.295 11.17C10.1853 13.2798 9 16.1413 9 19.125C8.99998 20.7128 9.34155 22.2821 10.0015 23.7263C10.6615 25.1705 11.6245 26.4558 12.825 27.495C9.67531 28.9212 7.00305 31.2244 5.12771 34.1292C3.25236 37.034 2.25331 40.4174 2.25 43.875C2.25 44.4717 2.48705 45.044 2.90901 45.466C3.33097 45.8879 3.90326 46.125 4.5 46.125C5.09674 46.125 5.66903 45.8879 6.09099 45.466C6.51295 45.044 6.75 44.4717 6.75 43.875C6.75 40.2946 8.17232 36.8608 10.7041 34.3291C13.2358 31.7973 16.6696 30.375 20.25 30.375C23.8304 30.375 27.2642 31.7973 29.7959 34.3291C32.3277 36.8608 33.75 40.2946 33.75 43.875C33.75 44.4717 33.9871 45.044 34.409 45.466C34.831 45.8879 35.4033 46.125 36 46.125C36.5967 46.125 37.169 45.8879 37.591 45.466C38.0129 45.044 38.25 44.4717 38.25 43.875C38.2467 40.4174 37.2476 37.034 35.3723 34.1292C33.497 31.2244 30.8247 28.9212 27.675 27.495ZM20.25 25.875C18.915 25.875 17.6099 25.4791 16.4999 24.7374C15.3899 23.9957 14.5247 22.9415 14.0138 21.7081C13.5029 20.4747 13.3692 19.1175 13.6297 17.8081C13.8902 16.4988 14.533 15.296 15.477 14.352C16.421 13.408 17.6238 12.7652 18.9331 12.5047C20.2425 12.2443 21.5997 12.3779 22.8331 12.8888C24.0665 13.3997 25.1207 14.2649 25.8624 15.3749C26.6041 16.4849 27 17.79 27 19.125C27 20.9152 26.2888 22.6321 25.023 23.898C23.7571 25.1638 22.0402 25.875 20.25 25.875ZM42.165 26.595C43.6049 24.9735 44.5455 22.9704 44.8736 20.8268C45.2016 18.6832 44.9031 16.4904 44.014 14.5125C43.1249 12.5346 41.683 10.8558 39.8621 9.6782C38.0411 8.50061 35.9186 7.87442 33.75 7.875C33.1533 7.875 32.581 8.11205 32.159 8.53401C31.7371 8.95597 31.5 9.52826 31.5 10.125C31.5 10.7217 31.7371 11.294 32.159 11.716C32.581 12.1379 33.1533 12.375 33.75 12.375C35.5402 12.375 37.2571 13.0862 38.523 14.352C39.7888 15.6179 40.5 17.3348 40.5 19.125C40.4968 20.3068 40.1834 21.467 39.5911 22.4897C38.9989 23.5124 38.1485 24.3616 37.125 24.9525C36.7914 25.1449 36.5128 25.4197 36.3158 25.7507C36.1188 26.0816 36.0101 26.4575 36 26.8425C35.9906 27.2245 36.0786 27.6025 36.2557 27.9411C36.4329 28.2796 36.6933 28.5675 37.0125 28.7775L37.89 29.3625L38.1825 29.52C40.8946 30.8064 43.1827 32.841 44.7772 35.3842C46.3717 37.9274 47.2062 40.8734 47.1825 43.875C47.1825 44.4717 47.4196 45.044 47.8415 45.466C48.2635 45.8879 48.8358 46.125 49.4325 46.125C50.0292 46.125 50.6015 45.8879 51.0235 45.466C51.4454 45.044 51.6825 44.4717 51.6825 43.875C51.7009 40.4222 50.8361 37.0221 49.1703 33.9976C47.5045 30.9732 45.093 28.425 42.165 26.595Z" fill="white"/>
</g>
</svg>


      <div className="transition-all duration-300 cursor-pointer m-8 md:gap-6 text-[#16191C]">
        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-sefty-orange text-white ">Sub Users</h2>
        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left text-white group-hover:text-[#16191C]/70">
        Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.        </p>
      </div>
    </div>
  </div>
</div>
<div className="relative group space-y-3">
  <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
    <div className="ml-8 flex md:flex-row items-center  featuresvg2">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3" clip-path="url(#clip0_887_9381)">
<path d="M14.4073 18H5.37804C5.06585 18.0003 4.75973 17.9138 4.49391 17.75C4.22808 17.5863 4.01303 17.3519 3.87279 17.073L0.180542 9.7605C0.0618305 9.52457 0 9.26412 0 9C0 8.73588 0.0618305 8.47544 0.180542 8.2395L3.87279 0.927001C4.01303 0.648079 4.22808 0.41366 4.49391 0.249953C4.75973 0.0862462 5.06585 -0.000296597 5.37804 7.63721e-07H14.4073C14.7053 -7.39063e-05 14.9981 0.0787921 15.2558 0.228577C15.5134 0.378362 15.7269 0.593722 15.8743 0.852751L20.0278 8.16525C20.3203 8.68275 20.3203 9.315 20.0278 9.8325L15.8743 17.145C15.7273 17.4046 15.5141 17.6205 15.2563 17.7708C14.9986 17.921 14.7056 18.0001 14.4073 18ZM6.41754 14.625H13.4263L16.619 9L13.424 3.375H6.41754L3.57579 9L6.41754 14.625ZM31.2823 36H22.253C21.9409 36.0003 21.6347 35.9138 21.3689 35.75C21.1031 35.5863 20.888 35.3519 20.7478 35.073L17.0555 27.7605C16.9368 27.5246 16.875 27.2641 16.875 27C16.875 26.7359 16.9368 26.4754 17.0555 26.2395L20.7478 18.927C20.888 18.6481 21.1031 18.4137 21.3689 18.25C21.6347 18.0862 21.9409 17.9997 22.253 18H31.2823C31.5803 17.9999 31.8731 18.0788 32.1308 18.2286C32.3884 18.3784 32.6019 18.5937 32.7493 18.8527L36.9028 26.1652C37.1953 26.6827 37.1953 27.315 36.9028 27.8325L32.7493 35.145C32.6023 35.4046 32.3891 35.6205 32.1313 35.7708C31.8736 35.921 31.5806 36.0001 31.2823 36ZM23.2925 32.625H30.3013L33.4963 27L30.3013 21.375H23.2925L20.4508 27L23.2925 32.625ZM48.1573 18H39.128C38.8159 18.0003 38.5097 17.9138 38.2439 17.75C37.9781 17.5863 37.763 17.3519 37.6228 17.073L33.9305 9.7605C33.8118 9.52457 33.75 9.26412 33.75 9C33.75 8.73588 33.8118 8.47544 33.9305 8.2395L37.6228 0.927001C37.763 0.648079 37.9781 0.41366 38.2439 0.249953C38.5097 0.0862462 38.8159 -0.000296597 39.128 7.63721e-07H48.1573C48.4553 -7.39063e-05 48.7481 0.0787921 49.0058 0.228577C49.2634 0.378362 49.4769 0.593722 49.6243 0.852751L53.7778 8.16525C54.0703 8.68275 54.0703 9.315 53.7778 9.8325L49.6243 17.145C49.4773 17.4046 49.2641 17.6205 49.0063 17.7708C48.7486 17.921 48.4556 18.0001 48.1573 18ZM40.1675 14.625H47.1763L50.3713 9L47.1763 3.375H40.1675L37.3258 9L40.1675 14.625ZM14.4073 54H5.37804C5.06585 54.0003 4.75973 53.9138 4.49391 53.75C4.22808 53.5863 4.01303 53.3519 3.87279 53.073L0.180542 45.7605C0.0618305 45.5246 0 45.2641 0 45C0 44.7359 0.0618305 44.4754 0.180542 44.2395L3.87279 36.927C4.01303 36.6481 4.22808 36.4137 4.49391 36.25C4.75973 36.0862 5.06585 35.9997 5.37804 36H14.4073C14.7053 35.9999 14.9981 36.0788 15.2558 36.2286C15.5134 36.3784 15.7269 36.5937 15.8743 36.8527L20.0278 44.1652C20.3203 44.6828 20.3203 45.315 20.0278 45.8325L15.8743 53.145C15.7273 53.4046 15.5141 53.6205 15.2563 53.7708C14.9986 53.921 14.7056 54.0001 14.4073 54ZM6.41754 50.625H13.4263L16.6213 45L13.4263 39.375H6.41754L3.57579 45L6.41754 50.625ZM48.1573 54H39.128C38.8159 54.0003 38.5097 53.9138 38.2439 53.75C37.9781 53.5863 37.763 53.3519 37.6228 53.073L33.9305 45.7605C33.8118 45.5246 33.75 45.2641 33.75 45C33.75 44.7359 33.8118 44.4754 33.9305 44.2395L37.6228 36.927C37.763 36.6481 37.9781 36.4137 38.2439 36.25C38.5097 36.0862 38.8159 35.9997 39.128 36H48.1573C48.4553 35.9999 48.7481 36.0788 49.0058 36.2286C49.2634 36.3784 49.4769 36.5937 49.6243 36.8527L53.7778 44.1652C54.0703 44.6828 54.0703 45.315 53.7778 45.8325L49.6243 53.145C49.4773 53.4046 49.2641 53.6205 49.0063 53.7708C48.7486 53.921 48.4556 54.0001 48.1573 54ZM40.1675 50.625H47.1763L50.3713 45L47.1763 39.375H40.1675L37.3258 45L40.1675 50.625Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_887_9381">
<rect width="54" height="54" fill="white"/>
</clipPath>
</defs>
</svg>


      <div className="transition-all duration-300 cursor-pointer m-8 md:gap-6 text-[#16191C]">
        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-sefty-orange text-white ">Game Panel Demo</h2>
        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left text-white group-hover:text-[#16191C]/70">
        Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.        </p>
      </div>
    </div>
  </div>
</div>
          </div>
              <Image src="/gamingpng.svg" alt="" width={550} height={550} className="" />
            </div>
          </div>
        </div>
      </section>
      <svg className="w-full h-full -translate-y-4"   width="1920" height="105" viewBox="0 0 1920 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1546.49 76.176L1921.89 36.2659L1921.89 0.790207L-1.88661 2.69078L-1.88661 37.533L379.638 76.1761L322.27 48.6191L647.54 87.579L584.046 59.0717L962.785 105L1341.52 58.1215L1277.47 87.8957L1603.86 48.3023L1546.49 76.176Z" fill="#FF7500"/>
<path d="M1565.43 71.1086L1921.89 35.3162L1921.89 2.05775L-1.88661 2.05784L-1.88661 37.2168L357.359 70.7919L321.713 48.3029L619.135 80.9278L582.932 58.7555L961.671 93.5977L1342.08 57.8053L1305.32 80.6111L1603.86 47.9861L1565.43 71.1086Z" fill="#01131B"/>
</svg>

</section> 
      
      <section className="text-white">
        <Locationpage />
      </section>
 
  <section className="pt-40">
    <ContactForm/>
  </section>

      {/* frequently asked questions section */}
<section className="pt-20 2xl:pt-36 pb-24 2xl:pb-40">
      <Faqs />
      </section>
      {/* Our featured case study section*/}
<section className="pb-80">
<svg className="w-full" viewBox="0 0 1920 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M353.058 22.6022L-4 58.5745L-4.00001 92.0001L1923 92.0004L1923 56.6648L1563.15 22.9207L1598.86 45.5228L1300.94 12.7338L1337.2 35.0176L957.826 0.000168171L576.778 35.9725L613.6 13.052L314.563 45.8409L353.058 22.6022Z" fill="#F5F5F5"/>
</svg>

     <section className="bg-[#F5F5F5] relative pt-20 ">
       <div className="max-w-[1360px] flex flex-row mx-auto items-center justify-center p-4">
      <Image src="/microsoft/dotted.svg" alt="" width={100} height={100} className="ml-1 absolute right-0 top-20 opacity-50 2xl:visible sm:invisible" />
      <div>   <h1 className="text-[42px] font-semibold">
            Our Featured <span className="pb-4 border-b-4 border-orange-500">CaseStudy</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-6 gap-x-4 pt-20">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="space-y-6">
                <Image src={caseStudy.image} alt="" width={500} height={500} className="w-full h-[240px] object-cover rounded-xl" />
                <h1 className="text-xl font-bold leading-relaxed">{caseStudy.title}</h1>
                <div className="relative max-w-fit flex flex-row group items-center justify-center !mt-4">
                  <div className="flex items-center gap-x-3 pb-2">
                    <p className="text-[16px] font-bold text-orange-500">Read more</p>
                    <img src="/orangearrow.svg" className=" w-[11px] text-orange-500" />
                  </div>
                  <div className="bg-orange-500 h-0.5 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
          </div>
    </div>
  </section><svg className="w-full" viewBox="0 0 1920 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1565.94 69.3979L1923 33.4255L1923 -9.91821e-05L-4 -0.000267646L-4 35.3354L355.848 69.0794L320.142 46.4773L618.063 79.2663L581.799 56.9825L961.174 91.9999L1342.22 56.0276L1305.4 78.948L1604.44 46.1591L1565.94 69.3979Z" fill="#F5F5F5"/>
</svg>
  </section>
 
  

    
    </main>
  );
}
