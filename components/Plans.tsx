import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Plans = () => {
  const CustomSwitchIcon = (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "#FF7500",
      }}
    />
  );
  return (
    <div className="flex flex-col  w-[1220px]  h-[928.62px] mx-auto  items-center justify-center">
      {/* heading */}
      <div className="static flex flex-col sm:w-[300px] sm:gap-[20px]  2xl:w-[1220px] 2xl:ml-0 pa:w-[800px] pa:-ml-96 sm:-ml-[880px] -ml-[900px] gap-4 md:flex-row justify-between opacity-100 items-center mb-8">
        <div className="relative w-full">
          <h2 className="font-mona-sans font-semibold text-lg md:text-4xl leading-[48px] md:leading-[63px] w-full  opacity-1">
            The Perfect - Web Hosting Plan
          </h2>
          <div className="border-t-4 border-orange-500 opacity-100 w-[19%] transition-transform duration-400 hover:scale-110"></div>
        </div>
        <div className="flex flex-row gap-5 md:gap-15 items-center justify-center  ">
          <div>
            <h2 className="font-mona-sans text-xs md:text-base font-normal leading-[24px] md:leading-[32px] tracking-[0.05em] md:tracking-[0.2px] text-right w-[54px] md:w-[71px]  h-[32px] opacity-100">
              Monthly
            </h2>
          </div>
          <div className="-ml-3 -mr-3">
            <Switch
              checkedIcon={CustomSwitchIcon}
              {...label}
              color="default"
              defaultChecked
              className="w-[60px] h-[40px]"
            />
          </div>

          <div>
            <h2 className="font-mona-sans text-base font-normal leading-[32px] tracking-[0.2px] text-right w-[52px] h-[32px] opacity-1">
              Yearly
            </h2>
          </div>
          <div className="w-[85px] mt-1 h-[29px] bg-orange-100 rounded-3xl">
            <h4 className="text-orange-500 m-2 font-mona-sans font-bold text-xs leading-[15.6px] tracking-[1.625px] text-center w-[77px] h-[16px] top-[6px] left-[10px]">
              Save 25%
            </h4>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="static mt-8 w-[1291px] h-[810.62px] items-center justify-center mx-auto flex flex-col ">
        <div className="flex flex-col md:flex-row w-full justify-start gap-8 items-start ml-10 pa:ml-10 2xl:-ml-20 pa:w-[850px] 2xl:w-[1219px] pa:flex-wrap 2xl:flex-nowrap">
          <div className="mb-5 pa:w-[350px]  2xl:w-[393px] h-[545px] bg-[#F9EFE4] p-10 rounded-2xl transition-all duration-300 hover:bg-[#16191C] hover:text-white group">
            <div className="mb-2 w-full p-2">
              <h2 className="font-mona-sans font-bold text-[24px] md:text-3xl text-center  text-gray-900 group-hover:text-white mx-auto">
                IGNITE
              </h2>
              <p className="font-mona-sans text-base font-normal leading-[21px] text-center  opacity-45 ">
                From
              </p>
              <div className="font-bold text-[48px] leading-[9px] text-center font-mono-sans-serif text-orange-500 mt-8 ">
                $29
              </div>
              <p className="font-mona-sans text-base font-normal leading-[21px] text-center opacity-45 mt-6">
                /Month
              </p>
            </div>
            <div className="">
              <button className="w-full h-[52px] text-black text-xl rounded-xl group-hover:bg-[#FF7500] hover:text-white transition-all duration-300 font-bold flex items-center justify-center border-black border-2">
                <h4 className="w-99 h-19 top-16 left-115 opacity-100 font-monasans font-bold text-[16px] leading-[19.2px] ">
                  Choose Plan
                </h4>{" "}
                <span className="ml-2 -mt-0.5">
                  <FaArrowRight size={15} />
                </span>
              </button>
              <div className="flex flex-col justify-center w-full mt-10 gap-[15px]">
                <h3 className="text-xl font-bold mb-2 text-left">
                  Major Features
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      RAM:
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      8GB
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Processor
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      1 Core
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Storage
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      25GB
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Bandwidth
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      1TB
                    </p>
                  </div>
                  {/* Additional feature details here */}
                </div>
                <button className="text-gray-500 group-hover:text-[#FF7500] font-mona-sans text-[16px] mt-2 font-semibold group leading-[24px] flex flex-row items-center justify-center mx-auto ">
                  See All Features in Details{" "}
                  <span className="ml-1  group-hover:translate-x-1 transition-all duration-300">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-5 pa:w-[350px] 2xl:w-[393px] h-[545px] bg-[#F9EFE4] p-10 rounded-2xl transition-all duration-300 hover:bg-[#16191C] hover:text-white group">
            <div className="mb-2 w-full p-2">
              <h2 className="font-mona-sans font-bold text-[24px] md:text-3xl text-center  text-gray-900 group-hover:text-white mx-auto">
                IGNITE
              </h2>
              <p className="font-mona-sans text-base font-normal leading-[21px] text-center  opacity-45 ">
                From
              </p>
              <div className="font-bold text-[48px] leading-[9px] text-center font-mono-sans-serif text-orange-500 mt-8 ">
                $29
              </div>
              <p className="font-mona-sans text-base font-normal leading-[21px] text-center opacity-45 mt-6">
                /Month
              </p>
            </div>
            <div className="">
              <button className="w-full h-[52px] text-black text-xl rounded-xl group-hover:bg-[#FF7500] hover:text-white transition-all duration-300 font-bold flex items-center justify-center border-black border-2">
                <h4 className="w-99 h-19 top-16 left-115 opacity-100 font-monasans font-bold text-[16px] leading-[19.2px] ">
                  Choose Plan
                </h4>{" "}
                <span className="ml-2 -mt-0.5">
                  <FaArrowRight size={15} />
                </span>
              </button>
              <div className="flex flex-col justify-center w-full mt-10 gap-[15px]">
                <h3 className="text-xl font-bold mb-2 text-left">
                  Major Features
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      RAM:
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      8GB
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Processor
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      1 Core
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Storage
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      25GB
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Bandwidth
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      1TB
                    </p>
                  </div>
                  {/* Additional feature details here */}
                </div>
                <button className="text-gray-500 group-hover:text-[#FF7500] font-mona-sans text-[16px] mt-2 font-semibold group leading-[24px] flex flex-row items-center justify-center mx-auto ">
                  See All Features in Details{" "}
                  <span className="ml-1  group-hover:translate-x-1 transition-all duration-300">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-5 pa:w-[730px] 2xl:w-[393px] h-[545px] bg-[#F9EFE4] p-10 rounded-2xl transition-all duration-300 hover:bg-[#16191C] hover:text-white group">
            <div className="mb-2 w-full p-2">
              <h2 className="font-mona-sans font-bold text-[24px] md:text-3xl text-center  text-gray-900 group-hover:text-white mx-auto">
                IGNITE
              </h2>
              <p className="font-mona-sans text-base font-normal leading-[21px] text-center  opacity-45 ">
                From
              </p>
              <div className="font-bold text-[48px] leading-[9px] text-center font-mono-sans-serif text-orange-500 mt-8 ">
                $29
              </div>
              <p className="font-mona-sans text-base font-normal leading-[21px] text-center opacity-45 mt-6">
                /Month
              </p>
            </div>
            <div className="">
              <button className="w-full h-[52px] text-black text-xl rounded-xl group-hover:bg-[#FF7500] hover:text-white transition-all duration-300 font-bold flex items-center justify-center border-black border-2">
                <h4 className="w-99 h-19 top-16 left-115 opacity-100 font-monasans font-bold text-[16px] leading-[19.2px] ">
                  Choose Plan
                </h4>{" "}
                <span className="ml-2 -mt-0.5">
                  <FaArrowRight size={15} />
                </span>
              </button>
              <div className="flex flex-col justify-center w-full mt-10 gap-[15px]">
                <h3 className="text-xl font-bold mb-2 text-left">
                  Major Features
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      RAM:
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      8GB
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Processor
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      1 Core
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Storage
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      25GB
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-black-700 text-[16px]">
                      Bandwidth
                    </p>
                    <p className="text-center text-black-700 text-[16px] font-bold">
                      1TB
                    </p>
                  </div>
                  {/* Additional feature details here */}
                </div>
                <button className="text-gray-500 group-hover:text-[#FF7500] font-mona-sans text-[16px] mt-2 font-semibold group leading-[24px] flex flex-row items-center justify-center mx-auto ">
                  See All Features in Details{" "}
                  <span className="ml-1  group-hover:translate-x-1 transition-all duration-300">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row   mx-auto items-center justify-center gap-10 md:gap-10 md:w-[1016px] pa:w-[700px] 2xl:ml-64 2xl:mt-20 ">
          <div className="flex flex-col item-center justify-center mx-auto relative group ">
            <div>
              <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center flex flex-row">
                1.2M
                <span className="inline-block transition-transform rotate-0 group-hover:rotate-180">
                  +
                </span>
              </h2>
            </div>
            <div className="item-center justify-center mt-6">
              <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
                trusted by 1.2 <br />
                millions users
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center md:opacity-100 pa:opacity-0 2xl:opacity-100">
            <div
              className="2xl:w-[150px] pa:w-[30px] border-t  border-gray-600 transform rotate-90 opacity-1"
              style={{ borderStyle: "dotted" }}
            ></div>
          </div>
          <div className="flex flex-col item-center justify-center mx-auto relative group ">
            <div>
              <h2 className="text-orange-500 font-mona-sans font-extrabold text-7xl text-center flex flex-row">
                1.5M
                <span className="inline-block transition-transform rotate-0 group-hover:rotate-180">
                  +
                </span>
              </h2>
            </div>
            <div className="item-center justify-center mt-6">
              <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
                websites hosted in more <br />
                than <strong>150</strong> countries
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center md:opacity-100 pa:opacity-0 2xl:opacity-100">
            <div
              className="2xl:w-[150px] pa:w-[30px] border-t  border-gray-600 transform rotate-90 opacity-1"
              style={{ borderStyle: "dotted" }}
            ></div>
          </div>{" "}
          <div className="flex flex-col item-center justify-center mx-auto relative group ">
            <div>
              <h2 className=" text-orange-500 font-mona-sans font-extrabold text-7xl text-center flex flex-row">
                96
                <span className="inline-block transition-transform rotate-0 group-hover:rotate-180">
                  %
                </span>
              </h2>
            </div>
            <div className="item-center justify-center mt-6">
              <p className="justify-center font-mona-sans text-lg font-normal text-center leading-relaxed">
                customer support <br />
                satisfaction score
              </p>
            </div>
          </div>
          <img src="/background.svg" className="absolute " />
        </div>
      </div>
    </div>
  );
};
export default Plans;
