import React from "react";
import HeroHosting from "./Hero";
import Plans from "./Plans";
import Faqs from "./Faqs";
import Features from "./box";
import Black from "./black";
import { NavBar } from "@/components";

const page = () => {
  return (
    <main className="overflow-hidden">
      {/* hero page  */}
      <NavBar className="text-white"/>
      <section>
        <HeroHosting />
        <div className="slide-reveal flex xl:flex-row lg:flex-col flex-col md:flex-col bl:flex-row 2xl:flex-row max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1300px] justify-between  mx-auto items-center  pt-16 2xl:pt-20">
          <img src="/features/2.svg" className="items-center justify-center "/>
          <img src="/arrow.gif" className="w-40"/>

          <img src="/features/4.svg" className="pt-4"/>

        </div>
      </section>
      <section className="2xl:pt-10">
        <Features />
      </section>
      <section className="pt-16 2xl:pt-40">
        <Black/>
      </section>
      <section>
        <div className="pt-16 2xl:pt-40  2xl:pb-20 overflow-hidden ">
          <Plans />
        </div>
      </section>
<section className="pt-20">
      <div className="pt-16 2xl:pt-24 pb-60 w-full bg-[#F9EFE4]">
        <Faqs />
      </div></section>
    </main>
  );
};

export default page;
