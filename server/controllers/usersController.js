const usersModel = require('../models/usersModel');

const getUsers = async (req, res) => {
    const users = await usersModel.getUsers();

    try {
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await usersModel.getUserById(id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json('User not found');
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsers,
    getUserById
};