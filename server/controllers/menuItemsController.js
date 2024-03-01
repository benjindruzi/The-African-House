const menuItemModel = require('../models/menuItemsModel');

const getMenuItems = async (req, res) => {
    try {
        const { rows } = await menuItemModel.getMenuItems();

        res.json(rows);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getMenuItemById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const { rows } = await menuItemModel.getMenuItemById(id);

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).send('Menu item not found');
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    try {
        const { rows } = await menuItemModel.updateMenuItem(id, name, description, price, category);

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).send('Menu item not found')
        }
    } catch (error) {
        res.status(500).send({ error: error.message });   
    }
};

const createMenuItem = async (req, res) => {
    const { name, description, price, category } = req.body;

    try {
        const { rows } = await menuItemModel.createMenuItem(name, description, price, category);

        if (rows.length > 0) {
            res.status(201).json(rows);
        } else {
            res.status(400).send('Failed to create a new menu item');
        }
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

const deleteMenuItem = async (req, res) => {
    const { id } = req.params;

    try {
        const { rows } = await menuItemModel.deleteMenuItem(id);

        if (rows.length > 0) {
            res.status(200).json({ message: `Menu item with Id: ${id} deleted successfully` });  
        } else {
            res.status(404).send('Menu item not found');
        }
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = {
    getMenuItems,
    getMenuItemById,
    updateMenuItem,
    createMenuItem,
    deleteMenuItem
};