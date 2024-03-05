const express = require('express');
const router = express.Router();
const menuItemsController = require('../controllers/menuItemsController');

router.get('/', menuItemsController.getMenuItems);
router.get('/:id', menuItemsController.getMenuItemById);
router.post('/', menuItemsController.createMenuItem);
router.put('/:id', menuItemsController.updateMenuItem);
router.delete('/:id', menuItemsController.deleteMenuItem);

module.exports = router;
