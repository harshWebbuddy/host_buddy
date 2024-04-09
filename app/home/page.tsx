import PlanPage from "@/components/PlanPage";
import React from "react";
import LocationPage from "./location";
import Cards from "./cards";
import Unique from "./unique";
import Awards from "./awards";
import Clients from "./clients";
import Question from "./question";

const Home = () => {
  return (
    <div className="item-center w-full  justify-center mx-auto">
    <div className="bg-black relative w-full h-[1200px] ma:h-[757px] ma:overflow-hidden  ">
      <img
        src="/home.jpg"
        width="1920px"
        height="57px"
        alt="dsdff"
        className="opacity-50 object-cover"
      />
<div className="flex flex-col ma:flex-row   ">
<div className="absolute w-full ma:w-[1920px] h-[757px] top-[100px] ma:top-[50px] left-[23px] ma:left-[350px] gap-[600px] inset-0 items-center justify-center text-white  flex flex-col ma:flex-row  ">
        <div className="relative ma:w-[600px] ma:h-[429px] w-full ">
          <div className="w-full ma:w-[175px] h-[30px] items-center justify-center mb-4">  
            <h2 className="font-mono-sans text-[15px] italic font-light leading-[30px] text-left">
              <span className="text-white opacity-75">Welcome to </span>
              <span className="text-orange-500 font-bold">HostBuddy</span>
            </h2>
          </div>
          <div className="w-full ma:w-[537px] h-[168px]">
            <h2 className="font-mono heading font-medium wording text-left text-white">
              Dedicated Servers High Performance
            </h2>
          </div>
          <div className="w-[365px] ma:w-[600px] pa:w-[800px] h-[78px] -mt-16 pa:-mt-16 ma:-mt-4">
          <p className="font-mono text-[18px] font-light leading-[26px] text-left ">
            <span className="opacity-75">By trusting us with your business and projects needs, we promise a</span>
            <span className="text-orange-500 opacity-100 font-bold ml-1 mr-1">99.9%</span> <span className="opacity-75">uptime on any services we provide, outside of any standard
            maintenance we may provide. </span>
          </p>
          </div>
          <div className="flex flex-row w-[350px] mt-20 ma:mt-8 pa:mt-1">
            <div className="w-[184.95px] h-[52px] bg-orange-500 text-white  rounded-xl">
                <div className="w-[125px] h-[24px] gap-[9px] flex flex-row item-center justify-center mx-auto py-3.5">
                    <div className="item-center justify-center mx-auto">
    <img src="/shoppingcart.svg" width="24px" height="24px"/>
                </div>
                <div className="w-[92px] h-[13px] item-center justify-center mx-auto">
                <h2 className="font-mona-sans text-[17px] font-semibold leading-[21.6px] text-left">Order Now</h2>  
                </div>
                </div>
            </div>
          <div className="w-[160px] h-[20px]  flex flex-row item-center justify-center ml-8 py-3.5">
              
            <div className="w-[134px] h-[12px] item-center justify-center mx-auto">
              <h2 className="font-mona-sans text-[15px] font-semibold leading-[19.2px] text-left">Hosting Overview</h2>  
            </div>
            <div className="item-center justify-center mx-auto py-0.5">
<img src="/arrow.svg" width="16px" height="20px"/>
            </div>
            </div>
        </div>
        <div className="w-[216.41px] h-[26px] mt-8 ma:mt-6 flex flex-row gap-1  " >
            <div className="item-center justify-center mt-1">
            <img src="/tick.png" alt="tick" width="11.41px" height="8.27px" className="opacity-100" />
            </div>
            <div className="w-[195px] h-[26px] item-center justify-center mx-auto">
<h2 className="text-[14px] underline opacity-75 capitalize">30 day money back garantee</h2>
            </div>
        </div>
        </div>
      <div className="w-[350px]  ma:w-[406px] h-[60px] ma:h-[473px] item-center justify-center -mt-[500px]  ma:mt-0 mr-10 ma:mr-0">
            <img src="/homeimages.svg"  className="item-center justify-center mx-auto" />
        </div>
         
      </div>
     
        
</div>
    </div>
    <div>
        <PlanPage/>

    </div>
    <div>
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
    </div>
  );
};

export default Home;
