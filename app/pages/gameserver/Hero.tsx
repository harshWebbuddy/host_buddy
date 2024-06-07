import Image from 'next/image';
import React from 'react';

const HeroHosting = () => {
  return (
    <section>  
        <section className="h-full 2xl:min-h-[60vh] overflow-hidden relative bg-black border-rounded flex flex-col items-center justify-center">
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full rounded opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
    <div className="max-w-[1250px] mx-auto text-white px-4 pt-40 pb-10 2xl:py-40">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
      <div className="relative w-full flex flex-col justify-start space-y-2 2xl:space-y-5 animate-left-to-right">
          <div className='relative w-full flex flex-col justify-start space-y-0'><h2 className="font-mono-sans text-sm font-light italic leading-relaxed text-left">
            {/* <span className="text-white opacity-90 font-light">Welcome to </span> */}
            <span className="text-orange-500 font-bold">Game Server</span>
          </h2>
          <h1 className="font-mono-sans font-medium  text-[37px] xl:text-[51px] 2xl:text-[61px] leading-[54px] 2xl:leading-[84px] text-left 2xl:text-left ">Game Servers
Solutions</h1>
</div>
<p className="font-mono-sans text-[14px] 2xl:text-[16px] font-light leading-loose text-left  text-[#EBEBEB]">
          Lorem ipsum dolor sit amet consectetur. Lacus viverra a sed morbi a ornare risus imperdiet. Ut aliquam pellentesque at amet eros ut. Amet mauris id aliquam in.          </p>
          <div className="flex flex-row justify-start !mt-4 2xl:!mt-10 ">
            <div className="h-[56px]  flex item-center justify-center bg-orange-500 rounded-xl py-4 w-auto px-6  gap-x-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="2" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left">Configure Server</h2>
            </div>
           
          </div>
          <p className="flex  xl:mx-auto 2xl:mx-0 gap-2 underline justify-start  text-[#FFFFFF]">
              <Image src="/tick2.svg" alt="tick" width={11.41} height={8.27} />
              <span className='opacity-80 capitalize items-start justify-start text-left text-[14px] leading-[26px] font-light  '> 30 day money back guarantee</span>
            </p>
        </div>

        <div className="animate-slide-from-right w-full item-center justify-center">
          <Image src="/game.gif" alt="" width={666} height={666} className="item-center justify-center mx-auto" />
        </div>
      </div>
      <svg className='2xl:flex hidden w-20 absolute mx-auto top-[1115px] inset-0 items-center justify-center opacity-100 ' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="40" fill="white"/>
<path d="M59.999 39.9999C59.999 37.3734 59.4817 34.7727 58.4766 32.3462C57.4715 29.9197 55.9983 27.7149 54.1412 25.8577C52.284 24.0006 50.0792 22.5274 47.6527 21.5223C45.2262 20.5172 42.6255 19.9999 39.999 19.9999C37.3726 19.9999 34.7719 20.5172 32.3454 21.5223C29.9188 22.5274 27.7141 24.0006 25.8569 25.8577C23.9997 27.7149 22.5265 29.9197 21.5214 32.3462C20.5163 34.7727 19.999 37.3734 19.999 39.9999L39.999 39.9999H59.999Z" fill="#FF7500"/>
</svg>
    </div>
   


  </section>


</section>


      );
    };
export default HeroHosting;
