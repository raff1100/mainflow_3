// routes/menuRoutes.js
const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createMenuItem, getMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');

const router = express.Router();

router.route('/')
    .post(protect, createMenuItem) // Admin only
    .get(getMenuItems);

router.route('/:id')
    .get(getMenuItemById)
    .put(protect, updateMenuItem) // Admin only
    .delete(protect, deleteMenuItem); // Admin only

module.exports = router;
