const db = require('../db/db');

const getOrders = async () => {
    const { rows } = await db.query('SELECT * FROM orders');

    return rows;
};

const createOrder = async (user_id, total, items) => {
    const client = await db.connect();

    try {
        await client.query('BEGIN');

        const itemsJson = JSON.stringify(items);

        const orderInsertQuery = `
            INSERT INTO orders (user_id, status, total, items)
            VALUES ($1, 'pending', $2, $3)
            RETURNING id;
        `;

        const { rows } = await client.query(orderInsertQuery, [user_id, total, itemsJson]);
        const orderId = rows[0].id;

        const orderItemsInsertQuery = `
            INSERT INTO order_items (order_id, menu_item_id)
            VALUES ($1, $2);
        `;

        for (const item of items) {
            await client.query(orderItemsInsertQuery, [orderId, item.id]);
        }

        await client.query('COMMIT');

        return { orderId, status: 'success' };
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

module.exports = {
    getOrders,
    createOrder,
};
