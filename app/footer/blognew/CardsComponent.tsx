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
                src="/blog1.svg"
                width={600}
                height={438}
                alt=""
                className="rounded-2xl " 
              />
             
           
            </div>
          </div> 
          <div className="w-full space-y-4">
          <div className="">
            
       <h2 className="text-[28px] leading-[34px] font-semibold">  Lorem ipsum dolor sit amet, consec tetuer.</h2>
          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-4 items-start flex-col">
              <p className="capitalize text-[15px] leading-6">
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.
              </p>
              <h2 className="text-[28px] leading-[34px] font-semibold">  Lorem ipsum dolor sit amet, consec tetuer.</h2>

            </li>

         
          </ul>
        </div>
      
        </div>
        <div className="w-full flex flex-col xl:flex-row-reverse justify-between gap-x-20 gap-y-20  2xl:gap-y-0 items-center">
         
       
          <div className="w-full space-y-4">
          <div className="2xl:pr-20">
          <h2 className="text-[28px] leading-[34px] font-semibold"> Pellentesque augue diam augue lectus.</h2>

          </div>
          <ul className="w-full space-y-4">
            <li className="flex gap-10 items-start flex-col">
              <p className="capitalize text-[15px] leading-6">
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum.
              </p>
              <p>Euipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.</p>

            </li>

         
          </ul>
        </div>
        <div className="w-full flex justify-center">
            <div className="">
              <Image
                src="/blog2.svg"
                width={574}
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
