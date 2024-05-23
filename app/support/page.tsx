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
     
      </section>
      <section className="pt-36">
        <Features />
      </section>
      <section className="pt-40">
        <Black/>
      </section>
      <section>
        <div className="pt-40 ">
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
