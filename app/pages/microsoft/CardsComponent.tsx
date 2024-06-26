import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="bg-black w-full py-10 2xl:py-20">
      <div className="space-y-20 2xl:space-y-40 p-4 max-w-[1350px] mx-auto">
        <div className="slide-reveal background-design w-full flex flex-col xl:flex-row justify-between gap-x-40 gap-y-10 2xl:gap-y-20 items-center">
       
          <div className="w-full">
            <h2 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] capitalize font-semibold text-white">
              Your anytime, anywhere office to{" "}
              <span className="text-orange-500">grow your business</span>
            </h2>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative">
              <Image
                src="/microsoft/card1.jpeg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[10]"
              />
              <Image
                src="/microsoft/square.svg"
                alt=""
                width={600}
                height={346}
                className="2xl:flex hidden absolute -left-10 -bottom-10 z-[20]"
              />
            </div>
          </div>
          
        </div>

        <div className="slide-reveal background-design w-full flex flex-col xl:flex-row justify-between gap-x-40 gap-y-10 2xl:gap-y-20 items-center">
        <div className="w-full hidden 2xl:flex justify-center">
            <div className="relative">
              <Image
                src="/microsoft/card2.jpeg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[20]"
              />
              <Image
                src="/cpanel/square.svg"
                alt=""
                width={600}
                height={346}
                className="absolute -right-10 -bottom-10 z-10"
              />
            </div>
          </div> 
          <div className="w-full space-y-4">
            <h2 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] capitalize font-semibold text-white">
              Trusted apps, always up <span className="text-orange-500 capitalize">to date</span>
            </h2>
            <ul className="w-full space-y-4">
              <li className="flex gap-4 items-start">
                <p className="capitalize text-white leading-loose text-[14px] 2xl:text-[14px]">
                  Microsoft 365 gives you valuable, secure collaboration tools like Word, Excel, PowerPoint, and Teams to help you do your best work. When new app versions come out, they’re automatically delivered to you.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full 2xl:hidden flex justify-center">
            <div className="relative">
              <Image
                src="/microsoft/card2.jpeg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[20]"
              />
              <Image
                src="/cpanel/square.svg"
                alt=""
                width={600}
                height={346}
                className="2xl:flex hidden absolute -right-10 -bottom-10 z-10"
              />
            </div>
          </div>
        </div>

        <div className="slide-reveal background-design w-full flex flex-col xl:flex-row-reverse justify-between gap-x-40 gap-y-10 2xl:gap-y-20 items-center">
          <div className="w-full">
            <h4 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] text-white font-semibold font-mona-sans">
              Meet <span className="text-orange-500 capitalize">Face-to-face</span> wherever you are with Teams
            </h4>
            <ul className="w-full space-y-4">
              <li className="flex gap-4 items-start">
                <p className="capitalize text-white text-[14px] 2xl:text-[14px] leading-loose">
                  Professional Email works with Outlook, Apple Mail and other top programs to keep all your devices — from your laptop to your smartphone and tablet — up to date and in sync. Your latest emails, contacts, and appointments are at your fingertips, wherever you are.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative">
              <Image
                src="/microsoft/card3.jpeg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[10]"
              />
              <Image
                src="/microsoft/square.svg"
                alt=""
                width={600}
                height={346}
                className="2xl:flex hidden absolute -left-10 -bottom-10 z-[20]"
              />
            </div>
          </div>
        </div>

        <div className="slide-reveal background-design w-full flex flex-col-reverse xl:flex-row justify-between gap-x-40 gap-y-10 2xl:gap-y-20 items-center">
          <div className="w-full 2xl:hidden flex justify-center">
            <div className="relative">
              <Image
                src="/microsoft/card4.jpeg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[20]"
              />
              <Image
                src="/cpanel/square.svg"
                alt=""
                width={600}
                height={346}
                className="2xl:flex hidden absolute -right-10 -bottom-10 z-10"
              />
            </div>
          </div>
          <div className="w-full space-y-4">
            <h4 className="text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[43px] 2xl:leading-[63px] text-white capitalize font-semibold font-mona-sans">
              Keep all your <span className="text-orange-500 capitalize">files safe</span> in the cloud
            </h4>
            <ul className="w-full space-y-4">
              <li className="flex gap-4 items-start">
                <p className="capitalize text-white leading-loose text-[13px] 2xl:text-[14px]">
                  With 1 TB of secure OneDrive storage, your files, photos, and videos are always safe and accessible from anywhere and on any device — computer, tablet, and smartphone.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full hidden 2xl:flex justify-center">
            <div className="relative">
              <Image
                src="/microsoft/card4.jpeg"
                width={531}
                height={315}
                alt=""
                className="rounded-2xl relative z-[20]"
              />
              <Image
                src="/cpanel/square.svg"
                alt=""
                width={600}
                height={346}
                className="absolute -right-10 -bottom-10 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
