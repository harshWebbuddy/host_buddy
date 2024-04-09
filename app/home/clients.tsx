import React from "react";

const Clients = () => {
  return (
    <div className="bg-black mx-auto flex flex-col ma:gap-36 ">
      <div className="ma:w-[1220px] ma:h-[141px] flex flex-col ma:flex-row items-center justify-center ma:gap-[205px] mx-auto ma:pt-32 pa:pt-20 padding ">
        <div className="flex flex-row pa:p-6 mb-6">
          <div>
            <div className="ma:w-[312px] ma:h-[126px] mx-auto items-center justify-center   ">
              <h2 className="heading wording font-bold text-white ">
                Featured Client Testimonials
              </h2>
              <div className="w-[190px] ma:w-60 pa:w-[250px] h-1 bg-orange-500 ma:mt-2 ma:ml-[8px] pa:ml-[7px] "></div>{" "}
            </div>
          </div>
          <img
            src="/namaste.svg"
            className="w-[32.63px] h-[33.45px]  ma:mt-20 visible ma:-ml-10 pa:ml-4 pa:mt-36"
          />
        </div>
        <div className="ma:w-[703px] ma:h-[48px] ">
          <p className="text-white text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis
            ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
          </p>
        </div>
      </div>
      <div className="ma:w-[1220px] ma:h-[1123.42px] mx-auto ">
        <div className="flex flex-wrap justify-between padding">
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients1.svg" className="w-full" alt="Client 1" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients2.svg" className="w-full" alt="Client 2" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients3.svg" className="w-full" alt="Client 3" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients4.svg" className="w-full" alt="Client 4" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients5.svg" className="w-full" alt="Client 5" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients6.svg" className="w-full" alt="Client 6" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients4.svg" className="w-full" alt="Client 7" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients6.svg" className="w-full" alt="Client 8" />
          </div>
          <div className="w-[40%] ma:w-[30%] mb-4 ">
            <img src="/clients6.svg" className="w-full" alt="Client 9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
