import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import App from './App';
AOS.init({
    duration: 1000,
    once: true,
  });

ReactDOM.render(<App />, document.getElementById('root'));