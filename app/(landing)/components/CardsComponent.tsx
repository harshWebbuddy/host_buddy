import Image from "next/image";
import React from "react";

const CardsComponent = () => {
  return (
    <div className="space-y-20 p-4">
      <div className="w-full flex flex-col xl:flex-row gap-16 items-center">
        <div className="w-full space-y-4">
          <div className="">
            <h2 className="text-3xl leading-relaxed font-semibold">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-4">
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
      <div className="w-full flex flex-col xl:flex-row-reverse gap-16 items-center">
        <div className="w-full space-y-4">
          <div className="">
            <h2 className="text-3xl leading-relaxed font-semibold">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-4">
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
            <Image src="/cards2.jpg" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/cards2triangle.svg" width={100} height={100} alt="" className="absolute -top-10 -left-10" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-14 items-center">
        <div className="w-full space-y-4">
          <div className="">
            <h2 className="text-3xl leading-relaxed font-semibold">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-4">
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
      <div className="w-full flex flex-col xl:flex-row-reverse gap-16 items-center">
        <div className="w-full space-y-4">
          <div className="">
            <h2 className="text-3xl leading-relaxed font-semibold">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <ul className="w-full space-y-4">
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
            <Image src="/cards-4.png" width={500} height={500} alt="" className="rounded-2xl relative z-10" />
            <Image src="/cards4.svg" width={200} height={200} alt="" className="absolute -top-10 -left-20" />
            <Image src="/bigsquare.svg" alt="" width={300} height={302} className="absolute -right-10 -bottom-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
