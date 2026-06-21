import React, { useState, useEffect } from 'react';
import RecipeModal from './RecipeModal';

// 1. IMPORT LOCAL ASSETS
import recipe1 from '../assets/recipe1.png';
import recipe2 from '../assets/recipe2.png';
import recipe3 from '../assets/recipe3.png';
import recipe4 from '../assets/recipe4.png'
import recipe5 from '../assets/recipe5.png';
import recipe6 from '../assets/recipe6.png';
import recipe8 from '../assets/recipe8.png';
import recipe9 from '../assets/recipe9.png';
import recipe11 from '../assets/recipe11.png';
import recipe12 from '../assets/recipe12.png';
import recipe13 from '../assets/recipe7.png';
import recipe14 from '../assets/recipe14.png';
import recipe15 from '../assets/recipe15.png';
import recipe16 from '../assets/recipe16.png';

// 2. RECIPE DATA OBJECT (Categorized)
const recipesData = [
  { 
    id: 1, 
    name: "Chicken Caesar salad", 
    category: "Meat",
    image: recipe1, 
    rating: 5,
    shortDescription: "A timeless favorite featuring crisp romaine lettuce, crunchy croutons, and rich Caesar dressing.",
    calories: "220kcal", 
    time: "15min", 
    description: "Description: A timeless favorite featuring crisp romaine lettuce tossed with a rich, creamy dressing, crunchy toasted croutons, and freshly grated parmesan cheese. \n Ingredients: Romaine lettuce, garlic croutons, parmesan cheese, creamy Caesar dressing, cracked black pepper. \n  Instructions: Wash and dry romaine lettuce, then tear it into bite-sized pieces. In a large bowl, gently toss the lettuce with Caesar dressing. Top with croutons, parmesan shavings, and black pepper." 
  },
  { 
    id: 2, 
    name: "Greek salad", 
    category: "Vegetarian",
    image: recipe2, 
    rating: 4.5,
    shortDescription: "A refreshing blend of sweet tomatoes, crisp cucumbers, sharp red onion, olives, and feta cheese.",
    calories: "180kcal", 
    time: "10min", 
    description: "Description: A refreshing and colorful salad highlighting ripe tomatoes, crisp cucumbers, sharp red onions, tangy feta cheese, and savory Kalamata olives. \n Ingredients: Cucumber, cherry tomatoes, red onion, Kalamata olives, feta cheese block, extra virgin olive oil, dried oregano. \n Instructions: Chop the cucumber and tomatoes. Slice the red onion thinly. Combine them in a bowl with the olives, place a block of feta on top, drizzle with olive oil, and sprinkle with oregano." 
  },
  { 
    id: 3, 
    name: "Fruit salad", 
    category: "Vegetarian",
    image: recipe3, 
    rating: 4,
    shortDescription: "A vibrant assortment of sweet, seasonal fresh fruits tossed with a light and zesty lime citrus glaze.",
    calories: "150kcal", 
    time: "8min", 
    description: "Description: A vibrant mix of sweet, juicy seasonal fruits including berries, citrus, and kiwi, lightly tossed in a fresh, zesty lime juice glaze. \n Ingredients: Strawberries, blueberries, kiwi, pineapple chunks, fresh mint, lime juice. \n Instructions: Wash all fruits. Slice the strawberries and kiwi. Combine all fruit in a large bowl, squeeze fresh lime juice over them, and garnish with chopped mint leaves." 
  },
  { 
    id: 4, 
    name: "Smoothie bowl", 
    category: "Drinks",
    image: recipe4, 
    rating: 4.5,
    shortDescription: "Thick and creamy berry-banana blend base, loaded with seeds, crunchy granola, and fresh fruits.",
    calories: "280kcal", 
    time: "5min", 
    description: "Description: A thick, blended berry and banana base designed to be eaten with a spoon, decorated with healthy seeds and fresh fruit toppings.\n Ingredients: Frozen mixed berries, half a banana, a splash of almond milk, granola, chia seeds, sliced strawberries.\n Instructions: Blend the frozen berries, banana, and a small splash of almond milk until thick and smooth. Pour into a bowl and arrange granola, chia seeds, and strawberry slices on top." 
  },
  { 
    id: 5, 
    name: "Chickpea salad", 
    category: "Vegetarian",
    image: recipe5, 
    rating: 5,
    shortDescription: "A protein-packed, flavorful medley of hearty chickpeas, fresh garden vegetables, and olive oil dressing.",
    calories: "240kcal", 
    time: "12min", 
    description: "Description: A hearty, protein-packed salad packed with seasoned chickpeas, diced crunchy vegetables, and a light herb vinaigrette. \n Ingredients: Canned chickpeas (rinsed), bell peppers, cucumber, parsley, lemon juice, olive oil, salt, and pepper. \n Instructions: Drain and rinse the chickpeas. Dice the peppers and cucumber. Mix everything in a bowl, drizzle with olive oil and lemon juice, and season to taste." 
  },
  { 
    id: 6, 
    name: "Quinoa salad", 
    category: "Vegetarian",
    image: recipe6, 
    rating: 4.5,
    shortDescription: "Fluffy quinoa paired harmoniously with steamed broccoli, cherry tomatoes, and crumbled feta.",
    calories: "310kcal", 
    time: "15min", 
    description: "Description: A nutrient-dense dish pairing light, fluffy cooked quinoa with steamed broccoli, cherry tomatoes, and crumbled feta cheese. \n Ingredients: Cooked quinoa, steamed broccoli florets, cherry tomatoes, crumbled feta, lemon-herb dressing. \n Instructions: Cook the quinoa and let it cool. Lightly steam the broccoli florets. Toss the cooled quinoa, broccoli, and halved cherry tomatoes together, fold in the feta, and coat with the dressing." 
  },
  { 
    id: 7, 
    name: "Chia seed pudding", 
    category: "Drinks",
    image: recipe14, 
    rating: 4.5,
    shortDescription: "Silky chia pudding infused with light coconut milk and pure maple syrup, finished with raspberries.",
    calories: "190kcal", 
    time: "5min", 
    description: "Description: A smooth, pudding-like treat made from nutrient-rich chia seeds soaked in coconut milk, sweetened with maple syrup and topped with fresh raspberries. \n Ingredients: Chia seeds, light coconut milk, maple syrup, vanilla extract, raspberries. \n Instructions: Whisk the chia seeds, coconut milk, maple syrup, and vanilla in a jar. Cover and refrigerate for at least 3 hours until set. Top with fresh raspberries before serving." 
  },
  { 
    id: 8, 
    name: "Green Smoothie bowl", 
    category: "Drinks",
    image: recipe8, 
    rating: 5,
    shortDescription: "A powerful combination of spinach, creamy avocado, and sweet pineapple blended and topped with kiwi.",
    calories: "280kcal", 
    time: "5min", 
    description: "Description: A vibrant green smoothie base blended with spinach, avocado, and pineapple, loaded with nutrient-rich superfood toppings. \n Ingredients: Fresh spinach, frozen pineapple, avocado, coconut milk, hemp seeds, sliced kiwi. \n Instructions: Blend the spinach, pineapple, avocado, and coconut milk until creamy. Pour into a bowl, then garnish with hemp seeds and fresh kiwi slices." 
  },
  { 
    id: 9, 
    name: "Caprese salad", 
    category: "Vegetarian",
    image: recipe9, 
    rating: 4.5,
    shortDescription: "Traditional Italian dish alternating sweet tomatoes, fresh mozzarella cheese, and rich balsamic glaze.",
    calories: "210kcal", 
    time: "10min", 
    description: "Description: A simple yet elegant Italian classic highlighting the fresh harmony of sliced tomatoes, soft mozzarella, sweet basil, and balsamic glaze. \n Ingredients: Ripe vine tomatoes, fresh mozzarella ball, fresh basil leaves, extra virgin olive oil, balsamic glaze. \n Instructions: Slice the tomatoes and mozzarella. Alternate the slices on a serving plate, tucking basil leaves in between. Drizzle with olive oil and balsamic glaze just before serving." 
  },
  { 
    id: 10, 
    name: "Ahi tuna poke bowl", 
    category: "Others",
    image: recipe2, 
    rating: 4,
    shortDescription: "A nutritious, savory Hawaiian raw tuna bowl with clean, delicious sesame-ginger flavor additions.",
    calories: "390kcal", 
    time: "20min", 
    description: "Description: A fresh, colorful Hawaiian bowl featuring seasoned raw tuna or marinated tofu served alongside edamame, avocado, and seaweed salad over a bed of rice. \n Ingredients: Sushi-grade tuna (or tofu), brown or jasmine rice, edamame, avocado, soy-sesame dressing, sesame seeds. \n Instructions: Prepare the rice and let it cool. Cube the tuna and toss in soy-sesame dressing. Assemble the rice bowl with tuna, edamame, and sliced avocado, then sprinkle with sesame seeds." 
  },
  { 
    id: 11, 
    name: "Avocado toast", 
    category: "Vegetarian",
    image: recipe11, 
    rating: 5,
    shortDescription: "Perfect whole-grain toasted bread topped with rich mashed avocado, sea salt, and a poached egg.",
    calories: "310kcal", 
    time: "10min", 
    description: "Description: Crispy whole-grain toast spread with creamy mashed avocado, topped with a perfectly poached egg and a pinch of red pepper flakes. \n Ingredients: Whole grain bread, ripe avocado, fresh egg, lemon juice, chili flakes, sea salt. \n Instructions: Toast the bread. Mash the avocado with a squeeze of lemon juice and salt, then spread on the toast. Poach the egg in simmering water and place it on top, finishing with chili flakes." 
  },
  { 
    id: 12, 
    name: "Mediterranean lentil bowl", 
    category: "Vegetarian",
    image: recipe12, 
    rating: 4.5,
    shortDescription: "Hearty, fiber-rich brown lentils served warm with slow-roasted sweet potatoes and spinach.",
    calories: "320kcal", 
    time: "25min", 
    description: "Description: A comforting, fiber-rich warm salad of cooked brown lentils mixed with roasted sweet potatoes, fresh spinach, and a dollop of hummus. \n Ingredients: Cooked brown lentils, roasted sweet potato cubes, baby spinach, hummus, tahini dressing. \n Instructions: Warm the cooked lentils. Toss with fresh baby spinach until slightly wilted. Add roasted sweet potato cubes, a generous spoonful of hummus, and drizzle with tahini." 
  },
  { 
    id: 13, 
    name: "Mango avocado salad", 
    category: "Vegetarian",
    image: recipe13, 
    rating: 4.5,
    shortDescription: "Sweet-and-savory tropical blend of diced mango, rich avocado, red onions, and lime dressing.",
    calories: "230kcal", 
    time: "12min", 
    description: "Description: A tropical, refreshing sweet-and-savory salad balancing ripe, juicy mango chunks with creamy avocado and crisp red onions. \n Ingredients: Ripe mango, avocado, red onion, fresh cilantro, lime vinaigrette. \n Instructions: Dice the mango and avocado. Thinly slice the red onion and chop the cilantro. Toss everything together gently in a bowl with lime vinaigrette." 
  },
  { 
    id: 14, 
    name: "Berry salad", 
    category: "Vegetarian",
    image: recipe3, 
    rating: 4,
    shortDescription: "A sweet salad highlighting fresh blackberries, sweet raspberries, and crisp orange segments.",
    calories: "150kcal", 
    time: "8min", 
    description: "Description: A sweet, refreshing salad emphasizing fresh blackberries, raspberries, and sweet orange segments tossed with a light honey glaze. \n Ingredients: Raspberries, blackberries, blueberries, orange segments, honey dressing. \n Instructions: Gently rinse the berries. Combine them in a bowl with peeled orange segments, and toss with a light drizzle of honey." 
  },
  { 
    id: 15, 
    name: "Bacon Spinach salad", 
    category: "Meat",
    image: recipe15, 
    rating: 5,
    shortDescription: "Tender organic baby spinach paired with crispy bacon, creamy goat cheese, and toasted walnuts.",
    calories: "205kcal", 
    time: "10min", 
    description: "Description: A rich, earthy salad combining tender baby spinach leaves, crumbled creamy goat cheese, toasted walnuts, and a sweet balsamic poppyseed dressing. \n Ingredients: Baby spinach, goat cheese log, toasted walnuts, dried cranberries, balsamic poppyseed dressing. \n Instructions: Place the spinach in a bowl. Scatter crumbled goat cheese, walnuts, and dried cranberries on top. Toss gently with the balsamic dressing." 
  },
  { 
    id: 16, 
    name: "Buddha bowl", 
    category: "Vegetarian",
    image: recipe3, 
    rating: 4.5,
    shortDescription: "Roasted spiced chickpeas, quinoa, kale, and sliced avocado topped with clean sesame tahini.",
    calories: "380kcal", 
    time: "25min", 
    description: "Description: A complete plant-based meal in a bowl, featuring roasted spiced chickpeas, warm quinoa, steamed kale, and sliced avocado with a creamy garlic tahini drizzle. \n Ingredients: Quinoa, canned chickpeas, kale, avocado, tahini, lemon juice, garlic powder. \n Instructions: Roast seasoned chickpeas in the oven. Steam the kale. Arrange quinoa, roasted chickpeas, kale, and sliced avocado in a bowl, then drizzle with a mixture of tahini, lemon juice, and garlic powder." 
  }
];

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Carousel Navigation State
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Toggle pre-liked recipes to sync with your mockup (Cards 1 and 5 are liked)
  const [likedRecipes, setLikedRecipes] = useState([1, 5]);

  // Handle Resize for Carousel Breakpoints
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLike = (id) => {
    setLikedRecipes((prevLiked) => 
      prevLiked.includes(id) 
        ? prevLiked.filter((item) => item !== id) 
        : [...prevLiked, id]
    );
  };

  // Filter Categories List
  const categories = ["All", "Favorite", "Vegetarian", "Meat", "Drinks", "Others"];

  // 1. DYNAMICALLY FILTER DATA FIRST
  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === 'All') return matchesSearch;
    if (activeCategory === 'Favorite') return matchesSearch && likedRecipes.includes(recipe.id);
    return matchesSearch && recipe.category === activeCategory;
  });

  // 2. CHUNK FILTERED RECIPES FOR CAROUSEL PAGES
  const itemsPerPage = windowWidth >= 1024 ? 6 : (windowWidth >= 768 ? 4 : 2);

  const pages = [];
  for (let i = 0; i < filteredRecipes.length; i += itemsPerPage) {
    pages.push(filteredRecipes.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length || 1;

  // Reset Carousel to page 0 whenever filters, search queries, or page counts change
  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm, activeCategory, itemsPerPage]);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <svg className="absolute top-0 left-0 w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return <div className="flex gap-1 justify-center">{stars}</div>;
  };

  return (
    <section className="py-12 md:py-16 px-6 bg-[#fbf9f4] max-w-full mx-auto flex flex-col items-center">
      
      {/* HEADER SECTION: Title & Search bar arranged exactly like your mockup */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:justify-between items-center gap-6 mb-8 relative">
        <div className="hidden md:block w-64" /> {/* Hidden spacer to center title */}
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#204d37] text-center">
          Our Recipes
        </h2>

        {/* Dynamic Search Input with custom sage background color */}
        <div className="relative w-full max-w-xs">
          <input 
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#E2EAE3] border border-[#204d37]/15 rounded-full py-2 px-5 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#204d37]/30 font-sans tracking-wide"
          />
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#204d37]/50" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* FILTER PILLS CATEGORIES ROW: Handles responsive swiping on smaller viewports */}
      <div className="w-full max-w-7xl flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start md:justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-2.5 rounded-full border border-[#204d37] font-sans font-semibold text-lg transition-all duration-200 select-none ${
              activeCategory === category
                ? 'bg-[#204d37] text-white shadow-md'
                : 'bg-[#FCFBF7] text-[#204d37] hover:bg-slate-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* CAROUSEL WRAPPER WITH NEXT/PREV CONTROLS */}
      {filteredRecipes.length > 0 ? (
        <div className="w-full flex items-center justify-center gap-4 sm:gap-6 max-w-7xl">
          
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide} 
            className="text-[#204d37] hover:scale-110 active:scale-95 transition-all focus:outline-none z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* 
            SLIDING TRACK:
            Moves the current page horizontally based on GPU-accelerated CSS translation.
          */}
          <div className="relative w-full overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div 
                  key={pageIndex} 
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
                >
                  {page.map((recipe) => (
                    <div 
                      key={recipe.id}
                      onClick={() => setSelectedRecipe(recipe)}
                      className="relative bg-white rounded-[36px] p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-between"
                    >
                      
                      {/* Toggling Heart Icon (Like Button) */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Stop click from opening modal card
                          toggleLike(recipe.id);
                        }}
                        className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/60 hover:bg-white backdrop-blur-sm shadow-sm hover:scale-110 active:scale-95 transition-all focus:outline-none"
                      >
                        {likedRecipes.includes(recipe.id) ? (
                          // Red Filled Heart SVG
                          <svg className="w-6 h-6 text-red-500 fill-current animate-pulse" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        ) : (
                          // Black Outlined Heart SVG
                          <svg className="w-6 h-6 text-slate-800 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        )}
                      </button>

                      {/* Recipe Image Card Portion */}
                      <div className="relative w-44 h-44 drop-shadow-xl mb-4">
                        <img 
                          src={recipe.image} 
                          alt={recipe.name} 
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      
                      {/* Text details content */}
                      <div className="flex flex-col items-center justify-center gap-2 flex-grow">
                        <h3 className="font-serif font-bold text-2xl text-slate-800">
                          {recipe.name}
                        </h3>
                        
                        {/* Dynamic custom ratings */}
                        {renderStars(recipe.rating)}
                        
                        {/* Dynamic short description */}
                        <p className="text-slate-500 text-sm font-sans leading-relaxed max-w-[220px] line-clamp-2 mt-2">
                          {recipe.shortDescription}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide} 
            className="text-[#204d37] hover:scale-110 active:scale-95 transition-all focus:outline-none z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      ) : (
        // Custom Empty State Fallback
        <div className="text-center py-20 px-6 max-w-md">
          <div className="text-5xl mb-4">🥗</div>
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">No Recipes Found</h3>
          <p className="text-slate-500 font-sans text-sm leading-relaxed">
            We couldn't find any recipes matching your criteria. Try searching a different keyword or selecting another category!
          </p>
        </div>
      )}

      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}

    </section>
  );
}