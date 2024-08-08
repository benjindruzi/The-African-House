const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Static files serving for production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
}

// Load .env variables
require('dotenv').config({ path: __dirname + '/../.env' });

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Import routes
const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');
const menuItemsRoutes = require('./routes/menuItemsRoutes');
const ordersRoutes = require('./routes/ordersRoutes');

// Mount routes
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/menu-items', menuItemsRoutes);
app.use('/orders', ordersRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
