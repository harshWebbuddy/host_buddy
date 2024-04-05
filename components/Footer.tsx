import { footerLinks } from "@/constants";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

   
import Image from "next/image";
import Link from "next/link";
import FooterBox from "./FooterBox";

const Footer = () => (

  <footer className='md:mt-0  md:w-full flex flex-col text-black-100  border-t bg-gradient-to-b from-gray-800 to-gray-900 border-gray-100'>
     <div className=" md:w-[1220px] h-[206px] mx-auto relative -top-60 md:-top-32  "><FooterBox/></div> 
    <div className='flex max-md:flex-col flex-wrap justify-center item-center mx-auto  md:gap-[440px] sm:px-16 px-6 py-10  md:w-[1620px]'>
      <div className='flex flex-col justify-center md:justify-start  items-center md:items-start gap-6'>
<div className="justify-center  md:mr-0  ">
        <span className="font-semibold  text-6xl md:text-2xl text-white">H</span>
        <span className="font-semibold  text-6xl  md:text-2xl text-orange-500">o</span>
        <span className="font-semibold  text-6xl  md:text-2xl text-white">st</span>
        <span className="font-semibold   text-6xl md:text-2xl  text-white">Buddy</span>
      </div>
        <p className='text-base text-white md:w-[274px]  justify-center ml-4  md:ml-0  item-center'>
        Lorem ipsum dolor sit amet consectetur. Viverra aenean tristique sit aliquam blandit. Luctus.
        </p>
        <div className="flex flex-row justify-evenly gap-16 md:gap-7 mr-8 md:mr-0 opacity-0 md:opacity-90 ">
  <span className="text-white text-2xl hover:text-orange-500"><FaFacebookF /></span>
  <span className="text-white text-2xl hover:text-orange-500"><IoLogoInstagram /></span>
  <span className="text-white text-2xl hover:text-orange-500"><CiTwitter /></span>
  <span className="text-white text-2xl hover:text-orange-500"><RiLinkedinLine /></span>
</div>


      </div>

      <div className="footer__links flex flex-col md:flex-row justify-center items-center gap-3  md:gap-20 text-white">
  {/* Company Links */}
  <div className="flex flex-row gap-20">
  <div className="footer__link text-white mx-auto">
    <h3 className="font-bold">Company</h3>
    <div className="flex flex-col gap-6">
      <Link href="/" className="text-gray-500">Home</Link>
      <Link href="/" className="text-gray-500">About Us</Link>
      <Link href="/" className="text-gray-500">Partners</Link>
      <Link href="/" className="text-gray-500">Attributes</Link>
    </div>
  </div>

  {/* Hosting Links */}
  <div className="footer__link text-white mx-auto">
    <h3 className="font-bold">Hosting</h3>
    <div className="flex flex-col gap-6">
      <Link href="/" className="text-gray-500">Events</Link>
      <Link href="/" className="text-gray-500">Blog</Link>
      <Link href="/" className="text-gray-500">Podcast</Link>
      <Link href="/" className="text-gray-500">Invite</Link>
    </div>
  </div>
  </div>
  <div className="flex flex-row gap-20">
  {/* Features Links */}
  <div className="footer__link text-white mx-auto">
    <h3 className="font-bold">Features</h3>
    <div className="flex flex-col gap-6">
      <Link href="/" className="text-gray-500">Discord</Link>
      <Link href="/" className="text-gray-500">Linkedin</Link>
      <Link href="/" className="text-gray-500">Twitter</Link>
      <Link href="/" className="text-gray-500">Insta</Link>
    </div>
  </div>

  {/* Legal Links */}
  <div className="footer__link text-white mx-auto">
    <h3 className="font-bold">Legal</h3>
    <div className="flex flex-col gap-6">
      <Link href="/" className="text-gray-500">Discord</Link>
      <Link href="/" className="text-gray-500">Instagram</Link>
      <Link href="/" className="text-gray-500">Twitter</Link>
      <Link href="/" className="text-gray-500">Facebook</Link>
    </div>
  </div>
  </div>
</div>

    </div>
    <div className="flex flex-row justify-evenly gap-16 md:gap-7 mr-8 md:mr-0   opacity-1 md:opacity-0">
  <span className="text-white text-2xl hover:text-orange-500"><FaFacebookF /></span>
  <span className="text-white text-2xl hover:text-orange-500"><IoLogoInstagram /></span>
  <span className="text-white text-2xl hover:text-orange-500"><CiTwitter /></span>
  <span className="text-white text-2xl hover:text-orange-500"><RiLinkedinLine /></span>
</div>

    <div className='flex justify-between items-center flex-wrap mt-7 border-t border-dotted border-gray-100 sm:px-16 px-6 py-10'>

      <div className="footer__copyrights-link item-center justify-center mx-auto">
        <Link href="/" className="text-gray-500">
        Copyright© 2024 
        </Link>
        <Link href="/" className="text-orange-500 mr-1 ml-1   ">
        HostBuddy
       </Link>
        <Link href="/" className="text-gray-500 ml-1">
     - All Rights Reserved.
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;