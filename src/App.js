import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import { Routes, Route } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import { AuthProvider } from './contexts/AuthContext';
import CartModal from './components/CartModal';
import { CartProvider } from './contexts/CartContext';
import RegisterModal from './components/RegisterModal';

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    return (
        <AuthProvider>
            <CartProvider>
                <div>
                    <Header onLoginClick={() => setIsLoginOpen(true)} onCartClick={() => setIsCartOpen(true)} onRegisterClick={() => setIsRegisterOpen(true)} />
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='menu' element={ <Menu /> } />
                        <Route path='about-us' element={ <AboutUs /> } />
                    </Routes>
                    <Footer />
                    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
                    <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
                    <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;