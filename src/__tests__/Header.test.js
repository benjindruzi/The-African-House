import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';

jest.mock('../contexts/AuthContext');

describe('Header', () => {
    test('shows login and register buttons when not authenticated', () => {
        useAuth.mockReturnValue({ isAuthenticated: false });
        
        render(
            <Router>
                <Header onLoginClick={jest.fn()} onCartClick={jest.fn()} onRegisterClick={jest.fn()} />
            </Router>
        );
        
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Register')).toBeInTheDocument();
    });

    test('shows cart and sign out buttons when authenticated', () => {
        useAuth.mockReturnValue({ isAuthenticated: true, logout: jest.fn() });
        
        render(
            <Router>
                <Header onLoginClick={jest.fn()} onCartClick={jest.fn()} onRegisterClick={jest.fn()} />
            </Router>
        );
        
        expect(screen.getByText('Cart')).toBeInTheDocument();
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    });
});
