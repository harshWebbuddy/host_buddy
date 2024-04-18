"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { SetStateAction, useEffect, useState } from "react";
import MobileSidebar from "../components/MobileSidebar";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
  options: Option[];
}

interface Option {
  href: string;
  label: string;
}
const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
    options: [
      { label: "Home Dedicated Server", href: "/home" },
    { label: "Home Gaming", href: "/homegaming" },
      // { label: "Pages", href: "#" },
      // { label: "Features", href: "#" },
    ],
  },
  {
    href: "/hosting",
    label: "Hosting",
    options: [
      { label: "Hosting", href: "/hosting" },
      // { label: "Pricing", href: "#" },
      // { label: "Pages", href: "#" },
      // { label: "Features", href: "#" },
    ],
  },
  {
    href: "#",
    label: "Pricing",
    options: [
      { label: "Hosting", href: "/hosting" },
      // { label: "Pricing", href: "#" },
      // { label: "Pages", href: "#" },
      // { label: "Features", href: "#" },
    ],
  },
  {
    href: "#",
    label: "Pages",
    options: [
      { label: "Hosting", href: "/hosting" },
      // { label: "Pricing", href: "#" },
      // { label: "Pages", href: "#" },
      // { label: "Features", href: "#" },
    ],
  },
  {
    href: "#",
    label: "Features",
    options: [
      { label: "Hosting", href: "/hosting" },
      // { label: "Pricing", href: "#" },
      // { label: "Pages", href: "#" },
      // { label: "Features", href: "#" },
    ],
  },
];

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [optionsData, setOptionsData] = useState<Option[]>([]);
  const [showOptionsIndex, setShowOptionsIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number, options: Option[]) => {
    setOptionsData(options);
    setShowOptionsIndex(index);
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;
  
    if (showOptionsIndex !== null) {
      // Show options for 3 seconds
      timer = setTimeout(() => {
        setShowOptionsIndex(null);
      }, 2000);
    }
  
    return () => {
      clearTimeout(timer);
    };
  }, [showOptionsIndex]);
  const handleMouseLeave = () => {
    if (showOptionsIndex !== null) {
      setShowOptionsIndex(null);
    }
  };
  
  return (
    <header className="absolute top-0 w-full px-4 py-4 z-[5]">
    <div className="w-full item-center justify-center mx-auto">
      <nav className="w-full 2xl:w-[1220.25px] flex items-center 2xl:justify-center mx-auto  justify-between">
        <div className="w-full">
          <div className="justify-center md:mr-0 group ">
            <span className="font-semibold text-[29.27px] text-white inline-block transition-transform transform rotate-0 group-hover:rotate-180">H</span>
            <span className="font-semibold  text-[29.27px] text-orange-500  inline-block transition-transform transform rotate-0 group-hover:rotate-180">o</span>
            <span className="font-semibold  text-white text-[29.27px]  inline-block transition-transform transform rotate-0 group-hover:rotate-180">s</span>
            <span className="font-semibold text-[29.27px] text-white   inline-block transition-transform transform rotate-0 group-hover:rotate-180">t</span>
            <span className="font-semibold text-[29.27px] text-white  inline-block transition-transform transform rotate-0 group-hover:rotate-180" >Buddy</span>
          </div>
        </div>
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
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index, link.options)}
                  onMouseLeave={handleMouseLeave}>
                  <Link href={link.href}>
                    <div className={`flex flex-col gap-[10px] items-center cursor-pointer`} style={{ position: 'relative' }} >
                      <h1 className="whitespace-nowrap hover:text-orange-500 font-mono-sans text-[16px] leading-[24px] hover:font-bold" > {link.label}</h1>
                      {/* Underline effect */}
                      <div className="absolute w-8 bg-red-500 -bottom-2 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4 "></div>
                    </div>
                  </Link>
                  {showOptionsIndex === index && (
                    <div className="absolute left-0 top-full bg-white shadow-md rounded-xl py-4 px-6 mt-4 w-60 mr-12">
                      {optionsData.map((option, optionIndex) => (
                        <Link key={optionIndex} href={option.href}>
                          <div className="flex flex-col">
                            <h2 className="block text-gray-800 hover:text-orange-500  font-2xl mt-2">{option.label}</h2>
                            <div className="border-t-2 border-gray-500 opacity-1 w-[100%] transition-transform duration-400 hover:scale-110 mt-2"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        <div className="hidden lg:flex justify-end space-x-4 w-full">
          <motion.button className="text-white flex flex-row items-center justify-center bg-transparent border border-white rounded-lg px-4 py-2 outline-none cursor-pointer" whileHover={{ scale: 1.2 }}>
            <AiOutlineGlobal className="mr-2 item-center" />
            English
          </motion.button>
          <motion.button className="text-white flex flex-row items-center justify-center bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2" whileHover={{ scale: 1.2 }}>
            Sign Up
            <img src="/signuparrow.svg" className="ml-2"/>
          </motion.button>
        </div>
      </nav>
    </div>
    <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
  </header>
  );
};

export default NavBar;
