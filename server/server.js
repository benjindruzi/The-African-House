const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

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

// Mount routes
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/menu-items', menuItemsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
