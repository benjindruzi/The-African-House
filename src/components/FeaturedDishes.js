import React from 'react';
import featuredDish1 from '../assets/featuredDish1.jpg';
import featuredDish2 from '../assets/featuredDish2.jpg';
import featuredDish3 from '../assets/featuredDish3.jpg';

function FeaturedDishes() {
    return (
        <section className="main featured-dishes" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="container mx-auto px-4">
                <h2 className="text-yellow-300 text-4xl text-center mb-8">Our Popular Dishes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="featured-dish p-4 rounded h-2/3 relative overflow-hidden hover:border-yellow-600">
                        <img className='w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-50' src={featuredDish1} alt="Peri Peri Chicken" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black bg-opacity-0 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 hover:bg-opacity-50 cursor-pointer">
                            <h3 className="text-white mb-2">Peri Peri Chicken</h3>
                            <p className="text-white">Tender and juicy grilled chicken marinated with a spicy peri peri sauce, served with a side of tangy slaw.</p>
                        </div>
                    </div>

                    <div className="featured-dish p-4 rounded w-full h-2/3 relative overflow-hidden hover:border-yellow-600">
                        <img className='w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-50' src={featuredDish2} alt="Jollof Rice"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black bg-opacity-0 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 hover:bg-opacity-50 cursor-pointer">
                            <h3 className="text-white mb-2">Jollof Rice</h3>
                            <p className="text-white">A savory West African rice dish cooked with tomatoes, peppers, and aromatic spices, served with your choice of protein.</p>
                        </div>
                    </div>

                    <div className="featured-dish p-4 rounded h-2/3 relative overflow-hidden hover:border-yellow-600 ">
                        <img className='w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-50' src={featuredDish3} alt="Shawarma"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black bg-opacity-0 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 hover:bg-opacity-50 cursor-pointer">
                            <h3 className="text-white mb-2">Shawarma</h3>
                            <p className="text-white">Thinly sliced meat cooked on a vertical rotisserie, served in a warm pita bread with fresh veggies and a creamy garlic sauce.</p>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedDishes;
