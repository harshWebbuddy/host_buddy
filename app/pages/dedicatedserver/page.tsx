import React from "react";
import HeroHosting from "./Hero";
import Ratingpanel from "./Rating";
import Plan2 from "./plan2";
import Unique from "./stands";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import CaseStudy from "./CaseStudy";
import Adds from "./unique";
import { NavBar } from "@/components";

const page = () => {
  return (
    <main className="overflow-hidden">
      <NavBar className="text-white"/>
      {/* hero page  */}
      <section>
        <HeroHosting />
      </section>
      
      {/* rating panel  */}
      <section>
        <div className="">
          <Ratingpanel />
        </div>
      </section>

      {/* plan page */}
      <div className="pt-16 2xl:pt-32 ">
        <Plan2 />
      </div>
      {/* what make hostbuddy unique section */}
      <section className="pt-16">
        <Unique />
      </section>

      <section className="2xl:pt-10">
        <Adds />

        <Testimonials />
      </section>

      {/* Question Answers */}
      <section className="2xl:pt-20">
        <Faqs />
      </section>
      {/* caseStudies */}
      <section className="pt-20 2xl:pt-40 pb-40 2xl:pb-80">
        <CaseStudy />
      </section>
    </main>
  );
};

export default page;
