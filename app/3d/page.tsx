"use client";

import Locationpage from "../(landing)/components/Locationpage";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Testimonials from "../(landing)/components/Testimonials";
import Faqs from "../(landing)/components/Faqs";
import { caseStudies } from "../(landing)/components/constants/casestudies";
import { BsArrowRight } from "react-icons/bs";
import Ratingpanel from "../(landing)/components/Rating";
import Plans from "../(landing)/components/Plans";
import Balancing from "./balancing";
import Support from "./bandwidth";

export default function HomeMainPage() {
  return (
    <main className="overflow-hidden">
      {/* hero section */}

      <section className="h-full min-h-[80vh] overflow-hidden relative bg-black flex flex-col items-center justify-center">
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
    <div className="max-w-[1300px] mx-auto text-white  px-10 pt-40 pb-10 2xl:py-40">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
        <div className="relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-5">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
          <h2 className="font-mono-sans text-[16px] font-light italic leading-relaxed text-center 2xl:text-left">
        <span className="text-white opacity-90 font-light">Welcome to </span>
        <span className="text-orange-500 font-bold">HostBuddy</span>
      </h2>
<h1 className="font-mono-sans font-medium text-[50px] 2xl:text-[60px] leading-[60px] 2xl:leading-[84px] text-left 2xl:text-left ">Dedicated with
Premium Hardware</h1>

</div>
          <p className="font-mono-sans text-[16px] font-light leading-loose text-left  text-[#EBEBEB]">
          By trusting us with your business and projects needs, we promise a 99.9% uptime on any services we provide, outside of any standard maintenance we may provide. </p>
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


              <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">Get Prices</h2>
            </div>
            <div className="h-full  flex item-center justify-center  rounded-xl py-0 w-auto px-0  gap-x-3">
            <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">Dedicated Servers</h2>
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
          <Image src="/3d.svg" alt="" width={500} height={500} className="item-center justify-center mx-auto" />
        </div>
      </div>
    </div>
    <svg  className="opacity-100" width="90" height="10" viewBox="0 0 90 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="10" rx="5" fill="#FF7550"/>
<rect x="60" width="10" height="10" rx="5" fill="#D9D9D9"/>
<rect x="80" width="10" height="10" rx="5" fill="#D9D9D9"/>
</svg>

  </section>

      {/* rating and web hosting plans page */}
      <section>
        <div className="space-y-40">
          <Ratingpanel />
          <Plans />
        </div>
      </section>
<section>
  <Support/>
</section>


      {/* What Makes HostBuddy Unique? */}
      <section className=" relative">
        <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center py-20">
          <Image src="/blackdot.svg" alt="" width={100} height={100} className="ml-1 absolute left-0 top-20 hidden 2xl:flex opacity-50" />
          <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between ">
          <div className="w-full flex flex-col space-y-8">
          <div className="space-y-3.5">
            <h4 className="text-[39px] text-black font-semibold font-mona-sans leading-normal">
              What Makes Host<span className="text-orange-500">Buddy </span>  Unique?
             
            </h4>
            <p className="text-[16px] leading-loose font-mono-sans">
              Lorem ipsum dolor sit amet conscatetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu. Erat nibh
              nisl lacinia egestas mauris facilisi aliquam sit mauris.{" "}
            </p>
          </div>
          <div className="space-y-2 2xl:max-w-xl">
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                <div className="ml-8 flex xl:flex-row items-center featuresvg4">
                <svg
                className="group"
          width="58"
          height="58"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" className="group">
            {" "}
            <path
              d="M15 12C14.6022 12 14.2206 12.158 13.9393 12.4393C13.658 12.7206 13.5 13.1022 13.5 13.5C13.5 13.8978 13.658 14.2794 13.9393 14.5607C14.2206 14.842 14.6022 15 15 15H33C33.3978 15 33.7794 14.842 34.0607 14.5607C34.342 14.2794 34.5 13.8978 34.5 13.5C34.5 13.1022 34.342 12.7206 34.0607 12.4393C33.7794 12.158 33.3978 12 33 12H15ZM13.5 19.5C13.5 19.1022 13.658 18.7206 13.9393 18.4393C14.2206 18.158 14.6022 18 15 18H33C33.3978 18 33.7794 18.158 34.0607 18.4393C34.342 18.7206 34.5 19.1022 34.5 19.5C34.5 19.8978 34.342 20.2794 34.0607 20.5607C33.7794 20.842 33.3978 21 33 21H15C14.6022 21 14.2206 20.842 13.9393 20.5607C13.658 20.2794 13.5 19.8978 13.5 19.5ZM15 24C14.6022 24 14.2206 24.158 13.9393 24.4393C13.658 24.7206 13.5 25.1022 13.5 25.5C13.5 25.8978 13.658 26.2794 13.9393 26.5607C14.2206 26.842 14.6022 27 15 27H33C33.3978 27 33.7794 26.842 34.0607 26.5607C34.342 26.2794 34.5 25.8978 34.5 25.5C34.5 25.1022 34.342 24.7206 34.0607 24.4393C33.7794 24.158 33.3978 24 33 24H15ZM15 30C14.6022 30 14.2206 30.158 13.9393 30.4393C13.658 30.7206 13.5 31.1022 13.5 31.5C13.5 31.8978 13.658 32.2794 13.9393 32.5607C14.2206 32.842 14.6022 33 15 33H24C24.3978 33 24.7794 32.842 25.0607 32.5607C25.342 32.2794 25.5 31.8978 25.5 31.5C25.5 31.1022 25.342 30.7206 25.0607 30.4393C24.7794 30.158 24.3978 30 24 30H15Z"
              fill="#16191C"
            />
            <path 
              d="M6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0L36 0C37.5913 0 39.1174 0.632141 40.2426 1.75736C41.3679 2.88258 42 4.4087 42 6V42C42 43.5913 41.3679 45.1174 40.2426 46.2426C39.1174 47.3679 37.5913 48 36 48H12C10.4087 48 8.88258 47.3679 7.75736 46.2426C6.63214 45.1174 6 43.5913 6 42V6ZM36 3H12C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V42C9 42.7957 9.31607 43.5587 9.87868 44.1213C10.4413 44.6839 11.2044 45 12 45H36C36.7956 45 37.5587 44.6839 38.1213 44.1213C38.6839 43.5587 39 42.7957 39 42V6C39 5.20435 38.6839 4.44129 38.1213 3.87868C37.5587 3.31607 36.7956 3 36 3Z"
              fill="#16191C"
            />
          </g>
        </svg>         
                 <div className="transition-all duration-300 cursor-pointer m-8 xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">24/7 & 365 Days Support </h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div>
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                <div className="ml-8 flex xl:flex-row items-center featuresvg4">
                <svg
          width="58"
          height="54"
          viewBox="0 0 48 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3">
            <path
              d="M5.76 7.52068C5.99478 7.48244 6.23528 7.50058 6.46167 7.5736C6.68805 7.64663 6.89383 7.77245 7.062 7.94068L9 9.88168L10.938 7.94068C11.0773 7.80099 11.2429 7.69016 11.4251 7.61454C11.6073 7.53892 11.8027 7.5 12 7.5C12.1973 7.5 12.3927 7.53892 12.5749 7.61454C12.7571 7.69016 12.9227 7.80099 13.062 7.94068L15 9.88168L16.938 7.94068C17.0773 7.80099 17.2429 7.69016 17.4251 7.61454C17.6073 7.53892 17.8027 7.5 18 7.5C18.1973 7.5 18.3927 7.53892 18.5749 7.61454C18.7571 7.69016 18.9227 7.80099 19.062 7.94068L21 9.88168L22.938 7.94068C23.0773 7.80099 23.2429 7.69016 23.4251 7.61454C23.6073 7.53892 23.8027 7.5 24 7.5C24.1973 7.5 24.3927 7.53892 24.5749 7.61454C24.7571 7.69016 24.9227 7.80099 25.062 7.94068L27 9.88168L28.938 7.94068C29.0773 7.80099 29.2429 7.69016 29.4251 7.61454C29.6073 7.53892 29.8027 7.5 30 7.5C30.1973 7.5 30.3927 7.53892 30.5749 7.61454C30.7571 7.69016 30.9227 7.80099 31.062 7.94068L33 9.88168L34.938 7.94068C35.0773 7.80099 35.2429 7.69016 35.4251 7.61454C35.6073 7.53892 35.8027 7.5 36 7.5C36.1973 7.5 36.3927 7.53892 36.5749 7.61454C36.7571 7.69016 36.9227 7.80099 37.062 7.94068L39 9.88168L40.938 7.94068C41.1061 7.77248 41.3117 7.64664 41.538 7.57355C41.7643 7.50046 42.0047 7.48221 42.2394 7.5203C42.4741 7.55839 42.6964 7.65174 42.8879 7.79264C43.0795 7.93354 43.2347 8.11796 43.341 8.33068L44.841 11.3307C44.9455 11.5393 45 11.7694 45 12.0027V48.0027C45 48.236 44.9455 48.4661 44.841 48.6747L43.341 51.6747C43.2346 51.8869 43.0794 52.0708 42.8881 52.2113C42.6968 52.3518 42.4749 52.4449 42.2407 52.483C42.0064 52.5211 41.7664 52.503 41.5405 52.4303C41.3145 52.3576 41.1091 52.2323 40.941 52.0647L39 50.1237L37.062 52.0647C36.9227 52.2044 36.7571 52.3152 36.5749 52.3908C36.3927 52.4664 36.1973 52.5054 36 52.5054C35.8027 52.5054 35.6073 52.4664 35.4251 52.3908C35.2429 52.3152 35.0773 52.2044 34.938 52.0647L33 50.1237L31.062 52.0647C30.9227 52.2044 30.7571 52.3152 30.5749 52.3908C30.3927 52.4664 30.1973 52.5054 30 52.5054C29.8027 52.5054 29.6073 52.4664 29.4251 52.3908C29.2429 52.3152 29.0773 52.2044 28.938 52.0647L27 50.1237L25.062 52.0647C24.9227 52.2044 24.7571 52.3152 24.5749 52.3908C24.3927 52.4664 24.1973 52.5054 24 52.5054C23.8027 52.5054 23.6073 52.4664 23.4251 52.3908C23.2429 52.3152 23.0773 52.2044 22.938 52.0647L21 50.1237L19.062 52.0647C18.9227 52.2044 18.7571 52.3152 18.5749 52.3908C18.3927 52.4664 18.1973 52.5054 18 52.5054C17.8027 52.5054 17.6073 52.4664 17.4251 52.3908C17.2429 52.3152 17.0773 52.2044 16.938 52.0647L15 50.1237L13.062 52.0647C12.9227 52.2044 12.7571 52.3152 12.5749 52.3908C12.3927 52.4664 12.1973 52.5054 12 52.5054C11.8027 52.5054 11.6073 52.4664 11.4251 52.3908C11.2429 52.3152 11.0773 52.2044 10.938 52.0647L9 50.1237L7.062 52.0647C6.89393 52.2329 6.68828 52.3587 6.46201 52.4318C6.23574 52.5049 5.99534 52.5232 5.76063 52.4851C5.52592 52.447 5.30362 52.3536 5.11209 52.2127C4.92055 52.0718 4.76525 51.8874 4.659 51.6747L3.159 48.6747C3.05446 48.4661 3.00002 48.236 3 48.0027V12.0027C3.00002 11.7694 3.05446 11.5393 3.159 11.3307L4.659 8.33068C4.76523 8.11811 4.92046 7.93381 5.11188 7.79299C5.3033 7.65216 5.52544 7.55883 5.76 7.52068ZM6.411 11.5347L6 12.3567V47.6487L6.411 48.4707L7.941 46.9407C8.22229 46.6595 8.60375 46.5015 9.0015 46.5015C9.39925 46.5015 9.78071 46.6595 10.062 46.9407L12 48.8817L13.938 46.9437C14.0773 46.804 14.2429 46.6932 14.4251 46.6175C14.6073 46.5419 14.8027 46.503 15 46.503C15.1973 46.503 15.3927 46.5419 15.5749 46.6175C15.7571 46.6932 15.9227 46.804 16.062 46.9437L18 48.8817L19.938 46.9437C20.0773 46.804 20.2429 46.6932 20.4251 46.6175C20.6073 46.5419 20.8027 46.503 21 46.503C21.1973 46.503 21.3927 46.5419 21.5749 46.6175C21.7571 46.6932 21.9227 46.804 22.062 46.9437L24 48.8817L25.938 46.9437C26.0773 46.804 26.2429 46.6932 26.4251 46.6175C26.6073 46.5419 26.8027 46.503 27 46.503C27.1973 46.503 27.3927 46.5419 27.5749 46.6175C27.7571 46.6932 27.9227 46.804 28.062 46.9437L30 48.8817L31.938 46.9437C32.0773 46.804 32.2429 46.6932 32.4251 46.6175C32.6073 46.5419 32.8027 46.503 33 46.503C33.1973 46.503 33.3927 46.5419 33.5749 46.6175C33.7571 46.6932 33.9227 46.804 34.062 46.9437L36 48.8817L37.938 46.9437C38.0773 46.804 38.2429 46.6932 38.4251 46.6175C38.6073 46.5419 38.8027 46.503 39 46.503C39.1973 46.503 39.3927 46.5419 39.5749 46.6175C39.7571 46.6932 39.9227 46.804 40.062 46.9437L41.589 48.4707L42 47.6487V12.3567L41.589 11.5347L40.059 13.0647C39.7777 13.3459 39.3962 13.5039 38.9985 13.5039C38.6008 13.5039 38.2193 13.3459 37.938 13.0647L36 11.1237L34.062 13.0647C33.9227 13.2044 33.7571 13.3152 33.5749 13.3908C33.3927 13.4664 33.1973 13.5054 33 13.5054C32.8027 13.5054 32.6073 13.4664 32.4251 13.3908C32.2429 13.3152 32.0773 13.2044 31.938 13.0647L30 11.1237L28.062 13.0647C27.9227 13.2044 27.7571 13.3152 27.5749 13.3908C27.3927 13.4664 27.1973 13.5054 27 13.5054C26.8027 13.5054 26.6073 13.4664 26.4251 13.3908C26.2429 13.3152 26.0773 13.2044 25.938 13.0647L24 11.1237L22.062 13.0647C21.9227 13.2044 21.7571 13.3152 21.5749 13.3908C21.3927 13.4664 21.1973 13.5054 21 13.5054C20.8027 13.5054 20.6073 13.4664 20.4251 13.3908C20.2429 13.3152 20.0773 13.2044 19.938 13.0647L18 11.1237L16.062 13.0647C15.9227 13.2044 15.7571 13.3152 15.5749 13.3908C15.3927 13.4664 15.1973 13.5054 15 13.5054C14.8027 13.5054 14.6073 13.4664 14.4251 13.3908C14.2429 13.3152 14.0773 13.2044 13.938 13.0647L12 11.1237L10.062 13.0647C9.92266 13.2044 9.75714 13.3152 9.5749 13.3908C9.39267 13.4664 9.1973 13.5054 9 13.5054C8.8027 13.5054 8.60733 13.4664 8.4251 13.3908C8.24286 13.3152 8.07734 13.2044 7.938 13.0647L6.411 11.5347Z"
              fill="#16191C"
            />
            <path
              d="M9 19.5C9 19.1022 9.15804 18.7206 9.43934 18.4393C9.72064 18.158 10.1022 18 10.5 18H28.5C28.8978 18 29.2794 18.158 29.5607 18.4393C29.842 18.7206 30 19.1022 30 19.5C30 19.8978 29.842 20.2794 29.5607 20.5607C29.2794 20.842 28.8978 21 28.5 21H10.5C10.1022 21 9.72064 20.842 9.43934 20.5607C9.15804 20.2794 9 19.8978 9 19.5ZM9 25.5C9 25.1022 9.15804 24.7206 9.43934 24.4393C9.72064 24.158 10.1022 24 10.5 24H28.5C28.8978 24 29.2794 24.158 29.5607 24.4393C29.842 24.7206 30 25.1022 30 25.5C30 25.8978 29.842 26.2794 29.5607 26.5607C29.2794 26.842 28.8978 27 28.5 27H10.5C10.1022 27 9.72064 26.842 9.43934 26.5607C9.15804 26.2794 9 25.8978 9 25.5ZM9 31.5C9 31.1022 9.15804 30.7206 9.43934 30.4393C9.72064 30.158 10.1022 30 10.5 30H28.5C28.8978 30 29.2794 30.158 29.5607 30.4393C29.842 30.7206 30 31.1022 30 31.5C30 31.8978 29.842 32.2794 29.5607 32.5607C29.2794 32.842 28.8978 33 28.5 33H10.5C10.1022 33 9.72064 32.842 9.43934 32.5607C9.15804 32.2794 9 31.8978 9 31.5ZM9 37.5C9 37.1022 9.15804 36.7206 9.43934 36.4393C9.72064 36.158 10.1022 36 10.5 36H28.5C28.8978 36 29.2794 36.158 29.5607 36.4393C29.842 36.7206 30 37.1022 30 37.5C30 37.8978 29.842 38.2794 29.5607 38.5607C29.2794 38.842 28.8978 39 28.5 39H10.5C10.1022 39 9.72064 38.842 9.43934 38.5607C9.15804 38.2794 9 37.8978 9 37.5ZM33 19.5C33 19.1022 33.158 18.7206 33.4393 18.4393C33.7206 18.158 34.1022 18 34.5 18H37.5C37.8978 18 38.2794 18.158 38.5607 18.4393C38.842 18.7206 39 19.1022 39 19.5C39 19.8978 38.842 20.2794 38.5607 20.5607C38.2794 20.842 37.8978 21 37.5 21H34.5C34.1022 21 33.7206 20.842 33.4393 20.5607C33.158 20.2794 33 19.8978 33 19.5ZM33 25.5C33 25.1022 33.158 24.7206 33.4393 24.4393C33.7206 24.158 34.1022 24 34.5 24H37.5C37.8978 24 38.2794 24.158 38.5607 24.4393C38.842 24.7206 39 25.1022 39 25.5C39 25.8978 38.842 26.2794 38.5607 26.5607C38.2794 26.842 37.8978 27 37.5 27H34.5C34.1022 27 33.7206 26.842 33.4393 26.5607C33.158 26.2794 33 25.8978 33 25.5ZM33 31.5C33 31.1022 33.158 30.7206 33.4393 30.4393C33.7206 30.158 34.1022 30 34.5 30H37.5C37.8978 30 38.2794 30.158 38.5607 30.4393C38.842 30.7206 39 31.1022 39 31.5C39 31.8978 38.842 32.2794 38.5607 32.5607C38.2794 32.842 37.8978 33 37.5 33H34.5C34.1022 33 33.7206 32.842 33.4393 32.5607C33.158 32.2794 33 31.8978 33 31.5ZM33 37.5C33 37.1022 33.158 36.7206 33.4393 36.4393C33.7206 36.158 34.1022 36 34.5 36H37.5C37.8978 36 38.2794 36.158 38.5607 36.4393C38.842 36.7206 39 37.1022 39 37.5C39 37.8978 38.842 38.2794 38.5607 38.5607C38.2794 38.842 37.8978 39 37.5 39H34.5C34.1022 39 33.7206 38.842 33.4393 38.5607C33.158 38.2794 33 37.8978 33 37.5Z"
              fill="#16191C"
            />
          </g>
        </svg>
                  <div className="transition-all duration-300 cursor-pointer m-8 xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">30-Day Money Back</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
            </div>
            <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
              <div className="ml-8 flex xl:flex-row items-center featuresvg4">
              <svg
          width="58"
          height="58"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3">
            <path
              d="M18 3H3V45H18V3ZM45 3H30V18H45V3ZM45
             30V45H30V30H45ZM0 3C0 2.20435 0.316071 
             1.44129 0.87868 0.87868C1.44129 0.316071
              2.20435 0 3 0L18 0C18.7956 0 19.5587 0.316071 
              20.1213 0.87868C20.6839 1.44129 21 2.20435 21 
              3V45C21 45.7957 20.6839 46.5587 20.1213 47.1213C19.5587 47.6839
              18.7956 48 18 48H3C2.20435 48 1.44129 47.6839 0.87868 47.1213C0.316071
               46.5587 0 45.7957 0 45V3ZM27 3C27 2.20435 27.3161 1.44129 27.8787 
               0.87868C28.4413 0.316071 29.2044 0 30 0L45 0C45.7957 0 46.5587 0.316071 47.1213 0.87868C47.6839 1.44129 48 2.20435 
               48 3V18C48 18.7956 47.6839 19.5587 47.1213 20.1213C46.5587 20.6839 45.7957 21 45 21H30C29.2044 21 28.4413 20.6839
                27.8787 20.1213C27.3161 19.5587 27 18.7956 27 18V3ZM30 27C29.2044 27 28.4413 27.3161 27.8787 27.8787C27.3161
                 28.4413 27 29.2044 27 30V45C27 45.7957 27.3161 46.5587 27.8787 47.1213C28.4413 47.6839 29.2044 48 30 48H45C45.7957
                  48 46.5587 47.6839 47.1213 47.1213C47.6839 46.5587 48 45.7957 48 45V30C48 29.2044 47.6839 28.4413 
                  47.1213 27.8787C46.5587 27.3161 
              45.7957 27 45 27H30Z"
              fill="#16191C"
            />
          </g>
        </svg>                 <div className="transition-all duration-300 cursor-pointer m-8 xl:gap-6 text-[#16191C]">
                  <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">99.95% Uptime </h2>
                  <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="w-full flex justify-center">
              <Image src="/lady.svg" alt="" width={550} height={550} className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="text-white bg-gradient-to-b from-[#292E34] to-[#16191C] pt-14 pb-20">
        <Locationpage />
      </section>
     
     


     


      <section className="relative pt-40 pb-72">
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
  </section>


    </main>
  );
}
