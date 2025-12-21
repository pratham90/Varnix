'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
        aria-label="Main Navigation"
      >
        {/* CONTAINER FIX */}
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-black hover:text-pink-500 transition-colors duration-300">
              <Image
                src="/VARNIX.png"
                alt="Varnix Logo"
                width={120}
                height={40}
                className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about-us" },
                { name: "Our Services", href: "/our-service" },
                { name: "Our Works", href: "/our-works" },
                { name: "Blogs", href: "/blog" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base lg:text-lg text-black hover:text-pink-500 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <Link
              href="/contact-us"
              className="hidden md:block bg-pink-500 px-5 py-2 text-white rounded-full text-sm lg:text-base hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'rotate-45 top-2.5' : 'top-0'}`} />
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ${open ? '-rotate-45 top-2.5' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
            open ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 inset-x-0 bg-white shadow-2xl z-40 transition-transform duration-300 ease-out ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about-us" },
              { name: "Our Services", href: "/our-service" },
              { name: "Our Works", href: "/our-works" },
              { name: "Blogs", href: "/blog" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="block text-lg font-medium text-black hover:text-pink-500 transition-colors duration-300 py-2 border-b border-gray-100"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="block w-full bg-pink-500 text-white text-center py-3 rounded-full font-medium hover:bg-pink-600 transition-colors duration-300 mt-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
