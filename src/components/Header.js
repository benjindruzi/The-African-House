import React from 'react';

function Header() {
    return (
        <header className="header text-white top-0 left-0 right-0 bg-opacity-90">
            <div className="flex justify-between items-center my-10">
                <a href="/" className="logo text-xl font-bold uppercase hover:text-yellow-500">
                    The African House
                </a>
                <nav className="flex-1 text-center">
                    <ul className="nav-links flex justify-center space-x-6 font-bold-100">
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                    </ul>
                </nav>
                <div>
                    <a href="/login" className="mr-4 hover:underline">Login</a>
                    <a href="/signup" className="hover:underline">Sign Up</a>
                </div>
            </div>
        </header>
    );
}

export default Header;