// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
import { FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";
const Support = () => {
 const items = [
  {
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.6875" y="0.894653" width="62.0702" height="62.0702" rx="8.80136" fill="#FF7500"/>
      <path d="M46.4375 32H32.3593C34.5474 30.0743 35.9375 27.262 35.9375 24.125C35.9375 18.3354 31.2271 13.625 25.4375 13.625C19.6479 13.625 14.9375 18.3354 14.9375 24.125C14.9375 27.262 16.3276 30.0743 18.5157 32H17.5625C15.3912 32 13.625 33.7662 13.625 35.9375V46.4375C13.625 48.6088 15.3912 50.375 17.5625 50.375H46.4375C48.6088 50.375 50.375 48.6088 50.375 46.4375V35.9375C50.375 33.7662 48.6088 32 46.4375 32ZM17.6811 25.4375H18.875C19.5998 25.4375 20.1875 24.8498 20.1875 24.125C20.1875 23.4002 19.5998 22.8125 18.875 22.8125H17.6811C18.238 19.5141 20.8466 16.9122 24.1482 16.365C24.2094 17.0331 24.7535 17.5625 25.4375 17.5625C26.1215 17.5625 26.6656 17.0331 26.7268 16.365C30.0361 16.9135 32.649 19.5264 33.1975 22.8357C32.5294 22.8969 32 23.441 32 24.125C32 24.809 32.5294 25.3531 33.1975 25.4143C32.649 28.7236 30.0361 31.3365 26.7268 31.885C26.6656 31.2169 26.1215 30.6875 25.4375 30.6875C24.7535 30.6875 24.2094 31.2169 24.1482 31.885C20.8466 31.3378 18.238 28.7359 17.6811 25.4375ZM16.25 35.9375C16.25 35.214 16.839 34.625 17.5625 34.625H46.4375C47.161 34.625 47.75 35.214 47.75 35.9375V39.875H16.25V35.9375ZM47.75 46.4375C47.75 47.161 47.161 47.75 46.4375 47.75H17.5625C16.839 47.75 16.25 47.161 16.25 46.4375V42.5H47.75V46.4375Z" fill="white"/>
      <path d="M45.1282 35.9375H45.1154C44.3923 35.9375 43.8125 36.5252 43.8125 37.25C43.8125 37.9748 44.4051 38.5625 45.1282 38.5625C45.8519 38.5625 46.4375 37.9748 46.4375 37.25C46.4375 36.5252 45.8519 35.9375 45.1282 35.9375ZM41.1907 35.9375H41.1779C40.4548 35.9375 39.875 36.5252 39.875 37.25C39.875 37.9748 40.4676 38.5625 41.1907 38.5625C41.9144 38.5625 42.5 37.9748 42.5 37.25C42.5 36.5252 41.9144 35.9375 41.1907 35.9375ZM37.2532 35.9375H37.2405C36.5174 35.9375 35.9375 36.5252 35.9375 37.25C35.9375 37.9748 36.5301 38.5625 37.2532 38.5625C37.9769 38.5625 38.5625 37.9748 38.5625 37.25C38.5625 36.5252 37.9769 35.9375 37.2532 35.9375ZM45.1282 46.4375C45.8519 46.4375 46.4375 45.8498 46.4375 45.125C46.4375 44.4002 45.8519 43.8125 45.1282 43.8125H45.1154C44.3923 43.8125 43.8125 44.4002 43.8125 45.125C43.8125 45.8498 44.4051 46.4375 45.1282 46.4375ZM41.1907 46.4375C41.9144 46.4375 42.5 45.8498 42.5 45.125C42.5 44.4002 41.9144 43.8125 41.1907 43.8125H41.1779C40.4548 43.8125 39.875 44.4002 39.875 45.125C39.875 45.8498 40.4676 46.4375 41.1907 46.4375ZM37.2532 46.4375C37.9769 46.4375 38.5625 45.8498 38.5625 45.125C38.5625 44.4002 37.9769 43.8125 37.2532 43.8125H37.2405C36.5174 43.8125 35.9375 44.4002 35.9375 45.125C35.9375 45.8498 36.5301 46.4375 37.2532 46.4375ZM22.8125 25.4375H25.4375C25.7855 25.4375 26.1194 25.2991 26.3655 25.053L28.9905 22.428C29.5032 21.9153 29.5032 21.0847 28.9905 20.572C28.4778 20.0593 27.6472 20.0593 27.1345 20.572L24.894 22.8125H22.8125C22.0877 22.8125 21.5 23.4002 21.5 24.125C21.5 24.8498 22.0877 25.4375 22.8125 25.4375ZM40.803 19.803L43.8125 16.7935L46.822 19.803C47.0784 20.0593 47.4142 20.1875 47.75 20.1875C48.0858 20.1875 48.4216 20.0593 48.678 19.803C49.1907 19.2903 49.1907 18.4597 48.678 17.947L44.7405 14.0095C44.2278 13.4968 43.3972 13.4968 42.8845 14.0095L38.947 17.947C38.4343 18.4597 38.4343 19.2903 38.947 19.803C39.4597 20.3157 40.2903 20.3157 40.803 19.803Z" fill="white"/>
      <path d="M40.803 25.053L43.8125 22.0435L46.822 25.053C47.0784 25.3093 47.4142 25.4375 47.75 25.4375C48.0858 25.4375 48.4216 25.3093 48.678 25.053C49.1907 24.5403 49.1907 23.7097 48.678 23.197L44.7405 19.2595C44.2278 18.7468 43.3972 18.7468 42.8845 19.2595L38.947 23.197C38.4343 23.7097 38.4343 24.5403 38.947 25.053C39.4597 25.5657 40.2903 25.5657 40.803 25.053Z" fill="white"/>
      <path d="M40.803 30.303L43.8125 27.2935L46.822 30.303C47.0784 30.5593 47.4142 30.6875 47.75 30.6875C48.0858 30.6875 48.4216 30.5593 48.678 30.303C49.1907 29.7903 49.1907 28.9597 48.678 28.447L44.7405 24.5095C44.2278 23.9968 43.3972 23.9968 42.8845 24.5095L38.947 28.447C38.4343 28.9597 38.4343 29.7903 38.947 30.303C39.4597 30.8157 40.2903 30.8157 40.803 30.303Z" fill="white"/>
      </svg>
      

    ),

    title: "Blazing-Fast Websites",
    description:
      "Maximize your site’s loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a standard.",
  },
  {
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.6875" y="0.894714" width="62.0702" height="62.0702" rx="8.80136" fill="#FF7500"/>
      <path d="M44.3952 22.1068C44.4958 22.0091 44.5757 21.8923 44.6303 21.7631C44.6848 21.634 44.713 21.4953 44.713 21.3551C44.713 21.2149 44.6848 21.0761 44.6303 20.947C44.5757 20.8179 44.4958 20.701 44.3952 20.6033C44.0035 20.2115 43.2941 20.2115 42.9023 20.6033C42.4788 21.0268 42.5073 21.7108 42.9023 22.1068C43.3152 22.4986 43.9463 22.5314 44.3952 22.1068ZM40.1599 22.1068C40.2605 22.0091 40.3404 21.8923 40.395 21.7631C40.4495 21.634 40.4777 21.4953 40.4777 21.3551C40.4777 21.2149 40.4495 21.0761 40.395 20.947C40.3404 20.8179 40.2605 20.701 40.1599 20.6033C39.7682 20.2115 39.0588 20.2115 38.667 20.6033C38.2435 21.0268 38.2721 21.7108 38.667 22.1068C39.0799 22.4986 39.711 22.5314 40.1599 22.1068ZM20.3557 22.4118H29.8851C30.1659 22.4118 30.4352 22.3002 30.6338 22.1017C30.8324 21.9031 30.9439 21.6338 30.9439 21.353C30.9439 21.0721 30.8324 20.8028 30.6338 20.6043C30.4352 20.4057 30.1659 20.2941 29.8851 20.2941H20.3557C20.0749 20.2941 19.8056 20.4057 19.607 20.6043C19.4084 20.8028 19.2969 21.0721 19.2969 21.353C19.2969 21.6338 19.4084 21.9031 19.607 22.1017C19.8056 22.3002 20.0749 22.4118 20.3557 22.4118ZM42.9012 33.3092C42.7046 33.51 42.5945 33.7799 42.5945 34.061C42.5945 34.342 42.7046 34.6119 42.9012 34.8127C43.0005 34.911 43.1182 34.9887 43.2476 35.0414C43.377 35.0941 43.5155 35.1207 43.6552 35.1197C43.7949 35.1188 43.933 35.0902 44.0617 35.0357C44.1903 34.9812 44.3069 34.9018 44.4048 34.8021C44.5027 34.7038 44.5802 34.5869 44.6328 34.4584C44.6853 34.3299 44.7119 34.1923 44.7109 34.0534C44.7099 33.9146 44.6814 33.7774 44.627 33.6496C44.5727 33.5219 44.4935 33.4062 44.3942 33.3092C44.0024 32.9174 43.3046 32.9174 42.9012 33.3092Z" fill="white"/>
      <path d="M43.6507 28.7647H20.3577C18.9539 28.7661 17.608 29.3243 16.6153 30.3168C15.6226 31.3093 15.0642 32.6551 15.0625 34.0588C15.0625 36.978 17.4374 39.353 20.3577 39.353H30.9459V47.8235H22.4743C22.1934 47.8235 21.9241 47.9351 21.7256 48.1337C21.527 48.3322 21.4154 48.6016 21.4154 48.8824C21.4154 49.1632 21.527 49.4325 21.7256 49.6311C21.9241 49.8296 22.1934 49.9412 22.4743 49.9412H41.5331C41.8139 49.9412 42.0832 49.8296 42.2818 49.6311C42.4804 49.4325 42.5919 49.1632 42.5919 48.8824C42.5919 48.6016 42.4804 48.3322 42.2818 48.1337C42.0832 47.9351 41.8139 47.8235 41.5331 47.8235H33.0625V39.353H43.6507C46.5699 39.353 48.9449 36.978 48.9449 34.0588C48.9449 31.1397 46.5699 28.7647 43.6507 28.7647ZM43.6507 37.2353H20.3577C18.6053 37.2353 17.1801 35.8101 17.1801 34.0588C17.1801 32.3075 18.6053 30.8824 20.3577 30.8824H43.6507C45.402 30.8824 46.8272 32.3075 46.8272 34.0588C46.8272 35.8101 45.402 37.2353 43.6507 37.2353ZM20.3577 26.6471H43.6507C46.5699 26.6471 48.9449 24.2721 48.9449 21.353C48.9449 18.4338 46.5699 16.0588 43.6507 16.0588H20.3577C18.9537 16.0602 17.6077 16.6186 16.615 17.6113C15.6222 18.604 15.0639 19.9501 15.0625 21.354C15.0645 22.7576 15.623 24.1031 16.6157 25.0954C17.6084 26.0876 18.9541 26.6457 20.3577 26.6471ZM20.3577 18.1765H43.6507C45.402 18.1765 46.8272 19.6017 46.8272 21.354C46.8272 23.1064 45.402 24.5305 43.6507 24.5305H20.3577C18.6053 24.5294 17.1801 23.1042 17.1801 21.353C17.1801 19.6017 18.6053 18.1765 20.3577 18.1765Z" fill="white"/>
      <path d="M38.6659 33.3092C38.4693 33.51 38.3592 33.7799 38.3592 34.0609C38.3592 34.342 38.4693 34.6119 38.6659 34.8127C39.1053 35.2299 39.7565 35.2151 40.1589 34.8127C40.2594 34.715 40.3393 34.5981 40.3939 34.469C40.4485 34.3399 40.4766 34.2011 40.4766 34.0609C40.4766 33.9208 40.4485 33.782 40.3939 33.6529C40.3393 33.5237 40.2594 33.4069 40.1589 33.3092C39.7671 32.9174 39.0693 32.9174 38.6659 33.3092ZM29.8851 33H20.3557C20.0749 33 19.8056 33.1116 19.607 33.3101C19.4084 33.5087 19.2969 33.778 19.2969 34.0588C19.2969 34.3396 19.4084 34.609 19.607 34.8075C19.8056 35.0061 20.0749 35.1176 20.3557 35.1176H29.8851C30.1659 35.1176 30.4352 35.0061 30.6338 34.8075C30.8324 34.609 30.9439 34.3396 30.9439 34.0588C30.9439 33.778 30.8324 33.5087 30.6338 33.3101C30.4352 33.1116 30.1659 33 29.8851 33Z" fill="white"/>
      </svg>
      
    ),
    title: "cPanel Accredited Support",
    description:
      "Need help? Our cPanel certified professionals are here to fix your technical issues 24/7! Focus on building your business while we take care of the rest!",
  },
  // {
  {
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.6875" y="0.894714" width="62.0702" height="62.0702" rx="8.80136" fill="#FF7500"/>
      <path d="M27.7935 27.1644C31.8043 27.1644 35.0557 23.913 35.0557 19.9022C35.0557 15.8914 31.8043 12.64 27.7935 12.64C23.7827 12.64 20.5312 15.8914 20.5312 19.9022C20.5312 23.913 23.7827 27.1644 27.7935 27.1644Z" fill="white"/>
      <path d="M34.7608 35.0527L35.7625 34.9692L36.5555 34.3014C36.8476 34.051 37.1815 33.8423 37.5154 33.6754C36.3051 30.9625 33.5922 29.126 30.5036 29.126H25.0778C21.1963 29.126 17.8991 32.0476 17.44 35.9291L16.6887 42.1897C16.6053 43.0244 17.1061 43.7757 17.8991 43.9426C21.0294 44.6104 24.3266 44.986 27.7907 44.986C28.1664 44.986 28.542 44.986 28.9176 44.986C28.5837 43.6087 28.9176 42.1479 29.8776 41.021L30.5454 40.2698L30.6288 39.2264C30.7958 36.9726 32.5487 35.2614 34.7608 35.0527Z" fill="white"/>
      <path d="M47.3268 42.4818L46.659 41.6888C46.3668 41.3132 46.1581 40.8958 46.1164 40.4367L46.0329 39.3933C45.9494 38.3082 45.073 37.4317 43.9878 37.3482L42.9444 37.2647C42.4853 37.223 42.0262 37.056 41.6923 36.7222L40.8993 36.0544C40.0645 35.3448 38.8542 35.3448 38.0194 36.0544L37.2264 36.7222C36.8508 37.0143 36.4334 37.223 35.9743 37.2647L34.9309 37.3482C33.8458 37.4317 32.9693 38.3082 32.8858 39.3933L32.8023 40.4367C32.7606 40.8958 32.5937 41.3549 32.2598 41.6888L31.6337 42.4818C30.9242 43.3166 30.9242 44.5269 31.6337 45.3617L32.3015 46.1547C32.5937 46.5303 32.8023 46.9477 32.8441 47.4068L32.9275 48.4502C33.011 49.5354 33.8875 50.4118 34.9727 50.4953L36.0161 50.5788C36.4752 50.6205 36.9343 50.7875 37.2682 51.1214L38.0612 51.7892C38.8959 52.4987 40.1063 52.4987 40.941 51.7892L41.734 51.1214C42.1097 50.8292 42.527 50.6205 42.9861 50.5788L44.0295 50.4953C45.1147 50.4118 45.9912 49.5354 46.0747 48.4502L46.1581 47.4068C46.1999 46.9477 46.3668 46.4886 46.7007 46.1547L47.3685 45.3617C48.0363 44.5269 48.0363 43.3166 47.3268 42.4818ZM40.0645 47.3233V48.1998C40.0645 48.2833 39.9811 48.3667 39.8976 48.3667H39.0629C38.9794 48.3667 38.8959 48.2833 38.8959 48.1998V47.365C38.0194 47.3233 37.3517 46.6555 37.2682 45.779C37.2682 45.6956 37.3517 45.6121 37.4351 45.6121H38.2699C38.3533 45.6121 38.3951 45.6538 38.4368 45.7373C38.4786 45.9877 38.729 46.1964 39.0211 46.1964H39.7724C40.1898 46.1964 40.6071 45.8625 40.6489 45.4452C40.6906 44.9443 40.315 44.5269 39.8141 44.5269H39.2716C38.2281 44.5269 37.2682 43.7757 37.1847 42.7323C37.0595 41.6471 37.8525 40.6872 38.8959 40.5619V39.7272C38.8959 39.6437 38.9794 39.5603 39.0629 39.5603H39.8976C39.9811 39.5603 40.0645 39.6437 40.0645 39.7272V40.5619C40.941 40.6037 41.6088 41.2715 41.6923 42.1479C41.6923 42.2314 41.6088 42.3149 41.5253 42.3149H40.6906C40.6071 42.3149 40.5654 42.2732 40.5237 42.1897C40.4819 41.9393 40.2315 41.7306 39.9393 41.7306H39.1881C38.729 41.7306 38.3533 42.0645 38.3116 42.4818C38.2699 42.9827 38.6455 43.4 39.1463 43.4H39.7724C40.941 43.4 41.901 44.4017 41.7758 45.6121C41.6923 46.4468 40.941 47.1564 40.0645 47.3233Z" fill="white"/>
      </svg>
      
    ),
    title: "Ironclad Website Security",
    description:
      "We offer multi-layered security solutions with every cPanel hosting plan - SSL, WAF protection, backups, malware scanner & more to keep your websites secure.",
  },
];
  return (
    <div className="w-full    px-3">

      <div className="w-full max-w-[1220px] mx-auto">
      <div className="flex flex-col bl:flex-row justify-between gap-y-10 gap-x-30 items-center  pb-16">
        <div className="relative w-full">
          <h2 className="font-mona-sans font-semibold text-[42px] leading-relaxed w-full text-center bl:text-left">
          Out-of-the-Box cPanel
Hosting Experience
  {/* <span className="pb-4 border-b-4 border-orange-500">Shared </span>Hosting  */}
          </h2>
      
        </div>
        <div className="flex flex-wrap bl:flex-nowrap items-center gap-2 sm:gap-5">
          <p className="font-mono-sans text-[16px] font-light leading-[24px] text-center 2xl:text-left text-[#16191C]">
          Lorem ipsum dolor sit amet consectetur. Sit placerat pellentesque lacus elementum bibendum. Vitae tortor scelerisque maecenas amet sit quam justo diam. Molestie amet est et donec iaculis ut. 
          </p>
        </div>
      </div>
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-14 bl:items-center justify-center mx-auto ">
  {items.map((item, index) => (
    <div key={index} className="relative flex-1 w-full gap-10 group">
      <div className="absolute -top-7 left-9 w-16 h-16 flex justify-center items-center rounded-xl transition-all duration-300 ">
        {item.icon}
      </div>
      <div className="  rounded-2xl group bg-[#F9EFE4] text-[#16191C] p-4 pl-8 pt-10 transition-all duration-300 cursor-pointer">
        <h2 className="text-[18px] font-bold mt-4 leading-[26px] opacity-1 mb-4">{item.title}</h2>
        <p className="w-full opacity-70 font-mona-sans text-[16px] font-normal leading-normal text-left">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};
export default Support;










