const db = require('../db/db');

const getMenuItems = async () => {
    return await db.query('SELECT * FROM menu_items');
};

const getMenuItemById = async (id) => {
    return await db.query(
        'SELECT * FROM menu_items WHERE id = $1',
        [id]
    );
};

const updateMenuItem = async (id, name, description, price, category) => {
    return await db.query(
        'UPDATE menu_items SET name = $1, description = $2, price = $3, category = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
        [name, description, price, category, id]
    );
};

const createMenuItem = async (name, description, price, category) => {
    return await db.query(
        'INSERT INTO menu_items (name, description, price, category, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
        [name, description, price, category]
    );
};

const deleteMenuItem = async (id) => {
    return await db.query(
        'DELETE FROM menu_items WHERE id = $1 RETURNING *',
        [id]
    );
};

module.exports = {
    getMenuItems,
    getMenuItemById,
    updateMenuItem,
    createMenuItem,
    deleteMenuItem
};