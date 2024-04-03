import { footerLinks } from "@/constants";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

   
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className='w-full flex flex-col text-black-100  mt-5 border-t bg-gradient-to-b from-gray-800 to-gray-900 border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-center md:justify-start  items-center md:items-start gap-6'>
<div className="justify-center mr-5 md:mr-0">
        <span className="font-semibold text-2xl text-white">H</span>
        <span className="font-semibold text-2xl text-orange-500">o</span>
        <span className="font-semibold text-2xl text-white">st</span>
        <span className="font-semibold text-2xl  text-white">Buddy</span>
      </div>
        <p className='text-base text-white w-5/12 justify-center'>
        Lorem ipsum dolor sit amet consectetur. Viverra aenean tristique sit aliquam blandit. Luctus.
        </p>
        <div className="flex flex-row justify-evenly gap-7">
  <span className="text-white text-2xl"><FaFacebookF /></span>
  <span className="text-white text-2xl"><IoLogoInstagram /></span>
  <span className="text-white text-2xl"><CiTwitter /></span>
  <span className="text-white text-2xl"><RiLinkedinLine /></span>
</div>

      </div>

      <div className="footer__links flex flex-row justify-center items-center  gap-0 md:gap-20 text-white">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link text-white ">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5 text-white">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
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