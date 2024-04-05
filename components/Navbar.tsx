"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";
import MobileSidebar from "../components/MobileSidebar";
const navLinks = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#Use Cases",
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
            <span className="font-semibold text-2xl text-white">H</span>
            <span className="font-semibold text-2xl text-orange-500">o</span>
            <span className="font-semibold text-2xl text-white">st</span>
            <span className="font-semibold text-2xl  text-white">Buddy</span>
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
                  <div className={`flex flex-col gap-[10px] items-center cursor-pointer`}>
                    <h1 className="whitespace-nowrap">{link.label}</h1>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex justify-end space-x-4 w-full">
            <button className="text-white flex flex-row items-center justify-center bg-transparent border border-white rounded-lg px-4 py-2 outline-none cursor-pointer">
              <AiOutlineGlobal className="mr-2 item-center" />
              English
            </button>
            <button className="text-white flex flex-row items-center justify-center bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2">
              Sign Up
              <FaArrowRight className="ml-2 item-center" />
            </button>
          </div>
        </nav>
      </div>
      <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </header>
  );
};
export default NavBar;