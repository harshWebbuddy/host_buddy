import React from "react";
import HostingPage from "./hero";
import Ratingpanel from "@/components/Rating";
import SharedHosting from "./sharedhosting";
import Planhosting from "./planhosting";
import Unique from "./unique";
import Question from "../../home/question";
import CaseStudy from "../../home/casestudy";
import Clients from "../../home/clients";
import Features from "./features";
import Steps from "./steps";

HostingPage;
const page = () => {
  return (
    <div>
      <div>
        <HostingPage />
      </div>
      <div>
        <Ratingpanel/>
      </div>
      <div>
        <SharedHosting/>
      </div>
      <div className="w-full bg-[#D9D9D9] ">
        <Planhosting/>
      </div>
      <div>
        <Unique/>
      </div>
       <div>
       <Features/>
      </div>
       <div>
       <Steps/>
      </div>
      <div>
      <Clients/>
    </div>
      <div>
      <Question/>
      </div>
      <div>
      <CaseStudy/>
      </div>
    </div>
  );
};

export default page;
