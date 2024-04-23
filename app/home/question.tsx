"use client";
import React, { useState, ReactNode } from "react";
interface AccordionItemProps {
  title: string;
  children: ReactNode;
}
function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col text-left">
      <button
        className="text-left flex flex-row items-center justify-between p-6 text-[16px] md:text-[18px] font-bold "
        onClick={toggleAccordion}
      >
        {title}
        <span className="">
          {isOpen ? <img src="/-minus.svg" className="w-[30px] h-[60px]" /> : <img src="/plus.png" />}
        </span>
      </button>
      {isOpen && <div className="text-left  flex flex-row items-center justify-start p-6 text-[16px] -mt-6  ">{children}</div>}
    </div>
  );
}
const Question = () => {
  return (
    <div className="2xl:w-[1220px] md:h-[603.68px]  pa:w-full mx-auto margin gf:mb-32 ">
      <div className="2xl:w-[779px] xl:ml-16 2xl:h-[63px] mt-20   mb-10 xl:mb-20 2xl:mb-20 ">
        <h2 className="heading wording font-mono-sans text-black font-semibold wording padding">
          Your Web Hosting Questions Answered
        </h2>
        <div className="w-[140px] xl:w-[200px] gf:w-[80px] md:w-48 pa:w-36 h-1 gf:ml-[140px] bg-orange-500 md:mt-2 pa:-mt-2 -mt-4 ml-[190px] xl:ml-[600px] md:ml-[570px] pa:ml-[460px]  xl:-mt-6 2xl:ml-[570px] 2xl:mt-0 "></div>
      </div>
      <div className="flex flex-col gap-5 padding mp:mb-28 xl:ml-12  ">
      <div className="width bg-[#F5F5F5] rounded-2xl">
        <AccordionItem title="Where is HostBuddy based?">
          <h2>
            Lorem ipsum dolor sit amet consectetur. Nisi cum suspendisse nisl
            porttitor amet mattis. Lacinia eu blandit dictum enim sed bibendum
            sed. Hendrerit duis elementum bibendum ut leo vitae id parturient
            nunc. Justo commodo orci pharetra dapibus lacus non morbi auctor.
            Arcu urna vel non mi orci. Ut praesent in.
          </h2>
        </AccordionItem>
      </div>
      <div className="width bg-[#F5F5F5] rounded-2xl">
        <AccordionItem title="What features do I get with web hosting?">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisi cum suspendisse nisl
            porttitor amet mattis. Lacinia eu blandit dictum enim sed bibendum
            sed. Hendrerit duis elementum bibendum ut leo vitae id parturient
            nunc. Justo commodo orci pharetra dapibus lacus non morbi auctor.
            Arcu urna vel non mi orci. Ut praesent in.
          </p>
        </AccordionItem>
      </div>
      <div className="width bg-[#F5F5F5] rounded-2xl">
        <AccordionItem title="Can I migrate my website to HostBuddy?">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisi cum suspendisse nisl
            porttitor amet mattis. Lacinia eu blandit dictum enim sed bibendum
            sed. Hendrerit duis elementum bibendum ut leo vitae id parturient
            nunc. Justo commodo orci pharetra dapibus lacus non morbi auctor.
            Arcu urna vel non mi orci. Ut praesent in.
          </p>
        </AccordionItem>
      </div>
      <div className="width bg-[#F5F5F5] rounded-2xl">
        <AccordionItem title="What kind of web hosting services you offer?">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisi cum suspendisse nisl
            porttitor amet mattis. Lacinia eu blandit dictum enim sed bibendum
            sed. Hendrerit duis elementum bibendum ut leo vitae id parturient
            nunc. Justo commodo orci pharetra dapibus lacus non morbi auctor.
            Arcu urna vel non mi orci. Ut praesent in.
          </p>
        </AccordionItem>
      </div>
      </div>
    </div>
  );
};

export default Question;
