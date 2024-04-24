import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='menu' element={ <Menu /> } />
                <Route path='about-us' element={ <AboutUs /> } />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;