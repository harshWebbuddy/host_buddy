import React from "react";
import HeroHosting from "./Hero";
import Plans from "./Plans";
import Faqs from "./Faqs";
import Features from "./box";
import Black from "./black";

const page = () => {
  return (
    <main className="overflow-hidden">
      {/* hero page  */}
      <section>
        <HeroHosting />
        <div className="sldie-reveal flex flex-wrap max-w-[1300px] justify-between  mx-auto items-center  pt-20">
          <img src="/features/2.svg" className="items-center justify-center "/>
          <img src="/arrow.gif" className="w-40"/>

          <img src="/features/4.svg" className="pt-4"/>

        </div>
      </section>
      <section className="pt-10">
        <Features />
      </section>
      <section className="pt-40">
        <Black/>
      </section>
      <section>
        <div className="pt-40 pb-20 ">
          <Plans />
        </div>
      </section>

      <div className="pt-24">
        <Faqs />
      </div>
    </main>
  );
};

export default page;
