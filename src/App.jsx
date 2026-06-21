import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Recipes from './components/Recipes'; 
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';   
import Promo from  './components/promoSection';   

import './index.css'

export default function App() {
    return( 
    <div>
        <Navbar />
        <Hero />
        <Recipes /> 
        <AboutUs />
        <Promo/>
        <Footer />
    </div>);
}