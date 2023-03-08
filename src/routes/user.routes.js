const express = require('express');

const userRoutes = express.Router();

const { UserController } = require('../controllers');
const {
    validateEmail,
    validatePassword,
} = require('../middlewares/validateUser');

const validateToken = require('../middlewares/validateToken');

userRoutes.post('/',
    validateEmail,
    validatePassword,
    UserController.createUserController);

userRoutes.get('/', validateToken, UserController.getAllUsersController);

userRoutes.get('/:id', validateToken, UserController.getUserByIdController);

userRoutes.delete('/me', validateToken, UserController.deleteUserController);

module.exports = userRoutes;
