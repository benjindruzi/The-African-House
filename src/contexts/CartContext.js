import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { user } = useAuth();
    const { showToast } = useToast();

    useEffect(() => {
        if (user) {
            const savedCart = localStorage.getItem(`cart_${user.id}`);
            setCart(savedCart ? JSON.parse(savedCart) : []);
        } else {
            setCart([]);
        }
    }, [user]);

    const addToCart = (item) => {
        if (!user) {
            showToast('please login before adding to cart', 'error');
            return
        }

        setCart(prevCart => {
            const updatedCart = [...prevCart, item];
            localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
            return updatedCart;
        })
    };

    const removeFromCart = (itemId) => {
        if (!user) {
            showToast('Please login before removing from cart', 'error');
            return
        }

        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== itemId);
            localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const clearCart = () => {
        if (!user) {
            showToast('Please login before clearing cart', 'error');
            return
        }

        localStorage.removeItem(`cart_${user.id}`);
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);