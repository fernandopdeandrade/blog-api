const { User } = require('../models');

const getByEmail = async (email) => User.findOne({ where: { email } });

const createUserService = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });
    return result;
};

const getAllUsers = async () => {
    const result = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return result;
};

const getUserById = async (id) => {
    const result = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
    });
    return result;
};

const deleteUser = async (id) => {
    const result = await User.destroy({ where: { id } });
    return result;
};  

module.exports = {
    getByEmail,
    createUserService,
    getAllUsers,
    getUserById,
    deleteUser,
};
