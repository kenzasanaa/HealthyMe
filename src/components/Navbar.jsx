import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 py-8 flex justify-between items-center">
      
      {/* Left side: Takes up 40% of the width (aligns with the green block) */}
      <div className="w-[40%] lg:pl-30 md:pl-15 sm:pl-16">
        <span className="text-white text-4xl font-serif font-bold tracking-wide lg:pl-56 md:pl-7">
          HealthyMe
        </span>
      </div>

      {/* Right side: Takes up 60% of the width and CENTERS the links inside it */}
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
    </nav>
  );
}