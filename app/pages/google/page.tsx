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
      <section className="pt-12">
        <Adds />
      </section>
      {/* cardsection */}
      <section>
        <Features />
      </section>

      <section>
        <Testimonials />
      </section>

      {/* Question Answers */}
      <section>
        <Faqs />
      </section>
      {/* caseStudies */}
      <section>
        <CaseStudy />
      </section>
    </main>
  );
};

export default page;
