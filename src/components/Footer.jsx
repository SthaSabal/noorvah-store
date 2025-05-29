import { Link } from "react-router-dom";

import noovahLogo from "../assets/noovah-logo.png";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#f1f0ec] py-6 px-4 md:py-8 md:px-6 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
        {/* Logo & Navigation */}
        <div className="flex flex-col items-start gap-4 md:gap-6">
          <img
            src={noovahLogo}
            alt="Noovah Logo"
            className="w-20 h-20 md:w-28 md:h-28 object-cover"
          />
          <nav className="flex flex-col md:flex-row gap-3 md:gap-8 text-black font-montserrat font-medium text-sm md:text-[15px] w-full md:w-auto">
            <Link to="/" className="hover:text-orange-600 transition-colors text-center md:text-left">
              Home
            </Link>
            <Link to="/product" className="hover:text-orange-600 transition-colors text-center md:text-left">
              Product
            </Link>
            <Link to="/about" className="hover:text-orange-600 transition-colors text-center md:text-left">
              About
            </Link>
            <Link to="/contact" className="hover:text-orange-600 transition-colors text-center md:text-left">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Links */}

        <div className="flex flex-col items-start gap-3 md:pt-10 md:items-start w-full md:w-auto">
          <h3 className="text-base font-semibold text-black tracking-wide">Social</h3>
          <a
            href="https://www.facebook.com/profile.php?id=61575299308376"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition"
          >
            <img src={facebookIcon} alt="Facebook Icon" className="w-5 h-5" />
            <span>Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/noorvahnepal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition"
          >
            <img src={instagramIcon} alt="Instagram Icon" className="w-5 h-5" />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/noorvah/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-xs md:text-sm text-black">
        ©2025 noorvah. All Rights Reserved
      </div>
    </footer>
  );
};
