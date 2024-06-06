
// <section className="h-full min-h-[80vh] overflow-hidden relative bg-black flex items-center justify-center">
// <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
// <div className="max-w-[1250px] mx-auto text-white ">
//   <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
//     <div className="relative w-full flex flex-col justify-center 2xl:justify-start space-y-7">
//       <h2 className="font-mono-sans text-sm font-light italic leading-relaxed text-center 2xl:text-left">
//         <span className="text-white opacity-90 font-light">Welcome to </span>
//         <span className="text-orange-500 font-bold">HostBuddy</span>
//       </h2>
//       <h1 className="font-mono-sans font-semibold text-[54px] leading-relaxed text-center 2xl:text-left">Dedicated Servers High Performance</h1>
//       <p className="font-mono-sans text-[18px] font-light leading-loose text-center 2xl:text-left text-[#EBEBEB]">
//         By trusting us with your business and projects needs, we promise a<span className="text-orange-500 opacity-100 font-bold mx-2">99.9%</span>
//         uptime on any services we provide, outside of any standard maintenance we may provide.
//       </p>
//       <div className="flex flex-row justify-center 2xl:justify-start !mt-10 gap-6">
//         <button className="h-[56px] px-6 flex item-center justify-center bg-orange-500 rounded-xl py-4 gap-x-3">
//           <Image src="/shoppingcart.svg" alt="" width={24} height={24} />
//           <h2 className="font-mona-sans text-[17px] font-semibold leading-[21.6px] text-left">Order Now</h2>
//         </button>
//         <button className="relative max-w-fit flex group items-center justify-center !mt-0 px-4">
//           <div className="flex items-center gap-x-3">
//             <p className="text-[16px] font-bold text-white">Read more</p>
//             <Image src="/arrow.svg" alt="" width={20} height={20} />
//           </div>
//           <div className="bg-white h-0.5 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-500" />
//         </button>
//       </div>
//       <p className="flex max-w-fit mx-auto 2xl:mx-0 gap-2 underline text-[#EBEBEB]">
//         <Image src="/tick2.svg" alt="tick" width={20} height={20} />
//         30 day money back garantee
//       </p>
//     </div>

//     <div className="w-full item-center justify-center">
//       <Image src="/homeimages.svg" alt="" width={500} height={500} className="item-center justify-center mx-auto" />
//     </div>
//   </div>
// </div>
// </section>


import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      fontFamily: {
        'mono-sans': ['Mona Sans', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(180deg, #292E34 0%, #16191C 100%)',

      },
      colors: {
        customBackground: '#F9EFE4',
   'sefty-orange': 'var(--Template-Colors-Sefty-Orange-Template-Primary-Safety-Orange, #FF7500)',
      },

      //I preferred to use the default tailwindcss preconfigured screen sizes but you can change at any time @harsh

      screens: {
        "sm": "380px",
        "md": "767px",
        "lg": "600px",
        "bl":"1000px",
        "xl": "1200px",
        "2xl": "1600px"
       
      //   // => @media (min-width: 1536px) { ... }
      },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    },

  },
  plugins: [],
};
export default config;
// <div className="absolute bottom-0 2xl:bottom-2 z-[2] w-full h-full flex flex-col space-y-3 2xl:space-y-10 justify-center items-center text-white">
//         <h4 className="text-orange-500 font-bold italic">Knowledge Base Things</h4>
//         <h2 className="font-extrabold text-2xl sm:text-5xl 2xl:text-7xl capitalize !mt-5 text-center">Lorem ipsum dolor</h2>
//         <h4 className="text-sm 2xl:text-[16px] text-center max-w-xl leading-8">Lorem ipsum dolor sit amet consectetur. Tempus hendrerit nunc pretium et facilisis facilisi a dis urna. Vel mattis proin id fringilla ut tempus.</h4>
//         <div className="bg-white rounded-full p-1 w-full max-w-5xl mx-auto focus-within:ring-[3px] ring-white/80 transition-all duration-500">
//           <form className="flex w-full">
//             <input
//               type="text"
//               alt=""
//               className="w-full flex-1 outline-none placeholder:text-[#B8B8B8] bg-transparent rounded-full px-5 text-black text-lg"
//               placeholder="Enter a question here to search our knowledgebase for answers..."
//             />
//             <button className="bg-[#FF7500] h-[62px] rounded-full w-full flex-1 max-w-[182px] hover:bg-opacity-80 transition-all duration-300 text-lg">
//               Search
//             </button>
//           </form>
//         </div>
      
//       </div>