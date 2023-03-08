const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const JWT_CONFIG = {
    algorithm: 'HS256',
    expiresIn: '7d',
};

const createToken = async (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = async (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };
