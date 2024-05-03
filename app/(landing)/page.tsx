"use client";

import Locationpage from "./components/Locationpage";
import CardsComponent from "./components/CardsComponent";
import Image from "next/image";
import { Panela, Panelb, Panelc } from "@/components/svgs";
import { BiChevronRight } from "react-icons/bi";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import { caseStudies } from "./components/constants/casestudies";
import { BsArrowRight } from "react-icons/bs";
import Ratingpanel from "./components/Rating";
import Plans from "./components/Plans";

export default function HomeMainPage() {
  return (
    <main className="overflow-hidden">
      {/* hero section */}

      <section className="h-full min-h-[80vh] overflow-hidden relative bg-black flex items-center justify-center">
        <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
        <div className="max-w-[1420px] mx-auto text-white px-4 pt-40 pb-10 2xl:py-40">
          <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
            <div className="relative w-full flex flex-col justify-center 2xl:justify-start space-y-7">
              <h2 className="font-mono-sans text-sm font-light italic leading-relaxed text-center 2xl:text-left">
                <span className="text-white opacity-90 font-light">Welcome to </span>
                <span className="text-orange-500 font-bold">HostBuddy</span>
              </h2>
              <h1 className="font-mono-sans font-semibold text-[54px] leading-relaxed text-center 2xl:text-left">Dedicated Servers High Performance</h1>
              <p className="font-mono-sans text-[18px] font-light leading-loose text-center 2xl:text-left text-[#EBEBEB]">
                By trusting us with your business and projects needs, we promise a<span className="text-orange-500 opacity-100 font-bold mx-2">99.9%</span>
                uptime on any services we provide, outside of any standard maintenance we may provide.
              </p>
              <div className="flex flex-row justify-center 2xl:justify-start !mt-10 gap-6">
                <button className="h-[56px] px-6 flex item-center justify-center bg-orange-500 rounded-xl py-4 gap-x-3">
                  <Image src="/shoppingcart.svg" alt="" width={24} height={24} />
                  <h2 className="font-mona-sans text-[17px] font-semibold leading-[21.6px] text-left">Order Now</h2>
                </button>
                <button className="relative max-w-fit flex group items-center justify-center !mt-0 px-4">
                  <div className="flex items-center gap-x-3">
                    <p className="text-[16px] font-bold text-white">Read more</p>
                    <Image src="/arrow.svg" alt="" width={20} height={20} />
                  </div>
                  <div className="bg-white h-0.5 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
                </button>
              </div>
              <p className="flex max-w-fit mx-auto 2xl:mx-0 gap-2 underline text-[#EBEBEB]">
                <Image src="/tick2.svg" alt="tick" width={20} height={20} />
                30 day money back garantee
              </p>
            </div>

            <div className="w-full item-center justify-center">
              <Image src="/homeimages.svg" alt="" width={500} height={500} className="item-center justify-center mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* rating and web hosting plans page */}
      <section>
        <div className="  ">
          <Ratingpanel />
          <Plans />
        </div>
      </section>


      <section className="text-white bg-gradient-to-b from-[#292E34] to-[#16191C] pt-14 pb-20">
        <Locationpage />
      </section>
      <section className="max-w-[1460px] mx-auto my-20">
        <CardsComponent />
      </section>

      {/* What Makes HostBuddy Unique? */}
      <section className="bg-[#F9EFE4] relative">
        <div className="p-4 w-full max-w-[1420px] mx-auto flex flex-col md:flex-row items-center justify-center py-20">
          <Image src="/dotted.svg" alt="" width={100} height={100} className="ml-1 absolute left-0 top-20 opacity-50" />
          <div className="flex flex-col 22xl:flex-row mx-auto items-center justify-between ">
            <div className="w-full ">
              <div className="space-y-5">
                <h4 className="text-5xl text-black font-semibold font-mona-sans leading-normal">
                  What Makes Host<span className="text-orange-500">Buddy </span>
                  Unique?
                </h4>
                <p className="text-[16px] leading-loose font-mono-sans">
                  Lorem ipsum dolor sit amet conscatetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu. Erat nibh
                  nisl lacinia egestas mauris facilisi aliquam sit mauris.{" "}
                </p>
              </div>
              <div className="space-y-2 22xl:max-w-xl">
                <div className="relative group space-y-3">
                  <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                    <div className="ml-8 flex md:flex-row items-center">
                      <Panela className="text-[#16191C]/30 group-hover:text-orange-500 transition-all duration-500 w-full max-w-fit" />
                      <div className="transition-all duration-300 cursor-pointer m-8 md:gap-6 text-[#16191C]">
                        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">Sub Users </h2>
                        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                          Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.o.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
                </div>
                <div className="relative group space-y-3">
                  <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                    <div className="ml-8 flex md:flex-row items-center">
                      <Panelb className="text-[#16191C]/30 group-hover:text-orange-500 transition-all duration-500 w-full max-w-fit" />
                      <div className="transition-all duration-300 cursor-pointer m-8 md:gap-6 text-[#16191C]">
                        <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">Game Panel Demo </h2>
                        <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                          Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
                </div>
                <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                  <div className="ml-8 flex md:flex-row items-center">
                    <Panelc className="text-[#16191C]/30 group-hover:text-orange-500 transition-all duration-500 w-full max-w-fit" />
                    <div className="transition-all duration-300 cursor-pointer m-8 md:gap-6 text-[#16191C]">
                      <h2 className="text-[24px] font-bold opacity-1 mb-4 group-hover:text-orange-500">99.95% Uptime </h2>
                      <p className="font-mona-sans text-[16px] font-normal leading-normal text-left">
                        Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Image src="/man_jumping.svg" alt="" width={550} height={550} className="" />
            </div>
          </div>
        </div>
      </section>

      {/* Awards and recognition  */}
      <div className="w-full flex flex-col gap-10 md:gap-16 mx-auto mt-20 max-w-[1420px] p-4">
        <div className="flex flex-col 2xl:flex-row w-full justify-between items-center">
          <h4 className="text-[42px] text-center text-black font-semibold font-mona-sans leading-relaxed">
            Our <span className="pb-4 border-b-4 border-orange-500">Awards</span> & Recognition
          </h4>
          <button className="relative max-w-fit hidden 22xl:flex flex-row group items-center justify-center">
            <div className="flex items-center gap-x-3">
              <p className="text-[16px] font-bold text-orange-500">See All Awards & Recognition </p>
              <BiChevronRight className="text-orange-500" />
            </div>
            <div className="bg-orange-500 h-0.5 absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 bg-[#ebebeb] p-5 md:p-10 rounded-3xl">
          <Image src="/awards1.svg" width={250} height={250} alt="Client 1" />
          <Image src="/awards2.svg" width={250} height={250} alt="Client 2" />
          <Image src="/awards3.svg" width={250} height={250} alt="Client 3" />
          <Image src="/awards4.svg" width={250} height={250} alt="Client 4" />
        </div>
        <button className="relative max-w-fit flex 22xl:hidden flex-row group items-center justify-center">
          <div className="flex items-center gap-x-3 pb-3">
            <p className="text-[16px] font-bold text-orange-500">See All Awards & Recognition </p>
            <BiChevronRight className="text-orange-500" />
          </div>
          <div className="bg-orange-500 h-0.5 absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500" />
        </button>
      </div>

      {/* client testimonials section*/}
      <Testimonials />

      {/* frequently asked questions section */}

      <Faqs />

      {/* Our featured case study section*/}

      <section className="bg-[#F5F5F5] mt-20 py-20">
        <div className="max-w-[1360px] mx-auto p-4">
          <h1 className="text-[42px] font-semibold">
            Our Featured <span className="pb-4 border-b-4 border-orange-500">CaseStudy</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-6 gap-x-4 mt-10">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="space-y-6">
                <Image src={caseStudy.image} alt="" width={500} height={500} className="w-full h-[240px] object-cover rounded-xl" />
                <h1 className="text-xl font-bold leading-relaxed">{caseStudy.title}</h1>
                <button className="relative max-w-fit flex flex-row group items-center justify-center !mt-4">
                  <div className="flex items-center gap-x-3 pb-2">
                    <p className="text-[16px] font-bold text-orange-500">Read more</p>
                    <BiChevronRight className="text-orange-500" />
                  </div>
                  <div className="bg-orange-500 h-0.5 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire a pro section */}
      <section className="py-20 px-4">
        <div className="max-w-[1360px] mx-auto item-center justify-center w-full">
          <div className="bg-[rgb(249,239,228)] 2xl:gap-0 w-full rounded-3xl mx-auto flex flex-col py-8 p-4 sm:p-5 md:p-10 2xl:p-12 2xl:p-20">
            <div className="flex gap-20 items-start justify-between">
              <div className="space-y-5 w-full">
                <div className="flex gap-x-5">
                  <Image src="/hostbuddy.svg" alt="" width={150} height={100} />
                  <h1 className="text-orange-500 text-2xl font-bold">[ Pro Services ]</h1>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[42px] font-semibold max-w-md">Hire a Pro - We'll Do It For You</h2>
                  <p className="leading-loose">
                    Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
                  </p>
                </div>
                <div className="!mt-10 flex flex-col md:flex-row gap-5">
                  <div className="ring-1 ring-[#16191C29] hover:ring-0 hover:bg-white p-10 transition-all duration-500 cursor-pointer rounded-3xl group space-y-3 2xl:max-w-[408px]">
                    <Image src="/hirebox1.svg" className="image" alt="Web Design Icon" width={100} height={100} />
                    <h2 className="text-black text-2xl leading-relaxed font-semibold">Web Design</h2>
                    <p className="text-[16px] leading-[24px] text-[#16191C]/70">Laoreet scelerisque euismod egestas suspendisse.</p>
                    <button className="bg-transparent p-4 ring-1 ring-[#16191C29] rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <BsArrowRight size={30} />
                    </button>
                  </div>
                  <div className="block 2xl:hidden ring-1 ring-[#16191C29] hover:ring-0 hover:bg-white p-10 transition-all duration-500 cursor-pointer rounded-3xl group space-y-3 22xl:max-w-[408px]">
                    <Image src="/hirebox1.svg" className="image" alt="Web Design Icon" width={100} height={100} />
                    <h2 className="text-black text-2xl leading-relaxed font-semibold">Web Design</h2>
                    <p className="text-[16px] leading-[24px] text-[#16191C]/70">Laoreet scelerisque euismod egestas suspendisse.</p>
                    <button className="bg-transparent p-4 ring-1 ring-[#16191C29] rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <BsArrowRight size={30} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full hidden 22xl:flex justify-end">
                <Image src="/video.svg" alt="" width={430} height={430} />
              </div>
            </div>
            <div className="flex flex-col 2xl:flex-row mt-5 gap-5">
              <div className="hidden 2xl:block ring-1 ring-[#16191C29] hover:ring-0 hover:bg-white p-10 transition-all duration-500 cursor-pointer rounded-3xl group space-y-3 2xl:max-w-[408px]">
                <Image src="/hirebox1.svg" className="image" alt="Web Design Icon" width={100} height={100} />
                <h2 className="text-black text-2xl leading-relaxed font-semibold">Web Design</h2>
                <p className="text-[16px] leading-[24px] text-[#16191C]/70">Laoreet scelerisque euismod egestas suspendisse.</p>
                <button className="bg-transparent p-4 ring-1 ring-[#16191C29] rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <BsArrowRight size={30} />
                </button>
              </div>
              <div className="flex flex-col md:flex-row 2xl:-translate-y-20 gap-5">
                <div className="ring-1 ring-[#16191C29] hover:ring-0 hover:bg-white p-10 transition-all duration-500 cursor-pointer rounded-3xl group space-y-3 2xl:max-w-[408px]">
                  <Image src="/hirebox1.svg" className="image" alt="Web Design Icon" width={100} height={100} />
                  <h2 className="text-black text-2xl leading-relaxed font-semibold">Web Design</h2>
                  <p className="text-[16px] leading-[24px] text-[#16191C]/70">Laoreet scelerisque euismod egestas suspendisse.</p>
                  <button className="bg-transparent p-4 ring-1 ring-[#16191C29] rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <BsArrowRight size={30} />
                  </button>
                </div>
                <div className="ring-1 ring-[#16191C29] hover:ring-0 hover:bg-white p-10 transition-all duration-500 cursor-pointer rounded-3xl group space-y-3 2xl:max-w-[408px]">
                  <Image src="/hirebox1.svg" className="image" alt="Web Design Icon" width={100} height={100} />
                  <h2 className="text-black text-2xl leading-relaxed font-semibold">Web Design</h2>
                  <p className="text-[16px] leading-[24px] text-[#16191C]/70">Laoreet scelerisque euismod egestas suspendisse.</p>
                  <button className="bg-transparent p-4 ring-1 ring-[#16191C29] rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <BsArrowRight size={30} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex 2xl:hidden justify-center mt-8">
              <Image src="/video.svg" alt="" width={430} height={430} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1360px] mx-auto p-4">
          <div className="flex  flex-col gap-20 22xl:gap-10 xl:items-stretch 2xl:items-stretch pa:items-center pa:justify-center">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <h2 className="w-full text-[42px] font-semibold">
                Need Some <span className="pb-4 border-b-4 border-orange-500">Help?</span>
              </h2>
              <p className="w-full leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-full px-10 py-7 bg-[#F5F5F5] flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                  <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
                  <div className="bg-gray-500/10 w-[3px] h-20"></div>
                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-2xl font-bold md:whitespace-nowrap">Sales Help</h2>
                    <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>{" "}
                  </div>
                </div>
                <div className="w-full px-10 py-7 bg-[#F5F5F5] flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                  <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
                  <div className="bg-gray-500/10 w-[3px] h-20"></div>
                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-2xl font-bold md:whitespace-nowrap">Support Chat</h2>
                    <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>{" "}
                  </div>
                </div>
                <div className="w-full px-10 py-7 bg-[#F5F5F5] hidden 2xl:flex items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                  <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
                  <div className="bg-gray-500/10 w-[3px] h-20"></div>
                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-2xl font-bold md:whitespace-nowrap">Support Email</h2>
                    <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>{" "}
                  </div>
                </div>
              </div>
              <div className="md:max-w-lg mx-auto w-full px-10 py-7 bg-[#F5F5F5] flex 2xl:hidden items-center rounded-2xl cursor-pointer gap-6 hover:shadow-lg transition-all duration-500">
                <Image src="\phone-call-svgrepo-com.svg" width={40} height={40} alt="Call Icon" />
                <div className="bg-gray-500/10 w-[3px] h-20"></div>
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-2xl font-bold md:whitespace-nowrap">Support Email</h2>
                  <p className="text-lg leading-relaxed text-[#16191C]/70">24/7/365 Through the Chat Widget</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
