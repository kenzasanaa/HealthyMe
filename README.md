# HealthyMe 🥗

A modern, responsive, and interactive health-focused landing page built with React and Tailwind CSS. This project is a continuous, growing application designed to make healthy eating accessible and visually engaging.

---

## 🎨 My Design & Development Philosophy

Unlike the typical approach of building many small, unrelated projects, **I prefer to focus my energy on building, scaling, and polishing one comprehensive, feature-rich application.** This allows me to face real-world architectural challenges and continuously improve my code as the project expands.

*   **100% Self-Designed:** I handled the entire design process myself—including the UI concept, color palette selection, layout structure, and asset cropping/creation. 
*   **The "One Big Project" Commitment:** I am dedicated to keeping this project alive and continuously expanding it over time, transforming it from a clean landing page into a fully-functional web app.

---

## 🚀 Key Features

*   **Custom-Designed Split Hero Layout:** A dual-column layout where the main salad bowl seamlessly overlaps the dividing boundary line on desktop screens.
*   **Dynamic Responsive Grid Pagination:** 
    *   *Desktop (lg):* Displays a 2x4 grid (8 items) with smooth horizontal pagination.
    *   *Tablet (md):* Displays a 2x2 grid (4 items).
    *   *Mobile:* Displays 2 items.
*   **Dynamic Detail Pop-ups (Modals):** Click on any recipe card to open a custom-designed details panel (replicated from my original UI design) complete with cooking instructions, calorie badges, and preparation times.
*   **Smooth Page-Flip Animations:** Custom CSS keyframes paired with React state keys to trigger slide-in transitions on pagination change.

---

## 🧠 What I Learned Doing This Project

Building HealthyMe pushed me past simple tutorials and taught me how to solve practical frontend engineering problems:

1.  **Component Architecture & Props:** How to break a design into modular, reusable components and pass data cleanly using props.
2.  **State Management (`useState`):** Using state to toggle modals and dynamically slice data arrays for pagination.
3.  **Advanced Tailwind & Responsive Spacing:** Working with responsive layout classes (`md:`, `lg:`), arbitrary values (`w-[580px]`), and layered absolute positioning.
4.  **Vite Asset Management:** Understanding path resolution, asset bundling, and importing local media securely.
5.  **Browser Debugging:** Gaining confidence using Chrome DevTools Console to trace runtime JavaScript syntax issues, broken paths, and CSS styling mismatches.

---

## 🔮 Future Roadmap (Building it Bigger)

I plan to scale HealthyMe into a production-grade application by adding the following features:

- [ ] **Favorites List:** A system allowing users to "bookmark/heart" recipes and save them to a localized state array.
- [ ] **Real-Time Search Bar:** Allowing users to filter recipes by name, ingredients, or prep time.
- [ ] **API Integration:** Transitioning from hardcoded mock data to fetching real, dynamic meals from a public food API.
- [ ] **Multi-Page Routing:** Implementing React Router so recipes can open in their own dedicated pages.

---

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/healthyme-app.git
