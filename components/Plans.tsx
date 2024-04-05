import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Plans = () => {
  return (
    <div className="flex flex-col  max-w-[1520px] md:w-[1500px] mx-auto px-4">
      {/* heading */}
      <div className="flex flex-col md:flex-row justify-between gap-y-6 gap-x-4 opacity-1 items-center mb-8">
        <div className="relative w-full">
          <h2 className="font-mona-sans font-semibold text-lg md:text-4xl leading-[48px] md:leading-[63px] w-full  opacity-1">
            The Perfect - Web Hosting Plan
          </h2>
          <div className="border-t-4 border-orange-500 opacity-1 max-w-[30%]"></div>
        </div>
        <div className="flex flex-row gap-5 md:gap-15 items-center justify-center w-fu">
          <div>
            <h2 className="font-mona-sans text-xs md:text-base font-normal leading-[24px] md:leading-[32px] tracking-[0.05em] md:tracking-[0.2px] text-right w-54 md:w-71 h-[32px] opacity-1">
              Monthly
            </h2>
          </div>
          <div className="w-[72px] h-[33px] left-[86px] bg-gray-900 rounded-3xl opacity-15">
            <div className="w-[21px] h-[21px] mt-1.5 ml-2 bg-white rounded-3xl opacity-1"></div>
          </div>
          <div>
            <h2 className="font-mona-sans text-base font-normal leading-[32px] tracking-[0.2px] text-right w-[52px] h-[32px] opacity-1">Yearly</h2>
          </div>
          <div className="w-[85px] mt-1 h-[29px] bg-orange-100 rounded-3xl">
            <h4 className="text-orange-500 m-2 font-mona-sans font-bold text-xs leading-[15.6px] tracking-[1.625px] text-center w-[77px] h-[16px] top-[6px] left-[10px]">
              Save 25%
            </h4>
          </div>
        </div>
      </div>
      {/* cards */}
      <section className="mt-10">
        <div className="flex flex-col md:flex-row w-full justify-center gap-8 items-center">
          <div className="mb-5 w-full bg-[#F9EFE4] p-10 rounded-2xl">
            <div className="mb-5 w-full space-y-4">
              <h2 className="font-mona-sans font-bold text-2xl md:text-3xl text-center gap-0 text-gray-900 mx-auto ">IGNITE</h2>
              <p className="font-mona-sans leading-7 w-full gap-0 text-sm text-center mx-auto text-[#16191C]/40">From</p>
              <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
              <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45">/Month</p>
            </div>
            <div className="mt-12">
              <button className="w-full h-[52px] text-black text-xl rounded-xl hover:bg-[#FF7500] ring-1 ring-[#16191C] hover:text-white transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
                <h4 className="w-99 h-19 top-16 left-115 opacity-1 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
                <span className="ml-2">
                  <FaArrowRight size={15} />
                </span>
              </button>
              <div className="flex flex-col justify-center w-full mt-12">
                <h3 className="text-xl font-bold mb-7 text-left">Major Features</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">RAM:</p>
                    <p className="text-center text-black-700 text-lg font-bold">8GB</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Processor</p>
                    <p className="text-center text-black-700 text-lg font-bold">1 Core</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Storage</p>
                    <p className="text-center text-black-700 text-lg font-bold">25GB</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Bandwidth</p>
                    <p className="text-center text-black-700 text-lg font-bold">1TB</p>
                  </div>
                  {/* Additional feature details here */}
                </div>
                <button className="text-[#16191C]/60 font-mona-sans text-lg font-semibold group leading-[24px] flex flex-row items-center justify-center mx-auto !mt-10">
                  See All Features in Details{" "}
                  <span className="ml-1 mt-0.5 group-hover:translate-x-1 transition-all duration-300">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-5 w-full bg-[#16191C] p-10 rounded-2xl text-white relative">
            <div className="flex justify-center">
              <div className="bg-[#FF7500] px-6 py-1.5 font-semibold border-4 max-w-fit border-white rounded-full absolute -top-6 mx-auto">Most Popular</div>
            </div>
            <div className="mb-5 w-full space-y-4">
              <h2 className="font-mona-sans font-bold text-2xl md:text-3xl text-center mx-auto ">ELITE</h2>
              <p className="font-mona-sans leading-7 w-full gap-0 text-sm text-center mx-auto text-[#FFFFFF]/40">From</p>
              <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
              <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45">/Month</p>
            </div>
            <div className="mt-12">
              <button className="w-full h-[52px] text-white text-xl rounded-xl bg-[#FF7500] transition-all duration-300 hover:shadow-2xl font-bold flex items-center justify-center ">
                <h4 className="w-99 h-19 top-16 left-115 opacity-1 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
                <span className="ml-2">
                  <FaArrowRight size={15} />
                </span>
              </button>
              <div className="flex flex-col justify-center w-full mt-12">
                <h3 className="text-xl font-bold mb-7 text-left">Major Features</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">RAM:</p>
                    <p className="text-center text-black-700 text-lg font-bold">8GB</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Processor</p>
                    <p className="text-center text-black-700 text-lg font-bold">1 Core</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Storage</p>
                    <p className="text-center text-black-700 text-lg font-bold">25GB</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Bandwidth</p>
                    <p className="text-center text-black-700 text-lg font-bold">1TB</p>
                  </div>
                  {/* Additional feature details here */}
                </div>
                <button className="text-[#FF7500] font-mona-sans text-lg font-semibold group leading-[24px] flex flex-row items-center justify-center mx-auto !mt-10">
                  See All Features in Details{" "}
                  <span className="ml-1 mt-0.5 group-hover:translate-x-1 transition-all duration-300">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-5 w-full bg-[#F9EFE4] p-10 rounded-2xl">
            <div className="mb-5 w-full space-y-4">
              <h2 className="font-mona-sans font-bold text-2xl md:text-3xl text-center gap-0 text-gray-900 mx-auto ">STELLER</h2>
              <p className="font-mona-sans leading-7 w-full gap-0 text-sm text-center mx-auto text-[#16191C]/40">From</p>
              <div className="font-bold text-6xl leading-9 text-center font-mono-sans-serif text-orange-500 mb-2">$29</div>
              <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-[17px] gap-0 opacity-45">/Month</p>
            </div>
            <div className="mt-12">
              <button className="w-full h-[52px] text-black text-xl rounded-xl hover:bg-[#FF7500] ring-1 ring-[#16191C] hover:text-white transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center ">
                <h4 className="w-99 h-19 top-16 left-115 opacity-1 font-monasans font-bold text-base leading-[19.2px]">Choose Plan</h4>{" "}
                <span className="ml-2">
                  <FaArrowRight size={15} />
                </span>
              </button>
              <div className="flex flex-col justify-center w-full mt-12">
                <h3 className="text-xl font-bold mb-7 text-left">Major Features</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">RAM:</p>
                    <p className="text-center text-black-700 text-lg font-bold">8GB</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Processor</p>
                    <p className="text-center text-black-700 text-lg font-bold">1 Core</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Storage</p>
                    <p className="text-center text-black-700 text-lg font-bold">25GB</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-lg">Bandwidth</p>
                    <p className="text-center text-black-700 text-lg font-bold">1TB</p>
                  </div>
                  {/* Additional feature details here */}
                </div>
                <button className="text-[#16191C]/60 font-mona-sans text-lg font-semibold group leading-[24px] flex flex-row items-center justify-center mx-auto !mt-10">
                  See All Features in Details{" "}
                  <span className="ml-1 mt-0.5 group-hover:translate-x-1 transition-all duration-300">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {millions} */}
      <div className=" flex flex-col md:flex-row gap-y-10 opacity-1 mx-auto items-center justify-center gap-20  py-20 md:py-24">
        <div className="flex flex-col item-center justify-center mx-auto ">
          <div>
            <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.2M+</h2>
          </div>
          <div className="item-center justify-center mt-6">
            <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
              trusted by 1.2 <br />
              millions users
            </p>
          </div>
        </div>
        <div className="hidden md:block w-[172px]  border-t border-gray-200 transform rotate-90 opacity-1"></div>
        <div className="flex flex-col item-center justify-center mx-auto ">
          <div>
            <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center">1.5M+</h2>
          </div>
          <div className="item-center justify-center mt-6">
            <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
              websites hosted in more <br />
              than <strong>150 </strong>countries
            </p>
          </div>
        </div>
        <div className="hidden md:block w-[172px]  border-t border-gray-200 transform rotate-90 opacity-1"></div>
        <div className="flex flex-col item-center justify-center mx-auto ">
          <div>
            <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center">96%</h2>
          </div>
          <div className="item-center justify-center mt-6">
            <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
              customer support <br />
              satisfaction score
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plans;