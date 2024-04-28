
"use client"
import React, { useState } from 'react'
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Plan = () => {

   
  return (
    <div className='plan mx-auto'>
<div className='plan1 mx-auto'>
<div className='plan1perfect'>
<h2 className='font-mono-sans'>The Perfect - Web Hosting Plan</h2>          
<div className=".orangeline"><svg className='' width="194" height="4" viewBox="0 0 194 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="2" x2="194" y2="2" stroke="#FF7500" stroke-width="4"/>
</svg>
</div>
</div>
<div className='plan1month'>
<div><h2>Monthly</h2></div>
<div className="toggle-container">
  <input type="checkbox" id="toggle" className="toggle-input"/>
  <label htmlFor="toggle" className="toggle-label">
    <svg className="toggle-svg" width="72" height="34" viewBox="0 0 72 34" fill="#16191C" xmlns="http://www.w3.org/2000/svg">
      <rect className="toggle-background" opacity="0.15" y="0.5" width="72" height="33" rx="16.5" fill="#16191C"/>
      <circle className="toggle-circle" cx="17.5" cy="17" r="10.5" fill="white"/>
    </svg>
  </label>
</div>
<div><h2>Yearly</h2></div>

<div><svg width="95" height="30" viewBox="0 0 95 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2280_1928)">
<rect opacity="0.1" y="0.5" width="95" height="29" rx="14.5" fill="#FF7500"/>
<path d="M14.6929 19.617C13.8436 19.617 13.1286 19.487 12.5479 19.227C11.9672 18.967 11.5252 18.603 11.2219 18.135C10.9272 17.667 10.7799 17.1297 10.7799 16.523H12.8339C12.8426 16.835 12.9119 17.108 13.0419 17.342C13.1806 17.5673 13.3886 17.745 13.6659 17.875C13.9519 18.005 14.3202 18.07 14.7709 18.07C15.2909 18.07 15.7069 17.9747 16.0189 17.784C16.3309 17.5933 16.4869 17.3117 16.4869 16.939C16.4869 16.7137 16.4522 16.5273 16.3829 16.38C16.3136 16.2327 16.1922 16.1113 16.0189 16.016C15.8542 15.912 15.6289 15.8297 15.3429 15.769C15.0656 15.6997 14.7102 15.626 14.2769 15.548C13.7396 15.47 13.2629 15.3573 12.8469 15.21C12.4309 15.0627 12.0842 14.8807 11.8069 14.664C11.5296 14.4473 11.3216 14.1873 11.1829 13.884C11.0442 13.572 10.9749 13.208 10.9749 12.792C10.9749 12.194 11.1222 11.6827 11.4169 11.258C11.7202 10.8247 12.1492 10.491 12.7039 10.257C13.2586 10.023 13.9172 9.906 14.6799 9.906C15.4252 9.906 16.0666 10.023 16.6039 10.257C17.1499 10.491 17.5702 10.8203 17.8649 11.245C18.1596 11.6697 18.3069 12.1637 18.3069 12.727H16.2659C16.2572 12.4237 16.1749 12.1767 16.0189 11.986C15.8716 11.7953 15.6766 11.6567 15.4339 11.57C15.1912 11.4833 14.9182 11.44 14.6149 11.44C14.3029 11.44 14.0299 11.4833 13.7959 11.57C13.5619 11.6567 13.3842 11.7823 13.2629 11.947C13.1416 12.1117 13.0809 12.3067 13.0809 12.532C13.0809 12.818 13.1546 13.0347 13.3019 13.182C13.4579 13.3293 13.7049 13.4463 14.0429 13.533C14.3809 13.611 14.8229 13.6977 15.3689 13.793C15.7676 13.8537 16.1576 13.936 16.5389 14.04C16.9202 14.144 17.2669 14.3 17.5789 14.508C17.8909 14.7073 18.1379 14.989 18.3199 15.353C18.5019 15.7083 18.5929 16.172 18.5929 16.744C18.5929 17.3073 18.4456 17.81 18.1509 18.252C17.8649 18.6853 17.4316 19.0233 16.8509 19.266C16.2789 19.5 15.5596 19.617 14.6929 19.617ZM20.5198 19.5L23.6788 10.023H26.5388L29.6978 19.5H27.5918L26.9548 17.55H23.2628L22.6258 19.5H20.5198ZM23.7308 16.003H26.4868L25.6808 13.585L25.1478 11.856H25.0698L24.5368 13.585L23.7308 16.003ZM33.8904 19.5L30.5754 10.023H32.8374L34.6834 15.873L35.2034 17.576H35.2944L35.8014 15.873L37.6604 10.023H39.9224L36.6204 19.5H33.8904ZM42.6208 19.5V10.023H49.5108V11.752H44.2068L44.6488 11.323V14.3L44.2068 13.871H48.8738V15.496H44.2068L44.6488 15.067V18.2L44.2068 17.771H49.5368V19.5H42.6208ZM56.7007 19.5V19.227C56.7007 18.6723 56.783 18.1827 56.9477 17.758C57.1123 17.3333 57.329 16.9607 57.5977 16.64C57.875 16.3107 58.174 16.0203 58.4947 15.769C58.824 15.509 59.149 15.2707 59.4697 15.054C59.799 14.8287 60.098 14.6077 60.3667 14.391C60.644 14.1743 60.865 13.949 61.0297 13.715C61.1943 13.4723 61.2767 13.2037 61.2767 12.909C61.2767 12.649 61.2203 12.4237 61.1077 12.233C60.995 12.0423 60.839 11.8993 60.6397 11.804C60.449 11.7 60.2193 11.648 59.9507 11.648C59.6733 11.648 59.4263 11.7087 59.2097 11.83C59.0017 11.9427 58.8457 12.116 58.7417 12.35C58.6377 12.5753 58.5987 12.8527 58.6247 13.182H56.7267C56.7093 12.5407 56.835 11.9817 57.1037 11.505C57.381 11.0283 57.771 10.66 58.2737 10.4C58.785 10.14 59.383 10.01 60.0677 10.01C60.709 10.01 61.268 10.1227 61.7447 10.348C62.2213 10.5733 62.5897 10.8983 62.8497 11.323C63.1183 11.739 63.2527 12.2373 63.2527 12.818C63.2527 13.2167 63.1877 13.572 63.0577 13.884C62.9363 14.196 62.7717 14.482 62.5637 14.742C62.3557 15.002 62.1217 15.2403 61.8617 15.457C61.6017 15.665 61.333 15.8643 61.0557 16.055C60.787 16.2457 60.5227 16.4363 60.2627 16.627C60.0113 16.809 59.786 16.9997 59.5867 17.199C59.3873 17.3897 59.2357 17.5977 59.1317 17.823H63.3437V19.5H56.7007ZM69.5544 19.617C68.8611 19.617 68.2631 19.4957 67.7604 19.253C67.2577 19.0017 66.8634 18.655 66.5774 18.213C66.3001 17.7623 66.1527 17.2423 66.1354 16.653H68.0724C68.0811 16.913 68.1461 17.1427 68.2674 17.342C68.3974 17.5327 68.5707 17.6843 68.7874 17.797C69.0127 17.901 69.2727 17.953 69.5674 17.953C70.0527 17.953 70.4297 17.81 70.6984 17.524C70.9757 17.2293 71.1144 16.8523 71.1144 16.393C71.1144 16.0723 71.0494 15.7907 70.9194 15.548C70.7981 15.3053 70.6204 15.119 70.3864 14.989C70.1524 14.8503 69.8751 14.781 69.5544 14.781C69.1817 14.781 68.8741 14.8677 68.6314 15.041C68.3974 15.2057 68.2327 15.418 68.1374 15.678H66.3174L66.5644 10.127H72.4924V11.791H68.2544L68.1634 13.754L68.2414 13.78C68.4234 13.598 68.6704 13.455 68.9824 13.351C69.2944 13.247 69.6237 13.195 69.9704 13.195C70.4471 13.195 70.8717 13.273 71.2444 13.429C71.6257 13.5763 71.9507 13.793 72.2194 14.079C72.4881 14.3563 72.6917 14.69 72.8304 15.08C72.9777 15.4613 73.0514 15.8817 73.0514 16.341C73.0514 16.991 72.9084 17.563 72.6224 18.057C72.3451 18.551 71.9421 18.9367 71.4134 19.214C70.8934 19.4827 70.2737 19.617 69.5544 19.617ZM77.3024 19.5L83.3214 10.023H84.6344L78.6024 19.5H77.3024ZM77.8484 15.08C77.4237 15.08 77.0641 14.976 76.7694 14.768C76.4747 14.56 76.2494 14.2653 76.0934 13.884C75.9374 13.5027 75.8594 13.0607 75.8594 12.558C75.8594 12.0293 75.9417 11.583 76.1064 11.219C76.2797 10.8463 76.5181 10.5603 76.8214 10.361C77.1247 10.1617 77.4757 10.062 77.8744 10.062C78.2991 10.062 78.6544 10.166 78.9404 10.374C79.2351 10.582 79.4604 10.8767 79.6164 11.258C79.7724 11.6393 79.8504 12.0813 79.8504 12.584C79.8504 13.1127 79.7637 13.5633 79.5904 13.936C79.4257 14.3087 79.1917 14.5947 78.8884 14.794C78.5937 14.9847 78.2471 15.08 77.8484 15.08ZM77.8484 14.014C77.9871 14.014 78.1084 13.9837 78.2124 13.923C78.3251 13.8537 78.4117 13.715 78.4724 13.507C78.5417 13.2903 78.5764 12.9783 78.5764 12.571C78.5764 12.1637 78.5417 11.856 78.4724 11.648C78.4117 11.44 78.3251 11.3057 78.2124 11.245C78.1084 11.1757 77.9871 11.141 77.8484 11.141C77.7184 11.141 77.5971 11.1757 77.4844 11.245C77.3804 11.3057 77.2937 11.44 77.2244 11.648C77.1637 11.8473 77.1334 12.155 77.1334 12.571C77.1334 12.883 77.1507 13.1343 77.1854 13.325C77.2287 13.5157 77.2807 13.663 77.3414 13.767C77.4107 13.8623 77.4887 13.9273 77.5754 13.962C77.6621 13.9967 77.7531 14.014 77.8484 14.014ZM84.0624 19.552C83.6464 19.552 83.2911 19.448 82.9964 19.24C82.7017 19.0233 82.4764 18.7243 82.3204 18.343C82.1644 17.9617 82.0864 17.5197 82.0864 17.017C82.0864 16.4883 82.1687 16.0377 82.3334 15.665C82.5067 15.2923 82.7451 15.0107 83.0484 14.82C83.3517 14.6207 83.7027 14.521 84.1014 14.521C84.5174 14.521 84.8727 14.625 85.1674 14.833C85.4621 15.041 85.6874 15.3357 85.8434 15.717C85.9994 16.0983 86.0774 16.5403 86.0774 17.043C86.0774 17.5717 85.9907 18.0267 85.8174 18.408C85.6527 18.7807 85.4187 19.0667 85.1154 19.266C84.8207 19.4567 84.4697 19.552 84.0624 19.552ZM84.0884 18.473C84.2184 18.473 84.3354 18.4427 84.4394 18.382C84.5521 18.3127 84.6387 18.174 84.6994 17.966C84.7687 17.758 84.8034 17.446 84.8034 17.03C84.8034 16.614 84.7687 16.3063 84.6994 16.107C84.6387 15.899 84.5521 15.7647 84.4394 15.704C84.3354 15.6347 84.2184 15.6 84.0884 15.6C83.9584 15.6 83.8371 15.6347 83.7244 15.704C83.6117 15.7647 83.5207 15.899 83.4514 16.107C83.3907 16.3063 83.3604 16.614 83.3604 17.03C83.3604 17.446 83.3907 17.758 83.4514 17.966C83.5207 18.174 83.6117 18.3127 83.7244 18.382C83.8371 18.4427 83.9584 18.473 84.0884 18.473Z" fill="#FF7500"/>
</g>
<defs>
<clipPath id="clip0_2280_1928">
<rect width="95" height="29" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
</div>

</div>
</div>
<div className='plan2 mx-auto'>
    
    <div className='group'>
      <div className='plan2box bg-[#F9EFE4] group-hover:bg-[#16191C]'>
<div className='.plan2boxinner mt-8'>
    <div className='plan2boxinner1 mx-auto'>
      <div className=''>  <div>
            <h2 className='ignite font-mono-sans mx-auto text-black group-hover:text-white'>Ignite</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white '>From</h2>
        </div>
        </div>
        <div className=''>  <div>
            <h2 className=' font-mono-sans mx-auto number'>$29</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white'>/Month</h2>
        </div>
        </div>
    </div>
  
    <div className='plan2boxinner2 mx-auto'> 
    <div className='plan2boxinner22'>
     <div className='.planbutton border-2 border-black group-hover:bg-[#FF7500]	 rounded-xl p-3 items-center justify-center flex flex-row'>
        <h2 className='text-[16px] font-bold leading-[19.2px] text-black group-hover:text-white '>Choose Plan </h2>
         <svg className='item-center justify-center mt-0.5 ml-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156
 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 
 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008
  11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 
  10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 
  6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

</div>
<div className='features'>
<div className='text-[16px] font-bold font-mono-sans leading-[24px] text-black group-hover:text-white'><h2>Major Features</h2></div>
<div className='flex flex-col gap-[10px] '>
  <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>RAM</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Processor</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1 Core</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Storage</h2>
<h2 className='font-semibold text-black group-hover:text-white'>25GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Bandwidth</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1TB</h2>
</div>
</div>

</div>
</div>
<div className='flex flex-row items-center justify-center featuresvg '>
  <h2 className='text-[16px] font-semibold leading-[24px]  text-[#16191C] group-hover:text-[#FF7500] opacity-45 group-hover:opacity-100 '>See All Features in Details </h2>
<svg className="ml-4 opacity-45 group-hover:opacity-100"width="12" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.51562 13L7.51562 7L1.51562 1" stroke="#16191C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
</div>

</div>
    </div></div>
    <div className='group special'>
      <div className='plan2box special bg-[#F9EFE4] group-hover:bg-[#16191C]'>
<div className='.plan2boxinner mt-8'>
    <div className='plan2boxinner1 mx-auto'>
      <div className=''>  <div>
            <h2 className='ignite font-mono-sans mx-auto text-black group-hover:text-white'>Ignite</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white '>From</h2>
        </div>
        </div>
        <div className=''>  <div>
            <h2 className=' font-mono-sans mx-auto number'>$29</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white'>/Month</h2>
        </div>
        </div>
    </div>
  
    <div className='plan2boxinner2 mx-auto'> 
    <div className='plan2boxinner22'>
     <div className='.planbutton border-2 border-black group-hover:bg-[#FF7500]	 rounded-xl p-3 items-center justify-center flex flex-row'>
        <h2 className='text-[16px] font-bold leading-[19.2px] text-black group-hover:text-white '>Choose Plan </h2>
         <svg className='item-center justify-center mt-0.5 ml-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156
 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 
 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008
  11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 
  10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 
  6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

</div>
<div className='features'>
<div className='text-[16px] font-bold font-mono-sans leading-[24px] text-black group-hover:text-white'><h2>Major Features</h2></div>
<div className='flex flex-col gap-[10px] '>
  <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>RAM</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Processor</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1 Core</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Storage</h2>
<h2 className='font-semibold text-black group-hover:text-white'>25GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Bandwidth</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1TB</h2>
</div>
</div>

</div>
</div>
<div className='flex flex-row items-center justify-center featuresvg '>
  <h2 className='text-[16px] font-semibold leading-[24px]  text-[#16191C] group-hover:text-[#FF7500] opacity-45 group-hover:opacity-100 '>See All Features in Details </h2>
<svg className="ml-4 opacity-45 group-hover:opacity-100"width="12" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.51562 13L7.51562 7L1.51562 1" stroke="#16191C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
</div>

</div>
    </div></div>
    <div className='group'>
      <div className='plan2box bg-[#F9EFE4] group-hover:bg-[#16191C]'>
<div className='.plan2boxinner mt-8'>
    <div className='plan2boxinner1 mx-auto'>
      <div className=''>  <div>
            <h2 className='ignite font-mono-sans mx-auto text-black group-hover:text-white'>Ignite</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white '>From</h2>
        </div>
        </div>
        <div className=''>  <div>
            <h2 className=' font-mono-sans mx-auto number'>$29</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white'>/Month</h2>
        </div>
        </div>
    </div>
  
    <div className='plan2boxinner2 mx-auto'> 
    <div className='plan2boxinner22'>
     <div className='.planbutton border-2 border-black group-hover:bg-[#FF7500]	 rounded-xl p-3 items-center justify-center flex flex-row'>
        <h2 className='text-[16px] font-bold leading-[19.2px] text-black group-hover:text-white '>Choose Plan </h2>
         <svg className='item-center justify-center mt-0.5 ml-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156
 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 
 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008
  11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 
  10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 
  6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

</div>
<div className='features'>
<div className='text-[16px] font-bold font-mono-sans leading-[24px] text-black group-hover:text-white'><h2>Major Features</h2></div>
<div className='flex flex-col gap-[10px] '>
  <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>RAM</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Processor</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1 Core</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Storage</h2>
<h2 className='font-semibold text-black group-hover:text-white'>25GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Bandwidth</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1TB</h2>
</div>
</div>

</div>
</div>
<div className='flex flex-row items-center justify-center featuresvg '>
  <h2 className='text-[16px] font-semibold leading-[24px]  text-[#16191C] group-hover:text-[#FF7500] opacity-45 group-hover:opacity-100 '>See All Features in Details </h2>
<svg className="ml-4 opacity-45 group-hover:opacity-100"width="12" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.51562 13L7.51562 7L1.51562 1" stroke="#16191C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
</div>

</div>
    </div>
    </div>
     {/* <div className='group special'>
      <div className='plan2box bg-[#F9EFE4] group-hover:bg-[#16191C]'>
<div className='.plan2boxinner mt-8'>
    <div className='plan2boxinner1 mx-auto'>
      <div className=''>  <div>
            <h2 className='ignite font-mono-sans mx-auto text-black group-hover:text-white'>Ignite</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white '>From</h2>
        </div>
        </div>
        <div className=''>  <div>
            <h2 className=' font-mono-sans mx-auto number'>$29</h2>
        </div>
        <div>
<h2 className='from font-mono-sans mx-auto text-black group-hover:text-white'>/Month</h2>
        </div>
        </div>
    </div>
  
    <div className='plan2boxinner2 mx-auto'> 
    <div className='plan2boxinner22'>
     <div className='.planbutton border-2 border-black group-hover:bg-[#FF7500]	 rounded-xl p-3 items-center justify-center flex flex-row'>
        <h2 className='text-[16px] font-bold leading-[19.2px] text-black group-hover:text-white '>Choose Plan </h2>
         <svg className='item-center justify-center mt-0.5 ml-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13672 0.947266L5.69531 0.388672C5.94922 0.160156
 6.33008 0.160156 6.55859 0.388672L11.5098 5.31445C11.7383 
 5.56836 11.7383 5.94922 11.5098 6.17773L6.55859 11.1289C6.33008
  11.3574 5.94922 11.3574 5.69531 11.1289L5.13672 10.5703C4.9082 
  10.3164 4.9082 9.93555 5.13672 9.68164L8.20898 6.76172H0.921875C0.566406 
  6.76172 0.3125 6.50781 0.3125 6.15234V5.33984C0.3125 5.00977 0.566406 4.73047 0.921875 4.73047H8.20898L5.13672 1.83594C4.9082 1.58203 4.88281 1.20117 5.13672 0.947266Z" fill="#16191C"/>
</svg>

</div>
<div className='features'>
<div className='text-[16px] font-bold font-mono-sans leading-[24px] text-black group-hover:text-white'><h2>Major Features</h2></div>
<div className='flex flex-col gap-[10px] '>
  <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>RAM</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Processor</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1 Core</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Storage</h2>
<h2 className='font-semibold text-black group-hover:text-white'>25GB</h2>
</div>
 <div className='subfeatures group'>
    <h2 className='font-normal text-black group-hover:text-white'>Bandwidth</h2>
<h2 className='font-semibold text-black group-hover:text-white'>1TB</h2>
</div>
</div>

</div>
</div>
<div className='flex flex-row items-center justify-center featuresvg '>
  <h2 className='text-[16px] font-semibold leading-[24px]  text-[#16191C] group-hover:text-[#FF7500] opacity-45 group-hover:opacity-100 '>See All Features in Details </h2>
<svg className="ml-4 opacity-45 group-hover:opacity-100"width="12" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.51562 13L7.51562 7L1.51562 1" stroke="#16191C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</div>
</div>

</div>
    </div>
    </div> */}
    
</div>
    </div>
  )
}

export default Plan;