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
import recipe11 from '../assets/recipe11.png';

// 2. RECIPE DATA OBJECT (16 items total)
const recipesData = [
  { id: 1, name: "Caesar salad", image: recipe1, calories: "220kcal", time: "15min", description: "Description: A timeless favorite featuring crisp romaine lettuce tossed with a rich, creamy dressing, crunchy toasted croutons, and freshly grated parmesan cheese. \n Ingredients: Romaine lettuce, garlic croutons, parmesan cheese, creamy Caesar dressing, cracked black pepper. \n  Instructions: Wash and dry romaine lettuce, then tear it into bite-sized pieces. In a large bowl, gently toss the lettuce with Caesar dressing. Top with croutons, parmesan shavings, and black pepper." },
  { id: 2, name: "Greek salad", image: recipe2, calories: "180kcal", time: "10min", description: "Description: A refreshing and colorful salad highlighting ripe tomatoes, crisp cucumbers, sharp red onions, tangy feta cheese, and savory Kalamata olives. \n Ingredients: Cucumber, cherry tomatoes, red onion, Kalamata olives, feta cheese block, extra virgin olive oil, dried oregano. \n Instructions: Chop the cucumber and tomatoes. Slice the red onion thinly. Combine them in a bowl with the olives, place a block of feta on top, drizzle with olive oil, and sprinkle with oregano." },
  { id: 3, name: "Fruit salad", image: recipe3, calories: "150kcal", time: "8min", description: "Description: A vibrant mix of sweet, juicy seasonal fruits including berries, citrus, and kiwi, lightly tossed in a fresh, zesty lime juice glaze. \n Ingredients: Strawberries, blueberries, kiwi, pineapple chunks, fresh mint, lime juice. \n Instructions: Wash all fruits. Slice the strawberries and kiwi. Combine all fruit in a large bowl, squeeze fresh lime juice over them, and garnish with chopped mint leaves." },
  { id: 4, name: "Smoothie bowl", image: recipe4, calories: "280kcal", time: "5min", description: "Description: A thick, blended berry and banana base designed to be eaten with a spoon, decorated with healthy seeds and fresh fruit toppings.\n Ingredients: Frozen mixed berries, half a banana, a splash of almond milk, granola, chia seeds, sliced strawberries.\n Instructions: Blend the frozen berries, banana, and a small splash of almond milk until thick and smooth. Pour into a bowl and arrange granola, chia seeds, and strawberry slices on top." },
  { id: 5, name: "Chickpea salad", image: recipe5, calories: "240kcal", time: "12min", description: "Description: A hearty, protein-packed salad packed with seasoned chickpeas, diced crunchy vegetables, and a light herb vinaigrette. \n Ingredients: Canned chickpeas (rinsed), bell peppers, cucumber, parsley, lemon juice, olive oil, salt, and pepper. \n Instructions: Drain and rinse the chickpeas. Dice the peppers and cucumber. Mix everything in a bowl, drizzle with olive oil and lemon juice, and season to taste." },
  { id: 6, name: "Quinoa salad", image: recipe6, calories: "310kcal", time: "15min", description: "Description: A nutrient-dense dish pairing light, fluffy cooked quinoa with steamed broccoli, cherry tomatoes, and crumbled feta cheese. \n Ingredients: Cooked quinoa, steamed broccoli florets, cherry tomatoes, crumbled feta, lemon-herb dressing. \n Instructions: Cook the quinoa and let it cool. Lightly steam the broccoli florets. Toss the cooled quinoa, broccoli, and halved cherry tomatoes together, fold in the feta, and coat with the dressing." },
  { id: 7, name: "Fruit salad", image: recipe3, calories: "150kcal", time: "8min", description: "Description: A sweet, refreshing salad emphasizing fresh blackberries, raspberries, and sweet orange segments tossed with a light honey glaze. \n Ingredients: Raspberries, blackberries, blueberries, orange segments, honey dressing. \n Instructions: Gently rinse the berries. Combine them in a bowl with peeled orange segments, and toss with a light drizzle of honey." },
  { id: 8, name: "Smoothie bowl", image: recipe8, calories: "280kcal", time: "5min", description: "Description: A vibrant green smoothie base blended with spinach, avocado, and pineapple, loaded with nutrient-rich superfood toppings. \n Ingredients: Fresh spinach, frozen pineapple, avocado, coconut milk, hemp seeds, sliced kiwi. \n Instructions: Blend the spinach, pineapple, avocado, and coconut milk until creamy. Pour into a bowl, then garnish with hemp seeds and fresh kiwi slices." },
  { id: 9, name: "Caprese salad", image: recipe1, calories: "210kcal", time: "10min", description: "Description: A simple yet elegant Italian classic highlighting the fresh harmony of sliced tomatoes, soft mozzarella, sweet basil, and balsamic glaze. \n Ingredients: Ripe vine tomatoes, fresh mozzarella ball, fresh basil leaves, extra virgin olive oil, balsamic glaze. \n Instructions: Slice the tomatoes and mozzarella. Alternate the slices on a serving plate, tucking basil leaves in between. Drizzle with olive oil and balsamic glaze just before serving." },
  { id: 10, name: "Ahi tuna poke bowl", image: recipe2, calories: "390kcal", time: "20min", description: "Description: A fresh, colorful Hawaiian bowl featuring seasoned raw tuna or marinated tofu served alongside edamame, avocado, and seaweed salad over a bed of rice. \n Ingredients: Sushi-grade tuna (or tofu), brown or jasmine rice, edamame, avocado, soy-sesame dressing, sesame seeds. \n Instructions: Prepare the rice and let it cool. Cube the tuna and toss in soy-sesame dressing. Assemble the rice bowl with tuna, edamame, and sliced avocado, then sprinkle with sesame seeds." },
  { id: 11, name: "Avocado toast", image: recipe11, calories: "310kcal", time: "10min", description: "Description: Crispy whole-grain toast spread with creamy mashed avocado, topped with a perfectly poached egg and a pinch of red pepper flakes. \n Ingredients: Whole grain bread, ripe avocado, fresh egg, lemon juice, chili flakes, sea salt. \n Instructions: Toast the bread. Mash the avocado with a squeeze of lemon juice and salt, then spread on the toast. Poach the egg in simmering water and place it on top, finishing with chili flakes." },
  { id: 12, name: "Mediterranean lentil bowl", image: recipe4, calories: "320kcal", time: "25min", description: "Description: A comforting, fiber-rich warm salad of cooked brown lentils mixed with roasted sweet potatoes, fresh spinach, and a dollop of hummus. \n Ingredients: Cooked brown lentils, roasted sweet potato cubes, baby spinach, hummus, tahini dressing. \n Instructions: Warm the cooked lentils. Toss with fresh baby spinach until slightly wilted. Add roasted sweet potato cubes, a generous spoonful of hummus, and drizzle with tahini." },
  { id: 13, name: "Mango avocado salad", image: recipe5, calories: "230kcal", time: "12min", description: "Description: A tropical, refreshing sweet-and-savory salad balancing ripe, juicy mango chunks with creamy avocado and crisp red onions. \n Ingredients: Ripe mango, avocado, red onion, fresh cilantro, lime vinaigrette. \n Instructions: Dice the mango and avocado. Thinly slice the red onion and chop the cilantro. Toss everything together gently in a bowl with lime vinaigrette." },
  { id: 14, name: "Chia seed pudding", image: recipe6, calories: "190kcal", time: "5min", description: "Description: A smooth, pudding-like treat made from nutrient-rich chia seeds soaked in coconut milk, sweetened with maple syrup and topped with fresh raspberries. \n Ingredients: Chia seeds, light coconut milk, maple syrup, vanilla extract, raspberries. \n Instructions: Whisk the chia seeds, coconut milk, maple syrup, and vanilla in a jar. Cover and refrigerate for at least 3 hours until set. Top with fresh raspberries before serving." },
  { id: 15, name: "Spinach salad", image: recipe5, calories: "205kcal", time: "10min", description: "Description: A rich, earthy salad combining tender baby spinach leaves, crumbled creamy goat cheese, toasted walnuts, and a sweet balsamic poppyseed dressing. \n Ingredients: Baby spinach, goat cheese log, toasted walnuts, dried cranberries, balsamic poppyseed dressing. \n Instructions: Place the spinach in a bowl. Scatter crumbled goat cheese, walnuts, and dried cranberries on top. Toss gently with the balsamic dressing." },
  { id: 16, name: "Buddha bowl", image: recipe3, calories: "380kcal", time: "25min", description: "Description: A complete plant-based meal in a bowl, featuring roasted spiced chickpeas, warm quinoa, steamed kale, and sliced avocado with a creamy garlic tahini drizzle. \n Ingredients: Quinoa, canned chickpeas, kale, avocado, tahini, lemon juice, garlic powder. \n Instructions: Roast seasoned chickpeas in the oven. Steam the kale. Arrange quinoa, roasted chickpeas, kale, and sliced avocado in a bowl, then drizzle with a mixture of tahini, lemon juice, and garlic powder." }
];

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // 3. DIRECTION STATE (to know which way to slide)
  const [slideDirection, setSlideDirection] = useState('left');

  // Listen to screen size changes
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = windowWidth >= 1024 ? 8 : (windowWidth >= 768 ? 4 : 2);
  const totalPages = Math.ceil(recipesData.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  // Update slide direction on click
  const nextSlide = () => {
    setSlideDirection('left');
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setSlideDirection('right');
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedRecipes = recipesData.slice(
    currentPage * itemsPerPage, 
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-16 px-6 bg-[#fbf9f4] max-w-full mx-auto flex flex-col items-center overflow-hidden">
      
      <h2 className="text-5xl font-serif font-bold text-[#204d37] mb-12">
        Our Recipes
      </h2>

      <div className="w-full flex items-center justify-center gap-4 sm:gap-8">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className="text-[#204d37] hover:scale-110 active:scale-95 transition-all focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* 
          ANIMATED GRID:
          - We use a composite 'key' that changes on every single slide change.
            This forces React to re-mount the grid, triggering the CSS slide animation again.
          - We dynamically apply 'animate-slide-left' or 'animate-slide-right'.
        */}
        <div 
          key={`${currentPage}-${slideDirection}`}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${
            slideDirection === 'left' ? 'animate-slide-left' : 'animate-slide-right'
          }`}
        >
          {displayedRecipes.map((recipe) => (
            <div 
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="bg-white rounded-3xl p-8 w-60 h-70 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center flex flex-col items-center justify-between"
            >
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-66 h-66 rounded-full "
              />
              <h3 className="font-sans font-semibold text-lg text-slate-800 mt-4">
                {recipe.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide} 
          className="text-[#204d37] hover:scale-110 active:scale-95 transition-all focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}

    </section>
  );
}