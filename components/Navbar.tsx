"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";
import MobileSidebar from "../components/MobileSidebar";
import { motion } from "framer-motion";
const navLinks = [
  {
    href: "/home",
    label: "Home",
  },
  {
    href: "/hosting",
    label: "Hosting",
  },
  {
    href: "#",
    label: "Pricing",
  },
  {
    href: "#",
    label: "Pages",
  },
  {
    href: "#",
    label: "Features",
  },
];

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="absolute top-0 w-full px-4 py-4 z-[5]">
      <div className="max-w-[1560px] mx-auto">
        <nav className="w-full flex items-center justify-between">
          <div className="w-full">
          <div className="justify-center ma:mr-0 group ">
  <span className="font-semibold text-6xl ma:text-2xl text-white inline-block transition-transform transform rotate-0 group-hover:rotate-180">H</span>
  <span className="font-semibold text-6xl ma:text-2xl text-orange-500  inline-block transition-transform transform rotate-0 group-hover:rotate-180">o</span>
  <span className="font-semibold text-6xl ma:text-2xl text-white   inline-block transition-transform transform rotate-0 group-hover:rotate-180">s</span>
  <span className="font-semibold text-6xl ma:text-2xl text-white   inline-block transition-transform transform rotate-0 group-hover:rotate-180">t</span>
  <span className="font-semibold text-6xl ma:text-2xl text-white  inline-block transition-transform transform rotate-0 group-hover:rotate-180" >Buddy</span>
</div>
          </div>{" "}
          <div className="w-10 grid place-content-center ml-6 lg:hidden">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group"
              onClick={() => setIsExpanded(true)}>
              <span
                className={`w-5 relative h-[2px] bg-[#c4c8d4] block transition rounded-full duration-300 ${
                  isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-[#c4c8d4] transition  rounded-full duration-100 opacity-100 ${
                  isExpanded && "opacity-0 invisible"
                } `}></span>
              <span
                className={`w-5 relative h-[2px] bg-[#c4c8d4] rounded-full transition duration-300 ${
                  isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
          <div className="hidden lg:flex justify-center w-full">
            <ul className="text-white flex gap-x-10">
              {navLinks.map((link, index) => (
                <Link href={link.href} key={index}>
                  <motion.div className={`flex flex-col gap-[10px] items-center cursor-pointer  group`} style={{ position: 'relative' }} whileHover={{scale:1.5}}>
                    <h1 className="whitespace-nowrap hover:text-orange-500 " > {link.label}</h1>
                    {/* Underline effect */}
                    < div className="absolute w-8 bg-red-500 -bottom-2 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4 " ></div>
                  </motion.div>
                </Link>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex justify-end space-x-4 w-full">
            <motion.button className="text-white flex flex-row items-center justify-center bg-transparent border border-white rounded-lg px-4 py-2 outline-none cursor-pointer" whileHover={{scale:1.2}}>
              <AiOutlineGlobal className="mr-2 item-center" />
              English
            </motion.button>
            <motion.button className="text-white flex flex-row items-center justify-center bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2" whileHover={{scale:1.2}}>
              Sign Up
              <FaArrowRight className="ml-2 item-center" />
            </motion.button>
          </div>
        </nav>
      </div>
      <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </header>
  );
};

export default NavBar;
