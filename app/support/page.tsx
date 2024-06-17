import React from "react";
import HeroHosting from "./Hero";
import Features from "./box";
import { NavBar } from "@/components";


const page = () => {
  return (
    <main className="overflow-hidden">
            <NavBar className='text-white'/>

      {/* hero page  */}
      <section>
        <HeroHosting />
     
      </section>
      <section className="pb-80">
        <Features />
      </section>

    </main>
  );
};

export default page;
