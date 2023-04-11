import React from 'react';

function Header() {
    return (
        <header className="header text-white p-4 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center mx-9 my-3">
            <div className="logo text-xl font-bold uppercase">
                The African House
            </div>
            <nav className="flex-1 text-center">
                <ul className="nav-links flex justify-center space-x-4 font-bold-100">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/About" className="hover:underline">About Us</a></li>
                    <li><a href="/menu" className="hover:underline">Menu</a></li>
                    <li><a href="/reservation" className="hover:underline">Reservation</a></li>
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
