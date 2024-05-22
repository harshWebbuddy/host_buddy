import React from "react";
import HeroHosting from "./Hero";
import Ratingpanel from "./Rating";
import Plan2 from "./plan2";
import Unique from "./stands";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import CaseStudy from "./CaseStudy";
import Adds from "./unique";

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
        </div>
      </section>

      {/* plan page */}
      <div className="pt-32 ">
        <Plan2 />
      </div>
      {/* what make hostbuddy unique section */}
      <section>
        <Unique />
      </section>

      <section className="pt-20">
        <Adds />

        <Testimonials />
      </section>

      {/* Question Answers */}
      <section className="pt-20">
        <Faqs />
      </section>
      {/* caseStudies */}
      <section className="pt-40 pb-80">
        <CaseStudy />
      </section>
    </main>
  );
};

export default page;
