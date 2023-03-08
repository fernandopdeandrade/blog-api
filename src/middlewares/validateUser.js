const validateDisplayName = (displayName) => {
    if (!displayName) {
        return false;
    }
    if (displayName.length < 8) {
        return false;
    }
    return true;
};

const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!email) {
        return res.status(400).json({
            message: '"email" is required',
        });
    }
    if (!regex.test(email)) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }
    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({
            message: '"password" is required',
        });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
        });
    }
    next();
};

module.exports = {
    validateDisplayName,
    validateEmail,
    validatePassword,
};
