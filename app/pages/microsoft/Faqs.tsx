"use client";
import { ReactNode, useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { BiMinus, BiPlus } from "react-icons/bi";
import { faqs } from "../../(landing)/components/constants/faqs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="flex flex-col text-left bg-[#ffffff] py-4 px-5 xl:px-10 xl:py-8 rounded-2xl">
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is in view
    triggerOnce: false, // Trigger every time component scrolls into view
  });

  useEffect(() => {
    if (inView) {
      setIsOpen(true);
    }
    else{
      setIsOpen(false)
    }
  }, [inView]);

  return (
    <div className="bg-[#F5F5F5] py-20">
    <div className="w-full max-w-[1360px] mx-auto    p-4 animate-slide-from-left" ref={ref}>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[42px] leading-normal font-mono-sans text-black font-semibold">
          Your Web Hosting Questions{" "}
          <span className="pb-4 border-b-4 border-orange-500">Answered</span>{" "}
        </h2>
      </motion.div>
      <div className="flex flex-col gap-5 mt-20">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index *0.5 }} // Adjust the delay time as needed
          >
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
              }}
            >
              {faq.answer}
            </AccordionItem>
          </motion.div>
        ))}
      </div>
    </div></div>
  );
};

export default Faqs;
  