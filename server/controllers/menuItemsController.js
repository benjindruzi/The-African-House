const menuItemsModel = require('../models/menuItemsModel');

const getMenuItems = async (req, res) => {
    try {
        const menuItems = await menuItemsModel.getMenuItems();
        
        res.json(menuItems);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getMenuItemById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const menuItem = await menuItemsModel.getMenuItemById(id);

        if (menuItem) {
            res.status(200).json(menuItem);
        } else {
            res.status(404).send('Menu item not found');
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const createMenuItem = async (req, res) => {
    const { name, description, price, category } = req.body;

    try {
        const newMenuItem = await menuItemsModel.createMenuItem(name, description, price, category);

        if (newMenuItem) {
            res.status(201).json(newMenuItem);
        } else {
            res.status(400).send('Failed to create a new menu item');
        }
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    try {
        const updatedMenuItem = await menuItemsModel.updateMenuItem(id, name, description, price, category);

        if (updatedMenuItem) {
            res.status(200).json(updatedMenuItem);
        } else {
            res.status(404).send('Menu item not found');
        }
    } catch (error) {
        res.status(500).send({ error: error.message });   
    }
};

const deleteMenuItem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedMenuItem = await menuItemsModel.deleteMenuItem(id);

        if (deletedMenuItem) {
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
    createMenuItem,
    updateMenuItem,
    deleteMenuItem
};