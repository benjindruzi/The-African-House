const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usersModel = require('../models/usersModel');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await usersModel.getUserByEmail(email);

        if (existingUser) {
            return res.status(409).send('A user with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await usersModel.createUser(username, email, hashedPassword);

        delete user.password;

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await usersModel.getUserByEmail(email);

    if (!user) {
        return res.status(404).send('User not found');
    }

    const isValidUser = await bcrypt.compare(password, user.password);

    if (!isValidUser) {
        return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );

    res.json(token);
};

module.exports = {
    registerUser,
    loginUser
}