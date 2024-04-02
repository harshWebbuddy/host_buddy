import Link from "next/link";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div>
        <Link href="/" className="text-white font-bold text-xl">
          Logo
        </Link> 
      </div>
      <div className="flex justify-between space-x-4">
        <Link href="/" className="text-white font-bold text-xl">
          Home
        </Link>
        <Link href="/" className="text-white font-bold text-xl">
          Hosting
        </Link>
        <Link href="/" className="text-white font-bold text-xl">
          Pages
        </Link>
        <Link href="/" className="text-white font-bold text-xl">
          Features
        </Link>
        <Link href="/" className="text-white font-bold text-xl">
          Support
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/login" className="text-white">
          Login
        </Link>
        <Link href="/signup" className="text-white">
          Sign Up
        </Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
