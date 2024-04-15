import React from "react";
import GamingPage from "../homegaming/hero";
import Question from "../home/question";
import CaseStudy from "../home/casestudy";
import Games from "./games";
import Panel from "./panel";

const page = () => {
  return (
    <div>
      <div>
        <GamingPage />
      </div>
      <div>
        <Games />
      </div>
      <div>
        <Panel/>  
      </div>
      <div>
        <Question />
      </div>
      <div>
        <CaseStudy />
      </div>
    </div>
  );
};

export default page;
