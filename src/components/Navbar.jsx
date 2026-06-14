import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-30 py-8 px-6 md:px-0 flex flex-col md:flex-row justify-between items-center">
      
      {/* 
        1. LOGO CONTAINER: 
        - On mobile: Centered horizontally (w-full flex justify-center)
        - On desktop (md): Left-aligned with padding over the green block (md:w-[40%] md:justify-start md:pl-16 lg:pl-24)
      */}
      <div className="w-full md:w-[40%] flex justify-center md:justify-start md:pl-16 lg:pl-80">
        <span className="text-white text-4xl font-serif font-bold tracking-wide">
          HealthyMe
        </span>
      </div>

      {/* 
        2. DESKTOP NAVIGATION LINKS:
        - On mobile: Hidden
        - On desktop (md): Takes up 60% of the width and CENTERS the links inside the beige block
      */}
      <div className="hidden md:flex w-[60%] justify-center items-center gap-10 text-base font-sans font-semibold text-slate-800">
        <a href="#home" className="text-[#d48c47] hover:opacity-80 transition-opacity">
          Home
        </a>
        <a href="#recipes" className="hover:text-[#204d37] transition-colors">
          Recipes
        </a>
        <a href="#about" className="hover:text-[#204d37] transition-colors">
          About Us
        </a>
        <a href="#contact" className="hover:text-[#204d37] transition-colors">
          Contact Us
        </a>
      </div>

      {/* 
        3. MOBILE HAMBURGER BUTTON:
        - Absolute positioned on the top right
        - Only visible on mobile screens (md:hidden)
      */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-8 right-8 text-white text-3xl md:hidden focus:outline-none z-50 hover:scale-105 active:scale-95 transition-all"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* 
        4. MOBILE DROPDOWN DRAWER:
        - Slides down from the top on mobile screens when clicked
      */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6 text-center md:hidden border border-slate-100 z-40 animate-slide-left">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="text-[#d48c47] font-semibold py-2 text-lg border-b border-slate-50"
          >
            Home
          </a>
          <a 
            href="#recipes" 
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-semibold py-2 text-lg border-b border-slate-50 hover:text-[#204d37]"
          >
            Recipes
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-semibold py-2 text-lg border-b border-slate-50 hover:text-[#204d37]"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-semibold py-2 text-lg hover:text-[#204d37]"
          >
            Contact Us
          </a>
        </div>
      )}

    </nav>
  );
}