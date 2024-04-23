import { footerLinks } from "@/constants";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";
import FooterBox from "./FooterBox";

const Footer = () => (
  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-700  border-gray-100">
  <footer className="md:mt-0 w-full  xl:mt-0 2xl:w-[1920px] 2xl:h-[603px] flex flex-col text-black-100  border-t   mx-auto items-center justify-center">
    <div className="w-full  xl:-top-20 2xl:w-[1220px]  h-[206px] mx-auto relative -top-60 2xl:-top-2 pa:-top-32 mp:-top-60 gf:mb-20   ">
      <FooterBox />
    </div>
    <div className="xl:w-[1000px] 2xl:w-[1220px] gf:flex-col flex 2xl:flex-row xl:flex-row mp:flex-col justify-center xl:justify-between 2xl:justify-between item-center mx-auto 2xl:mt-14 2xl:mb-10  ">
      <div className="flex flex-col  justify-center md:justify-start  items-center mp:items-start gap-6 mp:ml-2 mp:mt-20 ">
        <div className="justify-center md:mr-0 group mp:ml-4 xl:-ml-2 xl:mt-10 2xl:-mt-20 pa:ml-0 gf:-ml-24">
          <span className="font-semibold text-6xl gf:text-3xl mp:text-3xl text-white inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            H
          </span>
          <span className="font-semibold text-6xl gf:text-3xl mp:text-3xl text-orange-500  inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            o
          </span>
          <span className="font-semibold text-6xl gf:text-3xl mp:text-3xl text-white   inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            s
          </span>
          <span className="font-semibold text-6xl gf:text-3xl mp:text-3xl text-white   inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            t
          </span>
          <span className="font-semibold text-6xl gf:text-3xl mp:text-3xl text-white  inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            Buddy
          </span>
        </div>

        <p className="text-[16px] gf:p-8 gf:ml-0 text-white pa:w-[300px] xl:w-[200px] 2xl:w-[274px] font-mono-sans justify-center ml-4  md:ml-0  item-center xl:-ml-2 ">
          Lorem ipsum dolor sit amet consectetur. Viverra aenean tristique sit
          aliquam blandit. Luctus.
        </p>
        <div className="xl:-ml-4 flex flex-row justify-evenly gap-16 md:gap-7 mr-8 md:mr-0 pa:opacity-0 xl:opacity-100 opacity-0 md:opacity-90 ">
          <span className="text-white text-2xl hover:text-orange-500">
            <FaFacebookF />
          </span>
          <span className="text-white text-2xl hover:text-orange-500">
            <IoLogoInstagram />
          </span>
          <span className="text-white text-2xl hover:text-orange-500">
            <CiTwitter />
          </span>
          <span className="text-white text-2xl hover:text-orange-500">
            <RiLinkedinLine />
          </span>
        </div>
      </div>

      <div className="xl:gap-10 pa:mb-4 gf:flex-col gf:-ml-20 gf:gap-8 xl:justify-center flex  flex-col xl:flex-row pa:flex-col md:flex-row justify-center items-center 2xl:flex-row  text-white 2xl:gap-20 mp:gap-10 ">
        {/* Company Links */}
        <div className="flex flex-row  items-center gf:flex-col xl:flex-row justify-center mx-auto 2xl:gap-20 gf:gap-4 mp:gap-10 xl:mt-28 2xl:mt-0 pa:gap-80 xl:gap-10">
          <div className=" text-white mx-auto gf:ml-0 items-center justify-center gf:mb-4">
            <h3 className="font-light mb-5 text-white opacity-65">Company</h3>
            <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/" className="text-white">
                About Us
              </Link>
              <Link href="/" className="text-white">
              Support
              </Link>
              <Link href="/" className="text-white">
              Blog
              </Link>
              <Link href="/" className="text-white">
              Login | Sign Up              </Link>
              <Link href="/" className="text-white">
              Contact Us              </Link>
            </div>
          </div>

          {/* Hosting Links */}
          <div className="footer__link text-white mx-auto items-center justify-center ">
            <h3 className="font-light mb-5 text-white opacity-65">Hosting</h3>
            <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
            <Link href="/" className="text-white">
            Website Hosting              </Link>
              <Link href="/" className="text-white">
              Domain Hosting              </Link>
              <Link href="/" className="text-white">
              Magento Hosting              </Link>
              <Link href="/" className="text-white">
              Small Business Hosting              </Link>
              <Link href="/" className="text-white">
              Free Website Migration             </Link>
              <Link href="/" className="text-white">
              Node.Js Hosting             </Link>
            </div>
          </div>
        </div>
        <div className="xl:ml-0 flex flex-row xl:flex-row gf:ml-[90px] gf:gap-4 gf:flex-col items-center justify-center mx-auto  2xl:gap-20 2xl:-mt-36 mp:mp:-10 mp:gap-10 xl:-mt-8 pa:gap-80 xl:gap-10">
          {/* Features Links */}
          <div className="footer__link text-white mx-auto  items-center justify-center ">
          <h3 className="font-light mb-5 text-white opacity-65">Help</h3>
          <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
            <Link href="/" className="text-white">
            Tutorials               </Link>
              <Link href="/" className="text-white">
              Knowledge Base              </Link>
              <Link href="/" className="text-white">
              Report Abuse              </Link>
             
            </div>
          </div>

          {/* Legal Links */}
          <div className="footer__link text-white mx-auto  gf:ml-6 items-center justify-center ">
            <h3 className="font-light mb-5 text-white opacity-65">Legal</h3>
            <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
            <Link href="/" className="text-white">
            Privacy Policy              </Link>
              <Link href="/" className="text-white">
              Terms & Conditions              </Link>
              <Link href="/" className="text-white">
              Return Policy              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
   

    <div className="flex mp:flex-col mp:gap-10 justify-between gf:gap-y-4 items-center w-full gf:flex-col 2xl:w-[1220px] -mt-2 border-t gf:mt-10 border-dotted border-gray-100 sm:px-16 px-6 py-10 mp:mt-10">
      <div className=" item-center justify-center mx-auto">
        <Link href="/" className="text-white font-light">
          Copyright© 2024
        </Link>
        <Link href="/" className="text-orange-500 mr-1 ml-1 font-bold  ">
          HostBuddy
        </Link>
        <Link href="/" className="text-white font-light ml-1">
          - All Rights Reserved.
        </Link>
      </div>
       <div className="gf:ml-10 gf:gap-10 flex flex-row justify-evenly gap-16 md:gap-7 mr-8 md:mr-0 xl:opacity-0 pa:opacity-100   mp:opacity-100 md:opacity-0">
      <span className="text-white text-2xl hover:text-orange-500">
        <FaFacebookF />
      </span>
      <span className="text-white text-2xl hover:text-orange-500">
        <IoLogoInstagram />
      </span>
      <span className="text-white text-2xl hover:text-orange-500">
        <CiTwitter />
      </span>
      <span className="text-white text-2xl hover:text-orange-500">
        <RiLinkedinLine />
      </span>
    </div>
    </div>
  </footer>
  </div>
);

export default Footer;
