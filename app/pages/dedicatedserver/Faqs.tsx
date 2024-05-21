"use client";
import { ReactNode, useState } from "react";
import { Collapse } from "react-collapse";
import { BiMinus, BiPlus } from "react-icons/bi";
import { faqs } from "../../(landing)/components/constants/faqs";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}
function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="flex flex-col text-left bg-[#F5F5F5] py-4 px-5 xl:px-10 xl:py-8 rounded-2xl">
      <div onClick={onClick} className="cursor-pointer text-left flex flex-row items-center justify-between text-lg font-bold">
        {title}
        <span className="p-4 hover:bg-[#eee] rounded-full transition-all duration-500">{isOpen ? <BiMinus size={30} /> : <BiPlus size={30} />}</span>
      </div>
      <Collapse isOpened={isOpen}>
        <p className="leading-loose pt-4">{children}</p>
      </Collapse>
    </div>
  );
}
const Faqs = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="w-full max-w-[1360px] mx-auto mt-20 p-4">
      <div className="">
        <h2 className="text-[42px] leading-normal font-mono-sans text-black font-semibold">
          Your Web Hosting Questions <span className="pb-4 border-b-4 border-orange-500">Answered</span>{" "}
        </h2>
      </div>
      <div className="flex flex-col gap-5 mt-20">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.question}
            isOpen={isOpen && currentItem === index}
            onClick={() => {
              if (currentItem === index) {
                return setIsOpen((prev) => !prev);
              }
              setIsOpen(true);
              setCurrentItem(index);
            }}>
            {faq.answer}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
