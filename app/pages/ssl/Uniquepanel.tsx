import Image from "next/image";

const Uniquecpanel = () => {
  return (
    <section className="relative b">
      <div className="p-4 w-full max-w-[1350px] mx-auto ">
        <div className="flex flex-col 2xl:flex-row mx-auto items-center ">
          <div className="w-full flex flex-col space-y-16">
            <div className="pr-96">
              <h2 className="text-[47px]  capitalize leading-[63px]  font-semibold text-black w-full 2xl:max-w-full">
              5 steps to consider if you manually 
install your <span className="pb-4 border-b-4 border-orange-500">SSL certificate</span>
              </h2>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-start gap-20 xl:gap-10 2xl:gap-20">
              
              <div className="w-full">
                <div className="flex">
                  <Image draggable={false} src="/line-svg.svg" alt="" width={6} height={404} className="h-[700px] object-cover select-none" />
                  <div className="space-y-4 flex flex-col justify-between">
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                     
                      <div className="space-y-0 -translate-y-3.5">
                   
                        <h1 className="text-3xl font-semibold">Request the SSL</h1>
                        <p className="leading-loose pt-4">
                        Specify your domain name and the type of web server that’s hosting your site.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                     
                      <div className="space-y-0 -translate-y-3.5">
                   
                        <h1 className="text-3xl font-semibold">Verify your SSL</h1>
                        <p className="leading-loose pt-4">
                        Then verify that you control the domain — verification depends on the type of certificate and web server.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                     
                      <div className="space-y-0 -translate-y-3.5">
                   
                        <h1 className="text-3xl font-semibold">Download your SSL</h1>
                        <p className="leading-loose pt-4">
                        Download your primary and intermediate certificates from the SSL dashboard.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                     
                      <div className="space-y-0 -translate-y-3.5">
                   
                        <h1 className="text-3xl font-semibold">Redirect HTTP</h1>
                        <p className="leading-loose pt-4">
                        Once installed, redirect your visitors to the secured (HTTPS) version of your site. Address which of these pertain to you.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                     
                      <div className="space-y-0 -translate-y-3.5">
                   
                        <h1 className="text-3xl font-semibold">Check Installation</h1>
                        <p className="leading-loose pt-4">
                        Enter your URL into a browser. Look for the padlock icon before your URL, if it’s there, you’ve completed installation and your site is SSL secure.
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <Image src="/ssl/unique.svg" alt="" width={600} height={582} className="rounded-3xl object-cover h-[700px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniquecpanel;
