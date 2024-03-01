const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 5000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Import routes
const menuItemsRoutes = require('./routes/menuItemsRoutes');

// Mount routes
app.use('/menu-items', menuItemsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
