// Table.tsx
"use client"
import React, { useState } from 'react';

import data from '../../(landing)/components/constants/data';
import Image from 'next/image';
const Table = () => {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  return (
    <div className='flex flex-col space-y-20  mx-auto max-w-[1300px] pt-20 pb-20 '>
        <div className="flex flex-col 2xl:flex-col gap-y-6 2xl:items-start  ">
    <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
    <span className="pb-4 border-b-4 border-orange-500">Comparing</span>  VPS Hosting Providers 
    </h2>
  
  </div>
    <div className="table-container max-w-[1300px] mx-auto">
      <table  className="rounded-lg" style={{ backgroundColor: '#F9EFE4' }}>
        <thead>
          <tr><th className='bg-[#F9EFE4] hover:bg-orange-500'></th>
          <th className='bg-[#F9EFE4]'>
                <svg className='featuresvg2 items-center justify-center relative left-5' width="130" height="25" viewBox="0 0 130 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9945 8.06766V0.865792H14.5436V19H10.9945V11.4873H4.25892V19H0.683891V0.865792H4.25892V8.06766H10.9945ZM28.7929 17.3938C27.4804 18.7064 25.8569 19.3627 23.9226 19.3627C21.9883 19.3627 20.3648 18.7064 19.0523 17.3938C17.7397 16.0813 17.0834 14.4578 17.0834 12.5235C17.0834 10.6065 17.7397 8.99164 19.0523 7.67907C20.3821 6.34923 22.0055 5.68431 23.9226 5.68431C25.8396 5.68431 27.4631 6.34923 28.7929 7.67907C30.1228 9.00892 30.7877 10.6237 30.7877 12.5235C30.7877 14.4405 30.1228 16.064 28.7929 17.3938ZM21.4097 15.0882C22.0833 15.7617 22.9209 16.0985 23.9226 16.0985C24.9243 16.0985 25.7619 15.7617 26.4355 15.0882C27.109 14.4146 27.4458 13.5597 27.4458 12.5235C27.4458 11.4873 27.109 10.6324 26.4355 9.9588C25.7619 9.28525 24.9243 8.94847 23.9226 8.94847C22.9209 8.94847 22.0833 9.28525 21.4097 9.9588C20.7534 10.6496 20.4253 11.5045 20.4253 12.5235C20.4253 13.5425 20.7534 14.3974 21.4097 15.0882ZM35.9432 9.72565C35.9432 10.2783 36.729 10.7533 38.3006 11.1505C38.8533 11.2714 39.3541 11.4182 39.8032 11.5909C40.2522 11.7463 40.7013 11.9795 41.1503 12.2903C41.6166 12.5839 41.9793 12.9812 42.2383 13.482C42.4974 13.9829 42.6269 14.5614 42.6269 15.2177C42.6269 16.5476 42.1261 17.5752 41.1244 18.3005C40.1227 19.0086 38.8878 19.3627 37.4198 19.3627C34.7601 19.3627 32.9467 18.3351 31.9796 16.2799L34.881 14.6478C35.2783 15.7704 36.1245 16.3317 37.4198 16.3317C38.6115 16.3317 39.2073 15.9604 39.2073 15.2177C39.2073 14.6651 38.4215 14.1901 36.8499 13.7929C36.2627 13.6375 35.7618 13.482 35.3473 13.3266C34.9328 13.1711 34.4838 12.9466 34.0002 12.653C33.5167 12.3422 33.1453 11.9536 32.8863 11.4873C32.6445 11.0037 32.5236 10.4424 32.5236 9.80337C32.5236 8.52534 32.9899 7.52364 33.9225 6.79827C34.8724 6.05563 36.0468 5.68431 37.4457 5.68431C38.4992 5.68431 39.4578 5.9261 40.3213 6.40968C41.1848 6.87599 41.867 7.54954 42.3679 8.43035L39.5182 9.98471C39.1037 9.1039 38.4129 8.6635 37.4457 8.6635C37.014 8.6635 36.6513 8.76713 36.3577 8.97437C36.0813 9.16435 35.9432 9.41478 35.9432 9.72565ZM51.8058 6.047V9.25934H48.8784V14.6478C48.8784 15.0968 48.9906 15.425 49.2152 15.6322C49.4397 15.8395 49.7678 15.9604 50.1996 15.9949C50.6314 16.0122 51.1667 16.0035 51.8058 15.969V19C49.5433 19.2591 47.9285 19.0518 46.9613 18.3783C46.0114 17.6874 45.5365 16.4439 45.5365 14.6478V9.25934H43.2827V6.047H45.5365V3.43049L48.8784 2.42015V6.047H51.8058ZM65.4781 9.59612C67.067 10.5115 67.8614 11.8931 67.8614 13.7411C67.8614 15.2782 67.3174 16.5389 66.2293 17.5234C65.1413 18.5078 63.8028 19 62.2139 19H54.5198V0.865792H61.6699C63.207 0.865792 64.5109 1.34937 65.5817 2.31653C66.6525 3.28369 67.1879 4.50127 67.1879 5.96928C67.1879 7.47183 66.6179 8.68077 65.4781 9.59612ZM61.6699 4.20767H58.0948V8.19719H61.6699C62.2225 8.19719 62.6802 8.00722 63.0429 7.62726C63.4228 7.24731 63.6128 6.77236 63.6128 6.20243C63.6128 5.6325 63.4315 5.15756 63.0688 4.7776C62.7061 4.39764 62.2398 4.20767 61.6699 4.20767ZM58.0948 15.6581H62.2139C62.8184 15.6581 63.3192 15.4595 63.7165 15.0623C64.1137 14.6478 64.3123 14.1297 64.3123 13.5079C64.3123 12.9035 64.1137 12.4026 63.7165 12.0054C63.3192 11.5909 62.8184 11.3836 62.2139 11.3836H58.0948V15.6581ZM78.8769 13.0416V6.047H82.2188V19H78.8769V17.5493C78.0825 18.7582 76.7958 19.3627 75.0169 19.3627C73.6007 19.3627 72.4263 18.8877 71.4937 17.9379C70.5784 16.9707 70.1207 15.6581 70.1207 14.0001V6.047H73.4626V13.5856C73.4626 14.4319 73.6871 15.0882 74.1361 15.5545C74.6024 16.0208 75.2328 16.254 76.0273 16.254C76.9081 16.254 77.5989 15.9863 78.0998 15.4509C78.6179 14.8982 78.8769 14.0951 78.8769 13.0416ZM95.0979 7.57545V0.865792H98.4398V19H95.0979V17.4715C94.1135 18.7323 92.7146 19.3627 90.9012 19.3627C89.1568 19.3627 87.6629 18.7064 86.4194 17.3938C85.1932 16.064 84.5801 14.4405 84.5801 12.5235C84.5801 10.6237 85.1932 9.00892 86.4194 7.67907C87.6629 6.34923 89.1568 5.68431 90.9012 5.68431C92.7146 5.68431 94.1135 6.31469 95.0979 7.57545ZM88.9323 15.1659C89.6404 15.8395 90.5039 16.1762 91.5229 16.1762C92.5591 16.1762 93.414 15.8395 94.0876 15.1659C94.7612 14.4751 95.0979 13.5943 95.0979 12.5235C95.0979 11.4527 94.7612 10.5805 94.0876 9.90699C93.414 9.21616 92.5591 8.87075 91.5229 8.87075C90.4867 8.87075 89.6231 9.21616 88.9323 9.90699C88.2588 10.5805 87.922 11.4527 87.922 12.5235C87.922 13.5943 88.2588 14.4751 88.9323 15.1659ZM111.314 7.57545V0.865792H114.656V19H111.314V17.4715C110.33 18.7323 108.931 19.3627 107.118 19.3627C105.373 19.3627 103.879 18.7064 102.636 17.3938C101.41 16.064 100.797 14.4405 100.797 12.5235C100.797 10.6237 101.41 9.00892 102.636 7.67907C103.879 6.34923 105.373 5.68431 107.118 5.68431C108.931 5.68431 110.33 6.31469 111.314 7.57545ZM105.149 15.1659C105.857 15.8395 106.72 16.1762 107.739 16.1762C108.776 16.1762 109.631 15.8395 110.304 15.1659C110.978 14.4751 111.314 13.5943 111.314 12.5235C111.314 11.4527 110.978 10.5805 110.304 9.90699C109.631 9.21616 108.776 8.87075 107.739 8.87075C106.703 8.87075 105.84 9.21616 105.149 9.90699C104.475 10.5805 104.139 11.4527 104.139 12.5235C104.139 13.5943 104.475 14.4751 105.149 15.1659ZM123.282 14.7514L126.158 6.047H129.733L125.018 19C124.345 20.8652 123.447 22.2123 122.324 23.0413C121.219 23.8876 119.837 24.2676 118.179 24.1812V21.0725C119.06 21.0898 119.768 20.8998 120.303 20.5025C120.839 20.1053 121.262 19.4663 121.573 18.5855L116.262 6.047H119.915L123.282 14.7514Z" fill="#FFFFFF"/>
</svg>
</th>    
           <th className='bg-[#F9EFE4] items-center justify-center'><img src="/vpshosting/bluehost.svg" className='relative left-5'/></th>
            <th className='bg-[#F9EFE4] items-center justify-center'><img src="/vpshosting/extra.svg" className='relative left-5'/></th>
            <th className='bg-[#F9EFE4] items-center justify-center'><img src="/vpshosting/rock.svg" className='relative left-5'/></th>
            <th className='bg-[#F9EFE4] items-center justify-center'><img src="/vpshosting/gator.svg" className='relative left-5'/></th>
            <th className='bg-[#F9EFE4] items-center justify-center'><img src="/vpshosting/gator.svg" className='relative left-5'/></th>
        
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex === hoveredRow ? 'bg-white' : ''}
              onMouseEnter={() => setHoveredRow(rowIndex)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {[...Array(7)].map((_, colIndex) => (
             <td
             key={colIndex}
             className={
               colIndex === hoveredColumn
                 ? 'bg-orange-500 font-semibold text-[16px] leading-[26px] group-hover:text-white hover:bg-orange-500'
                 : 'hover:bg-white'
             }
             onMouseEnter={() => setHoveredColumn(colIndex)}
             onMouseLeave={() => setHoveredColumn(null)}
           >
             {(data as any)[`column${colIndex + 1}`][rowIndex]} {/* Type assertion */}
           </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="w-full max-w-[1360px] mx-auto bg-[#F5F5F5] rounded-3xl mt-20">
      <div className="flex flex-col 2xl:flex-row items-center p-10 gap-2">
        <div className="w-full  font-mona-sans text-center bl:text-left max-w-[300px]">
          <h3 className=" text-[24px]  font-semibold leading-[34px]">Your Choice of 
</h3>
<h3 className="font-semibold text-[24px] leading-[34px]"> of 
Operating System</h3>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10">
          <div className="flex flex-col items-center">
            <div className="space-y-3">
              <Image src="/vpshosting/debian.svg" alt="" width={150} height={40} />

            </div>
          </div>
          <div className="flex flex-col items-center">
          <div className="space-y-3">
              <Image src="/vpshosting/rocky.svg" alt="" width={200} height={40}  className='item-center justify-center mt-2'/>

            </div>
          </div>

          <div className="flex flex-col items-center">
          <div className="space-y-3">
              <Image src="/vpshosting/federa.svg" alt="" width={150} height={40} />

            </div>
          </div>

          <div className="flex flex-col items-center">
          <div className="space-y-3">
              <Image src="/vpshosting/ubuntu.svg" alt="" width={150} height={40}  className='mt-2'/>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Table;
