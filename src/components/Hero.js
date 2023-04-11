import React from 'react';
import heroImage from '../assets/heroImage.jpg';

function Hero() {
    return (
        <section className="hero h-screen" style={{ backgroundColor: '#392C2C' }}>
        <div className="flex h-full justify-around">
            <div className="flex flex-col justify-center items-center px-10">
                <h1 className="text-4xl font-bold-400 text-white mb-4">Welcome to The African House</h1>
                <p className="text-lg text-white mb-6">Experience the best African cuisine in town</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                    Order Now
                    </button>
            </div>
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
            </div>
        </div>
        </section>
    );
}

export default Hero;
