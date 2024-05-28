import Image from "next/image";

const Uniquecpanel = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FFFFFF]/100 to-[#FF7500]/70">
      <div className="p-4 w-full max-w-[1300px] mx-auto py-24">
        <div className="flex flex-col 2xl:flex-row mx-auto items-center ">
          <div className="slide-reveal w-full flex flex-col space-y-20">
            <div>
              <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
                What Makes HostBuddy<span className="pb-4 border-b-4 border-orange-500"> Unique?</span>
              </h2>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-start gap-20 xl:gap-10 2xl:gap-20">
              <Image src="/cpanel/unique.jpeg" alt="" width={600} height={582} className="rounded-3xl object-cover" />
              <div className="w-full">
                <div className="flex">
                  <Image draggable={false} src="/line-svg.svg" alt="" width={7} height={404} className="object-cover select-none" />
                  <div className="space-y-4 flex flex-col justify-between">
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                      <div className="space-y-5 -translate-y-4">
                        <h1 className="text-3xl font-semibold">24/7 & 365 Days Support</h1>
                        <p className="leading-loose">
                          Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit
                          consectetur. Elit congue convallis quisque amet sit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                      <div className="space-y-5 -translate-y-4">
                        <h1 className="text-3xl font-semibold">24/7 & 365 Days Support</h1>
                        <p className="leading-loose">
                          Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit
                          consectetur. Elit congue convallis quisque amet sit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                      <div className="space-y-5 -translate-y-4">
                        <h1 className="text-3xl font-semibold">24/7 & 365 Days Support</h1>
                        <p className="leading-loose">
                          Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit
                          consectetur. Elit congue convallis quisque amet sit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniquecpanel;
