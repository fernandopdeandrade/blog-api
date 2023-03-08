const validateNameCategory = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    if (name.length === 0) {
        return res.status(400).json({
            message: '"name" length must be at least 5 characters long',
        });
    }

    next();
};

module.exports = validateNameCategory;
