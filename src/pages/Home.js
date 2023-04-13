import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturedDishes />
        </div>
    );
}

export default Home;
