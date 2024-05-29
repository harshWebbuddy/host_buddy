import React from "react";
import HeroHosting from "./Hero";
import Ratingpanel from "./Rating";
import Plan2 from "./plan2";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import CaseStudy from "./CaseStudy";
import Features from "./Features";
import Adds from "./Security";
import Partner from "./Partner";

const page = () => {
  return (
    <main className="overflow-hidden">
      {/* hero page  */}
      <section>
        <HeroHosting />
      </section>
      {/* rating panel  */}
      <section>
        <div className="space-y-32 ">
          <Ratingpanel />
          <Plan2 />
        </div>
      </section>

      <section className="pt-32">
        <Partner />
      </section>
      <section className="pt-">
        <Adds />
      </section>
      {/* cardsection */}
      <section className="pt-40">
        <Features />
      </section>

      <section>
        <Testimonials />
      </section>

      {/* Question Answers */}
      <section className="pt-20">
        <Faqs />
      </section>
      {/* caseStudies */}
      <section className="pb-56">
        <CaseStudy />
      </section>
    </main>
  );
};

export default page;
