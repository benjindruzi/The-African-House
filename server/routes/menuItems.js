const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM menu_items');
        res.send(rows);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// router.get('/:id', (req, res) => {
//     const menuItemId = parseInt(req.params.id);
//     const menuItem = menuItems.find(item => item.id === menuItemId);

//     if (menuItem) {
//         res.status(200).send(menuItem);
//     } else {
//         res.status(404).send(`Menu item with ID ${menuItemId} not found`);
//     }
// });

// router.put('/:id', (req, res) => {
//     const menuItemId = parseInt(req.params.id);
//     const menuItem = menuItems.find(item => item.id === menuItemId);

//     const updatedMenuItem = req.body;

//     if (menuItem) {
//         Object.assign(menuItem, updatedMenuItem);
//         res.status(200).send(menuItem);
//     } else {
//         res.status(404).send(`Menu item with ID ${menuItemId} not found`)
//     }
// });

// router.post('/', (req, res) => {
//     const newMenuItem = req.body;

//     if (newMenuItem) {
//         menuItems.push(newMenuItem);
//         res.status(201).send(newMenuItem);
//     } else {
//         res.status(400).send('Failed to create a new menu item');
//     }
// });

// router.delete('/:id', (req, res) => {
//     const menuItemId = parseInt(req.params.id);
//     const menuItemIndex = menuItems.findIndex(item => item.id === menuItemId);

//     if (menuItemIndex !== -1) {
//         menuItems.splice(menuItemIndex, 1);
//         res.status(204).send(`Menu item with ID ${menuItemId} has been deleted`);
//     } else {
//         res.status(404).send(`Menu item with ID ${menuItemId} not found`);
//     }
// });

module.exports = router;
