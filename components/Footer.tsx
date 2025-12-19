
import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-[#232323] flex flex-col md:flex-row justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 mt-6 sm:mt-8 md:mt-10 w-full shadow-sm" aria-label="Footer">
      <div className="flex flex-col w-full md:w-2/5 lg:w-2/5">
        <div className="mb-2 sm:mb-3">
          <Image 
            src="/VARNIX.png" 
            alt="Varnix Logo" 
            width={150} 
            height={50} 
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
          />
        </div>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed">Great brands aren’t built overnight—they are thoughtfully crafted
through intent, a strong sense of identity, and imagination that transforms ideas into lasting brand
experiences.</p>
        <nav aria-label="Footer Navigation">
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg">
            <a href="#" className="text-pink-500 font-medium hover:underline">Home</a>
            <a href="#" className="hover:text-pink-500 transition">About Us</a>
            <a href="#" className="hover:text-pink-500 transition">Our Works</a>
            <a href="#" className="hover:text-pink-500 transition">Blogs</a>
            <a href="#" className="hover:text-pink-500 transition">Contact Us</a>
          </div>
        </nav>
      </div>
      {/* Right: Address, contact info, social icons */}
      <div className="flex flex-col items-start md:pl-4 lg:pl-8 xl:pl-12 2xl:pl-20 justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full md:w-2/5 lg:w-1/3">
        <div>
          <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">Address</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Head Office – Noida (U.P.)<br />Corporate Office – Indore (M.P.)</p>
        </div>
        <div>
          <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">Contact Info</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">+91-62006-71009<br />+91-70175-25996</p>
        </div>
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3">
          <a href="#" aria-label="Instagram" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaTwitter /></a>
          <a href="#" aria-label="YouTube" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaYoutube /></a>
          <a href="#" aria-label="WhatsApp" className="text-pink-500 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 transition"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
