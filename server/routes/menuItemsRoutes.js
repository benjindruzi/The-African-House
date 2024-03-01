const express = require('express');
const router = express.Router();
const menuItemsController = require('../controllers/menuItemsController');

router.get('/', menuItemsController.getMenuItems);

router.get('/:id', menuItemsController.getMenuItemById);

router.put('/:id', menuItemsController.updateMenuItem);

router.post('/', menuItemsController.createMenuItem);

router.delete('/:id', menuItemsController.deleteMenuItem);

module.exports = router;
