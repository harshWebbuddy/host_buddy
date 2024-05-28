import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";

import Link from "next/link";
import FooterBox from "./FooterBox";
import Logo from "./shared/Logo";

const Footer = () => (
  <div className="w-full h-full bg-gradient-to-b from-[#292E34] to-[#16191C] border-gray-100 px-4">
    <footer>
      <div className="max-w-[1420px] mx-auto -translate-y-40">
        <FooterBox />
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-[1420px] mx-auto gap-20 xl:gap-40 -mt-20">
        <div className="w-full max-w-[300px] space-y-8">
          <Logo />
          <p className="text-[16px] text-white hover:text-orange-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Viverra aenean tristique sit aliquam blandit. Luctus.
          </p>
          <div className="flex items-center gap-10">
            <span className="text-white  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <FaFacebookF />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
            <span className="text-white  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <IoLogoInstagram />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
            <span className="text-white  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <CiTwitter />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
            <span className="text-white  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <RiLinkedinLine />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
          </div>
        </div>

        {/* Company Links */}
        <div className="w-full flex flex-wrap gap-y-20 gap-x-10 justify-between">
          <div className=" text-white hover:text-orange-500">
            <h3 className="font-light mb-5 text-white hover:text-orange-500 opacity-65">Company</h3>
            <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
              <Link href="/" className="text-white hover:text-orange-500">
                Home
              </Link>
              <Link href="/footer/about" className="text-white hover:text-orange-500">
                About Us
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Support
              </Link>
              <Link href="/footer/blog" className="text-white hover:text-orange-500">
                Blog
              </Link>
              <Link href="/footer/login" className="text-white hover:text-orange-500">
                Login | Sign Up{" "}
              </Link>
              <Link href="/footer/Contact" className="text-white hover:text-orange-500">
                Contact Us{" "}
              </Link>
            </div>
          </div>

          {/* Hosting Links */}
          <div className="text-white hover:text-orange-500">
            <h3 className="font-light mb-5 text-white hover:text-orange-500 opacity-65">Hosting</h3>
            <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
              <Link href="/" className="text-white hover:text-orange-500">
                Website Hosting{" "}
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Domain Hosting{" "}
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Magento Hosting{" "}
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Small Business Hosting{" "}
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Free Website Migration{" "}
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Node.Js Hosting{" "}
              </Link>
            </div>
          </div>
          {/* Features Links */}
          <div className="text-white hover:text-orange-500 ">
            <h3 className="font-light mb-5 text-white hover:text-orange-500 opacity-65">Help</h3>
            <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
              <Link href="/" className="text-white hover:text-orange-500">
                Tutorials{" "}
              </Link>
              <Link href="/footer/knowledgebase" className="text-white hover:text-orange-500">
                Knowledge Base{" "}
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Report Abuse{" "}
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-white hover:text-orange-500 ">
            <h3 className="font-light mb-5 text-white hover:text-orange-500 opacity-65">Legal</h3>
            <div className="flex flex-col gap-6  items-left justify-start mx-auto text-left">
              <Link href="/" className="text-white hover:text-orange-500">
                Privacy Policy{" "}
              </Link>
              <Link href="/footer/terms" className="text-white hover:text-orange-500">
                Terms & Conditions{" "}
              </Link>
              <Link href="/" className="text-white hover:text-orange-500">
                Return Policy{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full border-t border-dashed border-[#C8C8C8]/40 sm:px-16 px-6 py-10 mt-16 max-w-[1420px] mx-auto">
        <div className=" item-center justify-center mx-auto text-center">
          <Link href="/" className="text-white hover:text-orange-500 font-light">
            Copyright© 2024
          </Link>
          <Link href="/" className="text-orange-500 mr-1 ml-1 font-bold  ">
            HostBuddy
          </Link>
          <Link href="/" className="text-white hover:text-orange-500 font-light ml-1">
            - All Rights Reserved.
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;