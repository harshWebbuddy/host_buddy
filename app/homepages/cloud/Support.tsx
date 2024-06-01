// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
import { FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";
const Support = () => {
  const items = [
    {
      icon: <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.334 17.082C19.9026 17.082 19.4888 16.9106 19.1838 16.6055C18.8787 16.3005 18.7073 15.8867 18.7073 15.4553V10.4358L17.8241 11.3187C17.674 11.4741 17.4945 11.598 17.296 11.6832C17.0976 11.7685 16.8841 11.8134 16.6681 11.8152C16.4522 11.8171 16.238 11.776 16.038 11.6942C15.8381 11.6124 15.6565 11.4916 15.5038 11.3389C15.3511 11.1861 15.2303 11.0045 15.1485 10.8046C15.0667 10.6047 15.0255 10.3905 15.0274 10.1745C15.0293 9.95852 15.0742 9.74507 15.1594 9.54661C15.2447 9.34815 15.3686 9.16865 15.5239 9.0186L18.8964 5.64611C19.2777 5.26492 19.7948 5.05078 20.334 5.05078C20.8732 5.05078 21.3903 5.26492 21.7716 5.64611L25.144 9.0186C25.2994 9.16865 25.4233 9.34815 25.5086 9.54661C25.5938 9.74507 25.6387 9.95852 25.6406 10.1745C25.6425 10.3905 25.6013 10.6047 25.5195 10.8046C25.4377 11.0045 25.3169 11.1861 25.1642 11.3389C25.0115 11.4916 24.8299 11.6124 24.6299 11.6942C24.43 11.776 24.2158 11.8171 23.9998 11.8152C23.7839 11.8134 23.5704 11.7685 23.372 11.6832C23.1735 11.598 22.994 11.4741 22.8439 11.3187L21.9607 10.4358V15.4553C21.9607 15.8867 21.7893 16.3005 21.4842 16.6055C21.1792 16.9106 20.7654 17.082 20.334 17.082ZM30.094 18.7086C30.094 18.2772 30.2654 17.8635 30.5704 17.5584C30.8755 17.2534 31.2892 17.082 31.7207 17.082H34.5673C34.9987 17.082 35.4125 17.2534 35.7176 17.5584C36.0226 17.8635 36.194 18.2772 36.194 18.7086C36.194 19.1401 36.0226 19.5538 35.7176 19.8589C35.4125 20.1639 34.9987 20.3353 34.5673 20.3353H31.7207C31.2892 20.3353 30.8755 20.1639 30.5704 19.8589C30.2654 19.5538 30.094 19.1401 30.094 18.7086ZM31.314 28.4686C30.8826 28.4686 30.4688 28.64 30.1638 28.9451C29.8587 29.2501 29.6873 29.6639 29.6873 30.0953C29.6873 30.5267 29.8587 30.9405 30.1638 31.2455C30.4688 31.5506 30.8826 31.722 31.314 31.722H34.5673C34.9987 31.722 35.4125 31.5506 35.7176 31.2455C36.0226 30.9405 36.194 30.5267 36.194 30.0953C36.194 29.6639 36.0226 29.2501 35.7176 28.9451C35.4125 28.64 34.9987 28.4686 34.5673 28.4686H31.314Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3333 0C14.1906 0 9.1378 5.25494 9.36065 11.3867H4.06667C1.82065 11.3867 4.39832e-06 13.2073 4.39832e-06 15.4533V21.96C4.39832e-06 22.8754 0.302564 23.7204 0.813337 24.4C0.284231 25.1033 -0.00129246 25.9599 4.39832e-06 26.84V33.3466C4.39832e-06 35.5927 1.82065 37.4133 4.06667 37.4133H36.6C38.846 37.4133 40.6666 35.5927 40.6666 33.3466V26.84C40.668 25.9599 40.3826 25.1034 39.8537 24.4C40.3826 23.6966 40.668 22.84 40.6666 21.96V15.4533C40.6666 13.2073 38.846 11.3867 36.6 11.3867H31.306C31.5289 5.25494 26.476 0 20.3333 0ZM20.3333 3.25333C16.0662 3.25333 12.6067 6.71284 12.6067 10.98C12.6067 15.2471 16.0662 18.7067 20.3333 18.7067C24.6005 18.7067 28.06 15.2471 28.06 10.98C28.06 6.71284 24.6005 3.25333 20.3333 3.25333ZM30.6887 14.64C29.1812 18.9047 25.1141 21.96 20.3333 21.96C15.5526 21.96 11.4855 18.9047 9.97797 14.64H4.06667C3.85096 14.64 3.64408 14.7257 3.49156 14.8782C3.33903 15.0307 3.25334 15.2376 3.25334 15.4533V21.96C3.25334 22.1757 3.33903 22.3826 3.49156 22.5351C3.64408 22.6876 3.85096 22.7733 4.06667 22.7733H36.6C36.8157 22.7733 37.0226 22.6876 37.1751 22.5351C37.3276 22.3826 37.4133 22.1757 37.4133 21.96V15.4533C37.4133 15.2376 37.3276 15.0307 37.1751 14.8782C37.0226 14.7257 36.8157 14.64 36.6 14.64H30.6887ZM3.25334 26.84C3.25334 26.6243 3.33903 26.4174 3.49156 26.2649C3.64408 26.1123 3.85096 26.0267 4.06667 26.0267H36.6C36.8157 26.0267 37.0226 26.1123 37.1751 26.2649C37.3276 26.4174 37.4133 26.6243 37.4133 26.84V33.3466C37.4133 33.5624 37.3276 33.7692 37.1751 33.9218C37.0226 34.0743 36.8157 34.16 36.6 34.16H4.06667C3.85096 34.16 3.64408 34.0743 3.49156 33.9218C3.33903 33.7692 3.25334 33.5624 3.25334 33.3466V26.84Z" fill="#FF7500"/>
      </svg>
      
      ,
      title: "Support 24x7x365",
      description: "Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a standard."
    },
    {
      icon: <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.584 9.12934C21.3172 9.65359 14.934 12.339 13.6459 13.6293C13.2576 14.0175 12.9496 14.4784 12.7395 14.9856C12.5293 15.4928 12.4211 16.0364 12.4211 16.5854C12.421 17.6942 12.8613 18.7577 13.6453 19.5418C14.4293 20.3259 15.4926 20.7665 16.6014 20.7666C17.7102 20.7667 18.7736 20.3263 19.5577 19.5423C20.8447 18.2553 23.529 11.871 24.0577 10.6031C24.1428 10.3975 24.1649 10.1713 24.1214 9.95313C24.0779 9.73494 23.9707 9.53455 23.8134 9.37729C23.656 9.22004 23.4555 9.11297 23.2373 9.06964C23.0191 9.02631 22.7929 9.04865 22.5874 9.13384L22.584 9.12934ZM17.967 17.9505C17.6049 18.3125 17.1138 18.5159 16.6018 18.5159C16.0898 18.5159 15.5987 18.3125 15.2366 17.9505C14.8745 17.5884 14.6711 17.0973 14.6711 16.5853C14.6711 16.0732 14.8745 15.5822 15.2366 15.2201C17.0154 14.0725 18.9016 13.1004 20.8684 12.3176C20.0879 14.2856 19.1161 16.1723 17.967 17.9505ZM30.9495 24.8017C30.8003 25.0601 30.5546 25.2486 30.2664 25.3259C29.9782 25.4031 29.6711 25.3626 29.4127 25.2135L26.9377 23.7847C26.6815 23.6345 26.495 23.389 26.4191 23.1018C26.3431 22.8145 26.3839 22.509 26.5324 22.2517C26.681 21.9944 26.9252 21.8063 27.2119 21.7285C27.4986 21.6507 27.8045 21.6894 28.0627 21.8362L29.4982 22.6653C30.3902 20.8187 30.8544 18.7947 30.8561 16.7439C30.8579 14.6932 30.3972 12.6684 29.5084 10.8202L28.065 11.6527C27.8067 11.7996 27.5009 11.8383 27.2142 11.7604C26.9275 11.6826 26.6832 11.4945 26.5347 11.2372C26.3861 10.98 26.3454 10.6744 26.4213 10.3872C26.4973 10.1 26.6837 9.85446 26.94 9.70422L28.3879 8.86834C27.2219 7.18303 25.6966 5.7774 23.9218 4.75276C22.147 3.72812 20.167 3.11001 18.1245 2.94297V4.61472C18.1245 4.91309 18.006 5.19924 17.795 5.41021C17.584 5.62119 17.2979 5.73972 16.9995 5.73972C16.7011 5.73972 16.415 5.62119 16.204 5.41021C15.993 5.19924 15.8745 4.91309 15.8745 4.61472V2.94297C13.8327 3.10965 11.8533 3.72716 10.079 4.75101C8.30461 5.77485 6.77944 7.17953 5.61337 8.86384L7.06124 9.70084C7.19385 9.77221 7.31079 9.86947 7.40511 9.98686C7.49943 10.1043 7.56923 10.2394 7.61036 10.3843C7.65148 10.5291 7.66311 10.6808 7.64454 10.8302C7.62597 10.9797 7.57759 11.1239 7.50225 11.2543C7.42692 11.3847 7.32618 11.4986 7.20599 11.5893C7.08581 11.6801 6.94863 11.7458 6.80259 11.7825C6.65654 11.8193 6.50461 11.8263 6.35579 11.8032C6.20698 11.7802 6.06431 11.7274 5.93624 11.6482L4.49399 10.8146C3.60356 12.6622 3.14114 14.6868 3.14114 16.7377C3.14114 18.7887 3.60356 20.8133 4.49399 22.6608L5.93062 21.8328C6.05861 21.7578 6.20018 21.7088 6.34718 21.6887C6.49417 21.6686 6.6437 21.6778 6.78713 21.7157C6.93057 21.7537 7.06509 21.8196 7.18294 21.9097C7.3008 21.9998 7.39967 22.1124 7.47385 22.2409C7.54804 22.3693 7.59607 22.5112 7.6152 22.6584C7.63432 22.8055 7.62415 22.9549 7.58528 23.0981C7.54641 23.2413 7.4796 23.3754 7.38869 23.4926C7.29779 23.6099 7.18459 23.708 7.05562 23.7813L4.60199 25.1943C4.59412 25.1943 4.58962 25.2078 4.58174 25.2123C4.57387 25.2168 4.53224 25.2258 4.50749 25.2371C4.41849 25.2813 4.32386 25.3131 4.22624 25.3316C4.18098 25.3408 4.13511 25.3468 4.08899 25.3496C4.06537 25.3496 4.04062 25.3586 4.01699 25.3586C3.9359 25.3569 3.85521 25.3468 3.77624 25.3282C3.74587 25.3215 3.71774 25.3147 3.68849 25.3057C3.58304 25.2718 3.48302 25.223 3.39149 25.1606C3.36142 25.1405 3.3325 25.1187 3.30487 25.0953C3.20376 25.017 3.1173 24.9214 3.04949 24.813V24.8017C1.64394 22.3668 0.902203 19.6055 0.898452 16.794C0.894701 13.9825 1.62906 11.2193 3.02812 8.78059C3.04274 8.75022 3.04274 8.71759 3.05962 8.68947C3.08381 8.65705 3.11052 8.62658 3.13949 8.59834C4.55521 6.1822 6.57658 4.17703 9.00405 2.78081C11.4315 1.38458 14.1811 0.645567 16.9815 0.636719H16.9995H17.0175C19.8211 0.643094 22.5745 1.3814 25.0053 2.77858C27.436 4.17576 29.4598 6.1834 30.8764 8.60284C30.9037 8.63074 30.9296 8.66003 30.954 8.69059C30.9656 8.72006 30.9758 8.7501 30.9844 8.78059C32.3814 11.2205 33.1134 13.9843 33.1073 16.7958C33.1012 19.6073 32.3571 22.368 30.9495 24.8017Z" fill="#FF7500"/>
      </svg>,
      
      title: "Support 24x7x365",
      description: "Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a standard."
    },
    // {
      {
        icon: <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1025_7928)">
        <path d="M36.8125 9.50078C36.1594 9.50078 35.625 10.0352 35.625 10.6883V27.3133C35.625 27.9664 35.0906 28.5008 34.4375 28.5008H3.5625C2.90937 28.5008 2.375 27.9664 2.375 27.3133V7.71953C2.375 7.06641 2.90937 6.53203 3.5625 6.53203H27.2531L22.8594 10.9258C22.6812 11.0445 22.5625 11.282 22.5625 11.4602L21.85 14.2508H7.125C6.47188 14.2508 5.9375 14.7852 5.9375 15.4383C5.9375 16.0914 6.47188 16.6258 7.125 16.6258H22.5625C22.9188 16.6258 23.2156 16.4477 23.4531 16.2102L26.5406 15.4383C26.7781 15.3789 26.9562 15.2602 27.075 15.1414L37.05 5.04766C37.6437 4.51328 38 3.80078 38 2.96953C38 2.13828 37.7031 1.36641 37.1688 0.832031C36.6344 0.238281 35.9219 -0.0585938 35.15 -0.0585938C34.3781 -0.0585938 33.5469 0.238281 32.9531 0.832031L29.6281 4.15703H3.5625C1.60312 4.15703 0 5.76016 0 7.71953V27.3133C0 29.2727 1.60312 30.8758 3.5625 30.8758H14.25V33.2508C14.25 33.4883 14.1906 35.6258 11.2812 35.6258C10.6281 35.6258 10.0938 36.1602 10.0938 36.8133C10.0938 37.4664 10.6281 38.0008 11.2812 38.0008H26.7188C27.3719 38.0008 27.9062 37.4664 27.9062 36.8133C27.9062 36.1602 27.3719 35.6258 26.7188 35.6258C23.9875 35.6258 23.75 33.7852 23.75 33.2508V30.8758H34.4375C36.3969 30.8758 38 29.2727 38 27.3133V10.6883C38 10.0352 37.4656 9.50078 36.8125 9.50078ZM34.6156 2.49453C34.7938 2.31641 34.9719 2.31641 35.0312 2.31641C35.15 2.31641 35.2687 2.31641 35.3875 2.49453C35.625 2.67266 35.625 2.85078 35.625 2.96953C35.625 3.08828 35.625 3.20703 35.4469 3.32578L25.65 13.2414L24.5219 13.5383L24.8188 12.3508L34.6156 2.49453ZM22.0875 35.6258H15.9125C16.4469 34.7352 16.625 33.7852 16.625 33.2508V30.8758H21.375V33.2508C21.375 33.7852 21.5531 34.7352 22.0875 35.6258Z" fill="#FF7500"/>
        <path d="M7.125 12.4688H13.0625C13.7156 12.4688 14.25 11.9344 14.25 11.2812C14.25 10.6281 13.7156 10.0938 13.0625 10.0938H7.125C6.47188 10.0938 5.9375 10.6281 5.9375 11.2812C5.9375 11.9344 6.47188 12.4688 7.125 12.4688ZM7.125 18.4062C6.47188 18.4062 5.9375 18.9406 5.9375 19.5938C5.9375 20.2469 6.47188 20.7812 7.125 20.7812H21.375C22.0281 20.7812 22.5625 20.2469 22.5625 19.5938C22.5625 18.9406 22.0281 18.4062 21.375 18.4062H7.125ZM26.125 23.1562C25.4719 23.1562 24.9375 23.6906 24.9375 24.3438C24.9375 24.9969 25.4719 25.5312 26.125 25.5312H30.875C31.5281 25.5312 32.0625 24.9969 32.0625 24.3438C32.0625 23.6906 31.5281 23.1562 30.875 23.1562H26.125Z" fill="#FF7500"/>
        </g>
        <defs>
        <clipPath id="clip0_1025_7928">
        <rect width="38" height="38" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        ,
        title: "Support 24x7x365",
        description: "Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a standard."
      },
   
  ];
  return (
    <div className="w-full hostbuddy  py-20 px-3">
                <Image src="/greydotted.svg" alt="" width={122.7} height={111.55} className="-ml-2 -mt-8 absolute opacity-0 2xl:opacity-100" />

      <div className="w-full max-w-[1350px] mx-auto slide-reveal">
        <div className="mx-auto bl:flex flex-row justify-between">
          <h4 className="text-2xl md:text-4xl text-white font-semibold font-mona-sans leading-[63px]">
            Why Choose HostBuddy  <span className="pb-2 2xl:pb-4 border-b-4 border-orange-500 text-wite text-black"></span>
          </h4>
          <p className="text-white text-sm md:text-xl mt-2 opacity-80 font-light leading-7 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sit placerat pellentesque lacus elementum bibendum. Vitae tortor scelerisque maecenas amet sit.
          </p>
          {/* Orange line below "Why Choose HostBuddy" */}
        </div>
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-14 bl:items-center justify-center mx-auto pt-20">
  {items.map((item, index) => (
    <div key={index} className="relative flex-1 w-full gap-10 group">
      <div className="absolute -top-7 featuresvg3 left-9 w-16 h-16 flex justify-center items-center rounded-xl transition-all duration-300 bg-white group-hover:bg-orange-500">
        {item.icon}
      </div>
      <div className="bg-[#3C3C3C] shadow-solid-orange rounded-2xl group hover:bg-[#F9EFE4] text-[#FFFFFF] hover:text-[#16191C] px-10 py-12 transition-all duration-300 cursor-pointer">
        <h2 className="text-xl font-bold mt-4 opacity-1 mb-8">{item.title}</h2>
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











