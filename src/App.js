import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import { Routes, Route } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <AuthProvider>
                <div>
                    <Header onLoginClick={() => setIsLoginOpen(true)} />
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='menu' element={ <Menu /> } />
                        <Route path='about-us' element={ <AboutUs /> } />
                    </Routes>
                    <Footer />
                    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
                </div>
        </AuthProvider>
    );
}

export default App;