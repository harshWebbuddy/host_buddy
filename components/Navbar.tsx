import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

const NavBar = () => (
  <header className='w-full absolute z-10'>
    <nav className="w-full flex flex-col items-center gap-0 md:gap-40 justify-center bg-transparent p-4 md:flex-row">
      <div className="">
        <span className="font-semibold text-2xl text-white">H</span>
        <span className="font-semibold text-2xl text-orange-500">o</span>
        <span className="font-semibold text-2xl text-white">st</span>
        <span className="font-semibold text-2xl  text-white">Buddy</span>
      </div>
      <div className="flex justify-between space-x-1 md:space-x-4">
        <Link href="/" className="text-white font-bold text-xs md:text-xl">
          Home
        </Link>
        <Link href="/" className="text-white font-bold  text-xs md:text-xl">
          Hosting
        </Link>
        <Link href="/" className="text-white font-bold text-xs md:text-xl">
          Pages
        </Link>
        <Link href="/" className="text-white font-bold  text-xs md:text-xl">
          Features
        </Link>
        <Link href="/" className="text-white font-bold  text-xs md:text-xl">
          Support
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="text-white flex flex-row items-center justify-center bg-transparent border border-white rounded-lg px-4 py-2 outline-none cursor-pointer">
          <AiOutlineGlobal className="mr-2 item-center" />
          English
        </button>
        <button className="text-white flex flex-row items-center justify-center bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2">
          Sign Up
          <FaArrowRight className="ml-2 item-center"/>
        </button>
      </div>
    </nav>
  </header>
);

export default NavBar;
