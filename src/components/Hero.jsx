import React from 'react';
import saladHeroImg from '../assets/salad-hero.png'; 

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-[#fbf9f4] overflow-hidden">
      
      {/* 1. LEFT SIDE: Green block containing the overlapping salad bowl */}
    <div className="w-full md:w-[40%]  bg-[#204d37] lg:left-60 md:left-20 flex items-center justify-center p-8 pt-32 md:pt-0 relative ">        

        {/* The Overlapping Salad Bowl Wrapper */}
        {/* On desktop, absolute positioning allows the image to break out of the green box */}
        <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 
          md:absolute md:w-[580px] md:h-[580px] lg:w-[520px] lg:h-[600px]
          md:-right-[100px] lg:-left-[10px] 
          transition-all duration-300 mr-10"
        >
          {/* We use a high-quality Unsplash transparent-style salad plate */}
          <img 
            src={saladHeroImg}
            alt="Healthy Salad Bowl" 
            className="w-full h-full object-cover "
          />
        </div>
    </div>

      {/* 2. RIGHT SIDE: Beige background with the headline and CTA button */}
      <div className="w-full md:w-[60%] bg-[#fbf9f4] flex flex-col justify-center items-start 
        /* Important:  creates spacing so the text doesn't overlap the salad bowl */
        px-8 md:pl-45 lg:pl-48 md:pr-2 py-16 mt-8 md:mt-0 relative"
      >


        {/* Title Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
          This is your start for <br />
          a <span className="text-[#204d37] font-extrabold relative inline-block">
            Healthy

          </span> new life
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 mt-6 text-sm sm:text-base font-medium max-w-md">
          Over 100 recipes and 1000 users
        </p>

        {/* Call to Action (CTA) Button */}
        <button className="mt-8 bg-[#d48c47] hover:bg-[#c37b38] hover:scale-105 active:scale-95 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-[#d48c47]/20 transition-all duration-200">
          Get started
        </button>
      </div>

    </section>
  );
}