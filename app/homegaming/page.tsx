import React from "react";
import GamingPage from "../homegaming/hero";
import Question from "../home/question";
import CaseStudy from "../home/casestudy";
import Games from "./games";
import Panel from "./panel";
import GameForm from "./form";
import Locationpage from "@/components/Locationpage";

const page = () => {
  return (
    <div className="">
      <div>
        <GamingPage />
      </div>
      {/* <div>
        <Games />
      </div>
      <div>
      <Panel/>
      </div> 
        <div>
        <Locationpage/>
        </div>     
       <div>
        <GameForm/>
      </div>
      
      <div>
        <Question />
      </div>
      <div>
        <CaseStudy />
      </div> */}
    </div>
  );
};

export default page;
