const express = require('express');

const { UserController } = require('../controllers');
const validateLogin = require('../middlewares/validateLogin');

const loginRoutes = express.Router();

loginRoutes.post('/', validateLogin, UserController.getByEmailController);

module.exports = loginRoutes;
