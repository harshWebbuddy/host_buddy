import { Panela, Panelb, Panelc } from '@/components/svgs'
import Image from 'next/image'
import React from 'react'

const Uniquecpanel = () => {
  return (
    <section className=" relative bg-gradient-to-b from-[#FFFFFF]/100 to-[#FF7500]/70">
    <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center  justify-center py-24">
      <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-center ">
        <div className="w-full flex flex-col space-y-20">
          <div className="">
          <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
          What Makes HostBuddy<span className="pb-4 border-b-4 border-orange-500"> Unique?</span>
          </h2>
          
        
          </div>
          <div className="w-full flex justify-start ">
          <Image src="/cpanel/unique.jpeg" alt="" width={600} height={582} className="rounded-3xl h-[582px] w-full  " />
        </div> 
        </div>
    
        <div className=" flex flex-row items-center justify-center pt-20">
        {/* <svg width="46" height="586" viewBox="0 0 46 586" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 0.333333C2.02724 0.333333 0.833333 1.52724 0.833333 3C0.833333 4.47276 2.02724 5.66667 3.5 5.66667C4.97276 5.66667 6.16667 4.47276 6.16667 3C6.16667 1.52724 4.97276 0.333333 3.5 0.333333ZM3.49997 580.333C2.02722 580.333 0.833308 581.527 0.833308 583C0.833308 584.473 2.02722 585.667 3.49997 585.667C4.97273 585.667 6.16664 584.473 6.16664 583C6.16664 581.527 4.97273 580.333 3.49997 580.333ZM3 3L3 6.53659L4 6.53659L4 3L3 3ZM3 13.6098L3 20.6829L4 20.6829L4 13.6098L3 13.6098ZM3 27.7561L3 34.8293L4 34.8293L4 27.7561L3 27.7561ZM3 41.9024L3 48.9756L4 48.9756L4 41.9024L3 41.9024ZM3 56.0488L3 63.1219L4 63.1219L4 56.0488L3 56.0488ZM3 70.1951L3 77.2683L4 77.2683L4 70.1951L3 70.1951ZM3 84.3415L3 91.4146L4 91.4146L4 84.3415L3 84.3415ZM3 98.4878L3 105.561L4 105.561L4 98.4878L3 98.4878ZM3 112.634L2.99999 119.707L3.99999 119.707L4 112.634L3 112.634ZM2.99999 126.781L2.99999 133.854L3.99999 133.854L3.99999 126.781L2.99999 126.781ZM2.99999 140.927L2.99999 148L3.99999 148L3.99999 140.927L2.99999 140.927ZM2.99999 155.073L2.99999 162.146L3.99999 162.146L3.99999 155.073L2.99999 155.073ZM2.99999 169.219L2.99999 176.293L3.99999 176.293L3.99999 169.219L2.99999 169.219ZM2.99999 183.366L2.99999 190.439L3.99999 190.439L3.99999 183.366L2.99999 183.366ZM2.99999 197.512L2.99999 204.585L3.99999 204.585L3.99999 197.512L2.99999 197.512ZM2.99999 211.658L2.99999 218.732L3.99999 218.732L3.99999 211.658L2.99999 211.658ZM2.99999 225.805L2.99999 232.878L3.99999 232.878L3.99999 225.805L2.99999 225.805ZM2.99999 239.951L2.99999 247.024L3.99999 247.024L3.99999 239.951L2.99999 239.951ZM2.99999 254.097L2.99999 261.171L3.99999 261.171L3.99999 254.097L2.99999 254.097ZM2.99999 268.244L2.99999 275.317L3.99999 275.317L3.99999 268.244L2.99999 268.244ZM2.99999 282.39L2.99999 289.463L3.99999 289.463L3.99999 282.39L2.99999 282.39ZM2.99999 296.537L2.99999 303.61L3.99999 303.61L3.99999 296.537L2.99999 296.537ZM2.99999 310.683L2.99999 317.756L3.99999 317.756L3.99999 310.683L2.99999 310.683ZM2.99999 324.829L2.99999 331.902L3.99999 331.902L3.99999 324.829L2.99999 324.829ZM2.99999 338.976L2.99999 346.049L3.99999 346.049L3.99999 338.976L2.99999 338.976ZM2.99998 353.122L2.99998 360.195L3.99998 360.195L3.99998 353.122L2.99998 353.122ZM2.99998 367.268L2.99998 374.342L3.99998 374.342L3.99998 367.268L2.99998 367.268ZM2.99998 381.415L2.99998 388.488L3.99998 388.488L3.99998 381.415L2.99998 381.415ZM2.99998 395.561L2.99998 402.634L3.99998 402.634L3.99998 395.561L2.99998 395.561ZM2.99998 409.707L2.99998 416.781L3.99998 416.781L3.99998 409.707L2.99998 409.707ZM2.99998 423.854L2.99998 430.927L3.99998 430.927L3.99998 423.854L2.99998 423.854ZM2.99998 438L2.99998 445.073L3.99998 445.073L3.99998 438L2.99998 438ZM2.99998 452.147L2.99998 459.22L3.99998 459.22L3.99998 452.147L2.99998 452.147ZM2.99998 466.293L2.99998 473.366L3.99998 473.366L3.99998 466.293L2.99998 466.293ZM2.99998 480.439L2.99998 487.512L3.99998 487.512L3.99998 480.439L2.99998 480.439ZM2.99998 494.586L2.99998 501.659L3.99998 501.659L3.99998 494.586L2.99998 494.586ZM2.99998 508.732L2.99998 515.805L3.99998 515.805L3.99998 508.732L2.99998 508.732ZM2.99998 522.878L2.99998 529.952L3.99998 529.952L3.99998 522.878L2.99998 522.878ZM2.99998 537.025L2.99998 544.098L3.99998 544.098L3.99998 537.025L2.99998 537.025ZM2.99998 551.171L2.99998 558.244L3.99998 558.244L3.99998 551.171L2.99998 551.171ZM2.99998 565.317L2.99998 572.391L3.99998 572.391L3.99998 565.317L2.99998 565.317ZM2.99997 579.464L2.99997 583L3.99997 583L3.99997 579.464L2.99997 579.464Z" fill="#FF7500"/>
<path d="M1.33333 72C1.33333 73.4728 2.52724 74.6667 4 74.6667C5.47276 74.6667 6.66667 73.4728 6.66667 72C6.66667 70.5272 5.47276 69.3333 4 69.3333C2.52724 69.3333 1.33333 70.5272 1.33333 72ZM40.3333 72C40.3333 73.4728 41.5272 74.6667 43 74.6667C44.4728 74.6667 45.6667 73.4728 45.6667 72C45.6667 70.5272 44.4728 69.3333 43 69.3333C41.5272 69.3333 40.3333 70.5272 40.3333 72ZM4 72.5L7.25 72.5L7.25 71.5L4 71.5L4 72.5ZM13.75 72.5L20.25 72.5L20.25 71.5L13.75 71.5L13.75 72.5ZM26.75 72.5L33.25 72.5L33.25 71.5L26.75 71.5L26.75 72.5ZM39.75 72.5L43 72.5L43 71.5L39.75 71.5L39.75 72.5Z" fill="#FF7500"/>
<path d="M1.33333 276C1.33333 277.473 2.52724 278.667 4 278.667C5.47276 278.667 6.66667 277.473 6.66667 276C6.66667 274.527 5.47276 273.333 4 273.333C2.52724 273.333 1.33333 274.527 1.33333 276ZM40.3333 276C40.3333 277.473 41.5272 278.667 43 278.667C44.4728 278.667 45.6667 277.473 45.6667 276C45.6667 274.527 44.4728 273.333 43 273.333C41.5272 273.333 40.3333 274.527 40.3333 276ZM4 276.5L7.25 276.5L7.25 275.5L4 275.5L4 276.5ZM13.75 276.5L20.25 276.5L20.25 275.5L13.75 275.5L13.75 276.5ZM26.75 276.5L33.25 276.5L33.25 275.5L26.75 275.5L26.75 276.5ZM39.75 276.5L43 276.5L43 275.5L39.75 275.5L39.75 276.5Z" fill="#FF7500"/>
<path d="M1.33333 480C1.33333 481.473 2.52724 482.667 4 482.667C5.47276 482.667 6.66667 481.473 6.66667 480C6.66667 478.527 5.47276 477.333 4 477.333C2.52724 477.333 1.33333 478.527 1.33333 480ZM40.3333 480C40.3333 481.473 41.5272 482.667 43 482.667C44.4728 482.667 45.6667 481.473 45.6667 480C45.6667 478.527 44.4728 477.333 43 477.333C41.5272 477.333 40.3333 478.527 40.3333 480ZM4 480.5L7.25 480.5L7.25 479.5L4 479.5L4 480.5ZM13.75 480.5L20.25 480.5L20.25 479.5L13.75 479.5L13.75 480.5ZM26.75 480.5L33.25 480.5L33.25 479.5L26.75 479.5L26.75 480.5ZM39.75 480.5L43 480.5L43 479.5L39.75 479.5L39.75 480.5Z" fill="#FF7500"/>
</svg> */}
<div>
            <div className="relative group space-y-3">
              <div className="cursor-pointer flex w-full ">
                <div className="ml-8 flex xl:flex-row items-center featuresvg4">
                  
                 <div className="transition-all duration-300 cursor-pointer m-8 xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 ">24/7 & 365 Days Support </h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit consectetur. Elit congue convallis quisque amet sit.                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group space-y-3">
            <div className="cursor-pointer flex w-full ">
                <div className="ml-8 flex xl:flex-row items-center featuresvg4">
             
                  <div className="transition-all duration-300 cursor-pointer m-8 xl:gap-6 text-[#16191C]">
                    <h2 className="text-[24px] font-bold opacity-1 mb-4 ">30-Day Money Back</h2>
                    <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                    Lorem ipsum dolor sit amet consectetur. Non sagittis ullamcorper pharetra etiam. Pulvinar egestas ut sodales accumsan cras. Pretium pretium viverra nec libero vulputate ut. Cum et a dictum.                </p>
                  </div>
                </div>
              </div>
              {/* <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" /> */}
            </div>
            <div className="cursor-pointer flex w-full">
              <div className="ml-8 flex xl:flex-row items-center featuresvg4">
                      <div className="transition-all duration-300 cursor-pointer m-8 xl:gap-6 text-[#16191C]">
                  <h2 className="text-[24px] font-bold opacity-1 mb-4 ">99.95% Uptime </h2>
                  <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                  Lorem ipsum dolor sit amet consectetur. Non sagittis ullamcorper pharetra etiam. Pulvinar egestas ut sodales accumsan cras. Pretium pretium viverra nec libero vulputate ut. Cum et a dictum.
                  </p>
                </div>
              </div>
            </div>
            </div>
            
          </div>
      </div>
    </div>
  </section>

  )
}

export default Uniquecpanel;