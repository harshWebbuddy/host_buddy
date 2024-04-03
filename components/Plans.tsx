
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Plans = () => {
  return (
    <div className="w-full flex flex-col md:flex-col justify-center items-center bg-white h-full">
      {/* heading */}
      <div className="flex flex-col md:flex-row w-full  md:w-8/12 justify-between gap-40 md:gap-96 items-center mb-20">
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
      <div className="w-full">
        <div className="flex flex-col md:flex-row mt-10 w-full justify-center gap-8 items-center mx-auto">
          <div className="w-full">
            <div className="w-full bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-center ">IGNITE</h2>
              <p className="text-xs text-center mb-3">From</p>
              <div className="text-3xl text-center font-bold text-orange-400 ">$29</div>
              <p className="text-center text-sm text-gray-600 mb-4">/month</p>
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
          <div className="w-full">
            <div className="w-full bg-black rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-center text-white ">ELITE</h2>
              <p className="text-xs text-center mb-3  text-white">From</p>
              <div className="text-3xl text-center font-bold text-orange-400 ">$29</div>
              <p className="text-center text-sm  mb-4 text-white">/month</p>
              <button className=" bg-orange-500 text-whit text-xl px-4 py-2 rounded-md border font-bold border-black flex items-center justify-center w-full">
                Choose Plan <span className="ml-2">&#8594;</span>
              </button>
              <div className="flex flex-col justify-between w-full mt-6">
                <h3 className="text-lg font-semibold mb-1 text-white">Major Feature</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs  text-white">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold  text-white">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs  text-white">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold  text-white">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs  text-white">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold  text-white">8GB</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div>
                      <p className="text-center text-black-700 text-xs  text-white">RAM:</p>
                    </div>
                    <div>
                      <p className="text-center text-black-700 text-xs font-bold  text-white">8GB</p>
                    </div>
                  </div>  
                </div>
              </div>
              <button className="text-orange-400 text-xs px-4 py-2 rounded-md font-bold flex items-center justify-center w-full mt-4">
                See All Features in Details{" "}
                <span className="ml-2">
                  <IoIosArrowForward />
                </span>
              </button>
              w-full{" "}
            </div>
          </div>
          <div className="w-full">
            <div className="w-full bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-center ">IGNITE</h2>
              <p className="text-xs text-center mb-3">From</p>
              <div className="text-3xl text-center font-bold text-orange-400 ">$29</div>
              <p className="text-center text-sm text-gray-600 mb-4">/month</p>
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