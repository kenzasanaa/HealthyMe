import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#204d37] py-12 text-center text-white/90">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-2">
        {/* Copyright Text */}
        <p className="text-sm font-sans tracking-wide">
          © kenzasanaa
        </p>
        
        {/* Contact Email Link */}
        <a 
          href="mailto:contact@healthyme.com" 
          className="text-sm font-sans text-white/70 hover:text-white hover:underline transition-colors mt-1"
        >
          contact@healthyme.com
        </a>
      </div>
    </footer>
  );
}