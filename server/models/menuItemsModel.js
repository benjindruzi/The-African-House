const db = require('../db/db');

const getMenuItems = async () => {
    const { rows } = await db.query('SELECT * FROM menu_items');

    return rows;
};

const getMenuItemById = async (id) => {
    const { rows } = await db.query(
        'SELECT * FROM menu_items WHERE id = $1',
        [id]
    );

    return rows[0];
};

const createMenuItem = async (name, description, price, category) => {
    const { rows } = await db.query(
        'INSERT INTO menu_items (name, description, price, category) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, description, price, category]
    );

    return rows[0];
};

const updateMenuItem = async (id, name, description, price, category) => {
    const { rows } = await db.query(
        'UPDATE menu_items SET name = $1, description = $2, price = $3, category = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
        [name, description, price, category, id]
    );

    return rows[0];
};

const deleteMenuItem = async (id) => {
    const { rows } = await db.query(
        'DELETE FROM menu_items WHERE id = $1 RETURNING *',
        [id]
    );

    return rows[0];
};

module.exports = {
    getMenuItems,
    getMenuItemById,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem
};