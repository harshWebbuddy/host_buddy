import React from "react";
import HeroHosting from "./Hero";
import Ratingpanel from "./Rating";
import Plans from "./Plans";
import CaseStudy from "./CaseStudy";
import Locationpage from "./Locationpage";
import Faqs from "./Faqs";
import ContactForm from "@/components/Form";
import Features from "./box";
import Support from "./plan2";

const page = () => {
  return (
    <main className="overflow-hidden">
      {/* hero page  */}
      <section>
        <HeroHosting />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Support />
      </section>
      <section>
        <div className="pt-60 ">
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
