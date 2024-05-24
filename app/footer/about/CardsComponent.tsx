import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="">
    
      <div className="space-y-20  flex flex-col  max-w-[1300px] mx-auto ">
        <div className=" p-2 w-full flex flex-col xl:flex-row-reverse justify-between gap-x-20 gap-y-20  items-center">
         
        <div className="w-full flex justify-center">
            <div className="">
              <Image
                src="/cardabout1.svg"
                width={600}
                height={438}
                alt=""
                className="rounded-2xl " 
              />
             
           
            </div>
          </div> 
          <div className="w-full space-y-4">
          <div className="">
            
       <h2 className="text-[50px] leading-[74px] font-semibold">   Find Your Online Success
With<span className="text-orange-500"> HostBuddy</span></h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start flex-col">
              <p className="capitalize text-[15px] leading-loose">
              Lorem ipsum dolor sit amet consectetur. Turpis scelerisque ullamcorper interdum elementum suspendisse venenatis eu at. Donec egestas sollicitudin lectus pulvinar tincidunt orci. Auctor dapibus nibh ipsum proin tempus eu. At a eleifend quam id adipiscing cras vel. Diam sed ac cursus nibh facilisi tortor aliquet.
              </p>
<p>Eget pharetra pellentesque tincidunt eu urna sed id ante blandit. Eget enim aenean ultricies mi nascetur et varius risus. Morbi sapien ultricies nunc netus. Pharetra urna quam. </p>
            </li>

         
          </ul>
        </div>
      
        </div>
        <div className=" p-2 w-full flex flex-col xl:flex-row-reverse justify-between gap-x-0 gap-y-20 2xl:gap-y-0 items-center">
         
       
          <div className="w-full space-y-4">
          <div className="2xl:pr-20">
       <h2 className="text-[50px] leading-[74px] capitalize font-semibold">  Globally 
 <span className="text-orange-500"> Recognized</span> Web Host</h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start flex-col">
              <p className="capitalize text-[15px] leading-loose">
              Lorem ipsum dolor sit amet consectetur. Turpis scelerisque ullamcorper interdum elementum suspendisse venenatis eu at. Donec egestas sollicitudin lectus pulvinar tincidunt orci. Auctor dapibus nibh ipsum proin tempus eu. At a eleifend quam id adipiscing cras vel. Diam sed ac cursus nibh facilisi tortor aliquet.
              </p>
<p>Eget pharetra pellentesque tincidunt eu urna sed id ante blandit. Eget enim aenean ultricies mi nascetur et varius risus. Morbi sapien ultricies nunc netus. Pharetra urna quam.    </p>        </li>

         
          </ul>
        </div>
        <div className="w-full flex justify-center">
            <div className="">
              <Image
                src="/cardabout2.svg"
                width={474}
                height={438}
                alt=""
                className="rounded-2xl " 
              />
             
           
            </div>
          </div>
        </div>
       
     
      </div>
 
    </div>
  );
};

export default CardsComponent;
