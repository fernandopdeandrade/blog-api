const express = require('express');

const categoryRoutes = express.Router();

const { CategoryController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateNameCategory = require('../middlewares/validateCategory');

categoryRoutes.post('/',
    validateToken,
    validateNameCategory,
    CategoryController.createCategoryController);

categoryRoutes.get('/',
    validateToken,
    CategoryController.getAllCategoriesController);

module.exports = categoryRoutes;
