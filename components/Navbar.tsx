'use client'
import React from "react";
import Link  from "next/link";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="w-full min-h-16 sm:h-16 flex flex-col sm:flex-row items-center justify-between sm:justify-around px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg lg:text-xl text-black gap-3 sm:gap-0 py-2 sm:py-0" aria-label="Main Navigation">
      <div className="img mb-0 sm:mb-0 font-bold text-xl sm:text-2xl">Varnix</div>
      <button className="sm:hidden bg-pink-500 px-3 py-1.5 text-white rounded-2xl text-lg" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-12 items-center w-full sm:w-auto ${open ? "block" : "hidden sm:flex"} pb-2 sm:pb-0`}>
        <li><a href="#" className="hover:text-pink-500 transition">Home</a></li>
        <li><a href="#" className="hover:text-pink-500 transition">About</a></li>
        <li><a href="#" className="hover:text-pink-500 transition">Our Services</a></li>
        <li><a href="#" className="hover:text-pink-500 transition">Our Works</a></li>
        <li><a href="#" className="hover:text-pink-500 transition">Blogs</a></li>
      </ul>
      <Link href="/contact-us" className="bg-pink-500 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-white rounded-2xl mt-0 sm:mt-0 hover:bg-pink-600 transition text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
