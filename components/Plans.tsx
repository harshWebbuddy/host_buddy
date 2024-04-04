
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Plans = () => {
  return (
    <div className="w-full flex flex-col md:flex-col justify-center items-center h-full">
      {/* heading */}
      <div className="flex flex-col md:flex-row  justify-between  max-w-[1220px] max-h-[78px] gap-x-28 opacity-1 items-center mb-5 ">
        <div className="relative">
          <div className="justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-semibold font-mona-sans">The Perfect - Web Hosting Plan</h2>
          </div>
          <div className="absolute w-3 xl:w-14 sm:w-16 md:w-32 h-0.5 bg-orange-500  top-8 md:top-10"></div>
        </div>        
        <div className="flex flex-row mx-auto gap-3">
          <h2
            className="text-base md:text-lg"
            style={{
              fontFamily: "Mona Sans",
              fontWeight: 400,
              lineHeight: "32px",
              letterSpacing: "-0.2px",
              textAlign: "right",
            }}>
            Monthly
          </h2>
          <Image src="/switchicon.svg" alt="logo" width={18} height={18} className="object-contain" />
          <h2
            className="text-base md:text-lg"
            style={{
              fontFamily: "Mona Sans",
              fontWeight: 400,
              lineHeight: "32px",
              letterSpacing: "-0.2px",
              textAlign: "right",
            }}>
            Yearly
          </h2>
          <h4
            className="text-xs md:text-sm"
            style={{
              fontFamily: "Mona Sans",
              fontWeight: 10000,
              lineHeight: "20px",
              letterSpacing: "2px",
              color: "#FF7500",
              background: "#F9EFE4",
              padding: "1px 2px", 
              borderRadius: "1rem",
              marginLeft: "1px",
              height: "20px",
              marginTop: "9px",
            }}>
            <span className="ml-1">SAVE</span>
            <span className="ml-1">25</span>
            <span className="ml-1 mr-1">%</span>
          </h4>
        </div>
      </div>
      {/* cards */}
      <div className="max-w-[1219px] max-h-[810.62px] gap-80 opacity-1">
        <div className="flex flex-col md:flex-row mt-10 w-full justify-center gap-8 items-center mx-auto">
          <div className="w-393 h-545">
            <div className="w-full bg-customBackground  rounded-lg shadow-md p-6">
              <h2 className="font-mona-sans font-bold text-2xl leading-7 text-center w-84 h-30 gap-0 text-gray-900 ">IGNITE</h2>
              <p className=" font-mona-sans  leading-7  w-36  h-17 gap-0  text-xs text-center mx-auto  mb-3 opacity-45 text-gray-900">From</p>
              <div className="font-semibold text-6xl leading-9 text-center font-mono-sans -serif text-orange-500">$29</div>
              <p className="font-mona-sans text-base font-normal leading-21 text-center w-50 h-17 gap-0 opacity-45">/Month</p>
              <button className="text-black text-xl px-4 py-2 rounded-md border font-bold border-black flex items-center justify-center w-full">
                Choose Plan <span className="ml-2">&#8594;</span>
              </button>
              <div className="flex flex-col justify-center w-full mt-6">
                <h3 className="text-lg font-semibold mb-1">Major Feature</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-black text-xs px-4 py-2 rounded-md font-bold flex items-center justify-center w-full mt-4">
                See All Features in Details{" "}
                <span className="ml-2">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
          <div className="w-393 h-545">
            <div className="w-full bg-customBackground  rounded-lg shadow-md p-6">
            <h2 className="font-mona-sans font-bold text-2xl leading-7 text-center w-84 h-30 gap-0 text-gray-900 ">IGNITE</h2>
            <p className=" font-mona-sans  leading-7  w-36  h-17 gap-0  text-xs text-center mx-auto  mb-3 opacity-45 text-gray-900">From</p>
            <div className="font-semibold text-6xl leading-9 text-center font-mono-sans -serif text-orange-500">$29</div>
            <p className="font-mona-sans text-base font-normal leading-21 text-center text-gray-900 mb-4  opacity-45">/Month</p>
              <button className="text-black text-xl px-4 py-2 rounded-md border font-bold border-black flex items-center justify-center w-full">
                Choose Plan <span className="ml-2">&#8594;</span>
              </button>
              <div className="flex flex-col justify-center w-full mt-6">
                <h3 className="text-lg font-semibold mb-1">Major Feature</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-black text-xs px-4 py-2 rounded-md font-bold flex items-center justify-center w-full mt-4">
                See All Features in Details{" "}
                <span className="ml-2">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
          <div className="w-393 h-545">
            <div className="w-full bg-customBackground  rounded-lg shadow-md p-6">
            <h2 className="font-mona-sans font-bold text-2xl leading-7 text-center w-84 h-30 gap-0 text-gray-900 ">IGNITE</h2>
              <p className=" font-mona-sans  leading-7  w-36  h-17 gap-0  text-xs text-center mx-auto  mb-3 opacity-45 text-gray-900">From</p>
              <div className="font-semibold text-6xl leading-9 text-center font-mono-sans -serif text-orange-500">$29</div>
              <p className="font-mona-sans text-base font-normal leading-21 text-center text-gray-900 mb-4  opacity-45">/Month</p>
              <button className="text-black text-xl px-4 py-2 rounded-md border font-bold border-black flex items-center justify-center w-full">
                Choose Plan <span className="ml-2">&#8594;</span>
              </button>
              <div className="flex flex-col justify-center w-full mt-6">
                <h3 className="text-lg font-semibold mb-1">Major Feature</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold">8GB</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-black text-xs px-4 py-2 rounded-md font-bold flex items-center justify-center w-full mt-4">
                See All Features in Details{" "}
                <span className="ml-2">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {millions} */}
      <div className="flex flex-col md:flex-row item-center justify-center gap-40 mt-20">
        <div className="flex flex-col ">
          <div>
            <h2 className="text-7xl font-extrabold text-orange-500 ">1.2M+</h2>
          </div>
          <div className="item-center justify-center ml-8">
            <p className="w-1/2 justify-center">trusted by 1.2 millions users</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <h2 className="text-7xl font-extrabold text-orange-500 ">1.2M+</h2>
          </div>
          <div className="item-center justify-center ml-8">
            <p className="w-1/2 justify-center">trusted by 1.2 millions users</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <h2 className="text-7xl font-extrabold text-orange-500 ">1.2M+</h2>
          </div>
          <div className="item-center justify-center ml-8">
            <p className="w-1/2 justify-center">trusted by 1.2 millions users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans  ;