import React from "react";
import HeroHosting from "./Hero";

import Features from "./box";
import Black from "./black";

const page = () => {
  return (
    <main className="overflow-hidden">
      {/* hero page  */}
      <section>
        <HeroHosting />
      </section>
      <section className="pt-20 p-2">
        <Features />
      </section>
      <section className="pt-16 pb-80 p-2">
        <Black/>
      </section>
        
    </main>
  );
};

export default page;
