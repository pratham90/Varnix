'use client'
import React from "react";
import Link  from "next/link";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="w-full min-h-14 sm:min-h-16 md:h-16 flex flex-col sm:flex-row items-center justify-between sm:justify-around px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black gap-2 sm:gap-0 py-2 sm:py-0" aria-label="Main Navigation">
      <div className="img mb-0 sm:mb-0 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Varnix</div>
      <button className="sm:hidden bg-pink-500 px-3 py-1.5 text-white rounded-xl sm:rounded-2xl text-base sm:text-lg hover:bg-pink-600 transition" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center w-full sm:w-auto ${open ? "block" : "hidden sm:flex"} pb-2 sm:pb-0`}>
        <li><Link href="/" className="hover:text-pink-500 transition text-sm sm:text-base md:text-lg">Home</Link></li>
        <li><a href="#" className="hover:text-pink-500 transition text-sm sm:text-base md:text-lg">About</a></li>
        <li><a href="#" className="hover:text-pink-500 transition text-sm sm:text-base md:text-lg">Our Services</a></li>
        <li><Link href="/our-works" className="hover:text-pink-500 transition text-sm sm:text-base md:text-lg">Our Works</Link></li>
        <li><Link href="/detailed-blog" className="hover:text-pink-500 transition text-sm sm:text-base md:text-lg">Blogs</Link></li>
      </ul>
      <Link href="/contact-us" className="bg-pink-500 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 text-white rounded-xl sm:rounded-2xl mt-0 sm:mt-0 hover:bg-pink-600 transition text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto text-center sm:text-left">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
