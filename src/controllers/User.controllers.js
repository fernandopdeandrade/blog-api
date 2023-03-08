require('dotenv').config();
const { UserService } = require('../services');
const { createToken } = require('../auth/authJwt');
const { validateDisplayName } = require('../middlewares/validateUser');
const { verifyToken } = require('../auth/authJwt');

const getByEmailController = async (req, res) => {
    const { email } = req.body;

    const result = await UserService.getByEmail(email);

    if (result === null) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = await createToken(email);

    req.user = result;
    return res.status(200).json({ token });
};

const createUserController = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    if (!validateDisplayName(displayName)) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }

    const getBy = await UserService.getByEmail(email);

    if (getBy !== null) {
        return res.status(409).json({ message: 'User already registered' });
    }

    const result = await UserService.createUserService(displayName, email, password, image);

    if (result === null) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = await createToken(email);

    req.user = result;
    return res.status(201).json({ token });
};

const getAllUsersController = async (req, res) => {
    const result = await UserService.getAllUsers();

    if (result === null) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json(result);
};

const getUserByIdController = async (req, res) => {
    const { id } = req.params;

    const result = await UserService.getUserById(id);

    if (result === null) {
        return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(result);
};

const deleteUserController = async (req, res) => {
    const { authorization } = req.headers;
    const decoded = await verifyToken(authorization);
    const { data } = decoded;
    try {
        const result = await UserService.getByEmail(data);

        if (result === null) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        const { id } = result;
        await UserService.deleteUser(id);
    } catch (error) {
        return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(204).json();
};

module.exports = {
    getByEmailController,
    createUserController,
    getAllUsersController,
    getUserByIdController,
    deleteUserController,
};  
