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
