import PlanPage from "@/components/PlanPage";
import React from "react";
import Cards from "./cards";
import Unique from "./unique";
import Awards from "./awards";
import Clients from "./clients";
import Question from "./question";
import CaseStudy from "./casestudy";
import Pro from "./pro";
import Help from "./help";
import HostingHome from "./hero_home";
import LocationPage from "./location";
const Home = () => {
  return (
    <div>
   <div>
<HostingHome/>
   </div>
    {/* <div className="">
        <PlanPage/>

    </div> */}
    <div className="mt-20">
        <LocationPage/>

    </div>
    <div className="mt-40" >
        <Cards/>
    </div>
    <div>
      <Unique/>
    </div>
    <div>
      <Awards/>
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
      <div>
      <Pro/>
      </div>
      <div>
      <Help/>
      </div>
    </div>
  );
};

export default Home;
