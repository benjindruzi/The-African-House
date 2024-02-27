const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM menu_items');

        res.json(rows);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const { rows } = await db.query(
            'SELECT * FROM menu_items WHERE id = $1',
            [id]
        );

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).send('Menu item not found');
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    try {
        const { rows } = await db.query(
            'UPDATE menu_items SET name = $1, description = $2, price = $3, category = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
            [name, description, price, category, id]
        );

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).send('Menu item not found')
        }
    } catch (error) {
        res.status(500).send({ error: error.message });   
    }
});

router.post('/', async (req, res) => {
    const { name, description, price, category } = req.body;

    try {
        const { rows } = await db.query(
            'INSERT INTO menu_items (name, description, price, category, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
            [name, description, price, category]
        );

        if (rows.length > 0) {
            res.status(201).json(rows);
        } else {
            res.status(400).send('Failed to create a new menu item');
        }
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { rows } = await db.query(
            'DELETE FROM menu_items WHERE id = $1 RETURNING *',
            [id]
        );

        if (rows.length > 0) {
            res.status(200).json({ message: `Menu item with Id: ${id} deleted successfully` });  
        } else {
            res.status(404).send('Menu item not found');
        }
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
});

module.exports = router;
