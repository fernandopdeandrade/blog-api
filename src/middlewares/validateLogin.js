module.exports = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Some required fields are missing',
        });
    }
    
    if (email.length === 0 || password.length === 0) {
        return res.status(400).json({
            message: 'Some required fields are missing',
        });
    }

    next();
};
