import React from 'react';

export default function RecipeModal({ recipe, onClose }) {
  return (
    <>
      {/* 1. Backdrop Overlay (dims the background and closes modal if clicked outside) */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
      />

      {/* 2. Modal Card Container */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[520px]  bg-[#fbf9f4] rounded-[32px] overflow-hidden shadow-2xl z-50 flex flex-col transition-all border border-slate-100">
        
        {/* Top Header Bar (where the close button sits) */}
        <div className="relative h-14 bg-[#fbf9f4] flex items-center justify-end px-6">
          <button 
            onClick={onClose}
            className="text-[#204d37] hover:scale-110 active:scale-95 transition-transform text-2xl font-bold focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Green Band with Overlapping Salad Plate */}
        <div className="relative h-36 bg-[#204d37] flex items-center pl-48 pr-6">
          
          {/* 
            Perfect Square Image Wrapper:
            We use identical width and height (w-48 h-48) to guarantee a perfect circle 
            and prevent different shaped images from stretching into ovals.
          */}
          <div className="absolute -left-4 -top-8 w-55 h-55 transition-transform">
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              /* object-cover fills the boundaries cleanly; border-4 and shadow-md replicate your UI style */
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Title on the right of the green band */}
          <h2 className="text-3xl font-serif text-white tracking-wide font-bold">
            {recipe.name}
          </h2>
        </div>

        {/* Bottom Area: Description & Badges */}
        <div className="p-8 pt-10 flex flex-col justify-between flex-grow">
          
          {/* Recipe Description Text */}
          <p className="whitespace-pre-line text-slate-800 text-sm leading-relaxed text-justify font-sans"
            dangerouslySetInnerHTML={{
            __html: recipe.description
              .replace("Description:", "<strong>Description:</strong>")
              .replace("Ingredients:", "<strong>Ingredients:</strong>")
              .replace("Instructions:", "<strong>Instructions:</strong>")
          }}
          />

          {/* Calorie & Time Badges aligned to the bottom right */}
          <div className="flex justify-end gap-3 mt-8">
            {/* Calorie Badge */}
            <div className="flex items-center gap-1.5 bg-[#eae5db]/60 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <span>🔥</span>
              <span>{recipe.calories}</span>
            </div>
            
            {/* Time Badge */}
            <div className="flex items-center gap-1.5 bg-[#eae5db]/60 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <span>⏱️</span>
              <span>{recipe.time}</span>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}