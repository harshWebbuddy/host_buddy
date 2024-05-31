"use client"
import React from "react";
import ImageSlider from './ImageSlider'

const Panel = () => {
  const images = [
    '/homegaming/games1.png',
    '/homegaming/games3.png',
    '/homegaming/panel.svg',
  ];

  return (
    <div className="mp:mb-80 xl:mb-80 2xl:mb-80 gf:mb-60 sp:w-full">
      <div  className="w-full sp:w-full  bg-[#01131B] -mt-10 relative z-10">
        <section className="static w-full 2xl:w-[1920px] 2xl:h-[782px] 2xl:-mt-20 xl:h-[900px] mp:h-[1300px] h-[1670px] pa:h-[1450px]  items-center justify-center mx-auto ">
          <div className="sp:ml-10 2xl:w-[1230.66px] ss:gap-10 md:h-[668.18px] h-[1100px] flex flex-col mp:flex-col pa:gap-0 pa:flex-col 2xl:flex-row mx-auto items-center justify-between 2xl:ml-60 2xl:-mt-10 mp:mt-[650px] xl:mt-[50px] xl:p-10 pa:-mt-[800px] ">
            <div className="w-full md:w-[699px] md:h-[608px] pa:mb-80 mp:mb-0 lg:mb-60 gf:mb-20 mx-auto">
              <div className="mx-auto flex 2xl:flex-row justify-between 2xl:w-[699px] 2xl:h-[126px] mp:p-4 mp:-mt-96 pa:mt-40">
                <h4 className="text-white text-[42px] leading-[62px] font-semibold font-mona-sans">
                  <div className="2xl:w-[600px]">
                    Amazing Games 
                    <h2 className="text-orange-500">Control Panel </h2>
                  </div> 
                </h4>
              </div>
              <div className="2xl:mt-10 mp:p-4 ">
                <div className="group"> 
                  <div className="shadow-2xl group relative flex md:flex-row pa:w-full mp:w-[350px] 2xl:w-[497px] md:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all duration-300 border-gradient">
                    <div className="ml-8 flex md:flex-row group">
                      <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 md:mt-8 rounded-xl transition-all duration-300 group">
                        <img src="./homegaming/panela.svg" alt="unique" width="36px" height="48px" className="hover:bg-orange-500" />
                      </div>
                      <div className="transition-all duration-300 cursor-pointer md:w-[369px] md:h-[86px] m-8 md:gap-6 text-[#16191C] group">
                        <h2 className="md:w-[369px] md:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-white group-hover:text-orange-500">
                          Sub Users             
                        </h2>
                        <p className="text-white md:w-[369px] md:h-[48px] opacity-70 hover:opacity-100 group-hover:text-black font-mona-sans text-[16px] font-normal leading-normal text-left">
                          Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.o.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:w-[490px] pa:w-[490px] border-t border-gray-600 transform rotate-180 opacity-1 transition-opacity duration-300 group-hover:opacity-0" style={{ borderStyle: "dotted" }}></div>
                </div>
                <div className="group">
                  <div className="shadow-2xl relative flex md:flex-row pa:w-full 2xl:w-[497px] mp:w-[350px] 2xl:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all duration-300 border-gradient">
                    <div className="ml-8 flex md:flex-row">
                      <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 md:mt-8 rounded-xl transition-all duration-300">
                        <img src="./homegaming/panelb.svg" alt="unique" width="36px" height="48px" className="hover:bg-orange-500" />
                      </div>
                      <div className="transition-all duration-300 cursor-pointer md:w-[369px] md:h-[86px] m-8 md:gap-6 text-[#16191C]">
                        <h2 className="md:w-[369px] md:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-white group-hover:text-orange-500">
                          Game Panel Demo         
                        </h2>
                        <p className="text-white opacity-70 md:w-[369px] md:h-[48px] group-hover:text-black hover:opacity-100 font-mona-sans text-[16px] font-normal leading-normal text-left">
                          Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:w-[490px] pa:w-[490px] border-t border-gray-600 transform rotate-180 opacity-1 transition-opacity duration-300 group-hover:opacity-0" style={{ borderStyle: "dotted" }}></div>
                </div>
                <div className="group">
                  <div className="shadow-2xl relative flex md:flex-row mp:w-[350px] pa:w-full 2xl:w-[497px] md:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all duration-300 border-gradient">
                    <div className="ml-8 flex md:flex-row">
                      <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 md:mt-8 rounded-xl transition-all duration-300">
                        <img src="./homegaming/panelc.svg" alt="unique" width="36px" height="48px" className="hover:filter hover:brightness-125" />
                      </div>
                      <div className="transition-all duration-300 cursor-pointer md:w-[369px] md:h-[86px] m-8 md:gap-6 text-[#16191C]">
                        <h2 className="md:w-[369px] md:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-white group-hover:text-orange-500">
                          99.95% Uptime      
                        </h2>
                        <p className="text-white opacity-70 md:w-[369px] md:h-[48px] hover:opacity-100 group-hover:text-black font-mona-sans text-[16px] font-normal leading-normal text-left">
                          Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:w-[490px] pa:w-[490px] border-t border-gray-600 transform rotate-180 opacity-1 transition-opacity duration-300 group-hover:opacity-0" style={{ borderStyle: "dotted" }}></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:w-[500px] gap-12 xl:-mt-72 2xl:-mt-80 mp:ml-2 relative pa:ml-0">
              <p className="text-[16px] mp:ml-2 leading-[24px] font-mono-sans text-white opacity-70 2xl:w-[600px] mp:w-[350px] xl:w-full pa:w-[600px]"> 
                By trusting us with your business and projects needs, we promise a 99.9% uptime on any services we provide, outside of any standard. 
              </p>
              <ImageSlider images={images} />
              <img src="./homegaming/panel1.svg" className="gf:opacity-0 w-[100.74px] 2xl:-mt-[530px] -ml-10 z-10 relative pa:-mt-[340px] mp:opacity-0 mp:mt-40 xl:opacity-100 xl:-mt-[420px]" />  
            </div>
          </div>
        </section>
      </div> 
    </div>  
  );
};

export default Panel;