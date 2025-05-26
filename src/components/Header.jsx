import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icon package

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#f1f0ec] py-4 px-6 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="/src/assets/noovah-logo.png"
          alt="Noovah Logo"
          className="w-16 h-16 object-cover"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-black font-montserrat text-[15px] font-medium">
          <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <Link to="/product" className="hover:text-orange-600 transition-colors">Product</Link>
          <Link to="/about" className="hover:text-orange-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
        </nav>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 gap-4 bg-[#f1f0ec]">
          <Link to="/" className="text-black hover:text-orange-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/product" className="text-black hover:text-orange-600" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/about" className="text-black hover:text-orange-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-black hover:text-orange-600" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};
