import React from "react";

const Steps = () => {
  return (
    <div className="w-full md:w-[1286.05px]  item-center justify-center mx-auto flex flex-col md:gap-6 mb-40">   
     <div className="w-[900px] md:w-[1286.05px] md:h-[500px]  pa:gap-0 gap-[150px] md:gap-[250px] flex flex-col md:flex-row pa:flex-row">
      <div className="flex flex-col w-[370px] md:w-[493px] h-[464px] gap-[70px] md:gap-[40px] padding">
        <div className="w-[420px] md:w-[600px] h-[126px]">
          <h2 className="text-[36px] md:text-[42px] font-mono-sans leading-[53px] md:leading-[63px] font-semibold">
          Advanced Features Included in Shared Hosting
          </h2>
        </div>
       <div className="grid grid-cols-2 gap-x-6 gap-y-2">
  {[...Array(10)].map((_, index) => (
    <div key={index} className="flex flex-row gap-2">
      <div className="item-center justify-center mt-1">
        <img
          src="/tick1.svg"
          alt="tick"
          width="32px"
          height="20px"
          className=""
        />
      </div>
      <div className="w-[453px] h-[52px] item-center justify-center">
        <h2 className="text-[18px] capitalize">Multiple PHP Support</h2>
      </div>
    </div>
  ))}
</div>

      </div>
      <div className="ml-10 md:mt-10 w-[300px] md:w-[491px] h-[370px] items-center justify-center pa:-ml-8 pa:mt-20">
        <img
          src="/steps1.svg"
          width="497.32px"
          height="367.93px"
          className="rounded-2xl  relative z-10"
        />
      </div>
    </div>
    <div className="w-[900px] md:w-[1286.05px] md:h-[500px] pa:gap-10  md:gap-[178px] flex flex-col md:flex-row pa:flex-row">
     
     <div className="item-center ml-10 md:mt-10 w-[300px] md:w-[491px] h-[370px] items-center justify-center pa:mt-20 ">
       <img
         src="/steps2.svg"
         width="488.74px"
         height="368.29px"
         className="rounded-2xl  relative z-10"
       />
     </div>
     <div className="flex flex-col w-[493px] h-[464px]  gap-[250px] md:gap-[100px] md:mt-20 padding">
       <div className="w-[320px] md:w-[476px] h-[126px] gap-4 flex flex-col padding">
         <h2 className="text-[36px] md:text-[42px] font-mono-sans leading-[53px] md:leading-[63px] font-semibold">
Server Located in India         </h2>
<p>Enhance Your Hosting Experience! Boost website load times to maximize server response, SEO rankings, and sales. Opt for a server closer to your audience, especially in India, for enhanced reliability and lightning-fast page loads.</p>
       </div>
   <div className="border border-orange-500 border-solid rounded-2xl w-[178px] h-[51px] ml-6">
  <div className="p-3 flex flex-row items-center justify-center gap-2">
    <h2 className="w-[88px] h-[19px] font-medium">Get Started </h2>
    <img src="/arrowrightwards.svg" className="w-[20px] h-[20px] items-center justify-center mt-1" alt="arrow" />
  </div>
</div>

     </div>
   </div>
   <div className="w-[900px] md:w-[1286.05px] md:h-[500px] pa:gap-10 gap-48 md:gap-[178px] flex flex-col md:flex-row pa:flex-row"> 
     <div className="flex flex-col w-[493px] h-[464px] gap-[350px] md:gap-[170px] mt-20 padding">
       <div className="w-[320px] md:w-[497px] h-[126px] gap-4 flex flex-col padding">
         <h2 className="text-[36px] md:text-[42px] font-mono-sans leading-[53px] md:leading-[63px] font-semibold">
Start Fast with the Built-In One-Click Installer      </h2>
<p>Enhance Your Hosting Experience! Boost website load times to maximize server response, SEO rankings, and sales. Opt for a server closer to your audience, especially in India, for enhanced reliability and lightning-fast page loads.</p>
       </div>
    <div className="border border-orange-500 border-solid rounded-2xl w-[178px] h-[51px] ml-6">
  <div className="p-3 flex flex-row items-center justify-center gap-2">
    <h2 className="w-[88px] h-[19px] font-medium">Get Started </h2>
    <img src="/arrowrightwards.svg" className="w-[20px] h-[20px] items-center justify-center mt-1" alt="arrow" />
  </div>
</div>

     </div>
       <div className="item-center ml-10 md:mt-10 w-[300px] md:w-[491px] h-[370px] items-center justify-center pa:mt-20 ">
       <img
         src="/steps3.svg"
         width="488.74px"
         height="368.29px"
         className="rounded-2xl  relative z-10"
       />
     </div>
   </div>
    <div className="w-[900px] md:w-[1286.05px] md:h-[500px] pa:gap-10 md:gap-[178px] md:mt-20 flex flex-col md:flex-row pa:flex-row">
     
     <div className="item-center ml-10 md:mt-10 w-[300px] md:w-[491px] h-[370px] items-center justify-center pa:mt-20 ">
       <img
         src="/steps4.svg"
         width="488.74px"
         height="368.29px"
         className="rounded-2xl  relative z-10"
       />
     </div>
     <div className="flex flex-col w-[493px] h-[464px] gap-[400px] md:gap-[200px] mt-20 padding ">
       <div className="w-[320px] md:w-[476px] h-[126px] gap-4 flex flex-col padding ">
         <h2 className="text-[36px] md:text-[42px] font-mono-sans leading-[53px] md:leading-[63px] font-semibold">
Free Website Migration        </h2>
<p>Switching web hosts can be daunting, especially considering the importance of your website's data. At HostBuddy, we understand this concern, which is why we offer a hassle-free migration service at no extra cost. Our expert support team will guide you through the process, ensuring a seamless transition to our servers. Rest assured, we prioritize the safety and integrity of your data, ensuring your website remains intact but with improved hosting services.</p>
       </div>
    <div className="border border-orange-500 border-solid rounded-2xl w-[178px] h-[51px] ml-6">
  <div className="p-3 flex flex-row items-center justify-center gap-2">
    <h2 className="w-[88px] h-[19px] font-medium">Get Started </h2>
    <img src="/arrowrightwards.svg" className="w-[20px] h-[20px] items-center justify-center mt-1" alt="arrow" />
  </div>
</div>

     </div>
   </div>
    </div>

  );
};

export default Steps;
