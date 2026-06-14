import React from 'react';
import chefImg from '../assets/chef.png';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-[#fbf9f4]">
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24'>
        {/* 1. LEFT COLUMN: Layered Chef Image Block */}
        {/* Increased overall dimensions to make the block larger on the screen and fixed h-[20px] to h-[280px] */}
        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] shrink-0">
          
          {/* Layer A: Offset Shadow Card (Sage Green) shifted to the TOP-LEFT */}
          <div className="absolute inset-0 bg-[#a2b7a5] rounded-3xl -translate-y-6 -translate-x-6" />
          
          {/* Layer B: Main Dark Green Card */}
          <div className="absolute inset-0 bg-[#204d37] rounded-3xl shadow-lg" />

          {/* Layer C: Chef Image scaled to fill the wider card and break out beautifully */}
{/* Layer C: Chef Image (Anchored to the bottom, breaking out of the top) */}
  <img 
    src={chefImg} 
    alt="Our Chef" 
    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[112%] max-w-none object-contain z-10 drop-shadow-2xl"
  />
        </div>

        {/* 2. RIGHT COLUMN: About us Text */}
        <div className="flex flex-col justify-center items-start text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#204d37] mb-6">
            About us
          </h2>
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-sans font-medium">
           Welcome to HealthyMe! We started with a simple idea: that everyone deserves to enjoy food that is both good for them and genuinely delicious. We are a passionate team of food lovers, nutritionists, and chefs dedicated to taking the guesswork out of healthy living. Our kitchen is your kitchen, and every recipe we share is crafted with care, tested for simplicity, and designed to bring a little more joy and wellness to your table. We're so glad you're here and can't wait to embark on this delicious journey with you.
          </p>
        </div>
      </div>
    </section>
  );
}