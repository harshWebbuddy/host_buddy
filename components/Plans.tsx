import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SquareBoxes: React.FC = () => {
  return (
    <div className="w-8/12 bg-gray-200 flex flex-col justify-between item-center">
      <div className="flex flex-row justify-center">
        <div>
          <h2 className="text-4xl font-bold">The Perfect - Web Hosting Plan</h2>
        </div>{" "}
        <div>
          <h2>Monthly</h2>
          <h2>Yearly</h2>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-8/12 m-4">
          <div className="w-80 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center ">IGNITE</h2>
            <p className="text-xs text-center mb-3">From</p>
            <div className="text-3xl text-center font-bold text-orange-400 ">
              $29
            </div>
            <p className="text-center text-sm text-gray-600 mb-4">/month</p>
            <button className=" text-black text-xl px-4 py-2 rounded-md border font-bold border-black flex items-center justify-center w-full">
              Choose Plan <span className="ml-2">&#8594;</span>
            </button>
            <div className="flex flex-col justify-center w-9/12 mt-6">
              <h3 className="text-lg font-semibold mb-1">Major Feature</h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="  text-black text-xs px-4 py-2 rounded-md font-bold  flex items-center justify-center w-full mt-4">
              See All Features in Details{" "}
              <span className="ml-2">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
        <div className="w-8/12 m-4">
          <div className="w-80 bg-black rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center text-white ">
              ELITE
            </h2>
            <p className="text-xs text-center mb-3  text-white">From</p>
            <div className="text-3xl text-center font-bold text-orange-400 ">
              $29
            </div>
            <p className="text-center text-sm  mb-4 text-white">/month</p>
            <button className=" bg-orange-500 text-whit text-xl px-4 py-2 rounded-md border font-bold border-black flex items-center justify-center w-full">
              Choose Plan <span className="ml-2">&#8594;</span>
            </button>
            <div className="flex flex-col justify-between w-9/12 mt-6">
              <h3 className="text-lg font-semibold mb-1 text-white">
                Major Feature
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs  text-white">
                      RAM:
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold  text-white">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs  text-white">
                      RAM:
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold  text-white">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs  text-white">
                      RAM:
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold  text-white">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs  text-white">
                      RAM:
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold  text-white">
                      8GB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="  text-orange-400 text-xs px-4 py-2 rounded-md font-bold  flex items-center justify-center w-full mt-4">
              See All Features in Details{" "}
              <span className="ml-2">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
        <div className="w-8/12 m-4">
          <div className="w-80 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center ">IGNITE</h2>
            <p className="text-xs text-center mb-3">From</p>
            <div className="text-3xl text-center font-bold text-orange-400 ">
              $29
            </div>
            <p className="text-center text-sm text-gray-600 mb-4">/month</p>
            <button className=" text-black text-xl px-4 py-2 rounded-md border font-bold border-black flex items-center justify-center w-full">
              Choose Plan <span className="ml-2">&#8594;</span>
            </button>
            <div className="flex flex-col justify-between w-9/12 mt-6">
              <h3 className="text-lg font-semibold mb-1">Major Feature</h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-40">
                  <div>
                    <p className="text-center text-black-700 text-xs">RAM:</p>
                  </div>
                  <div>
                    <p className="text-center text-black-700 text-xs font-bold">
                      8GB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="  text-black text-xs px-4 py-2 rounded-md font-bold  flex items-center justify-center w-full mt-4">
              See All Features in Details{" "}
              <span className="ml-2">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row item-center justify-center gap-40 mt-20">
        <div className="flex flex-col ">
          <div>
            <h2 className="text-7xl font-extrabold text-orange-500 ">1.2M+</h2>
          </div>
          <div className="item-center justify-center ml-8">
            <p className="w-1/2 justify-center">
              trusted by 1.2 millions users
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <h2 className="text-7xl font-extrabold text-orange-500 ">1.2M+</h2>
          </div>
          <div className="item-center justify-center ml-8">
            <p className="w-1/2 justify-center">
              trusted by 1.2 millions users
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <h2 className="text-7xl font-extrabold text-orange-500 ">1.2M+</h2>
          </div>
          <div className="item-center justify-center ml-8">
            <p className="w-1/2 justify-center">
              trusted by 1.2 millions users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Plans = () => {
  return (
    <div className="flex justify-center items-center">
      <SquareBoxes />
    </div>
  );
};

export default Plans;
