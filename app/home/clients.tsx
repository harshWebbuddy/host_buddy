import React from "react";

const Clients = () => {
  return (
    <div className="bg-black mx-auto flex flex-col md:gap-36 ">
      <div className="md:w-[1220px] md:h-[141px] flex flex-col md:flex-row items-center justify-center md:gap-[205px] mx-auto md:pt-32 pa:pt-20 padding ">
        <div className="flex flex-row pa:mr-[270px] ">
          <div>
            <div className="md:w-[312px] md:h-[126px] mx-auto items-center justify-center    ">
              <h2 className="heading wording font-bold text-white ">
                Featured Client Testimonials
              </h2>
              <div className="w-[190px] md:w-60 pa:w-[185px] h-1 bg-orange-500 md:mt-2 md:ml-[8px] pa:ml-[250px] "></div>{" "}
            </div>
          </div>
          <img
            src="/namaste.svg"
            className="w-[32.63px] h-[33.45px]  md:mt-20  visible md:-ml-10 pa:ml-4 pa:mt-1"
          />
        </div>
        <div className="md:w-[703px] md:h-[48px] mt-10">
          <p className="text-white text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis
            ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
          </p>
        </div>
      </div>
      <div className="md:w-[1220px] md:h-[1123.42px] mx-auto ">
        <div className="flex flex-wrap justify-between padding">
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients1.svg" className="w-full" alt="Client 1" />
          </div>
       
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients3.svg" className="w-full" alt="Client 3" />
          </div>
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients4.svg" className="w-full" alt="Client 4" />
          </div>
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients2.svg" className="w-full" alt="Client 2" />
          </div>
         
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients5.svg" className="w-full" alt="Client 5" />
          </div>
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients6.svg" className="w-full" alt="Client 6" />
          </div>
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients4.svg" className="w-full" alt="Client 7" />
          </div>
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients6.svg" className="w-full" alt="Client 8" />
          </div>
          <div className="w-[40%] md:w-[30%] mb-4 ">
            <img src="/clients6.svg" className="w-full" alt="Client 9" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Clients;
