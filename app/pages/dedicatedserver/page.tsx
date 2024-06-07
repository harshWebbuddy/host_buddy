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
import Ratingpanel2 from "./Ratingpanel";

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
        <div className="space-y-10 2xl:space-y-32 ">
        <div className="2xl:flex xl:flex bl:flex lg:flex md:flex hidden"><Ratingpanel2/></div> 
        <div className="p-4 2xl:hidden xl:hidden bl:hidden lg:hidden md:hidden flex"> <Ratingpanel /></div> 
          <Plan2 />
        </div>
      </section>
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
