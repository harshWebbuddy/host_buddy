"use client";

import Image from "next/image";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Plans = () => {
 

  return (
    <div className="flex flex-col max-w-[1300px] mx-auto">
      <div className="flex flex-col 2xl:flex-row justify-between items-center overflow-hidden ">
        <div className="p-2 2xl:p-0 relative w-full flex flex-col space-y-10 ">
          <h2 className="font-mona-sans font-semibold 2xl:font-bold text-[42px] leading-[63px] w-full text-left">
           Multiple <span className="pb-1 2xl:pb-4 border-b-4 border-orange-500">Payment  Types </span>
          </h2>
         <p className="text-[16px] 2xl:text-[18px] font-normal 2xl:font-medium">Different customers like to pay in different ways, and Antler lets you embrace them all. From international payment card providers like Visa and American Express to digital wallets and platforms like PayPal and WeChat Pay, we make it simple for you to complete transactions with ease.</p>
        </div>
       
      </div>
      {/* cards */}
      <section className="pt-14">
  <div className="flex flex-col space-y-4">
    <div className="flex flex-col bl:flex-row w-full justify-center gap-4 items-center">
      <div className="relative top-0 bottom-0 group !z-[1] w-full p-4">
        <img src="/wordpress/rectbox.svg" className="absolute right-0 top-0 !z-[2] opacity-0 group-hover:opacity-100"/>
        <div className="w-full bg-white p-6 md:pl-16 md:pr-10 py-10 items-center justify-center rounded-2xl border group relative !z-[3] group-hover:shadow-2xl">
          <div className="w-full space-y-4 items-start justify-start mx-auto">
            <span className="items-start featuresvg6 justify-start bg-orange-500 mx-auto w-auto">
              <Image src="/features/visa1.svg" width={200} height={200} alt=""/>
            </span>
            <h2 className="font-bold text-[18px] md:text-[20px] leading-[26px] text-left font-mono-sans-serif text-[#16191C] pt-4">Visa</h2>
            <p className="font-mona-sans text-base font-normal leading-6 opacity-70 text-left">Drastically improve your core web vitals with faster page loads. SSD NVMes, server-level caching, CDN & GZIP/Brotli included with our WordPress hosting. Further, making Google and site visitors happy.</p>
          </div>
        </div>
        <img src="/wordpress/rectbox.svg" className="absolute bottom-0 left-0 !z-[2] opacity-0 group-hover:opacity-100"/>
      </div>
      <div className="relative top-0 bottom-0 group !z-[1] w-full p-4">
        <img src="/wordpress/rectbox.svg" className="absolute right-0 top-0 !z-[2] opacity-0 group-hover:opacity-100"/>
        <div className="w-full bg-white p-6 md:pl-16 md:pr-10 py-10 items-center justify-center rounded-2xl border group relative !z-[3] group-hover:shadow-2xl">
          <div className="w-full space-y-4 items-start justify-start mx-auto">
            <span className="items-start featuresvg5 justify-start bg-orange-500 mx-auto w-auto">
              <Image src="/features/american.svg" width={300} height={200} alt=""/>
            </span>
            <h2 className="font-bold text-[18px] md:text-[20px] leading-[26px] text-left font-mono-sans-serif text-[#16191C] pt-4">Mastercard</h2>
            <p className="font-mona-sans text-base font-normal leading-6 opacity-70 text-left">Everything you need for the best WordPress hosting experience! We offer a free Let's Encrypt SSL certificate, a domain name, and a professional email to make you look more trustworthy and boost credibility.</p>
          </div>
        </div>
        <img src="/wordpress/rectbox.svg" className="absolute bottom-0 left-0 !z-[2] opacity-0 group-hover:opacity-100"/>
      </div>
      <div className="relative top-0 bottom-0 group !z-[1] w-full p-4">
        <img src="/wordpress/rectbox.svg" className="absolute right-0 top-0 !z-[2] opacity-0 group-hover:opacity-100"/>
        <div className="w-full bg-white p-6 md:pl-16 md:pr-10 py-10 items-center justify-center rounded-2xl border group relative !z-[3] group-hover:shadow-2xl">
          <div className="w-full space-y-4 items-start justify-start mx-auto">
            <span className="items-start featuresvg5 justify-start bg-orange-500 mx-auto w-auto">
              <Image src="/features/american.svg" width={272} height={20} alt=""/>
            </span>
            <h2 className="font-bold text-[18px] md:text-[20px] leading-[26px] text-left font-mono-sans-serif text-[#16191C] pt-4">American Express</h2>
            <p className="font-mona-sans text-base font-normal leading-6 opacity-70 text-left">Get assistance through 24/7 phone and chat access to our in-house experts, ready to address your technical issues. Acting as an extension to your business, we're here for you from start to beyond.</p>
          </div>
        </div>
        <img src="/wordpress/rectbox.svg" className="absolute bottom-0 left-0 !z-[2] opacity-0 group-hover:opacity-100"/>
      </div>
    </div>
  </div>
</section>

    


    </div>
  );
};
export default Plans;
