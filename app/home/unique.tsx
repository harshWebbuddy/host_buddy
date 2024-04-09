import React from "react";

const Unique = () => {
  return (
    <div className="w-full bg-[#F9EFE4]  flex flex-col ma:flex-row  ma:h-[829px]">
        <img src="/dotted.svg" className="-ml-2 w-[50px] ma:w-[89.71px] ma:h-[113.2px] opacity-0 ma:opacity-1"/>
        <div className="ma:w-[1230.66px] ma:h-[668.18px] h-[1100px] flex flex-col ma:flex-row mx-auto gap-20">
      <div className="w-full max-w-[1220px] mx-auto ma:w-[699px] ma:h-[608px] margin padding">
      <div className="mx-auto md:flex flex-col justify-between ma:w-[699px] ma:h-[150px]">
        <h4 className="heading text-black font-semibold font-mona-sans wording ma:w-[663px] ma:h-[63px]">
          What Makes Host<span className="text-orange-500">Buddy </span>
          Unique?
        </h4>
        <p className="ma:text-[16px] mt-2 font-light leading-[24px] text-black ma:h-[72px] ma:w-[699px] ">
          Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis
          ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
          Erat nibh nisl lacinia egestas mauris facilisi aliquam sit mauris.
        </p>
      </div>
      <div className="mt-10">
        <div className="relative flex ma:flex-row ma:w-[497px] ma:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all duration-300 border-gradient">
          <div className="ml-8 flex ma:flex-row">
            <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 ma:mt-8 rounded-xl transition-all duration-300">
              <img src="/uniquecar2.svg" alt="unique" width="36px" height="48px" className="group-hover:bg-orange-500" />
            </div>
            <div className="transition-all duration-300 cursor-pointer ma:w-[369px] ma:h-[86px] m-8 ma:gap-6 text-[#16191C]">
              <h2 className="ma:w-[369px] ma:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-[#16191C] group-hover:text-orange-500">
                24/7 & 365  Support
              </h2>
              <p className="ma:w-[369px] ma:h-[48px] opacity-70 hover:opacity-100 font-mona-sans text-[16px] font-normal leading-normal text-left">
                Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
              </p>
            </div>
          </div>

        </div>
        <div className=" border-t border-dotted border-gray-400 ma:w-[497px]"></div>

        <div className="relative flex ma:flex-row ma:w-[497px] ma:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all duration-300 border-gradient">
          <div className="ml-8 flex ma:flex-row">
          <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 ma:mt-8 rounded-xl transition-all duration-300">
              <img src="/uniquecar2.svg" alt="unique" width="36px" height="48px" className="group-hover:bg-orange-500" />
            </div>
            <div className="transition-all duration-300 cursor-pointer ma:w-[369px] ma:h-[86px] m-8 ma:gap-6 text-[#16191C]">
              <h2 className="ma:w-[369px] ma:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-[#16191C] group-hover:text-orange-500">
                24/7 & 365  Support
              </h2>
              <p className="ma:w-[369px] ma:h-[48px] opacity-70 hover:opacity-100 font-mona-sans text-[16px] font-normal leading-normal text-left">
                Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
              </p>
            </div>
          </div>
        </div>
        {/* Dotted line */}
        <div className=" border-t border-dotted border-gray-400 ma:w-[497px]"></div>
        {/* End of dotted line */}
        <div className="relative flex ma:flex-row ma:w-[497px] ma:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all  duration-300 border-gradient">
          <div className="ml-8 flex ma:flex-row">
          <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 ma:mt-8 rounded-xl transition-all duration-300">
              <img src="/uniquecar2.svg" alt="unique" width="36px" height="48px" className="group-hover:bg-orange-500" />
            </div>
            <div className="transition-all duration-300 cursor-pointer ma:w-[369px] ma:h-[86px] m-8 ma:gap-6 text-[#16191C]">
              <h2 className="ma:w-[369px] ma:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-[#16191C] group-hover:text-orange-500">
                24/7 & 365  Support
              </h2>
              <p className="ma:w-[369px] ma:h-[48px] opacity-70 hover:opacity-100 font-mona-sans text-[16px] font-normal leading-normal text-left">
                Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="w-[250px] ma:w-[418.92px] ma:h-[668.18px] relative margin visible "> 
    <img src="/manjumping.jpg" className="scale-x-[-1] opacity-100 z-10 relative  grayscale ml-10 ma:ml-0"/>
    <img src="/manlowerjumping.svg" className="ma:-mt-60 ml-24 relative z-20 w-[200px] ma:w-[328.11px] "/>
  <img src="/manupperjumping.svg" className="-mt-[150px] ma:-mt-[380px]  -ml-1 ma:-ml-24 relative z-20 w-[150px] ma:w-[271.4px]"/>
    {/* // Circle image with eraser */}
    <div className="absolute inset-0 z-0" style={{ width: "400px", height: "400px", transform: "translate(10%, 20%)" }}>
        <svg width="100%" height="100%" viewBox="0 0 400 400">
            <defs>
                <mask id="mask" x="0" y="0" width="400" height="400">
                    {/* Circle shape */}
                    <circle cx="200" cy="200" r="200" fill="#fff"/> 
                    {/* Eraser */}
                     <circle cx="200" cy="200" r="160" fill="#000"/> 
                </mask> 
            </defs>
            <image href="/mancirclejumping.svg" x="0" y="0" width="400" height="400" mask="url(#mask)"/>
        </svg> 
    </div> 
</div> 
</div>


    </div>
  );
};

export default Unique;
