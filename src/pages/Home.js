import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturedDishes />
            <AboutUs />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default Home;