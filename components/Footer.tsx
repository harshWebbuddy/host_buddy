import { footerLinks } from "@/constants";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

   
import Image from "next/image";
import Link from "next/link";
import FooterBox from "./FooterBox";

const Footer = () => (

  <footer className='ma:mt-0  ma:w-full flex flex-col text-black-100  border-t bg-gradient-to-b from-gray-800 to-gray-900 border-gray-100'>
     <div className=" ma:w-[1220px]  h-[206px] mx-auto relative -top-60 ma:-top-24 pa:-top-40  "><FooterBox/></div> 
    <div className='flex max-ma:flex-col flex-wrap justify-center item-center mx-auto  ma:gap-[440px] sm:px-16 px-6 py-10  ma:w-[1620px] pa:w-[800px]'>
      <div className='flex flex-col justify-center ma:justify-start  items-center ma:items-start gap-6'>
<div className="justify-center  ma:mr-0  ">
        <span className="font-semibold  text-6xl ma:text-2xl text-white">H</span>
        <span className="font-semibold  text-6xl  ma:text-2xl text-orange-500">o</span>
        <span className="font-semibold  text-6xl  ma:text-2xl text-white">st</span>
        <span className="font-semibold   text-6xl ma:text-2xl  text-white">Buddy</span>
      </div>
        <p className='text-base text-white ma:w-[274px]  justify-center ml-4  ma:ml-0  item-center'>
        Lorem ipsum dolor sit amet consectetur. Viverra aenean tristique sit aliquam blandit. Luctus.
        </p>
        <div className="flex flex-row justify-evenly gap-16 ma:gap-7 mr-8 ma:mr-0 opacity-0 ma:opacity-90 ">
  <span className="text-white text-2xl hover:text-orange-500"><FaFacebookF /></span>
  <span className="text-white text-2xl hover:text-orange-500"><IoLogoInstagram /></span>
  <span className="text-white text-2xl hover:text-orange-500"><CiTwitter /></span>
  <span className="text-white text-2xl hover:text-orange-500"><RiLinkedinLine /></span>
</div>


      </div>

      <div className="footer__links flex flex-col ma:flex-row justify-center items-center gap-10  ma:gap-20 text-white">
  {/* Company Links */}
  <div className="flex flex-row ma:gap-20 pa:gap-96 gap-40  items-center justify-center mx-auto">
  <div className="footer__link text-white mx-auto  items-center justify-center">
    <h3 className="font-bold mb-5">Company</h3>
    <div className="flex flex-col gap-6  items-center justify-center mx-auto">
      <Link href="/" className="text-gray-500">Home</Link>
      <Link href="/" className="text-gray-500">About Us</Link>
      <Link href="/" className="text-gray-500">Partners</Link>
      <Link href="/" className="text-gray-500">Attributes</Link>
    </div>
  </div>

  {/* Hosting Links */}
  <div className="footer__link text-white mx-auto items-center justify-center ">
    <h3 className="font-bold mb-5">Hosting</h3>
    <div className="flex flex-col gap-6 items-center justify-center mx-auto">
      <Link href="/" className="text-gray-500">Events</Link>
      <Link href="/" className="text-gray-500">Blog</Link>
      <Link href="/" className="text-gray-500">Podcast</Link>
      <Link href="/" className="text-gray-500">Invite</Link>
    </div>
  </div>
  </div>
  <div className="flex flex-row ma:gap-20  pa:gap-96 gap-40   items-center justify-center mx-auto ">
  {/* Features Links */}
  <div className="footer__link text-white mx-auto  items-center justify-center ">
    <h3 className="font-bold mb-5">Features</h3>
    <div className="flex flex-col gap-6  items-center justify-center mx-auto">
      <Link href="/" className="text-gray-500">Discord</Link>
      <Link href="/" className="text-gray-500">Linkedin</Link>
      <Link href="/" className="text-gray-500">Twitter</Link>
      <Link href="/" className="text-gray-500">Insta</Link>
    </div>
  </div>

  {/* Legal Links */}
  <div className="footer__link text-white mx-auto  items-center justify-center ">
    <h3 className="font-bold mb-5 ">Legalising</h3>
    <div className="flex flex-col gap-6  items-center justify-center mx-auto">
      <Link href="/" className="text-gray-500">Discord</Link>
      <Link href="/" className="text-gray-500">Instagram</Link>
      <Link href="/" className="text-gray-500">Twitter</Link>
      <Link href="/" className="text-gray-500">Facebook</Link>
    </div>
  </div>
  </div>
</div>

    </div>
    <div className="flex flex-row justify-evenly gap-16 ma:gap-7 mr-8 ma:mr-0   opacity-1 ma:opacity-0">
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