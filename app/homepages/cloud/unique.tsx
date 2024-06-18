import Image from 'next/image';
import React from 'react';

const features = [
  {
    title: "Reseller API Automation",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will."
  },
  {
    title: "30-Day Money Back",
    description: "Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio."
  },
  {
    title: "30-Day Money Back",
    description: "Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio."
  }
];

const Unique = () => {
  return (
    <section className="relative  py-20">
      <div className="p-4 w-full max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-center">
        <div className="flex flex-col 2xl:flex-row mx-auto gap-10 items-center justify-between">
        
          <div className="w-full flex flex-col space-y-8 animate-slide-from-right">
            <div className="space-y-3.5">
              <h4 className="text-[29px] 2xl:text-[39px] text-black font-semibold font-mona-sans leading-normal">
                Top-Notch <span className="pb-2 2xl:pb-4 border-b-4 border-orange-500 text-black">Features</span>
              </h4>
             
            </div>
            <p className="text-[12px] 2xl:text-[16px] leading-loose font-mona-sans">
                Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu. Erat nibh nisl lacinia egestas mauris facilisi aliquam sit mauris.
              </p>
           <div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center gap-y-20 2xl:gap-y-0 gap-x-10'>
             <div className="space-y-2 2xl:max-w-xl">
              {features.map((feature, index) => (
                <div key={index} className="relative group space-y-3 slide-reveal">
                  <div className="cursor-pointer flex w-full group hover:bg-white transition-all duration-300 border-gradient hover:shadow-2xl rounded-xl">
                    <div className="flex xl:flex-row items-center">
                      <div className="transition-all duration-300 cursor-pointer m-8 xl:gap-6 text-[#16191C]">
                        <h2 className="text-[20px] 2xl:text-[20px] font-bold opacity-1 mb-4 group-hover:text-orange-500">
                          {feature.title}
                        </h2>
                        <p className="font-mona-sans text-[14px] 2xl:text-[16px] font-normal leading-normal text-left">
                          {feature.description}
                        </p>
                        <div className="w-24 rounded-xl hidden group-hover:block mt-4 bg-orange-500 text-white py-2 px-4  transition duration-300">
                         <h2 className='ml-1 font-semibold'> Go API</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-[3px] border-dashed border-[#dedede] w-full h-1 absolute -bottom-1 left-0 right-0 group-hover:opacity-0 transition duration-200" />
                </div>
              ))}
            </div>
              <div className="w-full  justify-center slide-reveal">
            <Image src="/cloudhosting/feature.svg" alt="" width={650} height={550} />
          </div>
            </div>
          </div>
          {/* <div className="w-full  justify-center slide-reveal">
            <Image src="/cloudhosting/feature.svg" alt="" width={550} height={550} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Unique;
