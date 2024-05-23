import React from "react";
import HeroHosting from "./Hero";
import Features from "./box";


const page = () => {
  return (
    <main className="overflow-hidden">
      {/* hero page  */}
      <section>
        <HeroHosting />
     
      </section>
      <section className="pt-36 pb-80">
        <Features />
      </section>

    </main>
  );
};

export default page;
