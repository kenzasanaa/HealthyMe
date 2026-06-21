import React from 'react';
// This points to your exported iPhone mockup image file
import phoneMockupImg from '../assets/leftside.png'; 

export default function PromoSection() {
  return (
    // Outer section provides the light cream background margins
    <section className="w-full bg-[#FDFBF7] py-20 px-6 md:px-12 flex justify-center items-center overflow-visible">
      
      {/* 
        OUTER WRAPPER:
        Acts as the anchor for the absolute positioning of the desktop phone mockup.
        Uses "overflow-visible" to guarantee the phone extends beyond the boundaries.
      */}
      <div className="relative w-full max-w-5xl overflow-visible">
        
        {/* 
          1. INNER GREEN CONTAINER:
          Contains only the text, store buttons, and the mobile-fallback inline image.
        */}
        <div className="w-full bg-[#B4C5B9] rounded-[40px] px-8 md:px-16 py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* LEFT COLUMN: Clean Serif text and the app download badges */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center items-start text-left gap-6 md:gap-8 z-10">
            
            {/* Main Typography */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-bold text-slate-900 leading-[1.15] tracking-tight">
              Save Favorite Recipes <br />
              Track Nutrition <br />
              Weekly Meal Plans
            </h2>

            {/* STORE BADGES */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              
              {/* Apple App Store Badge */}
              <a 
                href="#app-store" 
                className="flex items-center bg-[#EEAB47] hover:bg-[#db9a35] text-[#2F1A0C] px-6 py-2.5 rounded-full shadow-md transition-all duration-200 select-none w-full sm:w-auto justify-center"
              >
                <svg className="w-7 h-7 mr-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.43 1.44-1.38 2.82M15.97 4.17c.66-.8 1.1-1.89.98-3.17-.95.04-2.05.6-2.71 1.38-.56.66-1.05 1.76-.9 3.01 1.05.08 2.06-.51 2.63-1.22z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[10px] font-sans font-medium opacity-85">Download on the</span>
                  <span className="block text-lg font-sans font-bold mt-0.5">Apple Store</span>
                </div>
              </a>

              {/* Google Play Store Badge */}
              <a 
                href="#google-play" 
                className="flex items-center bg-white hover:bg-slate-50 text-slate-800 border-2 border-[#EEAB47] px-6 py-2.5 rounded-full shadow-md transition-all duration-200 select-none w-full sm:w-auto justify-center"
              >
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="none">
                  <path d="M3.25 1.75V22.25L14.75 12L3.25 1.75Z" fill="#00C0FF" />
                  <path d="M14.75 12L18.75 16L21.75 13.5C22.25 13.25 22.25 12.75 22.25 12.5C22.25 12.25 22.25 11.75 21.75 11.5L18.75 9L14.75 12Z" fill="#FFC000" />
                  <path d="M14.75 12L3.25 22.25H3.5C4 22.25 4.5 22 4.75 21.75L18.75 16L14.75 12Z" fill="#FF3C3C" />
                  <path d="M3.25 1.75H3.5C4 1.75 4.5 2 4.75 2.25L18.75 9L14.75 12L3.25 1.75Z" fill="#00E060" />
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[10px] font-sans font-medium text-slate-500">Get it from</span>
                  <span className="block text-lg font-sans font-bold text-slate-900 mt-0.5">Google Play</span>
                </div>
              </a>

            </div>

          </div>

          {/* MOBILE/TABLET VIEW ONLY: Inline centered phone image */}
          <div className="w-full flex justify-center lg:hidden mt-6">
            <img 
              src={phoneMockupImg} 
              alt="App Mockup" 
              className="w-[260px] sm:w-[300px] h-auto object-contain filter drop-shadow-xl"
            />
          </div>

          {/* DESKTOP VIEW ONLY: Empty space reservation so the left column doesn't stretch */}
          <div className="hidden lg:block lg:w-[35%]" />

        </div>

        {/* 
          2. DESKTOP VIEW ONLY OVERLAY (Placed OUTSIDE the green container):
          - Using h-[125%] forces the image to always scale larger than the green rectangle.
          - Absolute coordinates keep it centered vertically and perfectly overlapping.
        */}
        <img 
          src={phoneMockupImg} 
          alt="App Mockup" 
          className="hidden lg:block absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 h-[125%] w-auto object-contain z-30 filter drop-shadow-2xl pointer-events-none"
        />

      </div>
    </section>
  );
}