const express = require('express');
const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Import routes
const menuItemsRoutes = require('./routes/menuItems');

// Mount routes
app.use('/menu-items', menuItemsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
