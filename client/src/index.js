import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';

AOS.init({
    duration: 1000,
    once: true,
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);