'use client'
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="w-full h-16 flex flex-col sm:flex-row items-center justify-between sm:justify-around px-2 sm:px-4 text-base sm:text-xl text-black gap-2 sm:gap-0" aria-label="Main Navigation">
      <div className="img mb-2 sm:mb-0 font-bold text-2xl">Varnix</div>
      <button className="sm:hidden bg-pink-500 px-2 py-1 text-white rounded-2xl" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`flex flex-col sm:flex-row gap-3 sm:gap-12 items-center ${open ? "block" : "hidden sm:flex"}`}>
        <li><a href="#" className="hover:text-pink-500">Home</a></li>
        <li><a href="#" className="hover:text-pink-500">About</a></li>
        <li><a href="#" className="hover:text-pink-500">Our Services</a></li>
        <li><a href="#" className="hover:text-pink-500">Our Works</a></li>
        <li><a href="#" className="hover:text-pink-500">Blogs</a></li>
      </ul>
      <a href="#contact" className="bg-pink-500 px-2 py-1 text-white rounded-2xl mt-2 sm:mt-0 hover:bg-pink-600 transition">Contact Us</a>
    </nav>
  );
};

export default Navbar;
