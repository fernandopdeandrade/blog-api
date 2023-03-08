const resultMessage = 'Some required fields are missing';

const validatePost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({
            message: resultMessage,
        });
    }
    if (categoryIds.length === 0) {
        return res.status(400).json({ message: resultMessage });
    }
    next();
};

const validatePostupdate = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            message: resultMessage,
        });
    }
    if (title.length === 0 || content.length === 0) {
        return res.status(400).json({ message: resultMessage });
    }

    next();
};

module.exports = {
    validatePost,
    validatePostupdate,
};
