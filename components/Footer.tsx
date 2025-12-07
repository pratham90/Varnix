
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-[#232323] flex flex-col md:flex-row justify-center md:gap-32 gap-10 items-start px-4 md:px-16 py-10 mt-10 w-full shadow-sm" aria-label="Footer">
      <div className="flex flex-col w-full md:w-2/5">
        <h1 className="text-2xl font-bold mb-2">Varnix</h1>
        <p className="text-base mb-6">Great brands aren’t built overnight — they’re built with intent, identity, and imagination. Great brands aren’t built overnight — they’re built with intent, identity, and imagination.</p>
        <nav aria-label="Footer Navigation">
          <div className="flex flex-wrap gap-4 md:gap-8 mt-2 text-base md:text-lg">
            <a href="#" className="text-pink-500 font-medium">Home</a>
            <a href="#" className="hover:text-pink-500">About Us</a>
            <a href="#" className="hover:text-pink-500">Our Works</a>
            <a href="#" className="hover:text-pink-500">Blogs</a>
            <a href="#" className="hover:text-pink-500">Contact Us</a>
          </div>
        </nav>
      </div>
      {/* Right: Address, contact info, social icons */}
      <div className="flex flex-col items-start md:pl-20 justify-start gap-6 w-full md:w-1/3">
        <div>
          <h3 className="font-bold text-lg mb-1">Address</h3>
          <p className="text-base">Head Office – Noida (U.P.)<br />Corporate Office – Indore (M.P.)</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">Contact Info</h3>
          <p className="text-base">+91-62006-71009<br />+91-70175-25996</p>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <a href="#" aria-label="Instagram" className="text-pink-500 text-2xl"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="text-pink-500 text-2xl"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="text-pink-500 text-2xl"><FaTwitter /></a>
          <a href="#" aria-label="YouTube" className="text-pink-500 text-2xl"><FaYoutube /></a>
          <a href="#" aria-label="WhatsApp" className="text-pink-500 text-2xl"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
