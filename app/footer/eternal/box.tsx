"use client";
import Image from "next/image";
import React from "react";
import { Collapse } from "react-collapse";

import { useState, useEffect, useRef } from "react";







const PageSecond = () => {
  return (
    <section className="w-full  h-full">
      <div
        className=" mx-auto relative  z-[2] "
        style={{ maxWidth: "1350px" }}
      >
        <div className="flex flex-col 2xl:flex-row justify-between mx-auto 2xl:space-x-20 2xl:space-y-0 space-y-10">
          {/* First Box */}
        
          <div className="w-full bg-white rounded-3xl flex flex-col space-y-10">
            <div className="flex flex-col w-full  space-y-4">
              <p className="text-[6px] md:text-[10px] 2xl:text-[16px]">
              As you all know that we have released the WHMCS 7.9 Compatible HostX version, so here is the detailed procedure to do the upgrade.
              </p>
            </div>
            <div className="flex flex-col w-full  space-y-4 text-[6px] md:text-[10px] 2xl:text-[20px] ">
              <p className="font-bold">
              Users who are already using HostX and upgrading to WHMCS 7.9 needs to download only the patch files              </p>
           <p>
           As you all know that we have released the WHMCS 7.9 Compatible HostX version, so here is the detailed procedure to do the upgrade.Users who are already using HostX and upgrading to WHMCS 7.9...</p> </div>
     <div className="flex flex-col space-y-4">    <p className="text-[18px]"><span className="font-bold mr-2">Step 1:</span><span>Download the patch</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Step 2:</span><span>Extract the patch files</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Step 3:</span><span>Take a Complete Backup of your WHMCS Instance (Highly Recommended)</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Step 4:</span><span>Override the template folder at whmcsdir/templates/</span></p>

         <p className="text-[18px]"><span className="font-bold mr-2">Step 5:</span><span>Override the orderform folder at whmcsdir/templates/orderform</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Please note:</span><span>Users with customizations do not need to worry as these files will not be overridden during this upgrade.</span></p>
         </div>
         <div className="flex flex-col w-full  space-y-4 text-[6px] md:text-[10px] 2xl:text-[20px] ">
              <p className="font-bold">
              Procedure for the users who customized HostBuddy </p>
           <p>
           As you all know that we have released the WHMCS 7.9 Compatible HostX version, so here is the detailed procedure to do the upgrade.Users who are already using HostX and upgrading to WHMCS 7.9...</p> </div>
     <div className="flex flex-col space-y-4">    
     <p className="text-[18px]"><span className="font-bold mr-2">Step 1:</span><span>Download the patch</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Step 2:</span><span>Extract the patch files</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Step 3:</span><span>Take a Complete Backup of your WHMCS Instance (Highly Recommended)</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Step 4:</span><span>Override the template folder at whmcsdir/templates/</span></p>

         <p className="text-[18px]"><span className="font-bold mr-2">Step 5:</span><span>Override the orderform folder at whmcsdir/templates/orderform</span></p>
         <p className="text-[18px]"><span className="font-bold mr-2">Please note:</span><span>Users with customizations do not need to worry as these files will not be overridden during this upgrade.</span></p>
         <p className="text-[18px]"><span>You HostBuddy is now upgraded to WHMCS 7.9 Version.</span></p>
         </div>
         <div className="flex flex-col w-full  space-y-4 text-[6px] md:text-[10px] 2xl:text-[20px] ">
              <p className="font-bold">
              Users who have hardcoded the HostX template or orderform files, please check the detailed upgrade release note that we followed while creating this patch. You need to check these files and override them accordingly to save your customizations.</p>
       </div>
     
         <p className="text-[18px] -translate-y-4"><span className="font-bold mr-2">Please note:</span><span>Users with customizations do not need to worry as these files will not be overridden during this upgrade.</span></p>

            <div>
   
  </div>
          </div>
          {/* Second Box */}
      
        </div>
        <div className="line21"> </div>      
          <div className="flex flex-row space-x-10 py-6">
          <h2 className="text-[18px] font-bold">Was this answer helpful?</h2><svg width="136" height="24" viewBox="0 0 136 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.384 18V13.344L29.064 6.336H30.616L34.024 12.016H34.104L37.544 6.336H39.08L34.744 13.344V18H33.384ZM41.8695 18.144C41.0695 18.144 40.3815 17.968 39.8055 17.616C39.2402 17.264 38.8082 16.7627 38.5095 16.112C38.2108 15.4613 38.0615 14.704 38.0615 13.84C38.0615 12.9547 38.2108 12.1867 38.5095 11.536C38.8082 10.8747 39.2348 10.368 39.7895 10.016C40.3442 9.65333 41.0215 9.472 41.8215 9.472C42.6748 9.472 43.3788 9.664 43.9335 10.048C44.4882 10.432 44.8882 10.9653 45.1335 11.648C45.3895 12.3307 45.4855 13.12 45.4215 14.016H39.3255C39.3362 14.7093 39.4428 15.2907 39.6455 15.76C39.8588 16.2187 40.1522 16.5653 40.5255 16.8C40.9095 17.024 41.3575 17.136 41.8695 17.136C42.4882 17.136 42.9948 16.9813 43.3895 16.672C43.7842 16.3627 44.0348 15.9573 44.1415 15.456H45.3735C45.3095 16.0213 45.1122 16.5067 44.7815 16.912C44.4615 17.3173 44.0455 17.6267 43.5335 17.84C43.0322 18.0427 42.4775 18.144 41.8695 18.144ZM39.3415 13.28L39.1975 13.088H44.3015L44.1575 13.312C44.1682 12.64 44.0775 12.1013 43.8855 11.696C43.6935 11.28 43.4162 10.976 43.0535 10.784C42.7015 10.5813 42.2908 10.48 41.8215 10.48C41.3308 10.48 40.9042 10.5867 40.5415 10.8C40.1788 11.0133 39.8908 11.328 39.6775 11.744C39.4748 12.1493 39.3628 12.6613 39.3415 13.28ZM50.0789 18.16C49.3642 18.16 48.7455 18.0427 48.2229 17.808C47.7109 17.5733 47.3162 17.248 47.0389 16.832C46.7722 16.416 46.6389 15.9307 46.6389 15.376H47.9349C47.9349 15.9947 48.1322 16.4533 48.5269 16.752C48.9322 17.04 49.4602 17.184 50.1109 17.184C50.7615 17.184 51.2575 17.0613 51.5989 16.816C51.9509 16.5707 52.1269 16.224 52.1269 15.776C52.1269 15.4347 52.0522 15.1733 51.9029 14.992C51.7535 14.8 51.5242 14.6507 51.2149 14.544C50.9055 14.4373 50.5002 14.3467 49.9989 14.272C49.3055 14.176 48.7242 14.0427 48.2549 13.872C47.7962 13.7013 47.4495 13.4613 47.2149 13.152C46.9909 12.832 46.8789 12.416 46.8789 11.904C46.8789 11.4133 47.0122 10.9867 47.2789 10.624C47.5455 10.2507 47.9189 9.96267 48.3989 9.76C48.8789 9.54667 49.4389 9.44 50.0789 9.44C50.7509 9.44 51.3215 9.552 51.7909 9.776C52.2709 9.98933 52.6335 10.2933 52.8789 10.688C53.1349 11.072 53.2682 11.5307 53.2789 12.064H52.0149C52.0042 11.6693 51.9135 11.3547 51.7429 11.12C51.5829 10.8853 51.3589 10.7147 51.0709 10.608C50.7935 10.4907 50.4575 10.432 50.0629 10.432C49.4655 10.432 49.0015 10.5547 48.6709 10.8C48.3402 11.0453 48.1749 11.3707 48.1749 11.776C48.1749 12.0853 48.2549 12.336 48.4149 12.528C48.5749 12.7093 48.8202 12.8533 49.1509 12.96C49.4815 13.056 49.9082 13.1413 50.4309 13.216C50.9002 13.28 51.3215 13.3653 51.6949 13.472C52.0682 13.5787 52.3829 13.728 52.6389 13.92C52.9055 14.1013 53.1029 14.336 53.2309 14.624C53.3695 14.9013 53.4389 15.248 53.4389 15.664C53.4389 16.464 53.1295 17.0827 52.5109 17.52C51.9029 17.9467 51.0922 18.16 50.0789 18.16Z" fill="#FF7500"/>
<path d="M7 11V19C7 19.5523 6.55228 20 6 20H4C3.44772 20 3 19.5523 3 19V12C3 11.4477 3.44772 11 4 11H7C9.20914 11 11 9.20914 11 7V6C11 4.89543 11.8954 4 13 4C14.1046 4 15 4.89543 15 6V11H18C19.1046 11 20 11.8954 20 13L19 18C18.7046 19.2603 17.8892 20.0756 17 20H10C8.34315 20 7 18.6569 7 17" stroke="#FF7500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M115.488 18V6.336H117.216L123.808 16.224H123.904L123.824 12.24V6.336H125.152V18H123.488L116.912 8.192H116.816L116.88 11.936V18H115.488ZM131.329 18.144C130.721 18.144 130.166 18.0427 129.665 17.84C129.174 17.6373 128.747 17.344 128.385 16.96C128.033 16.576 127.755 16.1227 127.553 15.6C127.361 15.0667 127.265 14.4747 127.265 13.824C127.265 12.96 127.43 12.2027 127.761 11.552C128.091 10.9013 128.561 10.3947 129.169 10.032C129.787 9.65867 130.507 9.472 131.329 9.472C131.937 9.472 132.486 9.57333 132.977 9.776C133.478 9.968 133.905 10.256 134.257 10.64C134.609 11.024 134.881 11.4827 135.073 12.016C135.265 12.5493 135.361 13.1467 135.361 13.808C135.361 14.6613 135.195 15.4133 134.865 16.064C134.545 16.7147 134.081 17.2267 133.473 17.6C132.865 17.9627 132.15 18.144 131.329 18.144ZM131.329 17.024C131.873 17.024 132.347 16.9013 132.753 16.656C133.158 16.4 133.473 16.032 133.697 15.552C133.931 15.0613 134.049 14.48 134.049 13.808C134.049 13.3067 133.985 12.8587 133.857 12.464C133.729 12.0587 133.547 11.7173 133.313 11.44C133.078 11.152 132.795 10.9333 132.465 10.784C132.134 10.6347 131.755 10.56 131.329 10.56C130.785 10.56 130.305 10.6933 129.889 10.96C129.483 11.216 129.163 11.584 128.929 12.064C128.705 12.544 128.593 13.1307 128.593 13.824C128.593 14.3147 128.651 14.7627 128.769 15.168C128.897 15.5627 129.078 15.8987 129.313 16.176C129.558 16.4533 129.851 16.6667 130.193 16.816C130.534 16.9547 130.913 17.024 131.329 17.024Z" fill="#FF7500"/>
<path d="M102 13L102 5C102 4.44771 102.448 4 103 4L105 4C105.552 4 106 4.44772 106 5L106 12C106 12.5523 105.552 13 105 13L102 13C99.7909 13 98 14.7909 98 17L98 18C98 19.1046 97.1046 20 96 20C94.8954 20 94 19.1046 94 18L94 13L91 13C89.8954 13 89 12.1046 89 11L90 6C90.2954 4.73974 91.1108 3.92435 92 4L99 4C100.657 4 102 5.34315 102 7" stroke="#FF7500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        <div className="line21"> </div>      

      </div>
    </section>
  );
};

export default PageSecond;
