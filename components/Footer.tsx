
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-[#232323] flex flex-col md:flex-row justify-center gap-6 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32 items-start px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 mt-6 sm:mt-8 md:mt-10 w-full shadow-sm" aria-label="Footer">
      <div className="flex flex-col w-full md:w-2/5">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Varnix</h1>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">Great brands aren't built overnight — they're built with intent, identity, and imagination. Great brands aren't built overnight — they're built with intent, identity, and imagination.</p>
        <nav aria-label="Footer Navigation">
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-2 text-sm sm:text-base md:text-lg">
            <a href="#" className="text-pink-500 font-medium hover:underline">Home</a>
            <a href="#" className="hover:text-pink-500 transition">About Us</a>
            <a href="#" className="hover:text-pink-500 transition">Our Works</a>
            <a href="#" className="hover:text-pink-500 transition">Blogs</a>
            <a href="#" className="hover:text-pink-500 transition">Contact Us</a>
          </div>
        </nav>
      </div>
      {/* Right: Address, contact info, social icons */}
      <div className="flex flex-col items-start md:pl-8 lg:pl-12 xl:pl-20 justify-start gap-4 sm:gap-5 md:gap-6 w-full md:w-1/3">
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-1">Address</h3>
          <p className="text-sm sm:text-base">Head Office – Noida (U.P.)<br />Corporate Office – Indore (M.P.)</p>
        </div>
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-1">Contact Info</h3>
          <p className="text-sm sm:text-base">+91-62006-71009<br />+91-70175-25996</p>
        </div>
        <div className="flex flex-row gap-3 sm:gap-4 mt-2">
          <a href="#" aria-label="Instagram" className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition"><FaTwitter /></a>
          <a href="#" aria-label="YouTube" className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition"><FaYoutube /></a>
          <a href="#" aria-label="WhatsApp" className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
