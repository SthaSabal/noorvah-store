import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f1f0ec] py-4 px-6 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="noovah-logo-text.png"
          alt="Noovah Logo"
          className="w h-16 object-cover"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-black font-montserrat text-[15px] font-medium">
          <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <Link to="/product" className="hover:text-orange-600 transition-colors">Product</Link>
          <Link to="/about" className="hover:text-orange-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f1f0ec] shadow-md px-6 py-4 mt-2 rounded-b-lg animate-fade-in-down">
          <div className="flex flex-col gap-4 mt-4 text-black font-montserrat text-[15px] font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Home</Link>
            <Link to="/product" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Product</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};
