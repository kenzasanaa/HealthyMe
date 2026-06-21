import React from 'react';
import saladHeroImg from '../assets/heropic.png'; // Points to your combined composition image

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full bg-[#FBF9F4] overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* Left Side: Combined composition image */}
      {/* Changed "justify-center" to "justify-start" on mobile to pull the image flush to the left edge */}
      <div className="w-full md:w-[50%] flex items-center justify-start">
        <img 
          src={saladHeroImg}
          alt="Healthy Salad and Avocado Composition"
          className="w-[106%] max-w-none -ml-5 md:-ml-8 lg:-ml-2 md:w-[115%] lg:w-[100%] h-auto object-contain"
        />
      </div>

      {/* Right Side: Text & Call to Action */}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 mt-8 md:mt-0">
        
        {/* Serif Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] tracking-tight">
          Start Your <span className="text-[#1E4A31] font-serif font-semibold">Healthy</span> <br />
          Lifestyle Today
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 mt-5 text-sm sm:text-base font-sans font-medium tracking-wide">
          Over 100 recipes and 1000 users
        </p>

        {/* Rating Stars (4.5 Stars) */}
        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3, 4].map((star) => (
            <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          {/* 5th Star (Half filled) */}
          <div className="relative w-5 h-5">
            <svg className="absolute top-0 left-0 w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-8 bg-[#D48C47] hover:bg-[#c37b38] hover:scale-[1.02] active:scale-[0.98] text-white font-medium py-3.5 px-10 rounded-2xl shadow-lg shadow-[#D48C47]/15 transition-all duration-200">
          Get started
        </button>
      </div>

    </section>
  );
}