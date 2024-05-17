import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="space-y-32 2xl:space-y-10 p-4">
      <div className="w-full flex flex-col xl:flex-row space-y-10 space-x-10 items-center">
        <div className="w-full space-y-7">
          <div className="pr-0 2xl:pr-4">
            <h2 className="text-5xl leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
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
            <Image src="/card1triangle.svg" width={70} height={70} alt="" className="absolute -top-10 -right-10" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -left-10 -bottom-10" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row space-y-10 space-x-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/cards2.jpg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-10 -left-10" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10" />
          </div>
        </div>
         <div className="w-full space-y-7">
          <div className="2xl:pr-4">
            <h2 className="text-5xl leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
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
    
      </div>
      <div className="w-full flex flex-col xl:flex-row space-x-0 items-center">
      <div className="w-full space-y-7">
          <div className="2xl:pr-4">
            <h2 className="text-5xl leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
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
            <Image src="/card-3.png" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/card3.svg" width={150} height={150} alt="" className="absolute -top-10 -left-10 z-[12]" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -left-10 -bottom-10" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row space-x-16 items-center">
      <div className="w-full flex justify-center">
          <div className="relative">
            <Image src="/cards-4.png" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/cards4.svg" width={200} height={200} alt="" className="absolute -top-10 -left-20" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10" />
          </div>
        </div>
      <div className="w-full space-y-7">
          <div className="2xl:pr-4">
            <h2 className="text-5xl leading-[63px] font-semibold capitalize">Lorem ipsum dolor sit amet consectetur.</h2>
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
      
      </div>
    </div>
  );
};

export default CardsComponent;
