"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Collapse } from "react-collapse";
export const features: Feature[] = [
    {
      title: "Infrastructure & Technology Used",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "70+ free one-click installs",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: " SSl Certificate",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "Support",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "Infrastructure & Technology Used",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "70+ free one-click installs",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: " SSl Certificate",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "Support",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "Infrastructure & Technology Used",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "70+ free one-click installs",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: " SSl Certificate",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
    {
      title: "Support",
      description:
        "Our knowledgeable guides are here to help you with any questions, whether you’re a prospective customer with a small business or you’ve been working with us for years.",
    },
  ];
interface Feature {
  title: string;
  description: string;
}

const Addsbar = () => {
  const [currentItem, setCurrentItem] = useState<number>(0);

  const parentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>(Array(features.length).fill(null));

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
    <section className="bg-[#F9EFE4] relative">
      <div className="p-4 w-full max-w-[1420px] mx-auto flex flex-col md:flex-row items-center justify-center py-20">
        <div className="flex flex-col 2xl:flex-row mx-auto items-center justify-between">
          <div className="w-full space-y-10">
            <div className="space-y-3.5">
              <h4 className="text-[42px] font-semibold font-mona-sans leading-normal">Why Choose Us?</h4>
              <p className="text-[16px] pr-10 leading-loose font-mono-sans">
                Running a business can be challenging, so to help we offer a FREE website builder with FREE stock images and FREE email with every domain name.
              </p>
            </div>
            <div ref={parentRef} className="w-full max-w-[700px] mx-auto mt-20 px-4 overflow-y-auto max-h-[500px] scroll-container ">
              <div className="flex flex-col gap-5 mt-4 ltr">
                {features.map((feature, index) => (
                  //@ts-ignore
                  <div key={index} ref={(el) => (featuresRef.current[index] = el)} className="flex flex-col text-left px-5 pb-5 rounded-2xl">
                    <div
                      onClick={() => handleToggle(index)}
                      className={`cursor-pointer text-left flex flex-row items-center justify-between text-[26px] font-bold text-[#16191C]/50 ${
                        currentItem === index ? "!text-black" : ""
                      }`}>
                      {feature.title}
                    </div>
                    <Collapse isOpened={currentItem === index}>
                      <p
                        className={`py-3 text-[#686770] leading-9 invisible opacity-0 transition-all duration-700 ${
                          currentItem === index && "!visible !opacity-100"
                        }`}>
                        {feature.description}
                      </p>
                    </Collapse>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative items-center justify-center mt-40">
              <Image src="/plenk/choose.jpeg" width={497} height={301} alt="" className="rounded-2xl relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addsbar;


