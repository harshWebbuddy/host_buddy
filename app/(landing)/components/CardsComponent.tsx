import Image from "next/image";
import React, { useState, useEffect } from "react";

const CardsComponent = () => {
  const [translateX, setTranslateX] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle direction when reaching boundaries
      if (translateX >= 10 || translateX <= -10) {
        setDirection((prevDirection) => -prevDirection);
      }
      // Update translateX based on direction
      setTranslateX((prevTranslateX) => prevTranslateX + direction);
    }, 100); // Adjust animation speed here

    return () => clearInterval(interval);
  }, [translateX, direction]);
  return (
    <div className="slide-reveal space-y-16 2xl:space-y-10 p-4">
      <div className="w-full flex flex-col xl:flex-row  space-y-10 2xl:space-x-10 items-center">
        <div className="w-full space-y-7">
          <div className="pr-0 2xl:pr-4">
            <h2 className="text-4xl 2xl:text-5xl leading-[43px] 2xl:leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-7 2xl:pr-36 text-[17px]">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Volutpat ut et urna gravida non <span className="font-bold"> justo nibh enim habitant sed ante. </span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper mi tortor dolor <span className="font-bold"> nulla aliquam. Sed placerat.</span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit <span className="font-bold"> amet consectetur. </span> Luctus aliquam ut volutpat ipsum fermentum quisque tortor.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Lorem faucibus <span className="font-bold"> dignissim nibh </span> vitae urna ultrices. Ultricies.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
        <div className="relative">
      <Image src="/cards1.jpg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
      <div style={{ transform: `translateX(${translateX}px)` }}>
        <Image src="/card1triangle.svg" width={70} height={70} alt="" className="2xl:flex hidden absolute -top-96 -right-10" />
      </div>
      <Image src="/bigsquare.svg" alt="" width={300} height={302} className="2xl:flex hidden absolute -left-10 -bottom-10" />
    </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row space-y-10 2xl:space-x-16 items-center">
      <div className="w-full flex justify-center xl:flex hidden">
          <div className="relative">
            <Image src="/cards2.jpg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <div style={{ transform: `translateX(${translateX}px)` }}>
   <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="2xl:flex hidden absolute -top-96 -left-14" />
   </div>
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="2xl:flex hidden absolute -right-10 -bottom-10" />
          </div>
        </div>
      <div className="w-full space-y-7">
          <div className="pr-0 2xl:pr-4">
            <h2 className="text-4xl 2xl:text-5xl leading-[43px] 2xl:leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-7 2xl:pr-36 text-[17px]">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Volutpat ut et urna gravida non <span className="font-bold"> justo nibh enim habitant sed ante. </span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper mi tortor dolor <span className="font-bold"> nulla aliquam. Sed placerat.</span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit <span className="font-bold"> amet consectetur. </span> Luctus aliquam ut volutpat ipsum fermentum quisque tortor.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Lorem faucibus <span className="font-bold"> dignissim nibh </span> vitae urna ultrices. Ultricies.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center xl:hidden flex  ">
          <div className="relative">
            <Image src="/cards2.jpg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <div style={{ transform: `translateX(${translateX}px)` }}>
   <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="2xl:flex hidden absolute -top-96 -left-14" />
   </div>
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="2xl:flex hidden absolute -right-10 -bottom-10" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row space-y-10 2xl:space-x-16 items-center">
      <div className="w-full space-y-7">
          <div className="pr-0 2xl:pr-4">
            <h2 className="text-4xl 2xl:text-5xl leading-[43px] 2xl:leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-7 2xl:pr-36 text-[17px]">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Volutpat ut et urna gravida non <span className="font-bold"> justo nibh enim habitant sed ante. </span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper mi tortor dolor <span className="font-bold"> nulla aliquam. Sed placerat.</span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit <span className="font-bold"> amet consectetur. </span> Luctus aliquam ut volutpat ipsum fermentum quisque tortor.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Lorem faucibus <span className="font-bold"> dignissim nibh </span> vitae urna ultrices. Ultricies.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/card-3.png" width={500} height={500} alt="" className="rounded-2xl relative z-[10]" />
            <div style={{ transform: `translateX(${translateX}px)` }} className="!z-[20] relative">
 <Image src="/card3.svg" width={150} height={150} alt="" className="2xl:flex hidden z-[10] absolute -top-[450px] -left-12 " /></div>
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="2xl:flex hidden absolute -left-10 -bottom-10" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row space-y-10 2xl:space-x-16 items-center">
      <div className="w-full flex justify-center xl:flex hidden">
          <div className="relative">
            <Image src="/cards-4.png" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <div style={{ transform: `translateX(${translateX}px)` }} className="!z-[1] relative">
 <Image src="/cards4.svg" width={200} height={200} alt="" className="2xl:flex hidden absolute -top-[400px] -left-20" /></div>
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="2xl:flex hidden absolute -right-10 -bottom-10" />
          </div>
        </div>
      <div className="w-full space-y-7">
          <div className="pr-0 2xl:pr-4">
            <h2 className="text-4xl 2xl:text-5xl leading-[43px] 2xl:leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-7 2xl:pr-36 text-[17px]">
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Volutpat ut et urna gravida non <span className="font-bold"> justo nibh enim habitant sed ante. </span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper mi tortor dolor <span className="font-bold"> nulla aliquam. Sed placerat.</span>
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit <span className="font-bold"> amet consectetur. </span> Luctus aliquam ut volutpat ipsum fermentum quisque tortor.
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <Image src="/tick1.svg" alt="tick" width={20} height={20} className="mt-3" />
              <p className="capitalize leading-loose">
                Lorem ipsum dolor sit amet consectetur. Lorem faucibus <span className="font-bold"> dignissim nibh </span> vitae urna ultrices. Ultricies.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center xl:hidden flex  ">
          <div className="relative">
            <Image src="/cards-4.png" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <div style={{ transform: `translateX(${translateX}px)` }} className="!z-[1] relative">
 <Image src="/cards4.svg" width={200} height={200} alt="" className="2xl:flex hidden absolute -top-[400px] -left-20" /></div>
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="2xl:flex hidden absolute -right-10 -bottom-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
