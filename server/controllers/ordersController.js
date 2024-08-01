const ordersModel = require('../models/ordersModel');

const getOrders = async (req, res) => {
    const orders = await ordersModel.getOrders();

    try {
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrder = async (req, res) => {
    const { user_id, total, items } = req.body;

    try {
        const newOrder = await ordersModel.createOrder(user_id, total, items);

        res.status(201).json({
            message: 'Order created successfully',
            orderId: newOrder.orderId,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getOrders,
    createOrder,
};