"use client";
import Image from "next/image";
import React from "react";
import { Collapse } from "react-collapse";

import { useState, useEffect, useRef } from "react";

const sections = [
  {
    title: "1. Copyright Notice",
    content:
      "HostBuddy owns and operates the HostBuddy website. Unless otherwise stated, all materials appearing on this site, such as text, site design, logos, graphics, icons, photographs, and images, are the exclusive property of HostBuddy or its affiliates, subsidiaries, content suppliers, or partners. These materials should not be reproduced or used without HostBuddy’s express written permission. The collection, arrangement, and assembly of all content on this site are also the exclusive property of HostBuddy.",
  },
  {
    title: "2. Your Use of This Site",
    content:
      "The content on this site can be used as a resource. However, the reproduction, duplication, copying, selling, reselling, or other exploitation of this site or any portion thereof for any commercial purpose not expressly permitted by HostBuddy is strictly prohibited. HostBuddy reserves the right to refuse service, terminate accounts, and/or cancel orders at its discretion, including cases where customer conduct violates applicable laws or is detrimental to our interests.",
  },
  {
    title: "3. Disclaimer",
    content:
      "This site is provided on ans basis. HostBuddy does not make any representations or warranties, whether express or implied, regarding the operation of the site or the information, content, materials, or products included on this site. To the maximum extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose. We will not be liable for any damages of any kind arising from the use of this site, including but not limited to direct, indirect, incidental, punitive, or consequential damages.",
  },
  {
    title: "4. Provider Responsibilities",
    content:
      "The content on this site can be used as a resource. However, the reproduction, duplication, copying, selling, reselling, or other exploitation of this site or any portion thereof for any commercial purpose not expressly permitted by HostBuddy is strictly prohibited. HostBuddy reserves the right to refuse service, terminate accounts, and/or cancel orders at its discretion, including cases where customer conduct violates applicable laws or is detrimental to our interests.",
  },
  {
    title: "5. Service Levels",
    content:
      "HostBuddy owns and operates the HostBuddy website. Unless otherwise stated, all materials appearing on this site, such as text, site design, logos, graphics, icons, photographs, and images, are the exclusive property of HostBuddy or its affiliates, subsidiaries, content suppliers, or partners. These materials should not be reproduced or used without HostBuddy’s express written permission. The collection, arrangement, and assembly of all content on this site are also the exclusive property of HostBuddy.",
  },
  {
    title: "6. Provider Data",
    content:
      "The content on this site can be used as a resource. However, the reproduction, duplication, copying, selling, reselling, or other exploitation of this site or any portion thereof for any commercial purpose not expressly permitted by HostBuddy is strictly prohibited. HostBuddy reserves the right to refuse service, terminate accounts, and/or cancel orders at its discretion, including cases where customer conduct violates applicable laws or is detrimental to our interests.",
  },
  {
    title: "7. Feedback",
    content:
      "The content on this site can be used as a resource. However, the reproduction, duplication, copying, selling, reselling, or other exploitation of this site or any portion thereof for any commercial purpose not expressly permitted by HostBuddy is strictly prohibited. HostBuddy reserves the right to refuse service, terminate accounts, and/or cancel orders at its discretion, including cases where customer conduct violates applicable laws or is detrimental to our interests.",
  },
  {
    title: "8. Warranty Disclaimer",
    content:
      "The content on this site can be used as a resource. However, the reproduction, duplication, copying, selling, reselling, or other exploitation of this site or any portion thereof for any commercial purpose not expressly permitted by HostBuddy is strictly prohibited. HostBuddy reserves the right to refuse service, terminate accounts, and/or cancel orders at its discretion, including cases where customer conduct violates applicable laws or is detrimental to our interests.",
  },
  {
    title: "9. Limitations of Liability",
    content:
      "The content on this site can be used as a resource. However, the reproduction, duplication, copying, selling, reselling, or other exploitation of this site or any portion thereof for any commercial purpose not expressly permitted by HostBuddy is strictly prohibited. HostBuddy reserves the right to refuse service, terminate accounts, and/or cancel orders at its discretion, including cases where customer conduct violates applicable laws or is detrimental to our interests.",
  },
  // Add more sections as needed
];
interface Feature {
  title: string;
  description: string;
}

interface RamOptionProps {
  label: string;
}
const RamOption: React.FC<RamOptionProps> = ({ label }) => (
  <span className="flex flex-row items-center space-x-2">
    <div className="svg-container">
      <svg
        className="default-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.17822"
          y="1.03894"
          width="14.077"
          height="14.077"
          rx="7.0385"
          stroke="#808080"
          strokeWidth="0.938467"
        />
      </svg>
      <svg
        className="hovered-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          fill="#FF7500"
        />
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          stroke="#FF7500"
          strokeWidth="0.938467"
        />
        <rect
          x="5.07812"
          y="5.26196"
          width="5.6308"
          height="5.6308"
          rx="2.8154"
          fill="white"
        />
      </svg>
    </div>
    <h2 className="text-[20px] text-[#16191C]">{label}</h2>
  </span>
);
const RamOption2: React.FC<RamOptionProps> = ({ label }) => (
  <span className="flex flex-row items-center space-x-2">
    <div className="svg-container">
      <svg
        className="default-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.562984"
          y="0.961482"
          width="14.077"
          height="14.077"
          stroke="#808080"
          strokeWidth="0.938467"
        />
      </svg>

      <svg
        className="hovered-svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          fill="#FF7500"
        />
        <rect
          x="0.547359"
          y="0.731196"
          width="14.6923"
          height="14.6923"
          rx="7.0385"
          stroke="#FF7500"
          strokeWidth="0.938467"
        />
        <rect
          x="5.07812"
          y="5.26196"
          width="5.6308"
          height="5.6308"
          rx="2.8154"
          fill="white"
        />
      </svg>
    </div>
    <h2 className="text-[20px] text-[#16191C]">{label}</h2>
  </span>
);
2;

interface ContentSectionProps {
  title: string;
  content: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => (
  <div className="flex flex-col w-full space-y-0">
    <h1 className="w-full font-mono-sans hover:text-orange-500 font-semibold text-[12px] md:text-[22px] 2xl:text-[32px] leading-tight md:leading-[64px] 2xl:leading-[84px] text-left">
      {title}
    </h1>
    <p className="text-[6px] md:text-[10px] 2xl:text-[16px]">{content}</p>
  </div>
);
export const features: Feature[] = [
  {
    title: "1. Copyright Notice",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "2. Your Use of This Site",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "3. Disclaimer",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "4. Provider Responsibilities",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "5. Service Levels",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "6. Provider Data",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "7. Feedback",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "8. Warranty Disclaimer",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
  {
    title: "9. Limitations of Liability",
    description:
      "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
  },
];
const AddsResller: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<number>(0);

  const parentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>(
    Array(features.length).fill(null)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const parentCenterY = parentRect.top + parentRect.height / 2;

        let closestItemIndex = -1;
        let closestDistance = Number.MAX_VALUE;

        featuresRef.current.forEach((featureRef, index) => {
          if (featureRef) {
            const featureRect = featureRef.getBoundingClientRect();
            const featureCenterY = featureRect.top + featureRect.height / 2;
            const distance = Math.abs(featureCenterY - parentCenterY);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestItemIndex = index;
            }
          }
        });

        setCurrentItem(closestItemIndex);
      }
    };

    const parentElement = parentRef.current;
    if (parentElement) {
      parentElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (parentElement) {
        parentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleToggle = (index: number) => {
    setCurrentItem(index);
  };

  return (
    <section className=" relative">
      <div className=" w-full max-w-[1350px] mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between">
          <div className="w-full space-y-0">
            <div
              ref={parentRef}
              className="w-full max-w-[700px] mx-auto mt-10 px-4 overflow-y-auto max-h-[500px] scroll-container "
            >
            <div className="flex flex-col gap-5 mt-4 ltr">
  {features.map((feature, index) => (
    <div
      key={index}
      ref={(el) => {
        if (el) {
          featuresRef.current[index] = el;
        }
      }}
      className="flex flex-col text-left pb-5 rounded-2xl"
    >
      <div
        onClick={() => handleToggle(index)}
        className={`cursor-pointer text-left flex hover:text-orange-500 flex-row items-center justify-between text-[16px] font-bold text-[#16191C]/50 ${
          currentItem === index ? "!text-black" : ""
        }`}
      >
        {feature.title}
      </div>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PageSecond = () => {
  return (
    <section className="w-full item-center justify-center mx-auto max-w-[1270px]">
            <div className="flex flex-col w-full  space-y-2">
              <h1 className="w-full font-mono-sans   font-semibold text-[12px] md:text-[22px] 2xl:text-[32px] leading-tight md:leading-[64px] 2xl:leading-[84px] text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </h1>
              <p className="text-[6px] md:text-[10px] 2xl:text-[18px]">
              Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus, at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris condimentum amet tellus scelerisque semper blandit. Feugiat accumsan blandit acu, integer faucibus. At cursus elit hac vitae nec tortor iaculis viverra. Sem aliquet vulputate metus tristique sem commodo faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id iaculis at 
              </p>
            </div>

      
    </section>
  );
};

export default PageSecond;
