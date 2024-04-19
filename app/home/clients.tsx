import React from "react";

const Clients = () => {
  return (
    <div className="bg-black mx-auto flex flex-col md:gap-36 w-full 2xl:w-[1920px] items-center justify-center ">
      <div className="2xl:ml-[360px] md:w-[1220px] md:h-[141px]  flex flex-col pa:flex-col xl:flex-col md:flex-row items-center 2xl:flex-row xl:ml-20 justify-center md:gap-[205px] pa:gap-2 mx-auto md:pt-32 pa:pt-20 padding xl:mt-20 pa:mt-20 pa:-ml-20 ">
        <div className="flex flex-row  pa:mr-[270px] ">
          <div>
            <div className="xl:w-full pa:w-full 2xl:w-[312px] md:h-[126px] mx-auto items-center justify-center xl:ml-24 2xl:ml-0 mp:mb-4   ">
              <h2 className="heading wording font-bold text-white ">
                Featured Client Testimonials
              </h2>
              <div className="w-[190px] 2xl:w-[250px] md:w-60 pa:w-[185px] h-1 bg-orange-500 xl:opacity-0 md:mt-2 md:ml-[8px] pa:ml-[5px] 2xl:opacity-100 pa:opacity-0 "></div>{" "}
            </div>
          </div>
          <img
            src="/namaste.svg"
            className="w-[32.63px] h-[33.45px]  2xl:mt-20   visible 2xl:-ml-10 pa:-ml-24 pa:mt-10 xl:opacity-0 2xl:opacity-100 pa:opacity-0 "
          />
        </div>
        <div className="pa:-ml-28 md:w-[703px] md:h-[48px] mt-2 xl:ml-2">
          <p className="text-white text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis
            ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
          </p>
        </div>
      </div>
      <div className="2xl:w-[1220px] pa:h-[2000px] xl:ml-[220px] xl:h-[2100px] 2xl:h-[1200.42px] mx-auto 2xl:ml-[360px] mp:mt-20">
        <div className="flex flex-row mp:flex-col 2xl:flex-row pa:flex-row pa:flex-wrap xl:gap-20 2xl:gap-4 pa:gap-4  ">
          <div className="flex flex-col  ">
        <div></div>
            <div className="mb-4">
              <img src="/clients2.svg" className="w-full" alt="Client 2" />
            </div>
          
            <div className="mb-4">
              <img src="/clients4.svg" className="w-full" alt="Client 4" />
            </div>
           
            <div className="mb-4">
              <img src="/clients4.svg" className="w-full" alt="Client 4" />
            </div>
            <div className="mb-4 mp:opacity-100 pa:opacity-100 2xl:opacity-0">
              <img src="/clients3.svg" className="w-full" alt="Client 3" />
            </div>
          </div>

          <div className="flex flex-col ">
          <div className="mb-4">
              <img src="/clients1.svg" className="w-full" alt="Client 1" />
            </div>
            <div className="mb-4">
              <img src="/clients5.svg" className="w-full" alt="Client 5" />
            </div>
            <div className="mb-4">
              <img src="/clients3.svg" className="w-full" alt="Client 3" />
            </div>
            <div className="mb-4 mp:opacity-100 pa:opacity-100 2xl:opacity-0">
              <img src="/clients6.svg" className="w-full" alt="Client 8" />
            </div>
           
          </div>

          <div className="flex flex-col ">
          <div className="mb-4 pa:opacity-0 2xl:opacity-100">
              <img src="/clients3.svg" className="w-full" alt="Client 3" />
            </div>
           
            <div className="mb-4 pa:opacity-0 2xl:opacity-100">
              <img src="/clients6.svg" className="w-full" alt="Client 8" />
            </div>
            <div className="mb-4 mp:opacity-100 pa:opacity-0 2xl:opacity-100">
              <img src="/clients2.svg" className="w-full" alt="Client 2" />
            </div>
          
          </div>
          <div className="mb-4 2xl:opacity-0 mp:opacity-100 pa:opacity-100 pa:-ml-[200px] xl:-ml-[230px]">
              <img src="/clients2.svg" className="w-full" alt="Client 2" />
            </div>
        </div>
      </div>
      <div>
      <img src="/fog.svg" className="2xl:-mt-[580px] pa:-mt-[300px] 2xl:ml-[0px] mp:-mt-[100px] xl:-mt-[500px]"/>
      <div className="2xl:w-[244px] 2xl:h-[24px] flex flex-row mt-5 2xl:ml-[900px] items-center justify-center visible">
          <h2 className="text-[16px] wording font-bold text-orange-500 mp:mt-2">
          See All Testimonials           </h2>
          <img src="/arrowright.svg" className="w-[14px] h-[10px] ml-2 "/>
        </div>
        </div>
    </div>
  );
};

export default Clients;
