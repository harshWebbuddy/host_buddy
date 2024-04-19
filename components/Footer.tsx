import { footerLinks } from "@/constants";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";
import FooterBox from "./FooterBox";

const Footer = () => (
  <footer className="md:mt-0 w-full 2xl:w-[1920px] 2xl:h-[603px] flex flex-col text-black-100  border-t bg-gradient-to-b from-gray-700 to-gray-900 border-gray-100 mx-auto items-center justify-center">
    <div className=" 2xl:w-[1220px]  h-[206px] mx-auto relative -top-60 2xl:-top-28 pa:top-60  ">
      <FooterBox />
    </div>
    <div className="2xl:w-[1220px] flex 2xl:flex-row justify-center 2xl:justify-between item-center mx-auto ">
      <div className="flex flex-col justify-center md:justify-start  items-center md:items-start gap-6">
        <div className="justify-center md:mr-0 group ">
          <span className="font-semibold text-6xl md:text-2xl text-white inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            H
          </span>
          <span className="font-semibold text-6xl md:text-2xl text-orange-500  inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            o
          </span>
          <span className="font-semibold text-6xl md:text-2xl text-white   inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            s
          </span>
          <span className="font-semibold text-6xl md:text-2xl text-white   inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            t
          </span>
          <span className="font-semibold text-6xl md:text-2xl text-white  inline-block transition-transform transform rotate-0 group-hover:rotate-180">
            Buddy
          </span>
        </div>

        <p className="text-[16px] text-white 2xl:w-[274px] font-mono-sans justify-center ml-4  md:ml-0  item-center">
          Lorem ipsum dolor sit amet consectetur. Viverra aenean tristique sit
          aliquam blandit. Luctus.
        </p>
        <div className="flex flex-row justify-evenly gap-16 md:gap-7 mr-8 md:mr-0 opacity-0 md:opacity-90 ">
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

      <div className=" flex flex-col md:flex-row justify-center items-center  text-white 2xl:gap-20">
        {/* Company Links */}
        <div className="flex flex-row  items-center justify-center mx-auto 2xl:gap-20">
          <div className="footer__link text-white mx-auto  items-center justify-center">
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
        <div className="flex flex-row   items-center justify-center mx-auto  2xl:gap-20 2xl:-mt-36">
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
          <div className="footer__link text-white mx-auto  items-center justify-center ">
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
    {/* <div className="flex flex-row justify-evenly gap-16 md:gap-7 mr-8 md:mr-0   opacity-1 md:opacity-0">
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
    </div> */}

    <div className="flex justify-between items-center w-full 2xl:w-[1220px] mt-7 border-t border-dotted border-gray-100 sm:px-16 px-6 py-10">
      <div className="footer__copyrights-link item-center justify-center mx-auto">
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
    </div>
  </footer>
);

export default Footer;
