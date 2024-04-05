"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
interface Props {
  onClose: () => void;
  isOpen?: boolean;
}
export default function MobileSidebar({ onClose, isOpen }: Props) {
  const mainRef = useRef<HTMLElement | null>(null);
  const handleClickOutside = (event: any) => {
    if (mainRef.current && !mainRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navLinks = [
    {
      href: "#products",
      label: "Products",
    },
    {
      href: "#Use Cases",
      label: "Use Cases",
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "#Resources",
      label: "Resources",
    },
    {
      href: "/company",
      label: "Company",
    },
  ];
  const pathname = usePathname();
  return (
    <nav
      ref={mainRef}
      className={`${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden bg-white fixed right-0 top-0 bottom-0 h-screen shadow-2xl z-[9999999] transition-[width] duration-500`}>
      <div className="pl-8 flex flex-col justify-between pt-6 pb-10 px-4 h-full">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <span className="font-semibold text-2xl text-black">H</span>
            <span className="font-semibold text-2xl text-orange-500">o</span>
            <span className="font-semibold text-2xl text-black">st</span>
            <span className="font-semibold text-2xl  text-black">Buddy</span>
          </div>{" "}
          <div className="w-10 grid place-content-center -mt-0.5 ml-6">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-500 p-2 space-y-[7px] cursor-pointer group opacity-50 hover:opacity-100 hover:bg-[#8E93A4]/10"
              onClick={onClose}>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] block transition rounded-full duration-300 ${
                  isOpen && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span className={`w-4 relative h-[2px] bg-[#8E93A4] transition  rounded-full duration-100 opacity-100 invisible `}></span>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] rounded-full transition duration-300 ${
                  isOpen && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <div
                onClick={onClose}
                className={`flex gap-[10px] items-center cursor-pointer ${
                  pathname === link.href && "text-transparent bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text font-semibold"
                }`}>
                <h1 className="whitespace-nowrap">{link.label}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <button className="text-black flex flex-row items-center justify-center bg-transparent border border-black rounded-lg px-4 py-2 outline-none cursor-pointer">
            <AiOutlineGlobal className="mr-2 item-center" />
            English
          </button>
          <button className="text-white flex flex-row items-center justify-center bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2">
            Sign Up
            <FaArrowRight className="ml-2 item-center" />
          </button>
        </div>
      </div>
    </nav>
  );
}