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
      },
      colors: {
        customBackground: '#F9EFE4',
      },
      screens: {
        'sp':'912px',
        'ss':'540px',
        'gf':'280px',
        'mp':'300px',
        'mm':'350px',
        'sm': '414px',   
      
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        
        // => @media (min-width: 768px) { ... }
  'pa':'820px',
  'sd':'1114px',
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
 
        '2xl': '1536px',
       
        // => @media (min-width: 1536px) { ... }
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
