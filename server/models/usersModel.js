const db = require('../db/db');

const getUsers = async () => {
    const { rows } = await db.query('SELECT * FROM users');

    return rows;
}

const getUserById = async (id) => {
    const { rows } = await db.query(
        'SELECT * FROM users WHERE id = $1',
        [id]
    );

    return rows[0];
};

const getUserByUsername = async (username) => {
    const { rows } = await db.query(
        'SELECT * FROM users WHERE username = $1',
        [username]
    );

    return rows[0];
};

const getUserByEmail = async (email) => {
    const { rows } = await db.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );

    return rows[0];
};

const createUser = async (username, email, password) => {
    const { rows } =  await db.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, password]
    );

    return rows[0];
};

module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createUser
};