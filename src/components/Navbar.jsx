import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Decoupled padding-left (pl) and padding-right (pr) to keep the logo positioned over the green shape
    <nav className="absolute top-0 left-0 w-full z-30 py-8 pl-6 md:pl-8 lg:pl-10 xl:pl-16 pr-6 md:pr-12 lg:pr-16 xl:pr-20 flex justify-between items-center">
      
      {/* 
        1. LOGO CONTAINER: 
        - Hidden on mobile/small screens (hidden)
        - On tablet/medium screens (md): Visible, styled in dark green (text-[#1E4A31]) as it sits over the cream background
        - On desktop/large screens (lg): Transitions to white (lg:text-white) and stays within the green side
      */}
      <div className="hidden md:block">
        <span className="text-[#1E4A31] lg:text-white text-3xl lg:text-4xl font-serif font-bold tracking-wide transition-colors duration-200">
          HealthyMe
        </span>
      </div>

      {/* 
        2. DESKTOP NAVIGATION LINKS:
        - Hidden on mobile
        - Aligned to the far-right on desktop (md:flex)
      */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-sans font-semibold text-slate-800">
        <a href="#home" className="text-[#d48c47] hover:opacity-80 transition-opacity">
          Home
        </a>
        <a href="#recipes" className="hover:text-[#1E4A31] transition-colors">
          Recipes
        </a>
        <a href="#about" className="hover:text-[#1E4A31] transition-colors">
          About Us
        </a>
        <a href="#contact" className="hover:text-[#1E4A31] transition-colors">
          Contact Us
        </a>
      </div>

      {/* 
        3. MOBILE HAMBURGER / CLOSE BUTTON (SVG):
        - Absolute positioned on the top right
        - Visible only on mobile screens (md:hidden)
      */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-8 right-8 text-[#1E4A31] md:hidden focus:outline-none z-50 hover:scale-105 active:scale-95 transition-all"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          // Close "X" SVG Icon
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Menu SVG Icon
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* 
        4. MOBILE DROPDOWN DRAWER:
        - Slides down on mobile screens when active
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
            className="text-slate-600 font-semibold py-2 text-lg border-b border-slate-50 hover:text-[#1E4A31]"
          >
            Recipes
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-semibold py-2 text-lg border-b border-slate-50 hover:text-[#1E4A31]"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-semibold py-2 text-lg hover:text-[#1E4A31]"
          >
            Contact Us
          </a>
        </div>
      )}

    </nav>
  );
}