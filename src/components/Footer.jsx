import { Link } from "react-router-dom";

import noovahLogo from "../assets/noovah-logo.png";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#f1f0ec] py-10 px-4 md:px-8 mt-24 border-t border-[#ddd]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={noovahLogo}
            alt="Noovah Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-cover"
          />
          <p className="text-sm text-center md:text-left text-gray-700 max-w-xs leading-relaxed">
            Noorvah is committed to handcrafting natural candles with eco-conscious
            ingredients and minimalist elegance.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-2 text-black font-montserrat">
          <h3 className="text-base font-semibold tracking-wide mb-2">Navigation</h3>
          <Link to="/" className="hover:text-orange-600 transition-colors text-sm">Home</Link>
          <Link to="/product" className="hover:text-orange-600 transition-colors text-sm">Product</Link>
          <Link to="/about" className="hover:text-orange-600 transition-colors text-sm">About</Link>
          <Link to="/contact" className="hover:text-orange-600 transition-colors text-sm">Contact</Link>
        </div>

        {/* Social Media Icons Only */}
        <div className="flex flex-col items-center md:items-start gap-3 text-black font-montserrat">
          <h3 className="text-base font-semibold tracking-wide mb-2">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575299308376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white hover:bg-black transition-colors duration-300"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-5 h-5 transition duration-300 hover:brightness-0 hover:invert"
              />
            </a>
            <a
              href="https://www.instagram.com/noorvahnepal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white hover:bg-black transition-colors duration-300"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-5 h-5 transition duration-300 hover:brightness-0 hover:invert"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/noorvah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white hover:bg-black transition-colors duration-300"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5 transition duration-300 hover:brightness-0 hover:invert"
              />
            </a>
          </div>
        </div>


        {/* Bottom Note */}
        <div className="mt-10 border-t border-[#ccc] pt-4 text-center text-xs text-gray-600 tracking-wide">
          ©2025 Noorvah. All Rights Reserved.
        </div>
        </div>
    </footer>
  );
};
